(function () {
  const nav = document.querySelector(".topnav");
  if (!nav) return;

  function updateNav() {
    const isMenuOpen = nav.classList.contains("menu-open"); // kommt aus menu.js
    if (isMenuOpen) {
      nav.style.opacity = "1";
      nav.style.pointerEvents = "auto";
      return;
    }
    if (window.scrollY < 10) {
      nav.style.opacity = "1";
      nav.style.pointerEvents = "auto";
    } else {
      nav.style.opacity = "0";
      nav.style.pointerEvents = "none";
    }
  }

  document.addEventListener("scroll", updateNav, { passive: true });
  window.addEventListener("resize", updateNav);
  document.addEventListener("DOMContentLoaded", updateNav);
  document.addEventListener("menuToggle", updateNav);
})();
