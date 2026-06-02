// assets/js/theme-toggle.js
(function () {
  var storageKey = 'theme';
  var prefer = localStorage.getItem(storageKey) || 'light';

  function setIcon(theme) {
    var el = document.querySelector('[data-theme-icon]');
    if (!el) return;
    el.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  function apply(theme) {
    var t = (theme === 'dark') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.classList.toggle('theme-dark',  t === 'dark');
    document.documentElement.classList.toggle('theme-light', t === 'light');

    // button state + icon
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-pressed', String(t === 'dark'));
      btn.setAttribute('title', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    setIcon(t);
  }

  // Apply on load
  apply(prefer);

  // Public toggle
  window.toggleTheme = function () {
    var cur = localStorage.getItem(storageKey) || 'light';
    var next = (cur === 'light') ? 'dark' : 'light';
    localStorage.setItem(storageKey, next);
    apply(next);
  };
})();
