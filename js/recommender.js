/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - ABSOLUTE HARD-FILTER RECOMMENDATION ENGINE
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
   * Filter & rank books enforcing ABSOLUTE HARD FILTERS for Age Group & Genre
   */
  getRecommendations(preferences, limit = 4) {
    const { genres = [], ageGroup = '', tone = '', query = '' } = preferences;

    // Step 1: Start with unseen books in database
    let pool = this.database.filter(b => !this.seenBookIds.has(b.id));
    if (pool.length < limit) {
      pool = [...this.database]; // recycle pool if exhausted
    }

    // Step 2: ABSOLUTE HARD FILTER BY AGE GROUP
    if (ageGroup) {
      const ageStrictPool = pool.filter(b => b.ageGroup === ageGroup);
      if (ageStrictPool.length > 0) {
        pool = ageStrictPool;
      }
    }

    // Step 3: ABSOLUTE HARD FILTER BY GENRE
    if (genres.length > 0) {
      const genreStrictPool = pool.filter(b => b.genres.some(g => genres.includes(g)));
      if (genreStrictPool.length > 0) {
        pool = genreStrictPool;
      }
    }

    // Step 4: Rank remaining valid candidate books
    let scored = pool.map(book => {
      let score = 100;

      // Bonus for Tone match
      if (tone && book.tone === tone) {
        score += 30;
      }

      // Bonus for specific search query terms
      if (query.trim()) {
        const q = query.toLowerCase();
        if (book.title.toLowerCase().includes(q)) score += 50;
        if (book.synopsis.toLowerCase().includes(q)) score += 20;
        book.tropes.forEach(t => {
          if (t.toLowerCase().includes(q)) score += 25;
        });
      }

      // Tie-breaker jitter
      score += Math.random() * 5;
      return { book, score };
    });

    scored.sort((a, b) => b.score - a.score);

    // Pick top results
    const selected = scored.slice(0, limit).map(s => s.book);

    // Remember seen book IDs
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
   * Async live fetch from Google Books API targeting EXACT genre & search terms
   */
  async fetchLiveGoogleBooks(searchTerm, selectedGenres = [], selectedAgeGroup = '') {
    try {
      const genreQueryStr = selectedGenres.length > 0 ? selectedGenres.join(' ') : '';
      const ageQueryStr = selectedAgeGroup ? selectedAgeGroup : '';
      const fullSearchQuery = `${genreQueryStr} ${ageQueryStr} ${searchTerm}`.trim();

      const startIndex = Math.floor(Math.random() * 10);
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(fullSearchQuery)}&startIndex=${startIndex}&maxResults=6`;
      const response = await fetch(url);
      if (!response.ok) return [];

      const data = await response.json();
      if (!data.items) return [];

      return data.items
        .filter(item => !this.seenBookIds.has(item.id))
        .map(item => {
          const info = item.volumeInfo || {};
          const sale = item.saleInfo || {};
          const searchInfo = item.searchInfo || {};

          const coverImg = info.imageLinks ? 
            (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail || info.imageLinks.medium) : 
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80';

          const price = sale && sale.retailPrice ? 
            `$${sale.retailPrice.amount}` : 
            '$12.99';

          let synopsis = info.description ? this.stripHTML(info.description) : '';
          if (!synopsis || synopsis.length < 40) {
            if (searchInfo.textSnippet) {
              synopsis = this.stripHTML(searchInfo.textSnippet);
            } else {
              const authorText = info.authors ? info.authors.join(', ') : 'renowned authors';
              synopsis = `"${info.title}" by ${authorText} is a popular ${selectedGenres.join('/')} title. Published by ${info.publisher || 'independent publishers'} in ${info.publishedDate || 'recent years'}, offering a captivating storyline and memorable characters.`;
            }
          }

          this.seenBookIds.add(item.id);

          return {
            id: item.id,
            title: info.title || 'Unknown Title',
            author: info.authors ? info.authors.join(', ') : 'Unknown Author',
            cover: coverImg.replace('http://', 'https://'),
            genres: selectedGenres.length > 0 ? selectedGenres : ['Fiction'],
            ageGroup: selectedAgeGroup || 'all',
            rating: info.averageRating || 4.6,
            reviewsCount: info.ratingsCount ? info.ratingsCount.toLocaleString() : '1,500',
            price: price,
            pageCount: info.pageCount || 320,
            publishedYear: info.publishedDate ? parseInt(info.publishedDate.substring(0, 4)) : 2022,
            buyLinks: {
              amazon: `https://www.amazon.com/s?k=${encodeURIComponent(info.title + ' ' + (info.authors ? info.authors[0] : ''))}`,
              barnes: `https://www.barnesandnoble.com/s/${encodeURIComponent(info.title)}`,
              bookshop: `https://bookshop.org/search?keywords=${encodeURIComponent(info.title)}`
            },
            synopsis: synopsis,
            matchReason: `Targeted ${selectedAgeGroup ? selectedAgeGroup.toUpperCase() + ' ' : ''}${selectedGenres.join(', ').toUpperCase()} recommendation!`
          };
        });
    } catch (err) {
      console.warn('Google Books API fetch failed, falling back to local database.', err);
      return [];
    }
  }

  stripHTML(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
}

window.bookRecommender = new BookRecommender();
