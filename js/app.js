/* ==========================================================================
   BOOK NOOK & AI MATCHMAKER - APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  // Theme Toggle Handler
  let currentTheme = localStorage.getItem('book_nook_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  themeToggleBtn?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('book_nook_theme', currentTheme);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
      themeToggleBtn.setAttribute('title', `Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode`);
    }
  }

  // Global Tab Switcher Function
  window.switchAppTab = (targetTabId) => {
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-tab') === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabPanes.forEach(pane => {
      if (pane.id === `tab-${targetTabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav Tab Click Handlers
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.getAttribute('data-tab');
      window.switchAppTab(targetTab);
    });
  });

  console.log('Book Nook & AI Matchmaker application initialized.');
});
