// Startseite „Denkweise“ – Texte aus Jamils Konzept (Talk 3798/3799, 30.10.2026), nur minimal geglättet.
// Kernsatz: Die Linie zeigt keinen Projektablauf, sondern die Waybuild-Denkweise:
// Idee → Verstehen → Hinterfragen → Entscheiden → Umsetzen → Verbessern (Entscheiden statt Vereinfachen: Talk 3939). Produkte sind mögliche Ergebnisse.
// Vorherige Startseite (Anfrage-Reise, Selbstcheck, Zusammenarbeit): Git-Tag startseite-v3-anfragereise-20261030.
import type { IconName } from './site';

export const DW_HERO = {
  // Talk 4101: neue Überschrift und Unterzeile (vorher „Wir machen Veränderungen einfach.“ – bleibt als Footer-Claim)
  titel: 'Digitale Lösungen, die zu Ihrem Unternehmen passen.',
  titelVor: 'Digitale Lösungen, die zu Ihrem Unternehmen ',
  titelAkzent: 'passen.',
  lead: 'Wir entwickeln keine Lösungen von der Stange. Wir verstehen Ihr Unternehmen, empfehlen den sinnvollsten Weg und setzen passende digitale Lösungen um.',
  // Vorschlag 2: kleine Zeile über der Überschrift; Vorschlag 7: zweiter Weg im Hero
  eyebrow: 'Websites und digitale Lösungen für Unternehmen',
  link: 'Website Service ansehen',
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
  { nr: 1, id: 'kapitel-1', titel: 'Gute Lösungen beginnen mit Verständnis', kern: 'Wir verstehen, bevor wir umsetzen.' }, // Talk 4035
  { nr: 2, id: 'kapitel-2', titel: 'Veränderungen umsetzen', kern: '' },
  { nr: 3, id: 'kapitel-3', titel: 'Unsere Prinzipien', kern: '' },   // Überschrift nicht sichtbar (Talk 4084), nur für Screenreader
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
  // Talk 4088: neue Texte (Überschrift und Kernsatz stehen jetzt nur noch hier, der Teil-Kopf darüber ist entfernt)
  titel: 'Gute Lösungen beginnen mit Verständnis.',
  unterzeile: 'Wir verstehen, bevor wir umsetzen.',
  einleitung: 'Bevor wir Empfehlungen geben oder digitale Lösungen entwickeln, möchten wir verstehen:',
  punkte: ['wie Menschen heute arbeiten', 'welche digitalen Werkzeuge sie nutzen', 'wo digitale Reibung entsteht', 'welche Ziele verfolgt werden'],
  dna: ['Aus diesen Erkenntnissen entsteht ein klares Bild Ihres Unternehmens.', 'Wir nennen es Ihre Unternehmens-DNA.'],
  dnaText: 'Sie hilft dabei, Entscheidungen nachvollziehbar zu treffen und digitale Lösungen zu entwickeln, die wirklich zu Ihrem Unternehmen passen.',
  /** Szene: diese Begriffe fließen in die Lupe, daraus entsteht die Unternehmens-DNA (Doppelstrang). Lage in
   *  viewBox-Einheiten der Bildfläche 440 × 440, Lupe bei 220/112. */
  begriffe: [
    { text: 'Menschen', x: 96, y: 52 },
    { text: 'Werkzeuge', x: 344, y: 52 },
    { text: 'Reibung', x: 84, y: 158 },
    { text: 'Ziele', x: 356, y: 158 },
  ],
  dnaLabel: 'Ihre Unternehmens-DNA',
  mitte: 'Verständnis',
};

