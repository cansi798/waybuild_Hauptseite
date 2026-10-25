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

/** „Klein, aber mit den Standards der Großen“ (Jamil 21.10.2026, Sprachnachricht 2960).
 *  Gegenüberstellung bewusst sachlich – kein Herabsetzen anderer Anbieter. */
export const STANDARDS = {
  text: 'waybuild IT ist ein kleines, junges Unternehmen. Beim Service arbeiten wir trotzdem wie die Großen: mit festem Ticketsystem, schriftlichen Service-Zusagen und klaren Abläufen. Bei vielen IT-Dienstleistern läuft dagegen alles übers Telefon – man ruft „seinen“ IT-Mann an und hofft, dass er Zeit hat.',
  vergleich: [
    { thema: 'Anfragen', oft: 'Anruf beim „Lieblings-IT-Mann“', wir: 'Festes Ticketsystem – nichts geht verloren' },
    { thema: 'Reaktionszeit', oft: 'Wenn gerade jemand Zeit hat', wir: 'Schriftlich zugesagt (SLA)' },
    { thema: 'Ansprechpartner', oft: 'Wer gerade ans Telefon geht', wir: 'Ihr fester Ansprechpartner' },
    { thema: 'Abläufe', oft: 'Im Kopf einzelner Personen', wir: 'Feste, dokumentierte Prozesse' },
  ],
};

/** Service-Zusagen (SLAs). Werte NUR aus bestehenden Zusagen der Seite (nächster Werktag, „oft in Minuten“).
 *  PLATZHALTER: garantierte Bearbeitungszeit für kleine Änderungen – Wert von Jamil/Can einsetzen. */
export const SLA_KERN: { icon: IconName; label: string; wert: string; text: string }[] = [
  { icon: 'clock', label: 'Reaktionszeit', wert: 'Spätestens am nächsten Werktag', text: 'Auf jede Anfrage bekommen Sie eine persönliche Antwort – meist deutlich schneller.' },
  { icon: 'zap', label: 'Bearbeitungszeit', wert: 'Kleine Änderungen: [Wert einsetzen]', text: 'Oft schon in Minuten erledigt. Bei größeren Aufgaben nennen wir Ihnen vorher einen festen Fertigtermin.' },
];
export const SLA_HINWEIS = 'Servicezeiten: Montag – Freitag, 9:00 – 18:00 Uhr. Alle Zusagen erhalten Sie schriftlich.';

/** Weitere feste Zusagen – Wortlaut aus der waybuild_website (Git-Historie) */
export const ZUSAGEN: { icon: IconName; title: string; text: string }[] = [
  { icon: 'user', title: 'Sie erreichen immer einen Menschen', text: 'Kein Callcenter, keine Warteschleife.' },
  { icon: 'mic', title: 'Eine Sprachnachricht genügt', text: 'Kein Formular, keine Screenshots.' },
  { icon: 'server', title: 'Die Technik läuft – wir kümmern uns', text: 'Wartung, Updates und Backups im Hintergrund.' },
  { icon: 'euro', title: 'Keine Überraschungen auf der Rechnung', text: 'Extras nur nach schriftlicher Absprache.' },
];

/** So funktioniert unser Ticketsystem (Jamil 21.10.2026) */
export const TICKET: { icon: IconName; title: string; text: string }[] = [
  { icon: 'mic', title: 'Sie melden sich', text: 'Per Sprachnachricht oder Text – so, wie es für Sie am einfachsten ist.' },
  { icon: 'ticket', title: 'Ticket entsteht', text: 'Im Hintergrund wird automatisch ein Ticket angelegt. Nichts geht verloren.' },
  { icon: 'layers', title: 'Wird eingeordnet', text: 'Das Ticket wird nach Thema und Dringlichkeit eingeordnet.' },
  { icon: 'check', title: 'Wird erledigt', text: 'Einfache Anliegen löst unsere KI oft sofort. Alles andere übernimmt unser Team.' },
];

