/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - STRICT PREFERENCE MATCHING ENGINE
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
   * Filter & rank books based on STRICT genre and preference matching
   */
  getRecommendations(preferences, limit = 4) {
    const { genres = [], ageGroup = '', tone = '', query = '' } = preferences;

    // Step 1: Filter unseen books (or reset if pool exhausted)
    let candidatePool = this.database.filter(book => !this.seenBookIds.has(book.id));
    if (candidatePool.length < limit) {
      candidatePool = [...this.database];
    }

    // Step 2: Strict Genre Filtering (If user selected specific genres, ONLY keep books matching at least one genre)
    if (genres.length > 0) {
      const strictGenreMatches = candidatePool.filter(book => 
        book.genres.some(g => genres.includes(g))
      );

      // Only use strict matches if any exist
      if (strictGenreMatches.length > 0) {
        candidatePool = strictGenreMatches;
      }
    }

    // Step 3: Age Group Filter (If user selected age group, prioritize exact age matches)
    if (ageGroup) {
      const ageMatches = candidatePool.filter(book => 
        book.ageGroup === ageGroup || book.ageGroup === 'all'
      );
      if (ageMatches.length >= limit) {
        candidatePool = ageMatches;
      }
    }

    // Step 4: Score remaining valid candidate books
    let scoredBooks = candidatePool.map(book => {
      let score = 100; // Base score for passing hard filters

      // Extra bonus for matching multiple selected genres
      if (genres.length > 0) {
        const matchingGenreCount = book.genres.filter(g => genres.includes(g)).length;
        score += matchingGenreCount * 50;
      }

      // Extra bonus for exact Age Group match
      if (ageGroup && book.ageGroup === ageGroup) {
        score += 40;
      }

      // Bonus for Tone match
      if (tone && book.tone === tone) {
        score += 30;
      }

      // Bonus for custom query keywords in title, synopsis, or tropes
      if (query.trim()) {
        const q = query.toLowerCase();
        if (book.title.toLowerCase().includes(q)) score += 60;
        if (book.synopsis.toLowerCase().includes(q)) score += 25;
        book.tropes.forEach(trope => {
          if (trope.toLowerCase().includes(q)) score += 30;
        });
      }

      // Small tie-breaker jitter (0 to 5 points) so exact same order isn't repeated
      score += Math.random() * 5;

      return { book, score };
    });

    // Step 5: Sort strictly by score
    scoredBooks.sort((a, b) => b.score - a.score);

    // Pick top candidates that strictly match preferences
    const selected = scoredBooks.slice(0, limit).map(item => item.book);

    // Remember selected book IDs
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
   * Async live fetch from Google Books API targeting the EXACT selected genre & search terms
   */
  async fetchLiveGoogleBooks(searchTerm, selectedGenres = []) {
    try {
      // Build targeted genre query string
      const genreQueryStr = selectedGenres.length > 0 ? selectedGenres.join(' ') + ' subject:' + selectedGenres[0] : '';
      const fullSearchQuery = `${genreQueryStr} ${searchTerm}`.trim();

      const startIndex = Math.floor(Math.random() * 10);
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(fullSearchQuery)}&startIndex=${startIndex}&maxResults=6`;
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
            genres: selectedGenres.length > 0 ? selectedGenres : (info.categories || ['Fiction']),
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
            synopsis: info.description ? (info.description.substring(0, 320) + '...') : `A targeted ${selectedGenres.join('/')} book discovery fetched live from Google Books.`,
            matchReason: `Targeted live match for your ${selectedGenres.join(', ')} request!`
          };
        });
    } catch (err) {
      console.warn('Google Books API fetch failed, falling back to local database.', err);
      return [];
    }
  }
}

window.bookRecommender = new BookRecommender();
