// Zentrale Inhalte der Website. Alles mit "TODO" sind Platzhalter, bis die echten Firmendaten vorliegen.

/**
 * Gelbe "Fehlt: …"-Hinweise auf der Website anzeigen.
 * Vor dem offiziellen Start auf false setzen – dann verschwinden alle Hinweise und Platzhalter-Bereiche.
 */
export const SHOW_HINTS = true;

/** Ein Wert gilt als fehlend, wenn er leer ist oder mit "TODO" beginnt. */
export const isMissing = (v?: string | null) => !v || v.trim().startsWith('TODO');

export const company = {
  name: 'Waybuild',
  legalName: 'Waybuild UG (haftungsbeschränkt)',
  slogan: 'Wir machen Veränderungen einfach.',
  email: 'kontakt@waybuild.de', // Postfach muss noch eingerichtet werden (siehe Checkliste)
  street: 'Rathausallee 76',
  zip: '22846',
  city: 'Norderstedt',
  country: 'DE',
  managingDirector: 'Can Siebert',
  registerCourt: 'Amtsgericht Kiel', // Eintragungsnachricht AG Kiel vom 29.09.2026
  registerNumber: 'HRB 29883 KI', // Eintragungsnachricht AG Kiel vom 29.09.2026
  /** USt-IdNr.: noch nicht erteilt/nicht belegt (Stand 26.10.2026) – erst eintragen, wenn vom Bundeszentralamt für Steuern vorhanden. */
  vatId: 'TODO',
  /** Server-Hoster für die Datenschutzerklärung, Quelle: Impressum all-inkl.com, geprüft 26.10.2026 */
  hoster: 'ALL-INKL.COM – Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf',
  /** Links zu Google-Unternehmensprofil, LinkedIn, Instagram … – stärkt die Marke bei Google (JSON-LD sameAs). */
  sameAs: [] as string[],
};

/* Keine Telefonnummer und kein WhatsApp auf der Website (Entscheidung Can 26.10.2026): Kontakt nur per E-Mail und Kontaktformular. */
/** Erreichbarkeit (Footer-Kopf, Kontakt). */
export const HOURS = 'Montag bis Freitag, 9 bis 18 Uhr';

/* Referenzprojekte: seit 01.11.2026 in src/config/unterseiten.ts → REFERENZEN (nur mit Freigabe sichtbar). */

export const VAT_RATE = 0.19;

/* ─────────────────────────────────────────────────────────────────────────────
 * DAS ANGEBOT „Website as a Service“ in drei Paketen (Can, Talk qh87y3sj 4499–4510, 04.11.2026):
 * Fundament 79,99 € · Wegweiser 149,99 € · Wahrzeichen 299,99 € im Monat.
 * Preise sind NETTO zzgl. 19 % USt (B2B, Can Talk 4526), der Bruttopreis steht klein darunter.
 * Preise NIE fest in Texte schreiben – immer aus PAKETE.
 * GLEICHE DATEN wie waybuild_website/src/config/site.ts → PAKETE (zwei Repos, bei Änderungen beide anpassen!).
 * Laufzeit: 24 Monate Mindestlaufzeit, danach monatlich kündbar (Can, Talk 4511, 04.11.2026; AGB § 5).
 * Keine Eigentumsaussagen zu Website/Code/Domain (Can, Talk 4513 – Mietmodell offen).
 * (Frühere Varianten 79 € / 139 € netto und Start/Business/Premium: siehe Git-Historie.)
 * ───────────────────────────────────────────────────────────────────────────── */
export const WAAS = {
  name: 'Website as a Service',
  claim: 'Ein Ansprechpartner. Ein System. Ein fester Monatspreis.',
  einrichtung: 0,
  laufzeitMonate: 24,
  /** Laufzeit in einem Satz (AGB § 5). */
  laufzeit: '24 Monate Mindestlaufzeit, danach monatlich kündbar',
};

