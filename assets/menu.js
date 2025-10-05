(function () {
  const btn = document.querySelector('.menu-toggle');
  const drawer = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');
  const nav = document.querySelector('.topnav');         // NEU
  if (!btn || !drawer) return;

  function isOpen() { return !drawer.hasAttribute('hidden'); }

  function openMenu() {
    drawer.removeAttribute('hidden');
    if (backdrop) backdrop.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = '✕';

    // NEU: Navbar während offenem Menü sichtbar & klickbar
    if (nav) {
      nav.classList.add('menu-open');
      nav.classList.remove('is-hidden');
    }
  }

  function closeMenu() {
    drawer.setAttribute('hidden', '');
    if (backdrop) backdrop.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰';

    // NEU: Menü-Status an Navbar entfernen
    if (nav) {
      nav.classList.remove('menu-open');
      // Scroll-Logik neu auslösen, damit .is-hidden ggf. wieder gesetzt wird
      window.dispatchEvent(new Event('scroll'));
    }
  }

  function toggleMenu() { isOpen() ? closeMenu() : openMenu(); }

  // Toggle per Button
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Klicks IM Drawer: Links/Buttons schließen
  drawer.addEventListener('click', (e) => {
    if (e.target.matches('a, button')) closeMenu();
    e.stopPropagation();
  });

  // Klick irgendwo im Dokument -> schließen (wenn offen)
  document.addEventListener('click', (e) => {
    if (!isOpen()) return;
    if (!e.target.closest('.menu-toggle') && !e.target.closest('#mobileMenu')) {
      closeMenu();
    }
  });

  // Backdrop klick -> schließen
  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // ESC -> schließen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  // Beim Wechsel auf Desktop (>=701px) schließen
  const mq = window.matchMedia('(min-width: 701px)');
  mq.addEventListener ? mq.addEventListener('change', e => { if (e.matches) closeMenu(); })
    : mq.addListener && mq.addListener(e => { if (e.matches) closeMenu(); });
})();
