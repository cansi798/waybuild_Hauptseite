// Inhalte der waybuild-IT-Hauptseite (Dach-Marke). Wunsch Jamil 19.10.2026 (Sprachnachricht):
// allgemein über waybuild IT – Werte, Qualitäten, Servicequalität/feste SLAs, über uns –
// wenig Text, viel Grafik & Animation. Produktdetails stehen auf den jeweiligen Produktseiten.
// ERSTER VORSCHLAG – Jamil passt Formulierungen an.
import type { IconName } from './site';

/** Startseiten-Hero (Leitbild „Der Weg“, 27.10.2026): roter Faden + in einem Satz, was Waybuild tut. */
export const HERO = {
  // Zielgruppe (Jamil, Talk 3580). Beleg: Angebot ausschließlich für Unternehmen und Selbstständige (B2B), faqs + AGB § 1.
  eyebrow: 'Für Unternehmen und Selbstständige',
  pre: 'Wir machen Veränderungen ',
  accent: 'einfach.',
  // Dachmarke: nur über uns (Jamil, Talk 3540/3541); Wortlaut nach Strategiebriefing 3401 („Wir helfen Unternehmen dabei, Veränderungen einfacher umzusetzen“, „Klarheit, Struktur, … einen zuverlässigen Partner“)
  // Bezugsrahmen „digital“ ohne Technik-Jargon (Jamil, Talk 3589); Beispiele = heutige/angekündigte Produkte (Website, Process, Workplace)
  // Subheadline wörtlich aus Jamils kompaktem Design-Briefing (Talk 3636, 28.10.2026)
  lead: 'Wir entwickeln digitale Produkte und Lösungen, die Veränderungen verständlich, verlässlich und einfach machen.',
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
    text: 'Datenschutz und Sicherheit planen wir von Beginn an mit ein. Wartung, Updates und Backups erledigen wir im Hintergrund. So bleibt Ihre Technik geschützt, und Sie können sich auf Ihr Geschäft konzentrieren.',
  },
  {
    icon: 'spark',
    title: 'Zukunftsorientiert',
    lead: 'KI-gestützt und ständig weiterentwickelt.',
    text: 'Wir arbeiten mit KI-gestützten Werkzeugen, dadurch kommen Änderungen schneller bei Ihnen an. Ihre Lösung bleibt nach dem Start nicht stehen: Wir verbessern sie laufend weiter.',
  },
];

/** „Klein, aber mit den Standards der Großen“ (Jamil 21.10.2026, Sprachnachricht 2960).
 *  Gegenüberstellung bewusst sachlich – kein Herabsetzen anderer Anbieter. */
export const STANDARDS = {
  text: 'waybuild IT ist ein kleines, junges Unternehmen. Beim Service arbeiten wir trotzdem wie die Großen: mit festem Ticketsystem, schriftlichen Service-Zusagen und klaren Prozessen. Bei vielen IT-Dienstleistern läuft dagegen alles übers Telefon. Man ruft „seinen“ IT-Mann an und hofft, dass er Zeit hat.',
  vergleich: [
    { thema: 'Anfragen', oft: 'Anruf beim „Lieblings-IT-Mann“', wir: 'Festes Ticketsystem, in dem nichts verloren geht' },
    { thema: 'Reaktionszeit', oft: 'Wenn gerade jemand Zeit hat', wir: 'Schriftlich zugesagt (SLA)' },
    { thema: 'Ansprechpartner', oft: 'Wer gerade ans Telefon geht', wir: 'Ihr fester Ansprechpartner' },
    { thema: 'Prozesse', oft: 'Im Kopf einzelner Personen', wir: 'Feste, dokumentierte Prozesse' },
  ],
};

/** Service-Zusagen (SLAs). Werte NUR aus bestehenden Zusagen der Seite (nächster Werktag, „oft in Minuten“).
 *  PLATZHALTER: garantierte Bearbeitungszeit für kleine Änderungen – Wert von Jamil/Can einsetzen. */