export type Paket = {
  id: 'fundament' | 'wegweiser' | 'wahrzeichen';
  name: string;
  /** Kurz-Nutzen unter dem Namen */
  kurz: string;
  /** Monatspreis NETTO zzgl. 19 % USt */
  preis: number;
  /** Für wen – ein Satz aus Kundensicht */
  fuer: string;
  /** Herausgehobene Extras als Chips (Signatur, Briefe, Logo) */
  extras: string[];
  features: string[];
  empfohlen?: boolean;
};

export const PAKETE: Paket[] = [
  {
    id: 'fundament',
    name: 'Fundament',
    kurz: 'Professionell online, ohne Startkosten',
    preis: 79.99,
    fuer: 'Für Selbstständige und kleine Betriebe, die gut gefunden werden und seriös auftreten wollen.',
    extras: ['E-Mail-Signatur nach DIN 5008'],
    features: [
      'Website ohne Seitenbegrenzung nach persönlichem Erstgespräch',
      'Mobilfreundlich: optimiert für Handy, Tablet und PC',
      'Texte schreiben wir mit Ihnen, KI-gestützt und von uns geprüft',
      'SEO und für KI-Suche optimiert, in leichter Sprache erklärt',
      '20 E-Mail-Postfächer',
      'Impressum und Datenschutzerklärung nach aktuellem Stand',
      'Hosting in Deutschland, DSGVO-orientiert eingerichtet',
      'Änderungen per Sprachnachricht oder Text, im fairen Rahmen',
    ],
  },
  {
    id: 'wegweiser',
    name: 'Wegweiser',
    kurz: 'Zeigt neuen Kunden den Weg zu Ihnen',
    preis: 149.99,
    fuer: 'Für Unternehmen, die über ihre Website regelmäßig neue Kunden gewinnen wollen.',
    extras: ['E-Mail-Signatur nach DIN 5008', 'Briefvorlage nach DIN 5008'],
    features: [
      'Alles aus „Fundament“',
      'Mobilfreundlich: optimiert für Handy, Tablet und PC',
      'Google-Unternehmensprofil erstellt und eingerichtet (einmalig)',
      'E-Mail-Postfächer strukturiert eingerichtet, mit Unterordnern und Regeln für den Alltag',
      'Lokale Seiten für Ihre Orte und Leistungen',
      'Monatsbericht: Besucher, Anfragen, Suchbegriffe',
      'Wir verbessern laufend den Weg vom Besucher zur Anfrage',
    ],
    empfohlen: true,
  },
  {
    id: 'wahrzeichen',
    name: 'Wahrzeichen',
    kurz: 'Website, Logo und Geschäftspapiere aus einer Hand',
    preis: 299.99,
    fuer: 'Für Gründer und Betriebe, die einen einheitlichen Auftritt wollen, von der Website bis zum Brief.',
    extras: ['Logo-Design', 'CI-Geschäftsbriefe nach DIN 5008', 'E-Mail-Signatur nach DIN 5008'],
    features: [
      'Alles aus „Wegweiser“',
      'Mobilfreundlich: optimiert für Handy, Tablet und PC',
      'Ständige Optimierung in Absprache mit Ihnen',
      'Logo-Design: 3 Entwürfe, 2 Korrekturrunden, Dateien für Web und Druck',
      'CI-Geschäftsbriefe nach DIN 5008: Briefbogen, Angebot, Rechnung',
      'Kurzer CI-Leitfaden: Farben, Schriften, Logo-Einsatz',
      'Quartalsgespräch zur Weiterentwicklung',
    ],
  },
];

/** In allen drei Paketen enthalten. */
export const IN_ALLEN = [
  'Keine Seitenbegrenzung',
  'Mobilfreundlich für Handy, Tablet und PC',
  '0 € Einrichtung',
  '20 E-Mail-Postfächer',
  'E-Mail-Signatur nach DIN 5008',
  'SEO und KI-Suche optimiert, leicht erklärt',
  'Impressum und Datenschutzerklärung nach aktuellem Stand',
  'Hosting in Deutschland, DSGVO-orientiert',
  'SSL, Domain, Updates und Backups',
  'Änderungen per Nachricht, im fairen Rahmen',
  '24 Monate Mindestlaufzeit',
];

