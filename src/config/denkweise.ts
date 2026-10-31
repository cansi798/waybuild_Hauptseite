// Startseite „Denkweise“ – Texte aus Jamils Konzept (Talk 3798/3799, 30.10.2026), nur minimal geglättet.
// Kernsatz: Die Linie zeigt keinen Projektablauf, sondern die Waybuild-Denkweise:
// Idee → Verstehen → Hinterfragen → Entscheiden → Umsetzen → Verbessern (Entscheiden statt Vereinfachen: Talk 3939). Produkte sind mögliche Ergebnisse.
// Vorherige Startseite (Anfrage-Reise, Selbstcheck, Zusammenarbeit): Git-Tag startseite-v3-anfragereise-20261030.
import type { IconName } from './site';

export const DW_HERO = {
  titel: 'Wir machen Veränderungen einfach.',
  lead: 'Wir unterstützen Unternehmen dabei, digitale Lösungen verständlich, einfach und verlässlich umzusetzen.',
  cta: 'Kostenloses Erstgespräch',
};

/** Die Reise im Hero: kleine Begriffe entlang der Linie */
export const DW_REISE: { wort: string; icon: IconName }[] = [
  { wort: 'Verstehen', icon: 'search' },
  { wort: 'Hinterfragen', icon: 'frage' },
  { wort: 'Entscheiden', icon: 'target' },
  { wort: 'Umsetzen', icon: 'rocket' },
  { wort: 'Verbessern', icon: 'chart' },
];

/** Drei Kapitel statt vieler Einzelabschnitte (Jamil, Talk 3818 Punkt 7) */
export const DW_KAPITEL = [
  { nr: 1, id: 'kapitel-1', titel: 'Veränderungen verstehen', kern: 'Wir verstehen, bevor wir verändern.' },
  { nr: 2, id: 'kapitel-2', titel: 'Veränderungen umsetzen', kern: '' },
  { nr: 3, id: 'kapitel-3', titel: 'Veränderungen nachhaltig machen', kern: '' },
];

// Talk 3818 Punkt 1: „Idee“ ist der eigentliche Einstieg in die Philosophie: Waybuild startet bei Veränderung, nicht bei Produkten.
export const DW_IDEE = {
  titel: 'Jede Veränderung beginnt mit einer Idee.',
  zeilen: ['Eine Idee.', 'Ein Wunsch.', 'Ein Problem.'],
  gefuehl: 'Oder einfach das Gefühl:',
  zitat: 'Das müsste doch einfacher gehen.',
  schluss: 'Genau dort beginnen die meisten Veränderungen.',
  /** Ideen (Talk 4007): schweben um den Knoten und fließen beim Scrollen nacheinander hinein.
   *  Lage in viewBox-Einheiten der Bildfläche 440 × 400, Knoten bei 220/232. */
  ideen: [
    { text: 'Neue Website', x: 108, y: 58 },
    { text: 'Digitale Zusammenarbeit', x: 336, y: 52 },
    { text: 'Kundenportal', x: 86, y: 160 },
    { text: 'Mehr Anfragen', x: 350, y: 156 },
    { text: 'Weniger Aufwand', x: 104, y: 330 },
    { text: 'Neue Software', x: 340, y: 334 },
  ],
};

export const DW_VERSTEHEN = {
  titel: 'Bevor wir etwas verändern, möchten wir es verstehen.',
  einleitung: 'Bevor wir Empfehlungen geben oder Lösungen entwickeln, möchten wir verstehen:',
  // Talk 4012: ergänzt; „wo Reibung entsteht“ wurde zu „wo digitale Reibung entsteht“ (keine Doppelung)
  punkte: ['wie Ihr Unternehmen arbeitet', 'welche Ziele wichtig sind', 'wie Entscheidungen entstehen', 'wie Menschen heute arbeiten', 'welche digitalen Werkzeuge sie nutzen', 'wo digitale Reibung entsteht', 'welche Prozesse vorhanden sind'],
  schluss: 'Denn nicht jede Herausforderung benötigt eine neue Lösung.',
  /** Begriffe rund um den Kreis (Bildfläche 440 × 420, Kreis um 220/210, r = 104) */
  begriffe: [
    { text: 'Unternehmen', x: 73, y: 15, kx: 278, ky: 124 },
    { text: 'Menschen', x: 87, y: 50, kx: 324, ky: 210 },
    { text: 'Ziele', x: 72, y: 86, kx: 278, ky: 296 },
    { text: 'Kommunikation', x: 25, y: 86, kx: 160, ky: 296 },
    { text: 'Prozesse', x: 12, y: 50, kx: 116, ky: 210 },
  ],
  mitte: 'Verständnis',
};

