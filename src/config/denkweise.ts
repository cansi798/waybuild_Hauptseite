// Startseite „Denkweise“ – Texte aus Jamils Konzept (Talk 3798/3799, 30.10.2026), nur minimal geglättet.
// Kernsatz: Die Linie zeigt keinen Projektablauf, sondern die Waybuild-Denkweise:
// Idee → Verstehen → Hinterfragen → Vereinfachen → Umsetzen → Verbessern. Produkte sind mögliche Ergebnisse.
// Vorherige Startseite (Anfrage-Reise, Selbstcheck, Zusammenarbeit): Git-Tag startseite-v3-anfragereise-20261030.
import type { IconName } from './site';

export const DW_HERO = {
  titel: 'Wir machen Veränderungen einfach.',
  lead: 'Von der ersten Idee bis zur erfolgreichen Umsetzung. Wir helfen Unternehmen dabei, Veränderungen zu verstehen, sinnvoll zu gestalten und zuverlässig umzusetzen.',
  cta: 'Kostenloses Erstgespräch',
};

/** Die Reise im Hero: kleine Begriffe entlang der Linie */
export const DW_REISE: { wort: string; icon: IconName }[] = [
  { wort: 'Verstehen', icon: 'search' },
  { wort: 'Hinterfragen', icon: 'frage' },
  { wort: 'Vereinfachen', icon: 'spark' },
  { wort: 'Umsetzen', icon: 'rocket' },
  { wort: 'Verbessern', icon: 'chart' },
];

export const DW_IDEE = {
  titel: 'Jede Veränderung beginnt mit einer Idee.',
  zeilen: ['Eine Idee.', 'Ein Wunsch.', 'Eine Herausforderung.'],
  gefuehl: 'Oder einfach das Gefühl:',
  zitat: 'Das müsste doch einfacher gehen.',
  schluss: 'Genau dort beginnen die meisten Veränderungen.',
  /** Impulse: Position in Prozent der Bildfläche (440 × 400) */
  impulse: [
    { text: 'Neue Website', x: 24, y: 11 },
    { text: 'Bessere Zusammenarbeit', x: 76, y: 10 },
    { text: 'Mehr Anfragen', x: 19, y: 38 },
    { text: 'Weniger Aufwand', x: 81, y: 36 },
    { text: 'Neue Software', x: 23, y: 84 },
    { text: 'Mehr Übersicht', x: 77, y: 86 },
  ],
};

export const DW_VERSTEHEN = {
  titel: 'Bevor wir etwas verändern, möchten wir es verstehen.',
  einleitung: 'Bevor wir Empfehlungen geben oder Lösungen entwickeln, möchten wir verstehen:',
  punkte: ['wie Ihr Unternehmen arbeitet', 'welche Ziele wichtig sind', 'wie Entscheidungen entstehen', 'wo Reibung entsteht'],
  schluss: 'Denn nicht jede Herausforderung benötigt eine neue Lösung.',
  /** Begriffe rund um den Kreis (Bildfläche 440 × 420, Kreis um 220/210, r = 104) */
  begriffe: [
    { text: 'Unternehmen', x: 73, y: 15, kx: 278, ky: 124 },
    { text: 'Menschen', x: 87, y: 50, kx: 324, ky: 210 },
    { text: 'Ziele', x: 72, y: 86, kx: 278, ky: 296 },
    { text: 'Kommunikation', x: 25, y: 86, kx: 160, ky: 296 },
    { text: 'Abläufe', x: 12, y: 50, kx: 116, ky: 210 },
  ],
  mitte: 'Verständnis',
};

export const DW_HINTERFRAGEN = {
  titel: 'Wir setzen nicht einfach um.',
  zeilen: ['Nicht jede Herausforderung braucht eine neue Website.', 'Nicht jedes Problem braucht neue Software.', 'Manchmal liegt die eigentliche Verbesserung ganz woanders.'],
  schluss: 'Deshalb hinterfragen wir bestehende Ideen, Annahmen und Abläufe.',
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

export const DW_VEREINFACHEN = {
  titel: 'Aus Verständnis entsteht Orientierung.',
  zeilen: ['Wenn die eigentliche Ursache verstanden wurde, wird der Weg klarer.', 'Nicht komplizierter.'],
  ziel: ['Unser Ziel ist nicht mehr Technologie.', 'Unser Ziel ist weniger Reibung.'],
  nutzen: ['Weniger Aufwand', 'Mehr Klarheit', 'Schnellere Entscheidungen', 'Mehr Fortschritt'],
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
    text: 'Veränderungen an Ihrer Website einfach umsetzen.',
    punkte: ['Fester Ansprechpartner', 'Laufende Betreuung', 'Änderungen ohne Projektstress', 'Planbare Kosten'],
    // Preis wörtlich aus Jamils Konzept (Talk 3799); netto/brutto und 80 € statt 79 €: Frage b) an Jamil, Talk 3800
    preis: 'ab 80 € monatlich',
    cta: 'Mehr erfahren',
  },
};

export const DW_VERBESSERN = {
  titel: 'Veränderung hört nicht bei der Umsetzung auf.',
  zeilen: ['Gute Veränderungen brauchen Verantwortung, Struktur und Verlässlichkeit.', 'Deshalb bleiben wir nicht bei der Umsetzung stehen.', 'Wir helfen dabei, Veränderungen dauerhaft erfolgreich zu machen.'],
  kreis: ['Feedback', 'Lernen', 'Optimieren', 'Weiterentwickeln'],
};

export const DW_VERLAESSLICH = {
  titel: 'Veränderung darf nicht vom Zufall abhängen.',
  text: 'Damit Veränderungen zuverlässig vorankommen, braucht es klare Verantwortlichkeiten, nachvollziehbare Abläufe und verständliche Kommunikation.',
  pfeiler: [
    { titel: 'Klare Ansprechpartner', text: 'Sie wissen, wer sich kümmert.', icon: 'user' as IconName, zusatz: '' },
    // bestätigte Zusagen (Jamil, Talk 3720/3726): 1 Stunde in den Servicezeiten, spätestens nächster Werktag
    { titel: 'Verlässliche Rückmeldungen', text: 'Sie wissen, wie es weitergeht.', icon: 'clock' as IconName, zusatz: 'Während der Servicezeiten innerhalb einer Stunde eine erste Rückmeldung, spätestens am nächsten Werktag der nächste Schritt.' },
    { titel: 'Nachvollziehbare Abläufe', text: 'Nichts geht verloren.', icon: 'doc' as IconName, zusatz: '' },
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
    'Vielleicht einen Ablauf, der unnötig kompliziert geworden ist.',
    'Oder vielleicht möchten Sie einfach herausfinden, wo Potenzial verborgen liegt.',
  ],
  einladung: 'Lassen Sie uns darüber sprechen.',
  cta: 'Kostenloses Erstgespräch',
  vertrauen: ['kostenlos', 'unverbindlich', 'feste Ansprechpartner', 'verständliche Kommunikation', 'verlässliche Rückmeldungen'],
  kreis: 'Fortschritt',
  slogan: 'Wir machen Veränderungen einfach.',
};
