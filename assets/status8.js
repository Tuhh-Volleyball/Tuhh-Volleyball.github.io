
// Status wählen: "free", "almost", "waitlist", "full" oder "none"
// in index.html auch anpassen! Dort einmal die Zahl erhöhen bei <script src="assets/status.js?v=4" defer></script>
// (damit der Browser die neue Datei lädt und nicht die gecachte)
const status = "full"; // "free", "almost", "waitlist", "full", "none"

const i18nStatus = {
  de: {
    free: {
      headline: "🏐 Noch Plätze frei!",
      text: "Melde dich einfach per Mail, wenn du mitspielen möchtest.",
      badge: "Noch Plätze frei",
    },
    almost: {
      headline: "⚡ Fast voll!",
      text: "Wir haben nur noch wenige freie Plätze. Wenn du mitspielen möchtest, melde dich am besten <strong> per Mail</strong>!",
      badge: "Fast voll",
    },
    waitlist: {
      headline: "🕓 Warteliste aktiv!",
      text: 'Aktuell sind alle Plätze belegt, aber du kannst dich gerne auf die <strong>Warteliste</strong> setzen lassen. \<br> \
            Schreib uns einfach eine kurze E-Mail mit ein paar Infos über dich. \ <br> \
            <span class="secondary">In der Zwischenzeit kannst du dich beim \
            <a href="https://www.hochschulsport.uni-hamburg.de/sportcampus/vona-z.html" target="_blank" rel="noopener noreferrer">Hochschulsport der Uni Hamburg</a> umschauen.</span>',
      badge: "Warteliste",
    },
    full: {
      headline: "⚠️ Aktuell keine Aufnahme",
      text: 'Momentan können wir leider keine neuen Spieler*innen aufnehmen. \
         <span class="secondary">Voraussichtlich wieder Plätze ab dem <u>Sommersemester 2026</u>.</span> <br> \
         <span class="secondary">In der Zwischenzeit kannst du dich beim \
         <a href="https://www.hochschulsport.uni-hamburg.de/sportcampus/vona-z.html" target="_blank" rel="noopener noreferrer">Hochschulsport der Uni Hamburg</a> umschauen.</span>',
      badge: "Keine Aufnahme",
    },

    none: { headline: "", text: "", badge: "" },
  },
  en: {
    free: {
      headline: "🏐 Spots available!",
      text: "Drop us an email if you’d like to join.",
      badge: "Spots available",
    },
    almost: {
      headline: "⚡ Almost full!",
      text: "Only a few spots left — send us an email if you’d like to join!",
      badge: "Almost full",
    },
    waitlist: {
      headline: "🕓 Waiting list open!",
      text: 'All spots are currently taken, but you can join our <strong>waiting list</strong>. \ <br> \
            Just send us a short email with some info about you. \ <br> \
            <span class="secondary">Meanwhile, you can check out \
            <a href="https://www.hochschulsport.uni-hamburg.de/sportcampus/vona-z.html" target="_blank" rel="noopener noreferrer">University of Hamburg’s Campus Sports</a>.</span>',
      badge: "Waiting list",
    },
    full: {
      headline: "⚠️ Currently full",
      text: 'Unfortunately, we can’t accept new players right now. \
         <span class="secondary">We expect new spots from <u>Summer term 2026</u>.</span> <br> \
         <span class="secondary">Meanwhile, you can check out \
         <a href="https://www.hochschulsport.uni-hamburg.de/sportcampus/vona-z.html" target="_blank" rel="noopener noreferrer">University of Hamburg’s Campus Sports</a>.</span>',
      badge: "Full",
    },

    none: { headline: "", text: "", badge: "" },
  },
};

function getCurrentLang() {
  const lang = document.documentElement.getAttribute("lang") || "de";
  return lang.toLowerCase().startsWith("en") ? "en" : "de";
}

function applyStatusTexts() {
  const lang = getCurrentLang();
  const dict = i18nStatus[lang][status];

  const block = document.getElementById("statusBlock");
  const headline = document.getElementById("statusHeadline");
  const text = document.getElementById("statusText");
  const badge = document.getElementById("inviteBadge");

  block.classList.remove("free", "almost", "waitlist", "full", "none");
  block.classList.add(status);

  if (status === "none") {
    block.style.display = "none";
    if (badge) badge.classList.add("hidden");
    return;
  } else {
    block.style.display = "block";
  }

  headline.textContent = dict.headline;
  text.innerHTML = dict.text;

  if (badge) {
    badge.classList.remove("hidden");
    badge.textContent = dict.badge;
    badge.classList.remove("ok");
    if (status === "free") badge.classList.add("ok");
  }
}

document.addEventListener("DOMContentLoaded", applyStatusTexts);
window.updateStatusTexts = applyStatusTexts;
