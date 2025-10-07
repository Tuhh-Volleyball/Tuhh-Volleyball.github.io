(function () {
  // ==== KONFIGURATION: Einladungsfenster (Start/Ende im Format YYYY-MM-DD) ====
  // Trage hier pro Semester EINEN Tag als Start/Ende ein – oder auch mehrere Fenster.
  const INVITE_WINDOWS = [
    // Beispiel: AG-Vorstellung am 2025-10-15
    { start: '2025-09-09', end: '2025-09-10' },
    // nächstes Semester einfach eine neue Zeile ergänzen
    // { start: '2026-04-14', end: '2026-04-14' },
  ];
  const TIMEZONE = 'Europe/Berlin';

  // ==== HILFSFUNKTIONEN ====
  const $ = sel => document.querySelector(sel);

  function nowInTZ(tz) {
    // "Lokale" Zeit in der gewünschten TZ erzeugen
    return new Date(new Date().toLocaleString('en-US', { timeZone: tz }));
  }
  function startOfDayTZ(isoDate, tz) {
    // 00:00 in TZ
    const [y, m, d] = isoDate.split('-').map(Number);
    const s = new Date(Date.UTC(y, m - 1, d, 0, 0, 0));
    // Korrigierte lokale Zeit als Datum-Objekt in TZ
    const sLocal = new Date(s.toLocaleString('en-US', { timeZone: tz }));
    return sLocal;
  }
  function endOfDayTZ(isoDate, tz) {
    // 23:59:59.999 in TZ
    const [y, m, d] = isoDate.split('-').map(Number);
    const e = new Date(Date.UTC(y, m - 1, d, 23, 59, 59, 999));
    const eLocal = new Date(e.toLocaleString('en-US', { timeZone: tz }));
    return eLocal;
  }
  function inAnyWindow(dt, windows, tz) {
    return windows.some(w => dt >= startOfDayTZ(w.start, tz) && dt <= endOfDayTZ(w.end, tz));
  }
  function getQueryFlag(name) {
    const p = new URLSearchParams(location.search);
    if (!p.has(name)) return null;
    const v = p.get(name);
    return (v === '' || v === '1' || v.toLowerCase() === 'true') ? true
      : (v === '0' || v.toLowerCase() === 'false') ? false
        : true; // wenn nur ?invite ohne Wert
  }

  // ==== LOGIK ====
  const inviteBlock = $('#inviteBlock');
  const inviteFallback = $('#inviteFallback');
  const inviteBadge = $('#inviteBadge');
  if (!inviteBlock || !inviteFallback) return;

  const override = getQueryFlag('invite'); // ?invite=1 / ?invite=0
  const todayTZ = nowInTZ(TIMEZONE);
  const activeByWindow = inAnyWindow(todayTZ, INVITE_WINDOWS, TIMEZONE);
  const active = (override === null) ? activeByWindow : override;

  // Sichtbarkeit umschalten
  if (active) {
    inviteBlock.classList.remove('hidden');
    inviteFallback.classList.add('hidden');
    if (inviteBadge) inviteBadge.classList.remove('hidden');
  } else {
    inviteBlock.classList.add('hidden');
    inviteFallback.classList.remove('hidden');
    if (inviteBadge) inviteBadge.classList.add('hidden');
  }
})();