export const DW_HINTERFRAGEN = {
  titel: 'Bevor wir digitale Lösungen entwickeln, möchten wir verstehen.', // Talk 4013
  // Talk 3818 Punkt 2: Botschaft und kurze Beschriftungen der Phasen, damit die Szene auf Anhieb verständlich ist
  botschaft: ['Wir verkaufen nicht die erste Idee.', 'Wir helfen dabei, die richtige Entscheidung zu treffen.'],
  phasen: ['Die erste Idee', 'Mögliche Wege', 'Prüfen: Was bringt Sie weiter?', 'Eine Richtung'],
  zeilen: ['Nicht jede Herausforderung braucht eine neue Website.', 'Nicht jedes Problem braucht neue Software.', 'Manchmal liegt die eigentliche Verbesserung ganz woanders.'],
  schluss: 'Deshalb hinterfragen wir bestehende Ideen, Annahmen und Prozesse.',
  start: 'Neue Website',
  /** bleibt = verbindet sich am Ende wieder zu einer Richtung; die anderen verblassen */
  wege: [
    { text: 'Website', bleibt: false },
    { text: 'Bessere Inhalte', bleibt: true },
    { text: 'Positionierung', bleibt: true },
    { text: 'Prozess', bleibt: true },
    { text: 'Kommunikation', bleibt: false },
  ],
  richtung: 'Eine Richtung',
};

// Talk 3938/3939: „Entscheiden“ ersetzt „Vereinfachen“. Abwägen statt Bauchgefühl: Nutzen und Aufwand der Wege aus dem
// Hinterfragen nebeneinander, daraus eine Reihenfolge. Die Werte in der Szene sind nur Bild, keine Aussage über Projekte.
export const DW_ENTSCHEIDEN = {
  titel: 'Erst abwägen, dann entscheiden.',
  zeilen: ['Nach dem Hinterfragen bleiben meist mehrere sinnvolle Wege.', 'Wir legen sie nebeneinander und fragen: Was bringt es? Wie viel Aufwand steckt darin? Was ist jetzt am wichtigsten?'],
  ziel: ['So entsteht eine klare Reihenfolge.', 'Sie entscheiden, und alle wissen, warum.'],
  nutzen: 'Nutzen',
  aufwand: 'Aufwand',
  /** die drei Wege, die im Hinterfragen übrig bleiben; rang = Reihenfolge nach dem Abwägen */
  optionen: [
    { text: 'Bessere Inhalte', nutzen: 0.7, aufwand: 0.35, rang: 2 },
    { text: 'Positionierung', nutzen: 0.8, aufwand: 0.8, rang: 3 },
    { text: 'Prozess', nutzen: 0.9, aufwand: 0.4, rang: 1 },
  ],
  ergebnis: 'Zuerst',
};

export const DW_UMSETZEN = {
  titel: 'Aus Erkenntnissen entstehen Lösungen.',
  zeilen: ['Je nach Unternehmen entstehen unterschiedliche Lösungen.', 'Entscheidend ist nicht die Technologie.', 'Entscheidend ist, dass sie zum Ziel passt.'],
  /** Jamils fünf Bereiche. Verfügbarkeit vorsichtig nach Config: Website Service buchbar; Kundenverwaltungen und Apps
   *  (PRODUKTE) gehören zur Software; Workplace, Cloud, Process: einzelne Projekte auf Anfrage (FAQ „Bietet Waybuild
   *  auch Software, Cloud und IT an?“). Offene Frage a) an Jamil, Talk 3800. */
  bereiche: [
    { name: 'Website Service', icon: 'layout' as IconName, hinweis: '', hervor: true },
    { name: 'Software Service', icon: 'code' as IconName, hinweis: 'z. B. Kundenverwaltungen, Apps', hervor: false },
    { name: 'Workplace Service', icon: 'users' as IconName, hinweis: 'auf Anfrage', hervor: false },
    { name: 'Cloud Service', icon: 'cloud' as IconName, hinweis: 'auf Anfrage', hervor: false },
    { name: 'Process Service', icon: 'layers' as IconName, hinweis: 'auf Anfrage', hervor: false },
  ],
  karte: {
    kenn: 'Für viele Unternehmen beginnt die Zusammenarbeit hier.',
    titel: 'Website Service',
    // Reihenfolge nach Talk 3818 Punkt 6: erst Einstieg, dann Einfachheit, Preis zuletzt
    text: 'Veränderungen auf Ihrer Website einfach umsetzen.',
    punkte: ['Fester Ansprechpartner', 'Laufende Betreuung', 'Änderungen ohne Projektstress', 'Planbare Kosten'],
    // Preis wörtlich aus Jamils Konzept (Talk 3799); netto/brutto und 80 € statt 79 €: Frage b) an Jamil, Talk 3800
    preis: 'ab 80 € / Monat',
    cta: 'Mehr erfahren',
  },
};

