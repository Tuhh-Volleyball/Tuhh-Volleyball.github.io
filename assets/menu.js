(function(){
  const btn = document.querySelector('.menu-toggle');
  const drawer = document.getElementById('mobileMenu');
  if(!btn || !drawer) return;

  function setOpen(open){
    if(open){
      drawer.removeAttribute('hidden');
      btn.setAttribute('aria-expanded','true');
      btn.textContent = '✕';
    }else{
      drawer.setAttribute('hidden','');
      btn.setAttribute('aria-expanded','false');
      btn.textContent = '☰';
    }
  }

  btn.addEventListener('click', ()=>{
    const open = !drawer.hasAttribute('hidden');
    setOpen(!open);
  });

  drawer.addEventListener('click', (e)=>{
    if(e.target.matches('a')) setOpen(false);
  });
})();