/** Prozesse & Transparenz (Jamil 21.10.2026) */
export const PROZESSE: { icon: IconName; title: string; text: string }[] = [
  { icon: 'doc', title: 'Klare Abläufe', text: 'Jede Anfrage läuft über denselben festen Weg. Nichts hängt an einer einzelnen Person.' },
  { icon: 'eye', title: 'Transparent', text: 'Sie wissen vorher, was passiert, wie lange es dauert und was es kostet.' },
  { icon: 'refresh', title: 'Laufend verbessert', text: 'Wir prüfen unsere Abläufe regelmäßig und machen sie Schritt für Schritt besser.' },
  { icon: 'users', title: 'Kundenorientiert', text: 'Maßstab ist, was Ihnen hilft: verständlich, schnell und verlässlich.' },
];

/** Vertrauen – nur Aussagen, die bereits im Seiten-Quelltext stehen (keine Zertifikate, Kundenzahlen, Bewertungen). */
export const VERTRAUEN: { icon: IconName; title: string; text: string }[] = [
  { icon: 'user', title: 'Fester Ansprechpartner', text: 'Eine Person, die Ihr Unternehmen kennt.' },
  { icon: 'doc', title: 'Schriftliche Service-Zusagen', text: 'Reaktions- und Bearbeitungszeiten schwarz auf weiß.' },
  { icon: 'euro', title: 'Transparente Preise', text: 'Keine versteckten Kosten, Extras nur nach Absprache.' },
  { icon: 'server', title: 'Server in Deutschland', text: 'Unsere Lösungen laufen auf Servern in Deutschland.' },
  { icon: 'lock', title: 'DSGVO-konform', text: 'Auftragsverarbeitungs-Vertrag (AV-Vertrag) auf Anfrage.' },
  { icon: 'unlock', title: 'Kein künstlicher Lock-in', text: 'Sie behalten die Kontrolle über Ihre Daten.' },
];

/** Arbeitsname des Hauptprodukts (Jamil 20.10.2026, Talk 2609/2611) – VORLÄUFIG, finaler Name folgt.
 *  Nur hier ändern; Karte, Footer und Texte übernehmen ihn automatisch. */
export const START_NAME = 'waybuild Start';

/** Produkte */
export const PRODUKTE: {
  name: string;
  untertitel?: string;
  slogan?: string;
  text: string;
  icon: IconName;
  url?: string;
  bausteine?: { icon: IconName; label: string }[];
  bausteineHinweis?: string;
}[] = [
  {
    name: START_NAME,
    slogan: 'Alles für Ihren Start. Aus einer Hand.',
    text: 'Alles, was Ihr Unternehmen für einen professionellen Start braucht – aus einer Hand: Website, Logo, E-Mail-Signatur, Visitenkarten und Kleidung mit Ihrem Logo. Bei Bedarf auch Videos mit unserem Profi-Videografen und die Einrichtung Ihres Buchhaltungs-Tools. Sie buchen nur, was Sie brauchen – auch einzeln, z. B. nur die Website.',
    icon: 'rocket',
    url: 'https://cansi798.github.io/waybuild_website/',
    bausteine: [
      { icon: 'layout', label: 'Website' },
      { icon: 'pen', label: 'Logo' },
      { icon: 'mail', label: 'E-Mail-Signatur' },
      { icon: 'idcard', label: 'Visitenkarten' },
      { icon: 'shirt', label: 'Kleidung mit Logo' },
      { icon: 'video', label: 'Video' },
      { icon: 'euro', label: 'Buchhaltung einrichten' },
    ],
    bausteineHinweis: 'Einzeln oder als Paket',
  },
];

/** Hinweis unter den Produkten (statt zwei leerer Platzhalter-Karten) */
export const PRODUKTE_HINWEIS = 'Weitere Produkte folgen in Kürze.';

/** „Über waybuild IT“ – wird in der Sektion „Klein, aber mit den Standards der Großen“ verwendet */
export const UEBER = {
  text: 'waybuild IT ist die IT-Marke der Waybuild UG (haftungsbeschränkt). Wir verbinden persönliche Beratung mit moderner, KI-gestützter Technik – für kleine und mittlere Unternehmen.',
  schritte: [
    { icon: 'users' as IconName, title: 'Menschliche Beratung' },
    { icon: 'bot' as IconName, title: 'KI-gestützte Umsetzung' },
    { icon: 'refresh' as IconName, title: 'Kontinuierliche Verbesserung' },
  ],
};