export const SLA_KERN: { icon: IconName; label: string; wert: string; text: string }[] = [
  // Erste Rückmeldung innerhalb einer Stunde während der Servicezeiten (= Geschäftszeiten, HOURS): Jamil, Talk 3720/3726 (29.10.2026)
  { icon: 'clock', label: 'Reaktionszeit', wert: 'Erste Rückmeldung innerhalb einer Stunde', text: 'Während der Servicezeiten. Spätestens am nächsten Werktag bekommen Sie eine persönliche Antwort mit dem nächsten Schritt.' },
  { icon: 'zap', label: 'Bearbeitungszeit', wert: 'Kleine Änderungen: [Wert einsetzen]', text: 'Oft schon in Minuten erledigt. Bei größeren Aufgaben nennen wir Ihnen vorher einen festen Fertigtermin.' },
];
// „Alle Zusagen erhalten Sie schriftlich“ am 27.10.2026 entfernt: noch nicht belegt (Launch-Checkliste „Leistungsversprechen absichern“, Frage b an Jamil, Talk 3397).
/** Gilt für alle Produkte (Jamil, Talk 3475). */
export const SLA_HINWEIS = 'Servicezeiten: Montag bis Freitag, 9 bis 18 Uhr (ohne gesetzliche Feiertage).';

/** Weitere feste Zusagen – Wortlaut aus der waybuild_website (Git-Historie) */
export const ZUSAGEN: { icon: IconName; title: string; text: string }[] = [
  { icon: 'user', title: 'Sie erreichen immer einen Menschen', text: 'Kein Callcenter, keine Warteschleife.' },
  { icon: 'mic', title: 'Eine Nachricht genügt', text: 'Melden Sie sich so, wie es für Sie am einfachsten ist. Ein Formular brauchen Sie nicht.' },
  { icon: 'server', title: 'Wir kümmern uns um die Technik', text: 'Wartung, Updates und Backups erledigen wir im Hintergrund.' },
  { icon: 'euro', title: 'Keine Überraschungen auf der Rechnung', text: 'Extras nur nach schriftlicher Absprache.' },
];

/** So funktioniert unser Ticketsystem (Jamil 21.10.2026) */
export const TICKET: { icon: IconName; title: string; text: string }[] = [
  { icon: 'mic', title: 'Sie melden sich', text: 'Per Sprachnachricht oder Text, so wie es für Sie am einfachsten ist.' },
  { icon: 'ticket', title: 'Ticket entsteht', text: 'Im Hintergrund wird automatisch ein Ticket angelegt. Nichts geht verloren.' },
  { icon: 'layers', title: 'Wird eingeordnet', text: 'Das Ticket wird nach Thema und Dringlichkeit eingeordnet.' },
  { icon: 'check', title: 'Wird erledigt', text: 'Einfache Anliegen löst unsere KI oft sofort. Alles andere übernimmt unser Team.' },
];

/** Prozesse & Transparenz (Jamil 21.10.2026) */
export const PROZESSE: { icon: IconName; title: string; text: string }[] = [
  { icon: 'doc', title: 'Klare Prozesse', text: 'Jede Anfrage läuft über denselben festen Weg. Nichts hängt an einer einzelnen Person.' },
  { icon: 'eye', title: 'Transparent', text: 'Sie wissen vorher, was passiert, wie lange es dauert und was es kostet.' },
  { icon: 'refresh', title: 'Laufend verbessert', text: 'Wir prüfen unsere Prozesse regelmäßig und machen sie Schritt für Schritt besser.' },
  { icon: 'users', title: 'Kundenorientiert', text: 'Maßstab ist, was Ihnen hilft: verständlich, schnell und verlässlich.' },
];