export const VAT_FAKTOR = 1 + VAT_RATE;
/** Bruttopreis zu einem Nettopreis (kaufmännisch auf Cent gerundet). */
export const brutto = (netto: number) => Math.round(netto * VAT_FAKTOR * 100) / 100;

/** Gesamtkosten über die Mindestlaufzeit (0 € Einrichtung). */
export const gesamtLaufzeit = (p: Paket) => Math.round(p.preis * WAAS.laufzeitMonate * 100) / 100;

export const preisAb = () => Math.min(...PAKETE.map((p) => p.preis));

/** Euro-Format: ganze Beträge ohne Cent (490 €), sonst mit Cent (79,99 €). */
export const formatEuro = (n: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }).format(n);

/** Preis-Zeilen für alle Seiten (aus PAKETE). */
export const preisKurz = () => `ab ${formatEuro(preisAb())} / Monat`;
export const preisLang = () => `ab ${formatEuro(preisAb())} im Monat, zzgl. MwSt.`;
export const preiseAlle = () => PAKETE.map((p) => `${p.name}: ${formatEuro(p.preis)} / Monat`).join(' · ') + ' (netto, zzgl. MwSt.)';
/** Hinweis unter den Paketpreisen. */
export const PREIS_HINWEIS = 'Alle Preise netto zzgl. gesetzlicher MwSt.; das Angebot richtet sich an Unternehmen und Selbstständige.';

/** Das Angebot in einem Satz. */
export const OFFER = 'Website, Hosting, Domain, SSL, Wartung, Backups und Betreuung zu einem festen Monatspreis.';

export type IconName =
  | 'mail' | 'calendar' | 'rocket' | 'gauge' | 'key' | 'search' | 'chat' | 'pen' | 'server' | 'shield'
  | 'phone' | 'whatsapp' | 'chevron' | 'menu' | 'close' | 'arrow' | 'arrow-left' | 'check' | 'doc' | 'eye'
  | 'euro' | 'clock' | 'user' | 'layout' | 'cart' | 'target' | 'refresh' | 'tools' | 'pin' | 'globe' | 'chart'
  | 'code' | 'cloud' | 'cpu' | 'compass' | 'layers' | 'lock' | 'mic' | 'spark' | 'database' | 'home' | 'unlock'
  | 'users' | 'ticket' | 'book' | 'bot' | 'zap' | 'portal' | 'folder' | 'shirt' | 'video' | 'idcard' | 'smartphone'
  | 'idee' | 'frage' | 'stern' | 'warnung' | 'impuls' | 'gebaeude' | 'ablauf';

/** Was in „Website as a Service“ enthalten ist (Reihenfolge wie in der Vision). */
export const INKLUSIVE: { icon: IconName; title: string }[] = [
  { icon: 'layout', title: 'Professionelle Website' },
  { icon: 'server', title: 'Hosting' },
  { icon: 'globe', title: 'Domainverwaltung' },
  { icon: 'lock', title: 'SSL-Zertifikat' },
  { icon: 'tools', title: 'Wartung' },
  { icon: 'database', title: 'Backups' },
  { icon: 'user', title: 'Laufende Betreuung' },
  { icon: 'spark', title: 'KI-gestützte Erstellung' },
  { icon: 'mic', title: 'Sprachgesteuerte Änderungen' },
  { icon: 'mail', title: '20 E-Mail-Postfächer' },
  { icon: 'search', title: 'SEO und KI-Suche' },
  { icon: 'layers', title: 'Keine Seitenbegrenzung' },
];

/** Geschäftsmodell in Stichpunkten (Langfassung als Siegel: siehe Git-Historie der waybuild_website). */
export const MODELL = [
  'Keine Einrichtungskosten',
  'Keine Seitenbegrenzung',
  'Fester Monatspreis, netto zzgl. MwSt.',
  `${WAAS.laufzeitMonate} Monate Mindestlaufzeit`,
  'Keine versteckten Kosten',
];

/** Ablauf beim Website Service in vier Schritten (/angebot/). Die allgemeine Haltung für alle Produkte: hauptseite.ts → HALTUNG.
 *  27.10.2026: Fachbegriffe (Customer Journey, Lead-Generierung) und „Rekordzeit“ ersetzt (Handwerksmeister-Test, Talk 3378). */
