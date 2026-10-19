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

/** „Wofür wir stehen“ – ein Wort + eine kurze Zeile */
export const WERTE: { icon: IconName; title: string; text: string }[] = [
  { icon: 'user', title: 'Persönlich', text: 'Ein fester Ansprechpartner statt Hotline.' },
  { icon: 'shield', title: 'Verlässlich', text: 'Feste Zusagen – schriftlich.' },
  { icon: 'chat', title: 'Verständlich', text: 'Klare Worte statt Fachchinesisch.' },
  { icon: 'eye', title: 'Transparent', text: 'Keine versteckten Kosten.' },
  { icon: 'lock', title: 'Sicher', text: 'Datenschutz und Sicherheit von Anfang an.' },
  { icon: 'spark', title: 'Zukunftsorientiert', text: 'KI-gestützt und ständig weiterentwickelt.' },
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