/** Vertrauen – nur Aussagen, die bereits im Seiten-Quelltext stehen (keine Zertifikate, Kundenzahlen, Bewertungen). */
export const VERTRAUEN: { icon: IconName; title: string; text: string }[] = [
  { icon: 'user', title: 'Fester Ansprechpartner', text: 'Eine Person, die Ihr Unternehmen kennt.' },
  { icon: 'doc', title: 'Feste Service-Zusagen', text: 'Eine feste Reaktionszeit, die Sie nachlesen können.' },
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
  /** produkt = konkretes Produkt mit eigener Seite; bereich = angekündigter Service-Bereich (Jamil, Talk 3378/3401) */
  art?: 'produkt' | 'bereich';
  /** Zweck in einem Satz – keine Funktionsversprechen */
  zweck?: string;
  /** Kurze Nutzenpunkte auf der Produktkarte (nur aktive Produkte) */
  frage?: string;
  punkte?: { icon: IconName; text: string; link?: string }[];
  /** Kurze Erklärung auf der Produktkarte der Startseite (nur belegte Aussagen) */
  erklaerung?: string;
  /** Wie das Produkt die Säulen einlöst – nur Formulierungen aus Talk 3690 */
  saeule?: string;
  /** Knopftext zur eigenen Produktseite (Talk 3636: „Produkt kennenlernen“ u. ä., nicht „Erstgespräch anfragen“) */
  cta?: string;
};

/** Anzeigename: eigener Produktname oder (solange offen) die Kategorie */
export const produktName = (p: Produkt) => (p.name && !p.name.startsWith('TODO') ? p.name : p.kategorie);

// Talk 4024/4025 (31.10.2026): Kundenverwaltung Handwerk und die Bereiche Software/Cloud/Workplace/Process Service
// werden derzeit nicht gezeigt (entfernt; frühere Einträge in der Git-Historie).
export const PRODUKTE: Produkt[] = [
  // name: Arbeitsname „Super Duper Website Service“ (Talk 3477) am 28.10.2026 entfernt – Jamil, Talk 3636: „Ersetzen: Super Duper“.
  // Bis ein eigener Name feststeht, zeigt die Seite die Kategorie „Website Service“.
  // Punkte: Jamil, Talk 3543 („Änderungen per Sprachnachricht in Minuten … per Sprache, Text, Screenshot, kurzes Video …
  // sich selbst optimierende Websites … mit unserem Serviceversprechen“). „oft in wenigen Minuten“ = keine garantierte Frist
  // (passt zu SLA_KERN „Oft schon in Minuten erledigt“). Selbstoptimierung nach PAKETE „Intelligente Website“.
  { id: 'website', art: 'produkt', name: 'TODO', kategorie: 'Website Service', nutzen: 'Wir bauen und betreuen Ihre Website und ändern sie, wann Sie möchten.', icon: 'layout', aktiv: true, url: '', pfad: '/angebot/', cta: 'Produkt kennenlernen', saeule: 'Klarheit bei Ihrer Website',
    erklaerung: 'Änderungen schicken Sie per Sprachnachricht, Text, Screenshot oder kurzem Video. Keine Einrichtungsgebühr, ein fester monatlicher Abo-Preis.',
    frage: 'Warum Ihre Website mit uns?',
    punkte: [
      { icon: 'mic', text: 'Änderungen per Sprachnachricht, oft in wenigen Minuten erledigt.' },
      { icon: 'video', text: 'Jederzeit anpassbar, per Sprache, Text, Screenshot oder kurzem Video.' },
      { icon: 'chart', text: 'Auf Wunsch optimiert sie sich selbst: Sie lernt aus Besuchern und Anfragen und passt sich laufend an.' },
      // Jamil, Talk 3586. Belegt: WAAS.einrichtung = 0, fester Monatspreis (MODELL). „monatlich kündbar“ NICHT belegt (24 Monate Laufzeit).
      { icon: 'euro', text: 'Keine Einrichtungsgebühr, ein fester monatlicher Abo-Preis.' },
      { icon: 'shield', text: 'Alles mit unserem Serviceversprechen.', link: '/zusagen/' },
    ] },
  // Von Can als aktuelle Produkte festgelegt (28.10.2026, One-Pager): verfügbar, nur Zweck, keine Funktionsversprechen;
  // Namen neutral bis Jamil eigene nennt; ohne Produktseite → Knopf „Erstgespräch anfragen“.
  { id: 'apps', name: 'TODO', kategorie: 'Apps für App Store und Google Play', zweck: 'Zum Beispiel zur Prüfungsvorbereitung in Berufen.', icon: 'smartphone', aktiv: true, art: 'produkt' },
  { id: 'crm-azav', saeule: 'Mehr Ordnung im Alltag', name: 'TODO', kategorie: 'Kundenverwaltung für AZAV-Bildungsträger', zweck: 'Ein CRM für Bildungsträger mit AZAV-Zulassung.', icon: 'book', aktiv: true, art: 'produkt' },
];