// Talk 3818 Punkt 9: kürzer und konkreter
export const DW_VERBESSERN = {
  titel: 'Gute Veränderungen entwickeln sich weiter.',
  zeilen: ['Gute Veränderungen brauchen Verantwortung, Struktur und Verlässlichkeit.', 'Deshalb bleiben wir nicht bei der Umsetzung stehen.', 'Wir helfen dabei, Veränderungen dauerhaft erfolgreich zu machen.'],
  kreis: ['Feedback', 'Lernen', 'Optimieren', 'Weiterentwickeln'],
};

export const DW_VERLAESSLICH = {
  titel: 'Veränderung darf nicht vom Zufall abhängen.',
  text: 'Damit Veränderungen zuverlässig vorankommen, braucht es klare Verantwortlichkeiten, nachvollziehbare Prozesse und verständliche Kommunikation.',
  pfeiler: [
    { titel: 'Klare Ansprechpartner', text: 'Sie wissen, wer sich kümmert.', icon: 'user' as IconName, zusatz: '' },
    // bestätigte Zusagen (Jamil, Talk 3720/3726): 1 Stunde in den Servicezeiten, spätestens nächster Werktag
    { titel: 'Verlässliche Rückmeldungen', text: 'Sie wissen, wie es weitergeht.', icon: 'clock' as IconName, zusatz: 'Während der Servicezeiten innerhalb einer Stunde eine erste Rückmeldung, spätestens am nächsten Werktag der nächste Schritt.' },
    { titel: 'Nachvollziehbare Prozesse', text: 'Nichts geht verloren.', icon: 'doc' as IconName, zusatz: '' },
    { titel: 'Verständliche Kommunikation', text: 'Klare Sprache statt Fachbegriffe.', icon: 'chat' as IconName, zusatz: '' },
    { titel: 'Verantwortung', text: 'Offene Themen bleiben sichtbar.', icon: 'eye' as IconName, zusatz: '' },
    { titel: 'Kontinuierliche Verbesserung', text: 'Veränderungen entwickeln sich weiter.', icon: 'refresh' as IconName, zusatz: '' },
  ],
};

export const DW_PRINZIPIEN = {
  titel: 'Klarheit. Verlässlichkeit. Einfachheit.',
  liste: [
    { wort: 'Klarheit', text: 'Sie wissen jederzeit, woran Sie sind.' },
    { wort: 'Verlässlichkeit', text: 'Zusagen gelten. Verantwortung ist klar.' },
    { wort: 'Einfachheit', text: 'Veränderungen sollen leichter werden, nicht komplizierter.' },
  ],
};

export const DW_ABSCHLUSS = {
  titel: 'Was möchten Sie verändern?',
  zeilen: [
    'Vielleicht gibt es eine Idee, die schon lange umgesetzt werden sollte.',
    'Vielleicht einen Prozess, der unnötig kompliziert geworden ist.',
    'Oder vielleicht möchten Sie einfach herausfinden, wo Potenzial verborgen liegt.',
  ],
  einladung: 'Lassen Sie uns darüber sprechen.',
  cta: 'Kostenloses Erstgespräch',
  vertrauen: ['kostenlos', 'unverbindlich', 'feste Ansprechpartner', 'verständliche Kommunikation', 'verlässliche Rückmeldungen'],
  kreis: 'Fortschritt',
  slogan: 'Wir machen Veränderungen einfach.',
};