export const steps: { icon: IconName; title: string; short: string; text: string }[] = [
  { icon: 'chat', title: 'Erstgespräch', short: 'Kostenlos, unverbindlich', text: 'Wir lernen Ihr Unternehmen kennen und hören zu, was sich verändern soll.' },
  { icon: 'compass', title: 'Verstehen & Planen', short: 'Persönlich, mit Ihnen', text: 'Wen möchten Sie erreichen? Was soll Ihre Website leisten? Wie wird aus einem Besucher eine Anfrage? Das klären wir gemeinsam.' },
  { icon: 'zap', title: 'Umsetzen', short: 'Sie prüfen und geben frei', text: 'Wir gestalten und bauen Ihre Website. Mit KI-gestützten Werkzeugen geht das schnell. Sie prüfen, wir feilen, bis alles passt.' },
  { icon: 'refresh', title: 'Laufend betreut', short: 'Immer aktuell', text: 'Ihre Website geht online. Änderungen schicken Sie per Sprachnachricht oder Text, wir setzen sie um und kümmern uns um Wartung, Updates und Backups.' },
];

/** Gemeinsam in der Beratung erarbeitet. */
export const BERATUNG_THEMEN = ['Zielgruppen', 'Positionierung', 'Customer Journey', 'Vertrauensaufbau', 'Lead-Generierung', 'Digitale Prozesse'];

/** Allgemeine Fragen – gelten für ganz Waybuild (/faq/, FAQPage-Markup nur dort). Stand 27.10.2026 (Dachmarke, Jamil Talk 3475). */
export const faqsAllgemein = [
  {
    q: 'Was macht Waybuild?',
    a: 'Wir helfen Unternehmen, digitale Veränderungen einfach umzusetzen, ob bei der Website, bei Prozessen oder bei den Werkzeugen im Arbeitsalltag. Sie haben einen festen Ansprechpartner und feste Zusagen. Unser Hauptprodukt ist der Website Service. Wenn nichts Fertiges passt, entwickeln wir auf Anfrage individuell, zum Beispiel eigene Software. Weitere Produkte folgen.',
  },
  {
    q: 'Gelten Ihre Zusagen für alle Produkte?',
    a: 'Ja. Unsere Zusagen, unsere Prinzipien und unser Prozess gelten für alle Produkte von Waybuild. Was ein einzelnes Produkt enthält und kostet, steht auf seiner Produktseite.',
  },
  {
    q: 'Wie schnell bekomme ich eine Antwort?',
    a: `Während der Servicezeiten bekommen Sie innerhalb einer Stunde eine erste Rückmeldung, spätestens am nächsten Werktag eine persönliche Antwort mit dem nächsten Schritt. Servicezeiten: ${HOURS}.`,
  },
  {
    q: 'Was kostet das Erstgespräch?',
    a: 'Nichts. Das Erstgespräch ist kostenlos und unverbindlich.',
  },
  {
    q: 'Welche Rolle spielt KI?',
    a: 'Ziele und Inhalte erarbeiten wir persönlich mit Ihnen. Bei der Umsetzung helfen uns KI-gestützte Werkzeuge, damit es schneller geht.',
  },
  {
    q: 'Bietet Waybuild neben Websites noch etwas an?',
    // 31.10.2026 (Talk 4024/4025): Handwerk und die Service-Bereiche nicht mehr nennen; Fakt „auf Anfrage“ (README, AGB § 2a) bleibt.
    // 01.11.2026 (Jamil, Talk 4208: „erstmal nur Website“): Nextcloud und IT-Betreuung nicht mehr nennen; individuelle Software wie auf der Startseite
    a: 'Unser Hauptprodukt ist der Website Service. Passt kein fertiges Produkt, entwickeln wir auf Anfrage individuelle Software. Weitere Produkte folgen.',
  },
  {
    q: 'Sind die Preise netto?',
    a: 'Ja. Alle Preise verstehen sich netto zzgl. der gesetzlichen Umsatzsteuer von 19 %. Zum Beispiel kostet Fundament 79,99 € netto im Monat, das sind 95,19 € inkl. MwSt. Unser Angebot richtet sich ausschließlich an Unternehmen und Selbstständige (B2B).',
  },
];

