(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const KEY = 'tuhh-volleyball-theme';
  const valid = new Set(['light', 'dark']);

  function normalize(mode){ return valid.has(mode) ? mode : 'light'; }
  function apply(mode){
    mode = normalize(mode);
    root.setAttribute('data-theme', mode);
    // Icon only → kein Springen
    btn.textContent = (mode === 'light') ? '☀️' : '🌙';
    try{ localStorage.setItem(KEY, mode); }catch{}
  }

  let start = 'light';
  try{ start = normalize(localStorage.getItem(KEY) || 'light'); }catch{}
  apply(start);

  btn.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') || 'light';
    apply(cur === 'light' ? 'dark' : 'light');
  });
})();
