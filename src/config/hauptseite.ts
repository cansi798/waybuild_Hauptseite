// Inhalte der waybuild-IT-Hauptseite (Dach-Marke). Wunsch Jamil 19.10.2026 (Sprachnachricht):
// allgemein über waybuild IT – Werte, Qualitäten, Servicequalität/feste SLAs, über uns –
// wenig Text, viel Grafik & Animation. Produktdetails stehen auf den jeweiligen Produktseiten.
// ERSTER VORSCHLAG – Jamil passt Formulierungen an.
import type { IconName } from './site';

/** Startseiten-Hero (Leitbild „Der Weg“, 27.10.2026): roter Faden + in einem Satz, was Waybuild tut. */
export const HERO = {
  eyebrow: 'Waybuild',
  pre: 'Wir machen Veränderungen ',
  accent: 'einfach.',
  // Dachmarke (Talk 3475): gilt für alle Produkte; Websites als erstes Produkt
  lead: 'Wir helfen Unternehmen, Veränderungen einfach umzusetzen – mit einem festen Ansprechpartner, festen Zusagen und klaren Abläufen. Wir beginnen mit Websites, weitere Produkte folgen.',
};

/** „Wofür wir stehen“ – ein Wort, eine Kernzeile (lead) und 2–3 Sätze, was das konkret für Kunden heißt.
 *  Texte Jamil 20.10.2026 (Talk 2607: „zu jedem Punkt etwas mehr Text“) – ERSTER VORSCHLAG, nur Aussagen, die schon auf der Seite stehen. */
