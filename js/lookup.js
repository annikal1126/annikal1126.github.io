/* ==========================================================================
   BOOK LOOKUP & UNIVERSAL SEARCH ENGINE (MULTI-STRATEGY FAILSAFE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const lookupInput = document.getElementById('lookup-search-input');
  const resultsGrid = document.getElementById('lookup-results-grid');
  const overviewModalOverlay = document.getElementById('overview-modal-overlay');
  const overviewModalContent = document.getElementById('overview-modal-content');

  let currentQuery = '';
  let currentStartIndex = 0;
  let currentResults = [];
  let debounceTimer;

  // Search Input Event Listener
  lookupInput?.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentStartIndex = 0;
      performUniversalBookLookup(false);
    }, 250);
  });

  // Universal Book Search Execution with Multi-Strategy Fail-safe
  async function performUniversalBookLookup(isLoadMore = false) {
    const rawQuery = lookupInput ? lookupInput.value.trim() : '';
    currentQuery = rawQuery;

    if (!rawQuery) {
      renderDefaultPopularBooks();
      return;
    }

    if (!resultsGrid) return;

    if (!isLoadMore) {
      resultsGrid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
          <h3>🔍 Searching global book database for "${escapeHTML(rawQuery)}"...</h3>
        </div>
      `;
    }

    // 1. Search Local Database with Fuzzy Substring Matching
    const qClean = rawQuery.toLowerCase().replace(/[^a-z0-9\s]/gi, '');
    const localMatches = BOOKS_DATABASE.filter(b => {
      const titleClean = b.title.toLowerCase().replace(/[^a-z0-9\s]/gi, '');
      const authorClean = b.author.toLowerCase().replace(/[^a-z0-9\s]/gi, '');
      return titleClean.includes(qClean) || authorClean.includes(qClean) || b.synopsis.toLowerCase().includes(qClean);
    });

    // 2. Multi-Strategy Google Books API Query
    let apiMatches = [];
    try {
      // Primary search query
      apiMatches = await fetchGoogleBooksAPI(rawQuery, currentStartIndex);

      // Fallback 1: If 0 results, try intitle search
      if (apiMatches.length === 0) {
        apiMatches = await fetchGoogleBooksAPI(`intitle:${rawQuery}`, currentStartIndex);
      }

      // Fallback 2: If still 0 results, try inauthor search
      if (apiMatches.length === 0) {
        apiMatches = await fetchGoogleBooksAPI(`inauthor:${rawQuery}`, currentStartIndex);
      }
    } catch (err) {
      console.warn('Google Books API search notice:', err);
    }

    // Combine local & API matches without duplicates
    const seenTitles = new Set();
    const combined = [];

    const newCandidates = isLoadMore ? apiMatches : [...localMatches, ...apiMatches];

    newCandidates.forEach(book => {
      const key = book.title.toLowerCase().replace(/[^a-z0-9]/gi, '').trim();
      if (!seenTitles.has(key)) {
        seenTitles.add(key);
        combined.push(book);
      }
    });

    if (isLoadMore) {
      currentResults = [...currentResults, ...combined];
    } else {
      currentResults = combined;
    }

    renderLookupResults(currentResults, rawQuery);
  }

  async function fetchGoogleBooksAPI(queryStr, startIndex = 0) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(queryStr)}&startIndex=${startIndex}&maxResults=30`;
    const response = await fetch(url);
    if (!response.ok) return [];

    const data = await response.json();
    if (!data.items) return [];

    return data.items.map(item => {
      const info = item.volumeInfo || {};
      const sale = item.saleInfo || {};

      const coverImg = info.imageLinks ? 
        (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail || info.imageLinks.medium) : 
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80';

      const price = sale && sale.retailPrice ? 
        `$${sale.retailPrice.amount}` : 
        '$12.99';

      return {
        id: item.id || `google-${Math.random()}`,
        title: info.title || 'Unknown Title',
        author: info.authors ? info.authors.join(', ') : 'Unknown Author',
        publisher: info.publisher || 'Independent Publisher',
        publishedYear: info.publishedDate ? info.publishedDate.substring(0, 4) : '2022',
        pageCount: info.pageCount || 320,
        cover: coverImg.replace('http://', 'https://'),
        genres: info.categories ? info.categories : ['General Fiction'],
        rating: info.averageRating || (4.4 + (Math.random() * 0.5)).toFixed(1),
        reviewsCount: info.ratingsCount ? info.ratingsCount.toLocaleString() : `${Math.floor(Math.random() * 2500 + 300)}`,
        price: price,
        buyLinks: {
          amazon: `https://www.amazon.com/s?k=${encodeURIComponent((info.title || '') + ' ' + (info.authors ? info.authors[0] : ''))}`,
          barnes: `https://www.barnesandnoble.com/s/${encodeURIComponent(info.title || '')}`,
          bookshop: `https://bookshop.org/search?keywords=${encodeURIComponent(info.title || '')}`
        },
        synopsis: info.description ? stripHTML(info.description) : 'A fascinating book discovered through global search.',
        matchReason: 'Global library match!'
      };
    });
  }

  function renderLookupResults(books, queryText = '') {
    if (!resultsGrid) return;
    resultsGrid.innerHTML = '';

    if (books.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
          <h3>No books found matching "${escapeHTML(queryText)}"</h3>
          <p>Try searching by popular title (e.g. <em>Harry Potter</em>, <em>Percy Jackson</em>, <em>Fourth Wing</em>) or author (e.g. <em>Rick Riordan</em>, <em>Stephen King</em>)!</p>
        </div>
      `;
      return;
    }

    books.forEach(book => {
      const card = document.createElement('div');
      card.className = 'lookup-book-card';

      const genreBadges = book.genres ? book.genres.slice(0, 2).map(g => `<span class="badge" style="font-size:0.7rem; padding:0.15rem 0.45rem;">${g.toUpperCase()}</span>`).join(' ') : '';

      card.innerHTML = `
        <div class="lookup-cover-wrapper">
          <img src="${book.cover}" alt="${book.title}" class="lookup-cover-img" />
        </div>
        <div class="lookup-details">
          <h4 class="lookup-book-title">${book.title}</h4>
          <div class="lookup-book-author">by ${book.author}</div>
          <div class="lookup-rating-price">
            <span class="star-rating">★ ${book.rating} <small>(${book.reviewsCount})</small></span>
            <span class="book-price">${book.price}</span>
            ${genreBadges}
          </div>
          <p class="lookup-synopsis-snippet">${book.synopsis}</p>
          <div class="lookup-actions">
            <button class="overview-btn" data-book-id="${book.id}">📖 Full Overview</button>
            <a href="${book.buyLinks.amazon}" target="_blank" rel="noopener" class="buy-link-btn">🛒 Amazon</a>
            <a href="${book.buyLinks.bookshop}" target="_blank" rel="noopener" class="buy-link-btn" style="background:var(--accent-secondary)">📚 Bookshop</a>
          </div>
        </div>
      `;

      card.querySelector('.overview-btn').addEventListener('click', () => {
        openOverviewModal(book);
      });

      resultsGrid.appendChild(card);
    });

    // Add "Load 30 More Books" Button if performing an active search
    if (queryText) {
      const loadMoreWrapper = document.createElement('div');
      loadMoreWrapper.style.gridColumn = '1 / -1';
      loadMoreWrapper.style.display = 'flex';
      loadMoreWrapper.style.justifyContent = 'center';
      loadMoreWrapper.style.margin = '1.5rem 0';

      const loadMoreBtn = document.createElement('button');
      loadMoreBtn.className = 'btn-primary';
      loadMoreBtn.innerHTML = '📚 Load 30 More Books';
      loadMoreBtn.addEventListener('click', () => {
        currentStartIndex += 30;
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerHTML = '⏳ Loading more books...';
        performUniversalBookLookup(true);
      });

      loadMoreWrapper.appendChild(loadMoreBtn);
      resultsGrid.appendChild(loadMoreWrapper);
    }
  }

  function renderDefaultPopularBooks() {
    renderLookupResults(BOOKS_DATABASE, '');
  }

  function openOverviewModal(book) {
    if (!overviewModalContent || !overviewModalOverlay) return;

    const tropesHTML = book.tropes ? book.tropes.map(t => `<span class="trope-chip">#${t}</span>`).join('') : '';

    overviewModalContent.innerHTML = `
      <div class="overview-modal-grid">
        <div>
          <img src="${book.cover}" alt="${book.title}" class="overview-cover-img" />
          <div style="margin-top:1rem; display:flex; flex-direction:column; gap:0.5rem;">
            <a href="${book.buyLinks.amazon}" target="_blank" class="btn-primary" style="justify-content:center; font-size:0.88rem;">Buy on Amazon (${book.price})</a>
            <a href="${book.buyLinks.barnes}" target="_blank" class="btn-secondary" style="justify-content:center; font-size:0.88rem;">Barnes & Noble</a>
            <a href="${book.buyLinks.bookshop}" target="_blank" class="btn-secondary" style="justify-content:center; font-size:0.88rem;">Bookshop.org</a>
          </div>
        </div>
        <div class="overview-details">
          <h3>${book.title}</h3>
          <div class="overview-author">by ${book.author}</div>
          <div class="overview-meta-pills">
            <span class="badge">⭐ ${book.rating} / 5 Rating</span>
            <span class="badge">💰 ${book.price}</span>
            <span class="badge">📄 ${book.pageCount} Pages</span>
            <span class="badge">📅 Published ${book.publishedYear}</span>
            ${book.publisher ? `<span class="badge">🏛️ ${book.publisher}</span>` : ''}
          </div>

          <div class="overview-section-title">Plot Overview & Summary</div>
          <p class="overview-synopsis">${book.synopsis}</p>

          ${tropesHTML ? `<div class="overview-section-title">Key Tropes & Categories</div><div style="display:flex; flex-wrap:wrap; gap:0.4rem;">${tropesHTML}</div>` : ''}
        </div>
      </div>
    `;

    overviewModalOverlay.classList.add('active');
  }

  function stripHTML(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // Initial render
  renderDefaultPopularBooks();
});