/** Erstes Produkt (Website) – für /angebot/, Footer, llms.txt, JSON-LD */
export const WEBSITE_PRODUKT = PRODUKTE[0];

/** Unsere Haltung – Dachmarke, ganz allgemein (Jamil, Talk 3538/3540: nur Werte, Prinzipien, Philosophie – keine Leistung).
 *  Überschriften wörtlich aus Jamils Strategiebriefing (Talk 3401), Sätze aus 3378/3401. Bildsymbole: Talk 3537. */
/** Texte ab 28.10.2026 wörtlich aus Jamils kompaktem Design-Briefing (Talk 3636). */
export const HALTUNG: { titel: string; text: string; bild: 'ohr' | 'gehirn' | 'licht' | 'knoten' }[] = [
  { titel: 'Wir hören zu.', text: 'Wir beginnen nicht mit einer fertigen Lösung. Wir möchten zuerst verstehen, was Sie erreichen wollen.', bild: 'ohr' },
  { titel: 'Wir denken mit.', text: 'Wenn es einen einfacheren oder sinnvolleren Weg gibt, sagen wir es Ihnen.', bild: 'gehirn' },
  { titel: 'Wir mögen einfache Lösungen.', text: 'Wenn sich etwas verändern soll, sollte die Umsetzung nicht selbst zum Problem werden.', bild: 'licht' },
  { titel: 'Wir machen es nicht komplizierter als nötig.', text: 'Klarheit, Struktur und gute Kommunikation reichen häufig weiter als zusätzliche Systeme und Prozesse.', bild: 'knoten' },
];

/** „Über waybuild IT“ – wird in der Sektion „Klein, aber mit den Standards der Großen“ verwendet */
export const UEBER = {
  text: 'waybuild IT ist eine Marke der Waybuild UG (haftungsbeschränkt). Wir helfen Unternehmen, Veränderungen einfacher umzusetzen, mit Klarheit, Struktur und einem verlässlichen Partner.',
  schritte: [
    { icon: 'users' as IconName, title: 'Menschliche Beratung' },
    { icon: 'bot' as IconName, title: 'KI-gestützte Umsetzung' },
    { icon: 'refresh' as IconName, title: 'Kontinuierliche Verbesserung' },
  ],
};

/** UNSERE QUALITÄTEN – zusammengeführt mit „Leichtigkeit in der Zusammenarbeit“ (Jamil, Talk 3584).
 *  Quellen: Strategiebriefing 3401 (Klarheit, Struktur, Verständnis, gute Kommunikation, zuverlässiger Partner),
 *  3395 (Leichtigkeit, Serviceversprechen, Mehrwert je Service), PROZESSE/WERTE. „Verlässlichkeit“ statt
 *  „Ein verlässlicher Partner“ (Talk 3583). Details der Zusagen nur auf /zusagen/. */
/** „Das dürfen Sie von uns erwarten“ (Jamil, Talk 3690, 29.10.2026) – verschmolzen mit den bisherigen Zusagen aus Talk 3636:
 *  Klarheit → „Sie wissen jederzeit, woran Sie sind“, Struktur → „Nichts geht verloren“, Gute Kommunikation → „fester Ansprechpartner“,
 *  Verlässlichkeit → „Sie erhalten eine Antwort“, neu „Probleme bleiben nicht liegen“ (statt „Eskalationswege“ in Menschensprache, Talk 3690),
 *  „Echter Mehrwert“ bleibt; „Verständnis“ (keine Fachsprache) steckt jetzt in „Leichtigkeit“.
 *  „Spätestens am nächsten Werktag“ und „automatisch weitergegeben“: von Jamil bestätigt (29.10.2026, Talk 3694);
 *  „innerhalb einer Stunde während der Servicezeiten“ (erste Rückmeldung): Talk 3720/3726. */
