/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - RECOMMENDATION ENGINE WITH SHUFFLING
   ========================================================================== */

class BookRecommender {
  constructor(database = BOOKS_DATABASE) {
    this.database = database;
  }

  /**
   * Filter & rank books based on user preference criteria with dynamic variation
   */
  getRecommendations(preferences) {
    const { genres = [], ageGroup = '', tone = '', query = '' } = preferences;

    let scoredBooks = this.database.map(book => {
      let score = 0;

      // Match Genres (weight)
      if (genres.length > 0) {
        const genreMatches = book.genres.filter(g => genres.includes(g));
        score += genreMatches.length * 25;
      }

      // Match Age Group
      if (ageGroup && book.ageGroup === ageGroup) {
        score += 30;
      }

      // Match Vibe/Tone
      if (tone && book.tone === tone) {
        score += 20;
      }

      // Text Query relevance (keywords in tropes, title, synopsis)
      if (query.trim()) {
        const q = query.toLowerCase();
        if (book.title.toLowerCase().includes(q)) score += 40;
        if (book.synopsis.toLowerCase().includes(q)) score += 15;
        book.tropes.forEach(trope => {
          if (trope.toLowerCase().includes(q)) score += 20;
        });
      }

      // Add small random noise (-3 to +3) so repeated requests offer varied recommendations among top tier!
      const randomJitter = (Math.random() - 0.5) * 6;
      score += randomJitter;

      return { book, score };
    });

    // Sort by score descending
    scoredBooks.sort((a, b) => b.score - a.score);

    // Extract top candidate pool (up to 8 candidates)
    const topCandidates = scoredBooks.slice(0, 8).map(item => item.book);

    // Shuffle top candidates slightly to give variety
    const shuffled = this.shuffleArray([...topCandidates]);

    return shuffled.slice(0, 4); // Return top 4 fresh results
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
   * Async live fetch from Google Books API for extra niche options
   */
  async fetchLiveGoogleBooks(searchTerm) {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=4`;
      const response = await fetch(url);
      if (!response.ok) return [];

      const data = await response.json();
      if (!data.items) return [];

      return data.items.map(item => {
        const info = item.volumeInfo;
        const sale = item.saleInfo;

        const coverImg = info.imageLinks ? 
          (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail) : 
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80';

        const price = sale && sale.retailPrice ? 
          `$${sale.retailPrice.amount}` : 
          '$12.99';

        return {
          id: item.id,
          title: info.title || 'Unknown Title',
          author: info.authors ? info.authors.join(', ') : 'Unknown Author',
          cover: coverImg.replace('http://', 'https://'),
          genres: info.categories ? info.categories : ['Fiction'],
          ageGroup: 'all',
          rating: info.averageRating || 4.6,
          reviewsCount: info.ratingsCount ? info.ratingsCount.toLocaleString() : '2,100',
          price: price,
          pageCount: info.pageCount || 340,
          publishedYear: info.publishedDate ? parseInt(info.publishedDate.substring(0, 4)) : 2021,
          buyLinks: {
            amazon: `https://www.amazon.com/s?k=${encodeURIComponent(info.title + ' ' + (info.authors ? info.authors[0] : ''))}`,
            barnes: `https://www.barnesandnoble.com/s/${encodeURIComponent(info.title)}`,
            bookshop: `https://bookshop.org/search?keywords=${encodeURIComponent(info.title)}`
          },
          synopsis: info.description || 'A unique niche discovery fetched live based on your search prompt.',
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
