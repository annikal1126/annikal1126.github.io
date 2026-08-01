/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - RECOMMENDATION ENGINE
   ========================================================================== */

class BookRecommender {
  constructor(database = BOOKS_DATABASE) {
    this.database = database;
  }

  /**
   * Filter & rank books based on user preference criteria
   */
  getRecommendations(preferences) {
    const { genres = [], ageGroup = '', tone = '', query = '' } = preferences;

    let scoredBooks = this.database.map(book => {
      let score = 0;

      // Match Genres (highest weight)
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

      return { book, score };
    });

    // Sort by score descending
    scoredBooks.sort((a, b) => b.score - a.score);

    // Filter top matches
    let results = scoredBooks.map(item => item.book);

    // Fallback if no exact match found
    if (results.length === 0) {
      results = this.database.slice(0, 3);
    }

    return results.slice(0, 4); // Return top 4
  }

  /**
   * Async live fetch from Google Books API if needed
   */
  async fetchLiveGoogleBooks(searchTerm) {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=3`;
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
          rating: info.averageRating || 4.5,
          reviewsCount: info.ratingsCount ? info.ratingsCount.toLocaleString() : '1,250',
          price: price,
          pageCount: info.pageCount || 350,
          publishedYear: info.publishedDate ? parseInt(info.publishedDate.substring(0, 4)) : 2022,
          buyLinks: {
            amazon: `https://www.amazon.com/s?k=${encodeURIComponent(info.title + ' ' + (info.authors ? info.authors[0] : ''))}`,
            barnes: `https://www.barnesandnoble.com/s/${encodeURIComponent(info.title)}`,
            bookshop: `https://bookshop.org/search?keywords=${encodeURIComponent(info.title)}`
          },
          synopsis: info.description || 'A fascinating book tailored to your search preferences.',
          matchReason: 'Live API result matching your query!'
        };
      });
    } catch (err) {
      console.warn('Google Books API fetch failed, falling back to local database.', err);
      return [];
    }
  }
}

window.bookRecommender = new BookRecommender();
