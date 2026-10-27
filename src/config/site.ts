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
  street: 'Kuno-Liesenberg-Kehre 32a',
  zip: '22844',
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
export const HOURS = 'Montag – Freitag, 9:00 – 18:00 Uhr';

/** Referenzprojekte – leer lassen, bis echte Kundenprojekte (mit Freigabe) vorliegen. */
// Beispiel: { name: 'Tischlerei Muster', branche: 'Handwerk', url: 'https://…', text: 'Neue Website, 3× mehr Anfragen', bild: 'referenzen/projekt-1' }
export const references: { name: string; branche: string; url?: string; text: string; bild?: string }[] = [];

export const VAT_RATE = 0.19;

/* ─────────────────────────────────────────────────────────────────────────────
 * DAS ANGEBOT „Website as a Service“ in zwei Varianten (Jamil, 19.10.2026):
 * 79 € / Monat und 139 € / Monat für die selbstoptimierende, sich anpassende Website.
 * Alle Preise netto zzgl. MwSt. (B2B). Preise NIE fest in Texte schreiben – immer aus PAKETE.
 * (Frühere Tarife Start/Business/Premium + 490 € Einrichtung: siehe Git-Historie.)
 * ───────────────────────────────────────────────────────────────────────────── */
export const WAAS = {
  name: 'Website as a Service',
  claim: 'Ein Ansprechpartner. Ein System. Ein fester Monatspreis.',
  einrichtung: 0,
  laufzeitMonate: 24,
};

export type Paket = {
  id: 'website' | 'intelligent';
  name: string;
  /** Kurz-Nutzen unter dem Namen */
  kurz: string;
  /** Monatspreis netto */
  preis: number;
  /** Für wen – ein Satz aus Kundensicht */
  fuer: string;
  features: string[];
  empfohlen?: boolean;
};

export const PAKETE: Paket[] = [
  {
    id: 'website',
    name: 'Website',
    kurz: 'Professionell und komplett betreut',
    preis: 79,
    fuer: 'Für Unternehmen, die einen professionellen Auftritt wollen – ohne sich um Technik zu kümmern.',
    features: [
      'Professionelle Website nach persönlicher Beratung',
      'Hosting, Domainverwaltung und SSL',
      'Wartung, Updates und Backups',
      'Laufende Betreuung und Änderungen per Sprache oder Text',
    ],
  },
  {
    id: 'intelligent',
    name: 'Intelligente Website',
    kurz: 'Optimiert sich selbst und passt sich an',
    preis: 139,
    fuer: 'Für Unternehmen, die ihre Website aktiv für Vertrieb und Anfragen nutzen wollen.',
    features: [
      'Alles aus „Website“',
      'Wertet Besucher, Suchbegriffe und Anfragen laufend aus',
      'Passt Inhalte und Aufbau selbstständig an',
      'Hebt erfolgreiche Leistungen und Referenzen hervor',
      'Optimiert den Weg vom Besucher zur Anfrage',
    ],
    empfohlen: true,
  },
];

export const preisAb = () => Math.min(...PAKETE.map((p) => p.preis));

export const formatEuro = (n: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

/** Preis-Zeilen für alle Seiten (aus PAKETE). */
export const preisKurz = () => `ab ${formatEuro(preisAb())} / Monat`;
export const preisLang = () => `ab ${formatEuro(preisAb())} im Monat, zzgl. MwSt.`;
export const preiseBeide = () => PAKETE.map((p) => `${p.name}: ${formatEuro(p.preis)} / Monat`).join(' · ') + ' (netto, zzgl. MwSt.)';

/** Das Angebot in einem Satz. */
export const OFFER = 'Website, Hosting, Domain, SSL, Wartung, Backups und Betreuung – alles in einem festen Monatspreis.';

export type IconName =
  | 'mail' | 'calendar' | 'rocket' | 'gauge' | 'key' | 'search' | 'chat' | 'pen' | 'server' | 'shield'
  | 'phone' | 'whatsapp' | 'chevron' | 'menu' | 'close' | 'arrow' | 'arrow-left' | 'check' | 'doc' | 'eye'
  | 'euro' | 'clock' | 'user' | 'layout' | 'cart' | 'target' | 'refresh' | 'tools' | 'pin' | 'globe' | 'chart'
  | 'code' | 'cloud' | 'cpu' | 'compass' | 'layers' | 'lock' | 'mic' | 'spark' | 'database' | 'home' | 'unlock'
  | 'users' | 'ticket' | 'book' | 'bot' | 'zap' | 'portal' | 'folder' | 'shirt' | 'video' | 'idcard';

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
];

/** Geschäftsmodell in Stichpunkten (Langfassung als Siegel: siehe Git-Historie der waybuild_website). */
export const MODELL = [
  'Keine Einrichtungskosten',
  'Fester Monatspreis, netto zzgl. MwSt.',
  `${WAAS.laufzeitMonate} Monate Laufzeit`,
  'Website, Code und Domain gehören Ihnen',
  'Keine versteckten Kosten',
  'Kein künstlicher Lock-in',
];

/** Ablauf aus Kundensicht in vier Schritten – EINE Quelle für Startseite („Der Weg“) und /angebot/.
 *  wort/kurz = Startseite (Jamils Kette Idee → Verstehen → Umsetzen → Verbessern, Talk 3373), title/short/text = /angebot/.
 *  27.10.2026: Fachbegriffe (Customer Journey, Lead-Generierung) und „Rekordzeit“ ersetzt (Handwerksmeister-Test, Talk 3378). */