export const WERTE: { icon: IconName; title: string; lead: string; text: string }[] = [
  {
    icon: 'user',
    title: 'Persönlich',
    lead: 'Ein fester Ansprechpartner statt Hotline.',
    text: 'Sie haben eine feste Person, die Ihr Unternehmen und Ihr Projekt kennt. Sie müssen nichts zweimal erklären und landen nie in einer Warteschleife. Eine Sprachnachricht oder kurze Nachricht genügt.',
  },
  {
    icon: 'shield',
    title: 'Verlässlich',
    lead: 'Feste Zusagen, klare Zeiten.',
    text: 'Was wir zusagen, halten wir ein. Sie bekommen spätestens am nächsten Werktag eine persönliche Antwort. Bei größeren Aufgaben sagen wir Ihnen vorher, wann sie fertig sind.',
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
// „Alle Zusagen erhalten Sie schriftlich“ am 27.10.2026 entfernt: noch nicht belegt (Launch-Checkliste „Leistungsversprechen absichern“, Frage b an Jamil, Talk 3397).
/** Gilt für alle Produkte (Jamil, Talk 3475). */
export const SLA_HINWEIS = 'Servicezeiten: Montag – Freitag, 9:00 – 18:00 Uhr (ohne gesetzliche Feiertage).';

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
  { icon: 'doc', title: 'Feste Service-Zusagen', text: 'Eine feste Reaktionszeit statt vager Versprechen.' },
  { icon: 'euro', title: 'Transparente Preise', text: 'Keine versteckten Kosten, Extras nur nach Absprache.' },
  { icon: 'server', title: 'Server in Deutschland', text: 'Unsere Lösungen laufen auf Servern in Deutschland.' },
  { icon: 'lock', title: 'DSGVO-konform', text: 'Auftragsverarbeitungs-Vertrag (AV-Vertrag) auf Anfrage.' },
  { icon: 'unlock', title: 'Kein künstlicher Lock-in', text: 'Sie behalten die Kontrolle über Ihre Daten.' },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * PRODUKTE der Dachmarke (Jamil 27.10.2026, Talk 3475): Die Hauptseite gilt für ganz Waybuild,
 * jedes Produkt bekommt einen eigenen Namen und eine eigene Website.
 * name: 'TODO' = Name noch offen → in der Vorschau als Platzhalter markiert, live wird die Kategorie gezeigt.
 * url: Adresse der eigenen Produkt-Website (extern). Solange leer, führt der Link auf `pfad` (Übergangsseite).
 * Hinweis: https://cansi798.github.io/waybuild_website/ existiert (Website as a Service), zeigt aber noch
 * Telefon-/WhatsApp-Platzhalter (+49 151 00000000) – erst verlinken, wenn das entfernt ist.
 * (Früherer Arbeitsname „waybuild Start“, Jamil 20.10.2026, Talk 2609/2611 – nicht mehr verwendet.)
 * ───────────────────────────────────────────────────────────────────────────── */
export type Produkt = {
  id: string;
  /** Eigener Produktname – 'TODO' bis Jamil ihn festlegt */
  name: string;
  /** Was es ist (bleibt immer sichtbar) */
  kategorie: string;
  /** Ein Satz Nutzen – nur belegte Aussagen */
  nutzen?: string;
  icon: IconName;
  aktiv: boolean;
  /** Externe Produkt-Website */
  url?: string;
  /** Interne Übergangsseite, solange url fehlt */
  pfad?: string;
};

/** Anzeigename: eigener Produktname oder (solange offen) die Kategorie */
export const produktName = (p: Produkt) => (p.name && !p.name.startsWith('TODO') ? p.name : p.kategorie);

export const PRODUKTE: Produkt[] = [
  // name = ARBEITSNAME (Jamil 27.10.2026, Talk 3477: „Nenn es erstmal …“) – nur hier ändern, alle Seiten übernehmen ihn.
  { id: 'website', name: 'Super Duper Website Service', kategorie: 'Website Service', nutzen: 'Ihre Website – gebaut, betreut und immer aktuell. Änderungen schicken Sie per Sprachnachricht oder Text.', icon: 'layout', aktiv: true, url: '', pfad: '/angebot/' },
  { id: 'software', name: 'TODO', kategorie: 'Software Service', icon: 'code', aktiv: false },
  { id: 'cloud', name: 'TODO', kategorie: 'Cloud Service', icon: 'cloud', aktiv: false },
  { id: 'workplace', name: 'TODO', kategorie: 'Workplace Service', icon: 'users', aktiv: false },
  { id: 'process', name: 'TODO', kategorie: 'Process Service', icon: 'layers', aktiv: false },
];

/** Erstes Produkt (Website) – für /angebot/, Footer, llms.txt, JSON-LD */
export const WEBSITE_PRODUKT = PRODUKTE[0];

/** Unsere Haltung – gilt für alle Produkte. Überschriften wörtlich aus Jamils Strategiebriefing (Talk 3401: „Wir hören zu.
 *  Wir denken mit. Wir mögen einfache Lösungen. Wir machen es nicht komplizierter als nötig.“), Sätze aus 3378/3401 und WERTE.
 *  Ersetzt am 27.10.2026 die Ketten „Der übliche Weg / Der Weg mit Waybuild“ (Jamil, Talk 3519: zu speziell, zu ähnlich zur Hero-Linie). */
export const HALTUNG: { titel: string; text: string; icon: IconName }[] = [
  { titel: 'Wir hören zu.', text: 'Am Anfang steht nicht die Technik, sondern Ihre Frage: Was möchten Sie erreichen?', icon: 'chat' },
  { titel: 'Wir denken mit.', text: 'Nicht jede Veränderung braucht neue Software. Wir klären gemeinsam, was Sie wirklich weiterbringt.', icon: 'compass' },
  { titel: 'Wir mögen einfache Lösungen.', text: 'Klare Worte statt Fachchinesisch. Klare Abläufe statt Abstimmungsschleifen.', icon: 'check' },
  { titel: 'Wir machen es nicht komplizierter als nötig.', text: 'Ein fester Ansprechpartner, ein fester Ablauf – und wir bleiben dran, auch nach dem Start.', icon: 'user' },
];

/** „Über waybuild IT“ – wird in der Sektion „Klein, aber mit den Standards der Großen“ verwendet */
export const UEBER = {
  text: 'waybuild IT ist eine Marke der Waybuild UG (haftungsbeschränkt). Wir helfen Unternehmen, Veränderungen einfacher umzusetzen – mit Klarheit, Struktur und einem verlässlichen Partner.',
  schritte: [
    { icon: 'users' as IconName, title: 'Menschliche Beratung' },
    { icon: 'bot' as IconName, title: 'KI-gestützte Umsetzung' },
    { icon: 'refresh' as IconName, title: 'Kontinuierliche Verbesserung' },
  ],
};