export const DW_HINTERFRAGEN = {
  titel: 'Erst das Warum, dann das Wie.', // Talk 4069/4071
  // Talk 3818 Punkt 2: Botschaft, damit die Szene auf Anhieb verständlich ist
  botschaft: ['Die erste Idee ist oft erst der Anfang.'], // Talk 4075
  // Vorschlag 4: nicht die Website aussortieren, sondern den Neubau
  zeilen: ['Nicht jede Website muss neu gebaut werden.', 'Nicht jedes Problem braucht neue Software.', 'Manchmal liegt die eigentliche Verbesserung ganz woanders.'],
  schluss: 'Deshalb hinterfragen wir bestehende Ideen, Annahmen und Prozesse.',
  /** Szene nach Talk 4106: kurzer Dialog in Sprechblasen (links der Kunde, rechts waybuild), dann das Ergebnis.
   *  Die drei Punkte des Ergebnisses sind die Wege, die bei „Entscheiden“ abgewogen werden. */
  dialog: [
    { wer: 'kunde', text: 'Wir brauchen eine neue Website.' },
    { wer: 'waybuild', text: 'Warum? Was soll sie bewirken?' },
    { wer: 'kunde', text: 'Wir wollen mehr Anfragen.' },
    { wer: 'waybuild', text: 'Was bringt Ihnen mehr Anfragen?' },
  ] as { wer: 'kunde' | 'waybuild'; text: string }[],
  ergebnis: ['Klare Positionierung', 'Bessere Inhalte', 'Einfacher Anfrageprozess'],
  nichtUnbedingt: 'Nicht unbedingt eine komplett neue Website',
};

export const DW_ENTSCHEIDEN = {
  titel: 'Wir empfehlen, bevor wir umsetzen.', // Talk 4021
  zeilen: ['Nach dem Hinterfragen bleiben meist mehrere sinnvolle Wege.', 'Wir legen sie nebeneinander und fragen: Was bringt es? Wie viel Aufwand steckt darin? Was ist jetzt am wichtigsten?'],
  ziel: ['So entsteht eine klare Reihenfolge.', 'Sie entscheiden, und alle wissen, warum.'],
  nutzen: 'Nutzen',
  aufwand: 'Aufwand',
  /** Talk 4022: die drei Wege aus dem Hinterfragen nebeneinander; der mit dem meisten Nutzen und dem wenigsten
   *  Aufwand (rang 1) steht in der Mitte, dort läuft die Linie weiter. Werte sind nur Bild. */
  optionen: [
    { text: 'Positionierung', nutzen: 0.8, aufwand: 0.8, rang: 3 },
    { text: 'Anfrageprozess', nutzen: 0.9, aufwand: 0.35, rang: 1 },
    { text: 'Inhalte', nutzen: 0.7, aufwand: 0.45, rang: 2 },
  ],
  ergebnis: 'Zuerst',
};

