(function () {
    const MAIL_USER = 'volleyball';
    const MAIL_DOMAIN = 'tuhh.de';

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
      de: {
        subject: 'Deine Anfrage zur Volleyball AG',
        body: [
          'Hallo liebes Orga-Team,',
          'ich interessiere mich für die Volleyball AG und würde gerne weitere Infos zu den Trainingszeiten erhalten.',
          '',
          'kurz zu mir:',
          '[Stell dich kurz vor :)',
          '- Ich habe bereits Volleyball-Erfahrung: JA / NEIN',
          '- Ich habe schon mal gespielt z.B. bei _____________',
          '- Ich kenne ein paar Regeln: JA / NEIN',
          '- Ich studiere an der TUHH im Studiengang: _____________',
          ']',
          '',
          'Viele Grüße,',
          '[Dein Name]'
        ].join('\n')
      },
      en: {
        subject: 'Your inquiry about the Volleyball Club',
        body: [
          'Hello Volleyball team,',
          '',
          'I am interested in joining the Volleyball Club and would like to receive more information about the training schedule.',
          '',
          'A few details about me:',
          '- I have played volleyball before: YES / NO',
          '- I played previously at _____________',
          '- I know some rules: YES / NO',
          '- I study at TUHH in the program: _____________',
          '',
          'Best regards,',
          '[Your Name]'
        ].join('\n')
      }
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
        const info = texts[lang]; // { subject, body }
        if (!info) return;

        // Adresse zusammenbauen, ohne "meinSecretMail@Domain.de" irgendwo als Klartext zu haben
        const user = MAIL_USER;
        const domain = MAIL_DOMAIN;

        // "@" aus Charcode erzeugen, damit nicht mal das direkt im Code steht
        // const atChar = String.fromCharCode(64); // "@"
        // const addressHref = user + atChar + domain;
        const addressHref = user + '(at)' + domain;

        // Sichtbarer Text mit (at) als einfacher Anti-Spam-Trick
        const addressText = user + '(at)' + domain;

        const href =
          'mailto:' + addressHref +
          '?subject=' + encodeURIComponent(info.subject) +
          '&body=' + encodeURIComponent(info.body);

        el.setAttribute('href', href);
        el.textContent = addressText;
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