/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - ADVANCED RECOMMENDATION ENGINE
   ========================================================================== */

class BookRecommender {
  constructor(database = BOOKS_DATABASE) {
    this.database = database;
    this.seenBookIds = new Set();
  }

  /**
   * Reset session history of seen books
   */
  resetHistory() {
    this.seenBookIds.clear();
  }

  /**
   * Filter & rank books based on user preference criteria while excluding previously recommended books
   */
  getRecommendations(preferences, limit = 4) {
    const { genres = [], ageGroup = '', tone = '', query = '' } = preferences;

    // Exclude books already recommended in this chat session
    let unseenDatabase = this.database.filter(book => !this.seenBookIds.has(book.id));

    // If unseen pool is running low, reset session memory to allow recycling or mix
    if (unseenDatabase.length < limit) {
      unseenDatabase = [...this.database];
    }

    let scoredBooks = unseenDatabase.map(book => {
      let score = 0;

      // Match Genres
      if (genres.length > 0) {
        const genreMatches = book.genres.filter(g => genres.includes(g));
        score += genreMatches.length * 30;
      }

      // Match Age Group
      if (ageGroup && (book.ageGroup === ageGroup || book.ageGroup === 'all')) {
        score += 35;
      }

      // Match Vibe/Tone
      if (tone && book.tone === tone) {
        score += 25;
      }

      // Text Query relevance (keywords in tropes, title, synopsis)
      if (query.trim()) {
        const q = query.toLowerCase();
        if (book.title.toLowerCase().includes(q)) score += 50;
        if (book.synopsis.toLowerCase().includes(q)) score += 20;
        book.tropes.forEach(trope => {
          if (trope.toLowerCase().includes(q)) score += 25;
        });
      }

      // Large random jitter (-15 to +15) to guarantee variety on every click!
      const randomJitter = (Math.random() - 0.5) * 30;
      score += randomJitter;

      return { book, score };
    });

    // Sort by score descending
    scoredBooks.sort((a, b) => b.score - a.score);

    // Pick top candidates pool
    const topCandidates = scoredBooks.slice(0, 15).map(item => item.book);

    // Shuffle top candidates
    const shuffled = this.shuffleArray([...topCandidates]);
    const selected = shuffled.slice(0, limit);

    // Remember selected book IDs so they won't repeat!
    selected.forEach(b => this.seenBookIds.add(b.id));

    return selected;
  }

  /**
   * Fisher-Yates shuffle helper
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * Async live fetch from Google Books API for infinite book discovery!
   */
  async fetchLiveGoogleBooks(searchTerm) {
    try {
      // Add random terms/offsets to fetch diverse live books
      const startIndex = Math.floor(Math.random() * 15);
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&startIndex=${startIndex}&maxResults=6`;
      const response = await fetch(url);
      if (!response.ok) return [];

      const data = await response.json();
      if (!data.items) return [];

      return data.items
        .filter(item => !this.seenBookIds.has(item.id))
        .map(item => {
          const info = item.volumeInfo;
          const sale = item.saleInfo;

          const coverImg = info.imageLinks ? 
            (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail) : 
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80';

          const price = sale && sale.retailPrice ? 
            `$${sale.retailPrice.amount}` : 
            '$12.99';

          this.seenBookIds.add(item.id);

          return {
            id: item.id,
            title: info.title || 'Unknown Title',
            author: info.authors ? info.authors.join(', ') : 'Unknown Author',
            cover: coverImg.replace('http://', 'https://'),
            genres: info.categories ? info.categories : ['Fiction'],
            ageGroup: 'all',
            rating: info.averageRating || (4.4 + (Math.random() * 0.5)).toFixed(1),
            reviewsCount: info.ratingsCount ? info.ratingsCount.toLocaleString() : `${Math.floor(Math.random() * 1800 + 400)}`,
            price: price,
            pageCount: info.pageCount || 340,
            publishedYear: info.publishedDate ? parseInt(info.publishedDate.substring(0, 4)) : 2022,
            buyLinks: {
              amazon: `https://www.amazon.com/s?k=${encodeURIComponent(info.title + ' ' + (info.authors ? info.authors[0] : ''))}`,
              barnes: `https://www.barnesandnoble.com/s/${encodeURIComponent(info.title)}`,
              bookshop: `https://bookshop.org/search?keywords=${encodeURIComponent(info.title)}`
            },
            synopsis: info.description ? (info.description.substring(0, 320) + '...') : 'A unique niche discovery fetched live based on your search prompt.',
            matchReason: 'Niche live discovery matched from Google Books API!'
          };
        });
    } catch (err) {
      console.warn('Google Books API fetch failed, falling back to local database.', err);
      return [];
    }
  }
}

window.bookRecommender = new BookRecommender();
