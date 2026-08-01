/* ==========================================================================
   GENRES EXPLORER TAB LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const genresGrid = document.getElementById('genres-grid');
  const searchInput = document.getElementById('genre-search-input');
  const filterPillsContainer = document.getElementById('filter-pills-container');
  const genreModalOverlay = document.getElementById('genre-modal-overlay');
  const genreModalContent = document.getElementById('genre-modal-content');
  const modalCloseBtn = document.getElementById('genre-modal-close-btn');

  let activeFilter = 'all';

  // Render Genre Cards
  function renderGenres(genresList) {
    if (!genresGrid) return;
    genresGrid.innerHTML = '';

    if (genresList.length === 0) {
      genresGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <h3>No matching genres found</h3>
          <p>Try searching for another keyword or trope!</p>
        </div>
      `;
      return;
    }

    genresList.forEach(genre => {
      const card = document.createElement('div');
      card.className = 'genre-card';

      const tropesHTML = genre.tropes.map(t => `<span class="trope-chip">#${t}</span>`).join('');

      card.innerHTML = `
        <div class="genre-card-header">
          <div class="genre-icon-box">${genre.icon}</div>
          <div>
            <h3 class="genre-card-title">${genre.name}</h3>
            <div class="genre-meta">
              <span class="badge">${genre.category}</span>
            </div>
          </div>
        </div>
        <p class="genre-description">${genre.summary}</p>
        <div>
          <div class="tropes-section-title">Popular Tropes & Themes</div>
          <div class="tropes-container">${tropesHTML}</div>
        </div>
        <div class="genre-card-footer">
          <button class="btn-secondary view-genre-details-btn" data-genre-id="${genre.id}">View Details</button>
          <button class="btn-primary find-books-btn" data-genre-id="${genre.id}" data-genre-name="${genre.name}">Find Books ✨</button>
        </div>
      `;

      genresGrid.appendChild(card);
    });

    attachCardEventListeners();
  }

  // Attach Event Listeners to Card Buttons
  function attachCardEventListeners() {
    // View Details Modal
    document.querySelectorAll('.view-genre-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const genreId = e.currentTarget.getAttribute('data-genre-id');
        openGenreModal(genreId);
      });
    });

    // "Find Books in This Genre" -> Switch to Chat
    document.querySelectorAll('.find-books-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const genreId = e.currentTarget.getAttribute('data-genre-id');
        const genreName = e.currentTarget.getAttribute('data-genre-name');

        // Switch Tab to Chat
        if (window.switchAppTab) {
          window.switchAppTab('chat');
        }

        // Pre-select genre chip in Chat Sidebar
        if (window.selectChatGenre) {
          window.selectChatGenre(genreId, genreName);
        }
      });
    });
  }

  // Open Genre Detail Modal
  function openGenreModal(genreId) {
    const genre = GENRES_DATA.find(g => g.id === genreId);
    if (!genre || !genreModalContent) return;

    const subgenresHTML = genre.subgenres.map(sg => `<span class="badge">${sg}</span>`).join(' ');
    const benchmarksHTML = genre.benchmarks.map(b => `
      <div class="benchmark-card">
        <img src="${b.cover}" alt="${b.title}" class="benchmark-cover" />
        <div class="benchmark-info">
          <h5>${b.title}</h5>
          <p>by ${b.author}</p>
        </div>
      </div>
    `).join('');

    genreModalContent.innerHTML = `
      <div class="genre-modal-header">
        <div class="genre-modal-icon">${genre.icon}</div>
        <div>
          <h2 class="genre-modal-title">${genre.name}</h2>
          <div style="display:flex; gap:0.5rem; margin-top:0.25rem;">${subgenresHTML}</div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom:0.4rem; color:var(--text-muted);">Overview</h4>
        <p style="font-size:1.05rem; line-height:1.7; color:var(--text-secondary);">${genre.summary}</p>
      </div>
      <div>
        <h4 style="margin-bottom:0.4rem; color:var(--text-muted);">Benchmark Classics & Top Recommendations</h4>
        <div class="benchmark-books-list">${benchmarksHTML}</div>
      </div>
      <div style="margin-top:1.5rem; display:flex; justify-end:flex-end;">
        <button class="btn-primary" id="modal-find-books-btn" data-genre-id="${genre.id}" data-genre-name="${genre.name}">
          Find ${genre.name} Books in AI Chat ✨
        </button>
      </div>
    `;

    document.getElementById('modal-find-books-btn')?.addEventListener('click', (e) => {
      closeGenreModal();
      const gid = e.currentTarget.getAttribute('data-genre-id');
      const gname = e.currentTarget.getAttribute('data-genre-name');
      if (window.switchAppTab) window.switchAppTab('chat');
      if (window.selectChatGenre) window.selectChatGenre(gid, gname);
    });

    genreModalOverlay.classList.add('active');
  }

  function closeGenreModal() {
    if (genreModalOverlay) genreModalOverlay.classList.remove('active');
  }

  modalCloseBtn?.addEventListener('click', closeGenreModal);
  genreModalOverlay?.addEventListener('click', (e) => {
    if (e.target === genreModalOverlay) closeGenreModal();
  });

  // Filter & Search Logic
  function filterGenres() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = GENRES_DATA.filter(genre => {
      const matchesFilter = activeFilter === 'all' || genre.category === activeFilter;
      const matchesSearch = !searchTerm || 
        genre.name.toLowerCase().includes(searchTerm) ||
        genre.summary.toLowerCase().includes(searchTerm) ||
        genre.subgenres.some(sg => sg.toLowerCase().includes(searchTerm)) ||
        genre.tropes.some(t => t.toLowerCase().includes(searchTerm));

      return matchesFilter && matchesSearch;
    });

    renderGenres(filtered);
  }

  // Filter Pills Event Listeners
  filterPillsContainer?.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      filterPillsContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeFilter = e.currentTarget.getAttribute('data-category');
      filterGenres();
    });
  });

  searchInput?.addEventListener('input', filterGenres);

  // Initial Render
  renderGenres(GENRES_DATA);
});
