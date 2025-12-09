(function () {
  // --- 1) Wörterbuch: Schlüssel = Element-ID, Wert = { de, en } ---
  const DICT = {
    // Head/Nav
    navTraining: { de: "Training", en: "Training" },
    navTermine: { de: "Termine", en: "Schedule" },
    navTeam: { de: "Team", en: "Team" },
    navVision: { de: "Vision", en: "Vision" },
    navKontakt: { de: "Kontakt", en: "Contact" },
    navImpressum: { de: "Impressum", en: "Imprint" },

    // Header
    titleText: { de: 'Volleyball', en: 'Volleyball' },
    headerIntro: {
      de: 'Willkommen bei der <strong>Volleyball AG</strong>! <br>Wir sind eine Gruppe von Studierenden und Freunden, die gemeinsam Volleyball spielen - locker, motiviert und mit viel Spaß.',
      en: 'Welcome to the <strong>Volleyball AG</strong>! <br>We are students and friends who play volleyball together — relaxed, motivated, and with lots of fun.'
    },

    // Training
    trainingTitleText: { de: '📅 Training & Infos', en: '📅 Training & Info' },
    trainingNote: {
      de: '<strong>Hinweis:</strong> Im <u>Wintersemester</u> haben wir nur eine Gruppe. Mitmachen können alle, die schon einmal Volleyball gespielt haben. Komplette Anfänger ohne Erfahrung können gerne ab dem <u>Sommersemester</u> einsteigen. Im Wintersemester spielen wir in der Halle in der Nähe der Uni, im Sommersemester draußen Beachvolleyball.',
      en: '<strong>Note:</strong> In the <u>winter term</u> we run one group only. Anyone who has played volleyball before can join. Complete beginners are welcome from the <u>summer term</u>. In winter we play indoors near the university, in summer we play beach volleyball outside.'
    },
    waHint: {
      de: 'Alle Trainingszeiten und Neuigkeiten teilen wir in unserer WhatsApp-Gruppe.',
      en: 'We share all training times and updates in our WhatsApp group.'
    },
    inviteLead: {
      de: '👉 <strong>Wichtig:</strong> Der folgende Link führt zunächst in eine <em>Interessierten-Gruppe</em>. Von dort bekommt ihr die Infos und Zugang zur eigentlichen Trainingsgruppe.',
      en: '👉 <strong>Important:</strong> The link below first leads to an <em>interest group</em>. From there you\'ll receive info and access to the actual training group.'
    },
    inviteCta: {
      de: '<a role="button" href="https://bit.ly/volleyballtuhh" target="_blank" rel="noopener">Hier der Einladungslink für Interessierte</a>',
      en: '<a role="button" href="https://bit.ly/volleyballtuhh" target="_blank" rel="noopener">Invitation link for interested people</a>'
    },
    qrCaption: { de: 'Oder QR-Code scannen 📱', en: 'Or scan the QR code 📱' },
    inviteFallback: {
      de: 'Weitere Informationen erhälst du per E-Mail (siehe unten).',
      en: 'For more information, please email us (see below).'
    },

    // Termine
    datesTitle: { de: '🗓️ Termine', en: '🗓️ Dates' },
    datesIntro: {
      de: 'Hier siehst du, wann wir spielen. Du kannst unten zwischen Monatsansicht und kompakter Agenda wechseln.',
      en: 'Here you can see when we play. You can switch between month view and compact agenda below.'
    },
    calendarToggle: { de: 'Monat', en: 'Month' }, // dein JS kann die Beschriftung ohnehin ändern
    calendarLinksLabel: {
      de: '👉 Zum eigenen Kalender hinzufügen:',
      en: '👉 Add to your personal calendar:'
    },
    calendarGoogle: { de: 'In Google Kalender abonnieren', en: 'Subscribe in Google Calendar' },
    calendarApple: { de: 'In Apple Kalender abonnieren', en: 'Subscribe in Apple Calendar' },
    calendarIcs: { de: '.ics herunterladen', en: 'Download .ics file' },

    // Team
    teamTitle: { de: '🙌 Wer wir sind', en: '🙌 Who we are' },
    teamText: {
      de: 'Wir sind rund 20-25 Leute zwischen 20 und 25 Jahren. Ob Anfänger oder erfahren - jede*r ist willkommen!',
      en: 'We are around 20–25 people aged 20–25. Whether beginner or experienced — everyone is welcome!'
    },

    // Vision
    visionTitle: { de: '✨ Unsere Vision', en: '✨ Our vision' },
    visionText: {
      de: 'Dies ist erst der Anfang - eines Tages soll daraus eine <strong>richtige Vereinswebseite</strong> entstehen. Bis dahin halten wir euch hier und in der WhatsApp-Gruppe auf dem Laufenden.',
      en: 'This is just the beginning — one day this will become a <strong>full club website</strong>. Until then, we\'ll keep you updated here and in the WhatsApp group.'
    },

    // Kontakt
    contactTitle: { de: '✉️ Kontakt', en: '✉️ Contact' },
    contactTeam: {
      de: 'Viele Grüße,<br>Eure Orga-Truppe 🙂<br><strong>Alexandra, Clemens, Sascha</strong>',
      en: 'Best regards,<br>Your organizing team 🙂<br><strong>Alexandra, Clemens, Sascha</strong>'
    },
    contactMail: {
      de: 'mailto:volleyball(at)tuhh.de?subject=Deine%20Anfrage%20zur%20Volleyball%20AG&body=Hallo%20liebes%20Orga-Team%0Aich%20interessiere%20mich%20f%C3%BCr%20die%20Volleyball%20AG%20und%20w%C3%BCrde%20gerne%20weitere%20Infos%20zu%20den%20Trainingszeiten%20erhalten.%0D%0A%0D%0Akurz%20zu%20mir%3A%0D%0A%5BStell%20dich%20kurz%20vor%20%3A)%0D%0A-%20Ich%20habe%20bereits%20Volleyball-Erfahrung%3A%20JA%20/%20NEIN%0D%0A-%20Ich%20habe%20schon%20mal%20gespielt%20z.B.%20bei%20______________%0D%0A-%20Ich%20kenne%20ein%20paar%20Regeln%3A%20JA%20/%20NEIN%0D%0A-%20Ich%20studiere%20an%20der%20TUHH%20im%20Studiengang%3A%20______________%0D%0A%5D%0D%0A%0D%0AViele%20Gr%C3%BC%C3%9Fe%2C%0D%0A%5BDein%20Name%5D',
      en: 'mailto:volleyball(at)tuhh.de?subject=Your%20inquiry%20about%20the%20Volleyball%20Club&body=Hello%20Volleyball%20team,%0A%0AI%20am%20interested%20in%20joining%20the%20Volleyball%20Club%20and%20would%20like%20to%20receive%20more%20information%20about%20the%20training%20schedule.%0A%0AA%20few%20details%20about%20me:%0A-%20I%20have%20played%20volleyball%20before:%20YES%20/%20NO%0A-%20I%20played%20previously%20at%20______________%0A-%20I%20know%20some%20rules:%20YES%20/%20NO%0A-%20I%20study%20at%20TUHH%20in%20the%20program:%20______________%0A%0ABest%20regards,%0A[Your%20Name]'
    },


    // Footer
    lastUpdate: { de: 'Letztes Update: Sept 2025', en: 'Last update: Sept 2025' }
  };

  // --- 2) Sprache ermitteln & speichern ---
  const saved = localStorage.getItem('lang');
  const browserIsGerman = (navigator.language || '').toLowerCase().startsWith('de');
  let lang = saved || (browserIsGerman ? 'de' : 'en');

  function applyLang(newLang) {
    lang = newLang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang.toUpperCase();

    Object.entries(DICT).forEach(([id, texts]) => {
      const el = document.getElementById(id);
      if (!el || !texts) return;
      const value = texts[lang] || '';

      // Sonderfall: Mail-Link
      if (id === 'contactMail') {
        el.setAttribute('href', value);
        return;
      }
      if (el.tagName === 'A') {
        el.textContent = value;
        return;
      }


      // Alle anderen Standard-Texte
      el.innerHTML = value;

      // Status ob es voll oder frei ist.
      if (window.updateStatusTexts) window.updateStatusTexts();
    });
  }


  // --- 3) Button-Handler ---
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        applyLang(lang === 'de' ? 'en' : 'de');
      });
    }
    applyLang(lang);
  });
})();