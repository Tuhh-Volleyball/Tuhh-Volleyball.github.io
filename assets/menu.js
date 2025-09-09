(function(){
  const btn      = document.querySelector('.menu-toggle');
  const drawer   = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');
  if(!btn || !drawer) return;

  function isOpen(){ return !drawer.hasAttribute('hidden'); }

  function openMenu(){
    drawer.removeAttribute('hidden');
    if(backdrop) backdrop.removeAttribute('hidden');
    btn.setAttribute('aria-expanded','true');
    btn.textContent = '✕';
  }

  function closeMenu(){
    drawer.setAttribute('hidden','');
    if(backdrop) backdrop.setAttribute('hidden','');
    btn.setAttribute('aria-expanded','false');
    btn.textContent = '☰';
  }

  function toggleMenu(){ isOpen() ? closeMenu() : openMenu(); }

  // Toggle per Button
  btn.addEventListener('click', (e)=>{
    e.stopPropagation(); // verhindert, dass der globale Klick-Handler gleich wieder schließt
    toggleMenu();
  });

  // Klicks IM Drawer sollen nicht schließen
  drawer.addEventListener('click', (e)=>{
    if(e.target.matches('a, button')) closeMenu(); // Links/Buttons schließen
    e.stopPropagation();
  });

  // Klick auf freie Fläche (irgendwo im Dokument) -> schließen
  document.addEventListener('click', (e)=>{
    if(!isOpen()) return;
    // wenn Klick weder auf Button noch im Drawer war -> schließen
    if(!e.target.closest('.menu-toggle') && !e.target.closest('#mobileMenu')){
      closeMenu();
    }
  });

  // Klick auf Backdrop -> schließen
  if(backdrop){
    backdrop.addEventListener('click', closeMenu);
  }

  // ESC -> schließen
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && isOpen()) closeMenu();
  });

  // Beim Wechsel auf Desktop (>=701px) sicherheitshalber schließen
  const mq = window.matchMedia('(min-width: 701px)');
  mq.addEventListener ? mq.addEventListener('change', e=>{ if(e.matches) closeMenu(); })
                      : mq.addListener && mq.addListener(e=>{ if(e.matches) closeMenu(); });
})();
