// --- Utilities ---
const $ = (sel, parent = document) => parent.querySelector(sel);
const bubble = $('#bubble');
const bubbleText = $('#bubble-text');
const hitbox = $('#mascot-hitbox');
const btnJoke = $('#btn-joke');
const btnHide = $('#btn-hide');
const pL = $('#pupil-left');
const pR = $('#pupil-right');
const container = $('#mascot-container');
const ball = document.getElementById('ball');

const JOKES = [
  "Kein Aus! Ich bin immer im Spiel — außer du klickst auf Schließen.",
  "Ich baggere keine Daten — nur Bälle.",
  "Unsere Taktik: erst pritschen, dann pitchen.",
  "Schmetterling? Nein, Schmetter-BALL!",
  "Timeout? Nur wenn der Kaffee alle ist.",
  "Service-Wüste? Nicht hier: Ich serviere Sprüche am laufenden Band.",
  "Block? Gern — gegen Bugs.",
  "Pro Tipp: Drück ‘V’ für einen Aufschlag!",
];

let lastJoke = -1;
function nextJoke() {
  let i; do { i = Math.floor(Math.random() * JOKES.length) } while (i === lastJoke);
  lastJoke = i; return JOKES[i];
}

function showBubble(text) {
  bubbleText.textContent = text || nextJoke();
  bubble.classList.add('visible');
  clearTimeout(showBubble._t);
  showBubble._t = setTimeout(() => bubble.classList.remove('visible'), 4800);
}

// Klick-Interaktionen
hitbox.addEventListener('click', () => {
  showBubble();
  triggerServe();
});
btnJoke.addEventListener('click', e => { e.stopPropagation(); showBubble(); triggerServe(); });
btnHide.addEventListener('click', e => { e.stopPropagation(); bubble.classList.remove('visible'); });

// Tastatur: H = Hilfe, J = Witz, B = Blase toggeln
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'h') { showBubble('Shortcuts: H = Hilfe, J = Witz, B = Blase, V = Volley-Aufschlag'); }
  if (k === 'j') { showBubble(); triggerServe(); }
  if (k === 'b') { bubble.classList.toggle('visible'); }
  if (k === 'v') { triggerServe(); showBubble('Aufschlag! 🏐'); }
});

// Pupillen folgen Maus (sanft innerhalb des Augenrahmens)
document.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / rect.width; // normiert ca. -0.5 .. 0.5
  const dy = (e.clientY - cy) / rect.height;
  const max = 4; // maximale Pupillen‑Verschiebung in px
  const tx = Math.max(-1, Math.min(1, dx)) * max;
  const ty = Math.max(-1, Math.min(1, dy)) * max;
  pL.style.transform = `translate(${tx}px, ${ty}px)`;
  pR.style.transform = `translate(${tx}px, ${ty}px)`;
});

// Extern steuerbar: window.Mascot.say('Text')
window.Mascot = {
  say(text) { showBubble(text); },
  hide() { bubble.classList.remove('visible'); },
  setColors(a, b) {
    // Nur lokal auf das Maskottchen anwenden:
    container.style.setProperty('--accent', a);
    container.style.setProperty('--accent-2', b || a);
  }
};


// Serve-Animation
function triggerServe() {
  if (!ball) return;
  ball.classList.remove('serve');
  void ball.offsetWidth; // reflow
  ball.classList.add('serve');
  setTimeout(() => ball.classList.remove('serve'), 1100);
}

// Erste Begrüßung verzögert anzeigen
setTimeout(() => showBubble('Willkommen! Baggern, Pritschen, Schmettern — klick für einen Spruch 🏐'), 800);