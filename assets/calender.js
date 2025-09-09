  (function () {
    const frame = document.getElementById('gcalFrame');
    const btn = document.getElementById('calendarToggle');
    if (!frame || !btn) return;

    function getMode() {
      const url = new URL(frame.src);
      return url.searchParams.get('mode') || 'AGENDA';
    }
    function setMode(mode) {
      const url = new URL(frame.src);
      url.searchParams.set('mode', mode);
      frame.src = url.toString();
      btn.textContent = (mode === 'MONTH') ? 'Agenda' : 'Monat';
    }

    // Klick = Toggle zwischen MONTH und AGENDA
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cur = getMode();
      setMode(cur === 'MONTH' ? 'AGENDA' : 'MONTH');
    });

    // Initial Beschriftung richtig setzen
    setMode(getMode());
  })();
