/* ==========================================================================
   BOOK LOOKUP & INSPECTOR LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const lookupInput = document.getElementById('lookup-search-input');
  const resultsGrid = document.getElementById('lookup-results-grid');
  const overviewModalOverlay = document.getElementById('overview-modal-overlay');
  const overviewModalContent = document.getElementById('overview-modal-content');

  let debounceTimer;

  // Search Input Event Listener
  lookupInput?.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      performBookLookup();
    }, 350);
  });

  async function performBookLookup() {
    const query = lookupInput ? lookupInput.value.trim() : '';
    if (!query) {
      renderDefaultPopularBooks();
      return;
    }

    if (!resultsGrid) return;
    resultsGrid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
        <h3>🔍 Searching books for "${escapeHTML(query)}"...</h3>
      </div>
    `;

    // 1. Search Local Database
    const qLower = query.toLowerCase();
    const localMatches = BOOKS_DATABASE.filter(b => 
      b.title.toLowerCase().includes(qLower) || 
      b.author.toLowerCase().includes(qLower) ||
      b.synopsis.toLowerCase().includes(qLower)
    );

    // 2. Fetch Live Google Books API
    let apiMatches = [];
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        if (data.items) {
          apiMatches = data.items.map(item => {
            const info = item.volumeInfo;
            const sale = item.saleInfo;

            const coverImg = info.imageLinks ? 
              (info.imageLinks.thumbnail || info.imageLinks.smallThumbnail) : 
              'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80';

            const price = sale && sale.retailPrice ? 
              `$${sale.retailPrice.amount}` : 
              '$13.99';

            return {
              id: item.id,
              title: info.title || 'Unknown Title',
              author: info.authors ? info.authors.join(', ') : 'Unknown Author',
              cover: coverImg.replace('http://', 'https://'),
              genres: info.categories ? info.categories : ['General'],
              ageGroup: 'all',
              rating: info.averageRating || (4.3 + (Math.random() * 0.5)).toFixed(1),
              reviewsCount: info.ratingsCount ? info.ratingsCount.toLocaleString() : '2,400',
              price: price,
              pageCount: info.pageCount || 320,
              publishedYear: info.publishedDate ? parseInt(info.publishedDate.substring(0, 4)) : 2022,
              buyLinks: {
                amazon: `https://www.amazon.com/s?k=${encodeURIComponent((info.title || '') + ' ' + (info.authors ? info.authors[0] : ''))}`,
                barnes: `https://www.barnesandnoble.com/s/${encodeURIComponent(info.title || '')}`,
                bookshop: `https://bookshop.org/search?keywords=${encodeURIComponent(info.title || '')}`
              },
              synopsis: info.description || 'A fascinating book discovered through live lookup.',
              matchReason: 'Live search result match!'
            };
          });
        }
      }
    } catch (err) {
      console.warn('Google Books API lookup failed, displaying local database matches.', err);
    }

    // Combine local & API matches without duplicates
    const seenTitles = new Set();
    const combined = [];

    [...localMatches, ...apiMatches].forEach(book => {
      const key = book.title.toLowerCase().trim();
      if (!seenTitles.has(key)) {
        seenTitles.add(key);
        combined.push(book);
      }
    });

    renderLookupResults(combined);
  }

  function renderLookupResults(books) {
    if (!resultsGrid) return;
    resultsGrid.innerHTML = '';

    if (books.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
          <h3>No books found matching your search</h3>
          <p>Try searching by book title, author name, or series!</p>
        </div>
      `;
      return;
    }

    books.forEach(book => {
      const card = document.createElement('div');
      card.className = 'lookup-book-card';

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
  }

  function renderDefaultPopularBooks() {
    renderLookupResults(BOOKS_DATABASE.slice(0, 12));
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
          </div>

          <div class="overview-section-title">Plot Overview & Summary</div>
          <p class="overview-synopsis">${book.synopsis}</p>

          ${tropesHTML ? `<div class="overview-section-title">Key Tropes & Categories</div><div style="display:flex; flex-wrap:wrap; gap:0.4rem;">${tropesHTML}</div>` : ''}
        </div>
      </div>
    `;

    overviewModalOverlay.classList.add('active');
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // Initial render
  renderDefaultPopularBooks();
});