/** Fragen zum Website Service – stehen auf der Produktseite (/angebot/), nicht auf der Dachmarke. */
export const faqsWebsite = [
  {
    q: 'Was kostet eine Website bei Waybuild?',
    a: `Es gibt drei Pakete: ${PAKETE.map((p) => `${p.name} für ${formatEuro(p.preis)} netto im Monat (${formatEuro(brutto(p.preis))} inkl. MwSt.)`).join(', ')}. Alle Preise netto zzgl. gesetzlicher MwSt., ohne Einrichtungskosten und ohne Seitenbegrenzung.`,
  },
  {
    q: 'Was ist der Unterschied zwischen den drei Paketen?',
    a: `${PAKETE[0].name} bringt Sie professionell online, mit 20 E-Mail-Postfächern und einer E-Mail-Signatur nach DIN 5008. ${PAKETE[1].name} erstellt zusätzlich Ihr Google-Unternehmensprofil, richtet Ihre Postfächer mit Ordnern und Regeln ein und verbessert laufend den Weg zur Anfrage. ${PAKETE[2].name} enthält außerdem Logo-Design, Geschäftsbriefe nach DIN 5008 und eine ständige Optimierung in Absprache mit Ihnen.`,
  },
  {
    q: 'Was ist beim Website Service enthalten?',
    a: 'Persönliche Beratung, KI-gestützte Erstellung ohne Seitenbegrenzung, Hosting in Deutschland, Domainverwaltung, SSL, Wartung, Backups, 20 E-Mail-Postfächer, eine E-Mail-Signatur nach DIN 5008 und laufende Betreuung. Ihre Website ist für Google und KI-Suchen optimiert, und wir erklären in leichter Sprache, was wir dafür tun. Sie zahlen einen festen Monatspreis und keine Einrichtungskosten.',
  },
  {
    q: 'Wie lange läuft der Vertrag?',
    a: `Die Mindestlaufzeit beträgt ${WAAS.laufzeitMonate} Monate. Danach läuft das Abo monatlich weiter und ist mit einem Monat Frist zum Monatsende kündbar. Die Kündigung genügt in Textform, zum Beispiel per E-Mail.`,
  },
  {
    q: 'Was passiert nach 24 Monaten?',
    a: 'Nichts Überraschendes: Ihre Website läuft weiter wie bisher, zum gleichen Monatspreis und mit derselben Betreuung. Ab dann können Sie jeden Monat kündigen, mit einem Monat Frist zum Monatsende.',
  },
  {
    q: 'Gibt es Einrichtungskosten?',
    a: 'Nein. In allen drei Paketen zahlen Sie keine Einrichtungsgebühr, nur den festen Monatspreis. Viele Anbieter verlangen vorab mehrere hundert Euro, bei uns fällt das weg.',
  },
  {
    q: 'Wie viele Seiten bekommt meine Website?',
    a: 'So viele, wie Ihr Unternehmen braucht. Es gibt in keinem Paket eine Seitenbegrenzung.',
  },
  {
    q: 'Kann ich später in ein größeres Paket wechseln?',
    a: 'Ja, ein Wechsel in ein größeres Paket ist möglich. Sagen Sie uns einfach Bescheid, die Einzelheiten besprechen wir mit Ihnen.',
  },
  {
    q: 'Wie schnell ist meine Website online?',
    a: 'Spätestens 14 Tage, nachdem Ihre Inhalte (Texte, Bilder, Logo) vorliegen. Auf Wunsch erarbeiten wir die Inhalte gemeinsam mit Ihnen.',
  },
  {
    q: 'Kann ich meine bestehende Domain mitnehmen?',
    a: 'Ja. Wir übernehmen die Verwaltung Ihrer bestehenden Domain ohne Ausfall.',
  },
];

/** Alle Fragen (z. B. für llms.txt) */
export const faqs = [...faqsAllgemein, ...faqsWebsite];
