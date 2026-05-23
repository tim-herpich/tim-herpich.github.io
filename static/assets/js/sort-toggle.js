// assets/js/sort-toggle.js
(function () {
  function setDisplay(id, visible) {
    var el = document.getElementById(id);
    if (!el) return;
    el.style.display = visible ? '' : 'none'; // '' lets CSS control layout normally
  }

  function activate(container, mode) {
    var a = container.dataset.a;
    var b = container.dataset.b;

    // Toggle sections
    setDisplay(a, mode === 'a');
    setDisplay(b, mode === 'b');

    // Update buttons
    container.querySelectorAll('.sort-btn').forEach(function (btn) {
      var isActive = btn.dataset.mode === mode;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Remember selection per page
    try {
      var key = 'sort-mode:' + (location.pathname || 'home');
      localStorage.setItem(key, mode);
    } catch (e) {}
  }

  function initContainer(container) {
    // initial mode: restore from storage or default to 'a'
    var saved = null;
    try {
      var key = 'sort-mode:' + (location.pathname || 'home');
      saved = localStorage.getItem(key);
    } catch (e) {}
    var startMode = (saved === 'a' || saved === 'b') ? saved : 'a';
    activate(container, startMode);

    // wire up clicks
    container.querySelectorAll('.sort-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activate(container, btn.dataset.mode);
      });
      // a11y
      btn.setAttribute('role', 'button');
      btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sort-toggle').forEach(initContainer);
  });
})();