export const steps: { icon: IconName; title: string; wort: string; short: string; kurz: string; text: string }[] = [
  { icon: 'chat', title: 'Erstgespräch', wort: 'Idee', short: 'Kostenlos, unverbindlich', kurz: 'Sie erzählen uns, was Sie vorhaben – kostenlos und unverbindlich.', text: 'Wir lernen Ihr Unternehmen kennen und hören zu, was sich verändern soll.' },
  { icon: 'compass', title: 'Verstehen & Planen', wort: 'Verstehen', short: 'Persönlich, mit Ihnen', kurz: 'Wir klären gemeinsam, was Sie erreichen möchten.', text: 'Wen möchten Sie erreichen? Was soll Ihre Website leisten? Wie wird aus einem Besucher eine Anfrage? Das klären wir gemeinsam.' },
  { icon: 'zap', title: 'Umsetzen', wort: 'Umsetzen', short: 'Sie prüfen und geben frei', kurz: 'Wir setzen um. Sie prüfen und geben frei.', text: 'Wir gestalten und bauen Ihre Website – mit KI-gestützten Werkzeugen geht das schnell. Sie prüfen, wir feilen, bis alles passt.' },
  { icon: 'refresh', title: 'Laufend betreut', wort: 'Verbessern', short: 'Immer aktuell', kurz: 'Änderungen per Sprache oder Text. Wartung und Updates laufen im Hintergrund.', text: 'Ihre Website geht online. Änderungen schicken Sie per Sprachnachricht oder Text – wir setzen sie um und kümmern uns um Wartung, Updates und Backups.' },
];

/** Gemeinsam in der Beratung erarbeitet. */
export const BERATUNG_THEMEN = ['Zielgruppen', 'Positionierung', 'Customer Journey', 'Vertrauensaufbau', 'Lead-Generierung', 'Digitale Prozesse'];

export const faqs = [
  {
    q: 'Was kostet eine Website bei Waybuild?',
    a: `${PAKETE.map((p) => `${p.name}: ${formatEuro(p.preis)} im Monat`).join('. ')}. Alle Preise netto zzgl. MwSt., ohne Einrichtungskosten und ohne versteckte Kosten.`,
  },
  {
    q: `Was ist der Unterschied zwischen ${formatEuro(PAKETE[0].preis)} und ${formatEuro(PAKETE[1].preis)}?`,
    a: 'Die Website für 79 € ist Ihr professioneller Auftritt – wir pflegen und betreuen ihn. Die intelligente Website für 139 € macht zusätzlich mit: Sie wertet aus, woher Anfragen kommen und was Besucher interessiert, und passt Inhalte und Aufbau laufend daran an.'
      .replace('79 €', formatEuro(PAKETE[0].preis)).replace('139 €', formatEuro(PAKETE[1].preis)),
  },
  {
    q: 'Was ist beim Website Service enthalten?',
    a: 'Persönliche Beratung, KI-gestützte Erstellung, Hosting, Domainverwaltung, SSL, Wartung, Backups und laufende Betreuung – zu einem festen Monatspreis und ohne Einrichtungskosten.',
  },
  {
    q: 'Wie lange läuft der Vertrag?',
    a: `Die Laufzeit beträgt ${WAAS.laufzeitMonate} Monate. Wir möchten langfristiges Vertrauen aufbauen – keine künstliche Abhängigkeit.`,
  },
  {
    q: 'Wie schnell ist meine Website online?',
    a: 'Spätestens 14 Tage, nachdem Ihre Inhalte (Texte, Bilder, Logo) vorliegen. Auf Wunsch erarbeiten wir die Inhalte gemeinsam mit Ihnen.',
  },
  {
    q: 'Wem gehören Website, Code und Domain?',
    a: 'Ihnen. Die Domain läuft auf Ihren Namen, Website und Code gehören Ihrem Unternehmen.',
  },
  {
    q: 'Welche Rolle spielt KI?',
    a: 'KI ersetzt keine guten Ideen – sie beschleunigt die Umsetzung. Ziele, Inhalte und Auftritt erarbeiten wir persönlich mit Ihnen. Danach helfen uns KI-gestützte Werkzeuge, die Ergebnisse schnell umzusetzen.',
  },
  {
    q: 'Kann ich meine bestehende Domain mitnehmen?',
    a: 'Ja. Wir übernehmen die Verwaltung Ihrer bestehenden Domain ohne Ausfall – sie bleibt auf Ihren Namen registriert.',
  },
  {
    q: 'Bietet Waybuild auch Software, Cloud und IT an?',
    // 27.10.2026: an die Startseite angeglichen (Software/Cloud/Workplace/Process Service „bald verfügbar“); Fakt „auf Anfrage“ (README, AGB § 2a) bleibt.
    a: 'Heute starten wir mit dem Website Service. Software, Cloud, Workplace und Process Service folgen Schritt für Schritt. Einzelne Projekte – etwa individuelle Software, Nextcloud oder IT-Betreuung – setzen wir schon heute auf Anfrage um.',
  },
  {
    q: 'Sind die Preise netto?',
    a: 'Ja. Alle Preise verstehen sich netto zzgl. der gesetzlichen Umsatzsteuer von 19 %. Unser Angebot richtet sich ausschließlich an Unternehmen und Selbstständige (B2B).',
  },
];