export const QUALITAETEN: { titel: string; text: string; icon: IconName }[] = [
  { titel: 'Sie erhalten eine Antwort', text: 'Während der Servicezeiten innerhalb einer Stunde eine erste Rückmeldung. Spätestens am nächsten Werktag wissen Sie, wer sich kümmert und was der nächste Schritt ist.', icon: 'clock' },
  { titel: 'Sie haben einen festen Ansprechpartner', text: 'Sie müssen Ihre Situation nicht bei jeder Anfrage neu erklären.', icon: 'user' },
  { titel: 'Nichts geht verloren', text: 'Jedes Anliegen wird dokumentiert und verfolgt, bis es abgeschlossen ist.', icon: 'doc' },
  { titel: 'Probleme bleiben nicht liegen', text: 'Wenn etwas feststeckt oder eine Antwort ausbleibt, wird das Thema automatisch weitergegeben.', icon: 'refresh' },
  { titel: 'Sie wissen jederzeit, woran Sie sind', text: 'Keine Überraschungen. Keine Funkstille.', icon: 'eye' },
  { titel: 'Echter Mehrwert', text: 'Was wir umsetzen, soll Zeit sparen, Prozesse erleichtern oder ein konkretes Problem lösen.', icon: 'spark' },
];

/** „So beginnt die Zusammenarbeit“ (Jamil, Talk 3725/3727, 29.10.2026) – ersetzt die vier Grundsätze auf der Startseite.
 *  Einordnung der Grundsätze: „Wir hören zu“ → Schritt 1 (Gespräch) und Verständnis („Was möchten Sie erreichen?“),
 *  „Wir denken mit“ → Schritt 3 (Vorschlag), „einfache Lösungen / nicht komplizierter als nötig“ → Säule Einfachheit und Leichtigkeit.
 *  Testphase nur nach Jamils Zustimmung ergänzen. */
// Nicht mehr auf der Startseite (Denkweise, Talk 3818 Punkt 8: „Unternehmens-DNA“ gehört ins Erstgespräch).
export const START_ABLAUF: { titel: string; text: string; icon: IconName; bild: 'gespraech' | 'dna' | 'analyse' | 'planung' | 'umsetzung' }[] = [
  { titel: 'Lockeres Gespräch', text: 'Strukturiert, damit wir alles Nötige über Ihr Unternehmen erfahren.', icon: 'chat', bild: 'gespraech' },
  { titel: 'Unternehmens-DNA', text: 'Wir halten fest, wer Ihre Kunden sind und wo es heute hakt.', icon: 'idcard', bild: 'dna' },
  { titel: 'Analyse & Vorschlag', text: 'Daraus entsteht unser Vorschlag, so einfach wie möglich.', icon: 'search', bild: 'analyse' },
  { titel: 'Planung', text: 'Gemeinsam legen wir fest, was wann passiert.', icon: 'calendar', bild: 'planung' },
  { titel: 'Umsetzung', text: 'Wir setzen um, Sie prüfen und geben frei.', icon: 'check', bild: 'umsetzung' },
];

/** Drei Säulen der Marke (Jamil, Talk 3690): Klarheit · Verlässlichkeit · Einfachheit – Texte aus dem Brief, gekürzt. */
export const SAEULEN: { titel: string; text: string }[] = [
  { titel: 'Klarheit', text: 'Sie wissen jederzeit, wer zuständig ist, was passiert und wie der aktuelle Stand ist.' },
  { titel: 'Verlässlichkeit', text: 'Anliegen verschwinden nicht. Absprachen gelten. Antworten kommen.' },
  { titel: 'Einfachheit', text: 'Veränderungen sollen leicht sein. Nicht bürokratisch, nicht technisch, nicht kompliziert.' },
];
