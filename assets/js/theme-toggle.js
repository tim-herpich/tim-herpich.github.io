// assets/js/theme-toggle.js
(function () {
  var storageKey = 'theme';
  var prefer = localStorage.getItem(storageKey) || 'light';

  function apply(theme) {
    var t = (theme === 'dark') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.classList.toggle('theme-dark', t === 'dark');
    document.documentElement.classList.toggle('theme-light', t === 'light');

    var label = document.querySelector('[data-theme-label]');
    if (label) label.textContent = t.charAt(0).toUpperCase() + t.slice(1);
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
