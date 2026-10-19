// Inhalte der waybuild-IT-Hauptseite (Dach-Marke). Wunsch Jamil 19.10.2026 (Sprachnachricht):
// allgemein über waybuild IT – Werte, Qualitäten, Servicequalität/feste SLAs, über uns –
// wenig Text, viel Grafik & Animation. Produktdetails stehen auf den jeweiligen Produktseiten.
// ERSTER VORSCHLAG – Jamil passt Formulierungen an.
import type { IconName } from './site';

export const HERO = {
  eyebrow: 'waybuild IT',
  pre: 'Digitale Lösungen. ',
  accent: 'Verlässlich betreut.',
  lead: 'Wir entwickeln digitale Produkte für Unternehmen – und stehen mit festen Service-Zusagen dahinter.',
};

/** „Wofür wir stehen“ – ein Wort, eine Kernzeile (lead) und 2–3 Sätze, was das konkret für Kunden heißt.
 *  Texte Jamil 20.10.2026 (Talk 2607: „zu jedem Punkt etwas mehr Text“) – ERSTER VORSCHLAG, nur Aussagen, die schon auf der Seite stehen. */
export const WERTE: { icon: IconName; title: string; lead: string; text: string }[] = [
  {
    icon: 'user',
    title: 'Persönlich',
    lead: 'Ein fester Ansprechpartner statt Hotline.',
    text: 'Sie haben eine feste Person, die Ihr Unternehmen und Ihr Projekt kennt. Sie müssen nichts zweimal erklären und landen nie in einer Warteschleife. Ein Anruf oder eine Sprachnachricht genügt.',
  },
  {
    icon: 'shield',
    title: 'Verlässlich',
    lead: 'Feste Zusagen – schriftlich.',
    text: 'Was wir zusagen, halten wir ein – schwarz auf weiß. Sie bekommen spätestens am nächsten Werktag eine persönliche Antwort. Bei größeren Aufgaben sagen wir Ihnen vorher, wann sie fertig sind.',
  },
  {
    icon: 'chat',
    title: 'Verständlich',
    lead: 'Klare Worte statt Fachchinesisch.',
    text: 'Wir erklären Technik so, dass Sie sie ohne Vorwissen verstehen. Sie wissen jederzeit, woran wir arbeiten und was es Ihnen bringt. So entscheiden Sie mit einem guten Gefühl.',
  },
  {
    icon: 'eye',
    title: 'Transparent',
    lead: 'Keine versteckten Kosten.',
    text: 'Sie wissen vorher, was etwas kostet und was dafür enthalten ist. Zusätzliche Leistungen gibt es nur nach schriftlicher Absprache mit Ihnen. Auf Ihrer Rechnung erleben Sie keine Überraschungen.',
  },
  {
    icon: 'lock',
    title: 'Sicher',
    lead: 'Datenschutz und Sicherheit von Anfang an.',
    text: 'Datenschutz und Sicherheit planen wir von Beginn an mit ein – nicht erst hinterher. Wartung, Updates und Backups erledigen wir im Hintergrund. So bleibt Ihre Technik geschützt, und Sie können sich auf Ihr Geschäft konzentrieren.',
  },
  {
    icon: 'spark',
    title: 'Zukunftsorientiert',
    lead: 'KI-gestützt und ständig weiterentwickelt.',
    text: 'Wir arbeiten mit modernen, KI-gestützten Werkzeugen – so kommen Änderungen schneller bei Ihnen an. Ihre Lösung bleibt nach dem Start nicht stehen: Wir verbessern sie laufend weiter.',
  },
];

/** „Unsere Service-Zusagen“ – Wortlaut aus waybuild_website (src/config/versprechen.ts), allgemein formuliert */
export const ZUSAGEN: { icon: IconName; key: string; title: string; text: string }[] = [
  { icon: 'user', key: '1 Mensch', title: 'Sie erreichen immer einen Menschen', text: 'Kein Callcenter, kein Ticket-Labyrinth.' },
  { icon: 'mic', key: '1 Nachricht', title: 'Eine Sprachnachricht genügt', text: 'Kein Formular, keine Screenshots.' },
  { icon: 'zap', key: 'Minuten', title: 'Kleine Änderungen oft in Minuten', text: 'Bei Größerem sagen wir vorher, wann es fertig ist.' },
  { icon: 'clock', key: '1 Werktag', title: 'Antwort spätestens am nächsten Werktag', text: 'Persönlich – meist deutlich schneller.' },
  { icon: 'server', key: 'Rundum', title: 'Die Technik läuft – wir kümmern uns', text: 'Wartung, Updates und Backups im Hintergrund.' },
  { icon: 'euro', key: '0 Überraschungen', title: 'Keine Überraschungen auf der Rechnung', text: 'Extras nur nach schriftlicher Absprache.' },
];

/** Produkte – Produktname für Website-Entwicklung folgt (Jamil 19.10.2026) */
export const PRODUKTE: { name: string; untertitel: string; text: string; icon: IconName; url?: string }[] = [
  {
    name: 'Website-Entwicklung',
    untertitel: 'Produktname folgt',
    text: 'Professionelle Websites für Unternehmen – komplett betreut.',
    icon: 'layout',
    url: 'https://cansi798.github.io/waybuild_website/',
  },
  { name: 'Weiteres Produkt', untertitel: 'Folgt in Kürze', text: 'Wir arbeiten daran.', icon: 'layers' },
  { name: 'Weiteres Produkt', untertitel: 'Folgt in Kürze', text: 'Wir arbeiten daran.', icon: 'cloud' },
];

/** „Über waybuild IT“ – kurz, Rest als Grafik */
export const UEBER = {
  text: 'waybuild IT ist die IT-Marke der Waybuild UG (haftungsbeschränkt). Wir verbinden persönliche Beratung mit moderner, KI-gestützter Technik – für kleine und mittlere Unternehmen.',
  schritte: [
    { icon: 'users' as IconName, title: 'Menschliche Beratung' },
    { icon: 'bot' as IconName, title: 'KI-gestützte Umsetzung' },
    { icon: 'refresh' as IconName, title: 'Kontinuierliche Verbesserung' },
  ],
};
