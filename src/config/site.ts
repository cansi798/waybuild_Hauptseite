// ONEPAGER „Neue Website in Arbeit“ (Jamil, Talk k8oxzjva #6072, 15.11.2026).
// Alle Texte stammen aus WS-0007 (waybuild_website-neudesign, src/config/*.ts) – nur Aussagen, die dort so stehen.
// BEWUSST NICHT enthalten: Preise, Pakete, Laufzeiten, Zahlungsaussagen, AGB-Verweise (es gibt noch keine AGB).
// Alte Hauptseite (WS-0001): Tag vor-onepager-20261115 (quelle) bzw. vor-onepager-20261115-main (main).

/** Firmendaten wie WS-0007 src/config/site.ts (Handelsregister-Auszug 15.11.2026). */
export const company = {
  name: 'webgold',
  legalName: 'Waybuild UG (haftungsbeschränkt)',
  email: 'service@webgold.io',
  phone: '0151 56156578',
  street: 'Kuno-Liesenberg-Kehre 32a',
  zip: '22844',
  city: 'Norderstedt',
  country: 'DE',
  managingDirector: 'Can Siebert',
  registerCourt: 'Amtsgericht Kiel',
  registerNumber: 'HRB 29883 KI',
  /** keine USt-IdNr. vorhanden → Zeile im Impressum ausgeblendet */
  vatId: '',
  hoster: 'ALL-INKL.COM – Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf',
  foundingYear: '2026',
};

/** Erreichbarkeit (WS-0007 HOURS) */
export const HOURS = 'Montag bis Freitag, 9 bis 17 Uhr';

export const phoneTel = () => '+49' + company.phone.replace(/\s/g, '').replace(/^0/, '');
export const whatsappLink = (text = 'Hallo webgold, ich interessiere mich für eine kostenlose Erstberatung.') =>
  `https://wa.me/${phoneTel().replace('+', '')}?text=${encodeURIComponent(text)}`;

/** Positionierung (WS-0007 variante.ts POSITIONIERUNG, Jamil #6055 Fr. 20) */
export const POSITIONIERUNG = 'Ihre Website im Abo und auf Wunsch eine Web-App für Ihren digitalen Alltag.';

export const HERO = {
  badge: 'Neue Website in Arbeit',
  titel: POSITIONIERUNG,
  unter: 'Hier entsteht gerade unsere neue Website. Bis sie fertig ist, erreichen Sie uns ganz direkt: per Telefon, E-Mail oder WhatsApp.',
  knopf: 'Kostenlose Erstberatung', // WS-0007 HERO_KNOPF
  knopf2: 'Was Sie bald erwartet',
  fuer: 'Für klein- und mittelständische Unternehmen.', // WS-0007 V_HERO.fuer
};

/** „Was Sie bald erwartet“ – Kernangebot aus WS-0007 (ohne Preise/Pakete/Laufzeiten) */
export const ERWARTET = {
  kenn: 'Was Sie bald erwartet',
  titel: 'Website und Arbeitsalltag in einem abgestimmten System.', // WS-0007 start-system.ts loesung
  lead: 'Wir entwickeln digitale Lösungen, die Kunden gewinnen, Arbeitsabläufe vereinfachen und mit Ihrem Unternehmen mitwachsen.', // WS-0007 V_HERO.unter
  punkte: [
    { icon: 'website', titel: 'Ihre Website im Abo', text: 'Fertig gebaut und laufend betreut. Strategie, Positionierung und Inhalte erarbeiten wir persönlich mit Ihnen, unsere KI setzt sie schnell um.' },
    { icon: 'app', titel: 'Auf Wunsch eine Web-App', text: 'Für Ihren digitalen Alltag: Ihre Anfragen landen an einem Ort, und Sie sehen, was noch offen ist. Website und Web-App vom selben Team.' },
    { icon: 'vorschau', titel: 'Kostenlose, unverbindliche Vorschau', text: 'Zu jeder Anfrage erstellen wir Ihnen eine Vorschau Ihrer Website, kostenlos und unverbindlich. Feinschliff und Rückmeldung folgen am nächsten Werktag.' },
    { icon: 'mensch', titel: 'Ein fester Ansprechpartner', text: 'Jemand, der Ihr Unternehmen kennt, mit Vertretung bei Urlaub oder Krankheit. Sie landen weder in einem Callcenter noch in einem Ticketsystem.' },
    { icon: 'schild', titel: 'Betreuung inklusive', text: 'Hosting, Sicherheitsupdates, SSL und Backups erledigen wir im Hintergrund. Sie müssen sich um nichts Technisches kümmern.' },
    { icon: 'server', titel: 'Hosting in Deutschland', text: 'Ihre Website läuft auf Servern in Deutschland, DSGVO-orientiert.' },
  ] as { icon: IconName; titel: string; text: string }[],
};

export type IconName = 'website' | 'app' | 'vorschau' | 'mensch' | 'schild' | 'server' | 'phone' | 'mail' | 'whatsapp' | 'pfeil';

/** Ablauf in fünf Schritten (WS-0007 start-ablauf.ts START_ABLAUF_KURZ, ohne Paketverweise) */
export const ABLAUF = {
  kenn: 'So geht es los',
  titel: 'In fünf Schritten zu Ihrer Lösung',
  lead: 'Erst verstehen, dann bauen: Sie sehen bereits vor einer Beauftragung, was für Ihr Unternehmen möglich ist.',
  schritte: [
    { titel: 'Anfrage senden', text: 'Sie melden sich kurz per Telefon, E-Mail oder WhatsApp. Wir melden uns persönlich mit Terminvorschlägen.', zeit: 'Dauer: 2 Minuten' },
    { titel: 'Kostenlose Analyse und Vorschau', text: 'Wir analysieren Ihr Unternehmen, Ihre Website und wie gut man Sie bei Google findet, und erstellen eine kostenlose erste Vorschau.', zeit: 'Vor unserem Gespräch' },
    { titel: 'Kostenloses Erstgespräch', text: 'Wir zeigen Ihnen Analyse und Vorschau und lernen Ihr Unternehmen, Ihre Ziele und Ihre Kunden kennen.', zeit: 'Rund 30 Minuten' },
    { titel: 'Feinschliff auf Basis Ihrer Unternehmens-DNA', text: 'Ihre Werte, Ihre Art zu arbeiten und das, wofür Kunden Sie schätzen: Darauf passen wir Ihre Vorschau an.', zeit: 'In der Regel am nächsten Werktag' },
    { titel: 'Start', text: 'Sie entscheiden in Ruhe. Nach Ihrer Freigabe setzen wir um, Ihre Lösung geht online, und wir betreuen sie weiter.', zeit: 'Nach Ihrer Freigabe' },
  ],
};

export const KONTAKT = {
  kenn: 'Kontakt',
  titel: 'Sprechen Sie mit uns.',
  text: 'Kurze Frage, konkretes Vorhaben oder erst einmal unverbindlich beraten lassen? Im kostenlosen Erstgespräch klären wir, was Ihre Website leisten soll.',
};

export const BESCHREIBUNG = 'Hier entsteht die neue Website von webgold: Website im Abo, auf Wunsch mit Web-App. Kostenlose, unverbindliche Vorschau, Hosting in Deutschland.';