export const DW_UMSETZEN = {
  titel: 'Aus Erkenntnissen entstehen Lösungen.',
  zeilen: ['Je nach Unternehmen entstehen unterschiedliche Lösungen.', 'Entscheidend ist, dass sie zum Ziel passt.'],
  // Vorschlag 3: Brücke von den drei Wegen zur Website (erklärt das Website-Bild daneben)
  bruecke: 'Positionierung, Inhalte und Anfrageprozess landen bei den meisten Unternehmen auf der Website. Deshalb fangen wir oft dort an, und vieles andere baut später darauf auf.',
  /** Seit Talk 4093 nicht mehr angezeigt (Umsetzen zeigt eine allgemeine „Lösung“). Talk 4024: nur der Website Service, darunter dezent „Weitere Produkte folgen.“ (folgt = Hinweis,
   *  kein Angebot). Software/Workplace/Cloud/Process Service zeigt Jamil derzeit nicht. */
  bereiche: [
    { name: 'Website Service', icon: 'layout' as IconName, hinweis: '', hervor: true, folgt: false },
    { name: 'Weitere Produkte folgen.', icon: 'spark' as IconName, hinweis: '', hervor: false, folgt: true },
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
  // Talk 4094: Kreislauf im Uhrzeigersinn ab 12 Uhr (oben, rechts, unten, links); vorher PDCA (Talk 4052)
  kreis: ['Feedback', 'Analysieren', 'Planen', 'Verbessern'],
  unterzeile: 'Feedback sammeln, auswerten, planen, verbessern. Und dann wieder von vorn.',
  // Story-Brücke von „Umsetzen“: die Lösung bleibt nach dem Start nicht stehen (belegt: hauptseite.ts, Website Service)
  text: 'Auch nach dem Start bleibt eine Lösung nicht stehen. Wir prüfen, was sie bewirkt, und verbessern sie Schritt für Schritt.',
};

/** Talk 4087: Statt „Verlässlichkeit“ stellen wir unsere drei Prinzipien vor (Jamils Reihenfolge und Wortlaut;
 *  „Prozesse“ statt „Abläufe“ nach der Sprachregel der Website, „Freigaben gehen“ grammatisch ergänzt). */
export const DW_PRINZIPIEN = {
  titel: 'Klarheit. Einfachheit. Verlässlichkeit.',
  liste: [
    {
      wort: 'Klarheit', icon: 'search' as IconName,
      kern: 'Sie wissen jederzeit, woran Sie sind.',
      text: ['Digitale Lösungen müssen kein Rätsel sein.', 'Wir erklären verständlich, zeigen nachvollziehbare Optionen und sprechen Klartext statt Fachsprache.'],
      einleitung: 'So wissen Sie jederzeit:',
      punkte: ['was gerade passiert', 'warum etwas empfohlen wird', 'welche Möglichkeiten es gibt', 'was der nächste Schritt ist'],
      schluss: 'Sie müssen kein IT-Experte sein, um Entscheidungen treffen zu können.',
    },
    {
      wort: 'Einfachheit', icon: 'arrow' as IconName,
      kern: 'Die Zusammenarbeit soll einfach sein.',
      text: ['Probleme melden, Änderungen anstoßen oder neue Ideen umsetzen sollte kein Projekt für sich sein.', 'Deshalb legen wir Wert darauf, dass jede Interaktion mit uns möglichst unkompliziert bleibt.'],
      einleitung: '',
      punkte: ['Eine Nachricht genügt.', 'Ein Screenshot reicht oft aus.', 'Änderungen müssen nicht durch viele Freigaben gehen.', 'Neue Ideen können schnell besprochen werden.'],
      schluss: 'Sie sollen sich auf Ihr Unternehmen konzentrieren können, nicht auf IT-Prozesse.',
    },
    {
      wort: 'Verlässlichkeit', icon: 'shield' as IconName,
      kern: 'Sie können sich darauf verlassen.',
      text: ['Digitale Lösungen funktionieren nur dann langfristig, wenn Verantwortlichkeiten, Kommunikation und Prozesse klar geregelt sind.'],
      einleitung: 'Deshalb sorgen wir für:',
      punkte: ['feste Ansprechpartner', 'nachvollziehbare Zuständigkeiten', 'verlässliche Rückmeldungen', 'dokumentierte Prozesse'],
      schluss: 'Damit nichts verloren geht und Sie wissen, dass sich jemand kümmert.',
    },
  ],
};

export const DW_ABSCHLUSS = {
  titel: 'Welche digitale Herausforderung möchten Sie lösen?', // Talk 4027
  // Talk 4102: so groß wie die Hero-Überschrift, Akzent auf dem letzten Wort wie im Hero („passen.“)
  titelVor: 'Welche digitale Herausforderung möchten Sie ',
  titelAkzent: 'lösen?',
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

/** Produkte als eigene Karten (Talk 3818 Punkt 5; Kundenverwaltung Handwerk entfernt, Talk 4025). Website Service ist die hervorgehobene Karte (DW_UMSETZEN.karte).
 *  Nutzen = Zweck aus PRODUKTE; die kurzen Beschreibungen sind vorsichtige Vorschläge (beschreiben nur, was eine
 *  Kundenverwaltung bzw. App ist) und von Jamil zu bestätigen. */
// Talk 4077: AZAV-Kundenverwaltung und Apps entfernt; weitere fertige Produkte kommen hier hinein.
export const DW_PRODUKTE: { id: string; name: string; nutzen: string; text: string; icon: IconName }[] = [
];

/** Vorschlag 5: Produktbereich trennt fertige Produkte und individuelle Lösungen (holt keine Service-Bereiche zurück).
 *  Beleg „individuelle Software auf Anfrage“: FAQ in site.ts und AGB. */
export const DW_PRODUKTBEREICH = {
  titel: 'Fertige Produkte und individuelle Lösungen',
  hauptprodukt: 'Unser Hauptprodukt',
  individuell: { name: 'Individuelle Software', kenn: 'Auf Anfrage', text: 'Passt kein fertiges Produkt? Dann entwickeln wir die Lösung für Ihr Unternehmen, zum Beispiel eigene Software.', icon: 'code' as IconName },
  folgt: 'Weitere Produkte folgen.',
};

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
