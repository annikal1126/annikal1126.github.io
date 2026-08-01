/* ==========================================================================
   AI MATCHMAKER CHAT & BOOK OVERVIEW LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const chatStream = document.getElementById('chat-stream');
  const chatInput = document.getElementById('chat-input-field');
  const sendBtn = document.getElementById('send-message-btn');
  const ageGroupChips = document.querySelectorAll('#age-group-chips .select-chip');
  const genreChips = document.querySelectorAll('#genre-chips .select-chip');
  const toneChips = document.querySelectorAll('#tone-chips .select-chip');
  const customTropesInput = document.getElementById('custom-tropes-input');
  const generateRecsBtn = document.getElementById('generate-recs-btn');

  // Overview Modal elements
  const overviewModalOverlay = document.getElementById('overview-modal-overlay');
  const overviewModalContent = document.getElementById('overview-modal-content');
  const overviewModalCloseBtn = document.getElementById('overview-modal-close-btn');

  let selectedAgeGroup = '';
  let selectedGenres = [];
  let selectedTone = '';

  // Select Chip Event Listeners
  ageGroupChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      ageGroupChips.forEach(c => c.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
      selectedAgeGroup = e.currentTarget.getAttribute('data-value');
    });
  });

  genreChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      const val = e.currentTarget.getAttribute('data-value');
      if (e.currentTarget.classList.contains('selected')) {
        e.currentTarget.classList.remove('selected');
        selectedGenres = selectedGenres.filter(g => g !== val);
      } else {
        e.currentTarget.classList.add('selected');
        selectedGenres.push(val);
      }
    });
  });

  toneChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      toneChips.forEach(c => c.classList.remove('selected'));
      e.currentTarget.classList.add('selected');
      selectedTone = e.currentTarget.getAttribute('data-value');
    });
  });

  // Global Function for Genres Tab shortcut to pre-select genre
  window.selectChatGenre = (genreId, genreName) => {
    selectedGenres = [genreId];
    genreChips.forEach(chip => {
      if (chip.getAttribute('data-value') === genreId) {
        chip.classList.add('selected');
      } else {
        chip.classList.remove('selected');
      }
    });
    addBotMessage(`Awesome choice! I've pre-selected **${genreName}** for you. Pick an age range or type any extra vibes/tropes you'd like, then hit **Generate Book Matches**! ✨`);
  };

  // Generate Recommendations Trigger
  generateRecsBtn?.addEventListener('click', () => {
    handleRecommendationGeneration();
  });

  // Send Custom Message
  sendBtn?.addEventListener('click', () => {
    handleSendMessage();
  });

  chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
  });

  function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addUserMessage(text);
    chatInput.value = '';

    // Show bot typing indicator & process query
    setTimeout(() => {
      processQueryAndRespond(text);
    }, 600);
  }

  function handleRecommendationGeneration() {
    const promptSummaryParts = [];
    if (selectedGenres.length > 0) promptSummaryParts.push(`Genres: ${selectedGenres.join(', ')}`);
    if (selectedAgeGroup) promptSummaryParts.push(`Age Group: ${selectedAgeGroup}`);
    if (selectedTone) promptSummaryParts.push(`Tone: ${selectedTone}`);
    if (customTropesInput && customTropesInput.value.trim()) {
      promptSummaryParts.push(`Vibes/Tropes: "${customTropesInput.value.trim()}"`);
    }

    const userPromptText = promptSummaryParts.length > 0 ?
      `Find me books matching: ${promptSummaryParts.join(' | ')}` :
      "Find me your best book recommendations!";

    addUserMessage(userPromptText);

    setTimeout(() => {
      generateAndDisplayBookCards();
    }, 800);
  }

  function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'message-bubble user';
    msg.innerHTML = `
      <div class="message-avatar">👤</div>
      <div class="message-content">${escapeHTML(text)}</div>
    `;
    chatStream.appendChild(msg);
    scrollToBottom();
  }

  function addBotMessage(textHTML) {
    const msg = document.createElement('div');
    msg.className = 'message-bubble bot';
    msg.innerHTML = `
      <div class="message-avatar">📚</div>
      <div class="message-content">${textHTML}</div>
    `;
    chatStream.appendChild(msg);
    scrollToBottom();
  }

  async function generateAndDisplayBookCards() {
    const preferences = {
      genres: selectedGenres,
      ageGroup: selectedAgeGroup,
      tone: selectedTone,
      query: customTropesInput ? customTropesInput.value.trim() : ''
    };

    // Get recommendations from local DB engine
    let books = window.bookRecommender.getRecommendations(preferences);

    // If local results are few, try Google Books API
    if (books.length < 2 && (preferences.genres.length > 0 || preferences.query)) {
      const searchTerm = preferences.genres.join(' ') + ' ' + preferences.query;
      const apiBooks = await window.bookRecommender.fetchLiveGoogleBooks(searchTerm);
      if (apiBooks.length > 0) {
        books = [...books, ...apiBooks];
      }
    }

    const responseIntro = `Here are **${books.length} curated book recommendations** hand-picked for your reading preferences! ✨`;
    addBotMessage(responseIntro);

    // Render Cards in Stream
    const recsContainer = document.createElement('div');
    recsContainer.className = 'recommendations-wrapper';

    books.forEach(book => {
      const card = createBookCardHTML(book);
      recsContainer.appendChild(card);
    });

    chatStream.appendChild(recsContainer);
    scrollToBottom();
  }

  function createBookCardHTML(book) {
    const card = document.createElement('div');
    card.className = 'book-recommendation-card';

    const starsHTML = '★'.repeat(Math.floor(book.rating)) + (book.rating % 1 >= 0.5 ? '½' : '');

    card.innerHTML = `
      <div class="book-cover-wrapper">
        <img src="${book.cover}" alt="${book.title}" class="book-cover-img" />
      </div>
      <div class="book-details">
        <h4 class="book-title">${book.title}</h4>
        <div class="book-author">by ${book.author}</div>
        <div class="book-rating-price-bar">
          <span class="star-rating">★ ${book.rating} <small>(${book.reviewsCount})</small></span>
          <span class="book-price">${book.price}</span>
        </div>
        <div class="book-why-match"><strong>Why it matches:</strong> ${book.matchReason}</div>
        <div class="book-actions-bar">
          <button class="overview-btn" data-book-id="${book.id}">📖 Book Overview</button>
          <a href="${book.buyLinks.amazon}" target="_blank" rel="noopener" class="buy-link-btn">🛒 Buy on Amazon</a>
          <a href="${book.buyLinks.bookshop}" target="_blank" rel="noopener" class="buy-link-btn" style="background:var(--accent-secondary)">📚 Bookshop.org</a>
        </div>
      </div>
    `;

    // Overview Button Handler
    card.querySelector('.overview-btn').addEventListener('click', () => {
      openBookOverviewModal(book);
    });

    return card;
  }

  function processQueryAndRespond(userQuery) {
    const preferences = {
      genres: selectedGenres,
      ageGroup: selectedAgeGroup,
      tone: selectedTone,
      query: userQuery
    };

    const books = window.bookRecommender.getRecommendations(preferences);
    addBotMessage(`Based on your message: *"<sup>${escapeHTML(userQuery)}</sup>"*, here are my top recommended matches for you!`);
    
    const recsContainer = document.createElement('div');
    recsContainer.className = 'recommendations-wrapper';
    books.forEach(b => recsContainer.appendChild(createBookCardHTML(b)));
    chatStream.appendChild(recsContainer);
    scrollToBottom();
  }

  // Open Detailed Book Overview Modal
  function openBookOverviewModal(book) {
    if (!overviewModalContent || !overviewModalOverlay) return;

    overviewModalContent.innerHTML = `
      <div class="overview-modal-grid">
        <div>
          <img src="${book.cover}" alt="${book.title}" class="overview-cover-img" />
          <div style="margin-top:1rem; display:flex; flex-direction:column; gap:0.5rem;">
            <a href="${book.buyLinks.amazon}" target="_blank" class="btn-primary" style="justify-center; font-size:0.88rem;">Buy on Amazon (${book.price})</a>
            <a href="${book.buyLinks.barnes}" target="_blank" class="btn-secondary" style="justify-center; font-size:0.88rem;">Barnes & Noble</a>
          </div>
        </div>
        <div class="overview-details">
          <h3>${book.title}</h3>
          <div class="overview-author">by ${book.author}</div>
          <div class="overview-meta-pills">
            <span class="badge">⭐ ${book.rating} / 5</span>
            <span class="badge">📄 ${book.pageCount} Pages</span>
            <span class="badge">📅 Published ${book.publishedYear}</span>
            <span class="badge">🏷️ ${book.ageGroup.toUpperCase()}</span>
          </div>

          <div class="overview-section-title">Match Analysis & Rationale</div>
          <p class="book-why-match" style="margin-bottom:1.25rem;">${book.matchReason}</p>

          <div class="overview-section-title">Plot Overview & Synopsis</div>
          <p class="overview-synopsis">${book.synopsis}</p>

          <div class="overview-section-title">Key Tropes & Vibes</div>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.3rem;">
            ${book.tropes.map(t => `<span class="trope-chip">#${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    overviewModalOverlay.classList.add('active');
  }

  overviewModalCloseBtn?.addEventListener('click', () => {
    overviewModalOverlay.classList.remove('active');
  });

  overviewModalOverlay?.addEventListener('click', (e) => {
    if (e.target === overviewModalOverlay) overviewModalOverlay.classList.remove('active');
  });

  function scrollToBottom() {
    chatStream.scrollTop = chatStream.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
});