/** Produkte als eigene Karten (Talk 3818 Punkt 5). Website Service ist die hervorgehobene Karte (DW_UMSETZEN.karte).
 *  Nutzen = Zweck aus PRODUKTE; die kurzen Beschreibungen sind vorsichtige Vorschläge (beschreiben nur, was eine
 *  Kundenverwaltung bzw. App ist) und von Jamil zu bestätigen. */
export const DW_PRODUKTE = [
  { id: 'crm-handwerk', name: 'Kundenverwaltung für Handwerksbetriebe', nutzen: 'Ein CRM, gemacht für den Alltag im Handwerk.', text: 'Kunden und Anfragen übersichtlich an einem Ort.', icon: 'tools' as IconName },
  { id: 'crm-azav', name: 'Kundenverwaltung für AZAV-Bildungsträger', nutzen: 'Ein CRM für Bildungsträger mit AZAV-Zulassung.', text: 'Anfragen und Prozesse übersichtlich an einem Ort.', icon: 'book' as IconName },
  { id: 'apps', name: 'Apps für App Store und Google Play', nutzen: 'Zum Beispiel zur Prüfungsvorbereitung in Berufen.', text: 'Für Smartphone und Tablet, über App Store und Google Play.', icon: 'smartphone' as IconName },
];

/** Veränderungs-Check (Talk 3818 Punkt 3): je eine Frage nach Verstehen, Hinterfragen und Verlässlichkeit; 1 = kaum, 5 = sehr.
 *  Ergebnis kurz vor dem Kontakt: größte Stärke (niedrigster Wert), größter Engpass (höchster Wert) und größtes
 *  Potenzial (dort, wo der Engpass liegt). Keine Zahlen, nichts wird gesendet oder gespeichert. */
export const DW_CHECK = {
  titel: 'Ihr Veränderungsprofil',
  fragen: [
    {
      id: 'frage-1', nach: 'Verstehen', frage: 'Wie abhängig sind wichtige Prozesse von einzelnen Personen?',
      stufen: ['kaum', 'wenig', 'teils, teils', 'stark', 'sehr stark'],
      staerke: 'Wichtiges Wissen ist bei Ihnen gut verteilt. Prozesse hängen nicht an einzelnen Personen.',
      engpass: 'Wichtige Prozesse hängen an einzelnen Personen. Fällt jemand aus, bleibt vieles liegen.',
      potenzial: 'Prozesse festhalten und Wissen teilen, damit mehrere Personen sie übernehmen können.',
    },
    {
      id: 'frage-2', nach: 'Hinterfragen', frage: 'Wie oft wird über Lösungen gesprochen, bevor das eigentliche Problem verstanden wurde?',
      stufen: ['nie', 'selten', 'manchmal', 'oft', 'sehr oft'],
      staerke: 'Bei Ihnen wird zuerst das Problem verstanden und dann über Lösungen gesprochen.',
      engpass: 'Über Lösungen wird oft gesprochen, bevor das eigentliche Problem klar ist.',
      potenzial: 'Erst gemeinsam das Problem klären, dann entscheiden. Das spart Umwege.',
    },
    {
      id: 'frage-3', nach: 'Verlässlichkeit', frage: 'Wie oft müssen Sie nach einer Rückmeldung erneut nachfragen?',
      stufen: ['nie', 'selten', 'manchmal', 'oft', 'sehr oft'],
      staerke: 'Rückmeldungen kommen bei Ihnen verlässlich, ohne dass Sie nachfragen müssen.',
      engpass: 'Sie müssen oft nachfragen, bis eine Rückmeldung kommt.',
      potenzial: 'Feste Rückmeldezeiten und klare Zuständigkeiten, damit nichts liegen bleibt.',
    },
  ],
  ohneEngpass: 'Kein deutlicher Engpass: Bei Ihnen läuft schon vieles rund.',
  ohnePotenzial: 'Gute Voraussetzungen, um die nächste Veränderung ruhig anzugehen.',
  ohneStaerke: 'Sie sehen genau hin, wo es hakt. Das ist ein guter Ausgangspunkt.',
  cta: 'Über Ihr Profil sprechen',
};
