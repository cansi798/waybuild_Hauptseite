// Startseite „Komplettes Umdenken“ (Jamil, Talk k8oxzjva #4544, 04.11.2026: „komplettes umdenken. bitte so umsetzen“).
// Alle Texte WÖRTLICH aus Jamils Briefing (nur Darstellung angepasst: Zeilen als Listen, ✅ als Haken-Symbol).
// Interne Hinweise aus dem Briefing (Zweck, „Später ergänzen mit …“, „Finale Bewertung“) stehen bewusst NICHT auf der Seite.
// Vorherige Startseite „Denkweise“: Branch vor-umdenken-20261104 (Quelle) bzw. vor-umdenken-20261104-main (gebaute Seite).
import type { IconName } from './site';

export type Frage = { frage: string; antwort: string[] };

/** 1. Hero */
export const HS_HERO = {
  titel: ['Wir übernehmen Verantwortung.', 'Sie behalten den '],
  titelAkzent: 'Fokus.',
  sub: [
    'Digitale Projekte scheitern selten an der Technik.',
    'Oft fehlen klare Empfehlungen, schnelle Entscheidungen und jemand, der Verantwortung übernimmt.',
  ],
  sub2: 'Waybuild entwickelt Lösungen und sorgt dafür, dass die Zusammenarbeit einfach, verständlich und verlässlich bleibt.',
  ctaPrimaer: 'Produkte entdecken',
  ctaSekundaer: 'Warum Waybuild?',
  // Hero-Animation: Ausgangssituation (links) → Transformation → Endzustand (rechts)
  netz: ['offene Aufgaben', 'Rückfragen', 'Abstimmungen', 'Wartezeiten', 'Entscheidungspunkte'],
  ergebnis: ['Verantwortung', 'Klarheit', 'Fortschritt'],
  darunter: 'Weniger Aufwand. Mehr Fokus.',
};

/** 2. Warum es Waybuild gibt */
export const HS_WARUM = {
  titel: 'Gute Lösungen sollten Unternehmen entlasten.',
  einleitung: ['Viele Unternehmen investieren Zeit, Geld und Energie in neue Lösungen.', 'Trotzdem entstehen häufig dieselben Probleme:'],
  probleme: [
    'zu viele Abstimmungen',
    'unnötige Komplexität',
    'unklare Empfehlungen',
    'fehlende Verantwortung',
    'Lösungen, die nicht wirklich zum Unternehmen passen',
  ],
  ursache: ['Das Problem liegt oft nicht in der Technik.', 'Es entsteht, wenn niemand das große Ganze betrachtet.'],
  ziel: 'Deshalb entwickelt Waybuild Lösungen mit einem klaren Ziel:',
  zielSatz: 'Unternehmen voranbringen und gleichzeitig entlasten.',
  bereiche: [
    { text: 'Website', icon: 'layout' },
    { text: 'Software', icon: 'code' },
    { text: 'IT', icon: 'server' },
    { text: 'Kommunikation', icon: 'chat' },
    { text: 'Support', icon: 'user' },
    { text: 'digitale Abläufe', icon: 'ablauf' },
  ] as { text: string; icon: IconName }[],
  frage: { frage: 'Warum sollte ich euch vertrauen?', antwort: ['Weil Waybuild nicht nur liefert.', 'Waybuild übernimmt Verantwortung.'] } as Frage,
};

/** 3. Für wen Waybuild gemacht ist */
export const HS_FUER_WEN = {
  titel: 'Für Unternehmen, die mehr erwarten.',
  zeilen: ['Manche Unternehmen suchen einen Anbieter.', 'Andere suchen einen Partner.'],
  text: 'Waybuild richtet sich an Unternehmen, die Wert auf Qualität, klare Empfehlungen und verlässliche Zusammenarbeit legen.',
  nachsatz: ['An Unternehmen, die nicht einfach nur etwas umgesetzt haben möchten.', 'Sondern eine Lösung, die wirklich zu ihnen passt.'],
  erwartungenTitel: 'Typische Erwartungen',
  erwartungen: [
    'Jemand denkt mit',
    'Jemand übernimmt Verantwortung',
    'Empfehlungen sind nachvollziehbar',
    'Kommunikation funktioniert unkompliziert',
    'Ergebnisse stehen über Funktionen',
  ],
  frage: { frage: 'Bin ich hier richtig?', antwort: ['Wenn Sie mehr als reine Umsetzung erwarten: Ja.'] } as Frage,
};

/** 4. Wofür Waybuild steht */
export const HS_HALTUNG = {
  titel: 'Unser Anspruch ist größer als ein einzelnes Produkt.',
  zeilen: ['Technologien verändern sich.', 'Produkte verändern sich.', 'Anforderungen verändern sich.'],
  bleibt: 'Unsere Grundsätze bleiben.',
  grundsaetze: [
    { wort: 'Verantwortung', icon: 'shield', text: ['Wir setzen nicht einfach Anforderungen um.', 'Wir denken mit, hinterfragen und empfehlen den sinnvollsten Weg.'] },
    { wort: 'Qualität', icon: 'stern', text: ['Wir entwickeln Lösungen, die langfristig funktionieren und nicht nur kurzfristig beeindrucken.'] },
    { wort: 'Einfachheit', icon: 'layers', text: ['Wir halten Entscheidungen, Kommunikation und Zusammenarbeit so unkompliziert wie möglich.'] },
    { wort: 'Verlässlichkeit', icon: 'clock', text: ['Wir bleiben erreichbar und begleiten unsere Kunden auch über die Umsetzung hinaus.'] },
  ] as { wort: string; icon: IconName; text: string[] }[],
  ende: 'Eine Haltung. Viele Lösungen.',
  frage: { frage: 'Wodurch unterscheidet ihr euch?', antwort: ['Nicht durch Technologie.', 'Sondern durch Verantwortung, Qualität, Einfachheit und Verlässlichkeit.'] } as Frage,
};

/** 5. So soll sich Zusammenarbeit anfühlen */
export const HS_ZUSAMMENARBEIT = {
  titel: 'Gute Zusammenarbeit sollte einfach sein.',
  text: [
    'Digitale Projekte müssen nicht kompliziert sein.',
    'Wir gestalten Zusammenarbeit so, dass Entscheidungen leichter werden, Kommunikation funktioniert und Fortschritt sichtbar bleibt.',
  ],
  erlebenTitel: 'Was Kunden erleben',
  erleben: [
    'schnelle Rückmeldungen',
    'feste Ansprechpartner',
    'pragmatische Kommunikation',
    'verständliche Empfehlungen',
    'nachvollziehbare Entscheidungen',
    'wenig organisatorischen Aufwand',
    'langfristige Betreuung',
  ],
  zusatz: ['Nicht jeder Kunde benötigt denselben Weg.', 'Aber jeder Kunde verdient dieselbe Aufmerksamkeit.'],
  eingang: [
    { text: 'Aufgaben', icon: 'check' },
    { text: 'Dokumente', icon: 'doc' },
    { text: 'Ideen', icon: 'idee' },
    { text: 'Änderungswünsche', icon: 'pen' },
    { text: 'Nachrichten', icon: 'chat' },
  ] as { text: string; icon: IconName }[],
  struktur: [
    { text: 'offene Themen', icon: 'folder' },
    { text: 'nächste Schritte', icon: 'arrow' },
    { text: 'Entscheidungen', icon: 'target' },
    { text: 'erledigte Aufgaben', icon: 'check' },
  ] as { text: string; icon: IconName }[],
  frage: { frage: 'Wie wird die Zusammenarbeit aussehen?', antwort: ['Einfach, nachvollziehbar und verlässlich.'] } as Frage,
};

/** 6. Wie wir Entscheidungen treffen (bewusst vor den Produkten) */
export const HS_ENTSCHEIDUNGEN = {
  titel: 'Verstehen. Empfehlen. Umsetzen.',
  einleitung: 'Jede Herausforderung beginnt mit denselben Fragen:',
  fragen: ['Was möchten Sie erreichen?', 'Was funktioniert bereits gut?', 'Was steht im Weg?', 'Welche Lösung ergibt wirklich Sinn?'],
  danach: 'Erst danach empfehlen wir den nächsten Schritt.',
  stationen: [
    { wort: 'Verstehen', icon: 'search', text: 'Wir lernen Ziele, Anforderungen und Zusammenhänge kennen.' },
    { wort: 'Empfehlen', icon: 'compass', text: 'Wir entwickeln den sinnvollsten Lösungsweg.' },
    { wort: 'Umsetzen', icon: 'rocket', text: 'Wir liefern hochwertige Ergebnisse und begleiten langfristig.' },
  ] as { wort: string; icon: IconName; text: string }[],
  frage: { frage: 'Arbeitet ihr einfach Anforderungen ab?', antwort: ['Nein.', 'Wir verstehen zuerst und empfehlen anschließend den sinnvollsten Weg.'] } as Frage,
};

/** 7. Unsere Lösungen */
export const HS_LOESUNGEN = {
  titel: 'Unsere Lösungen folgen denselben Prinzipien.',
  text: ['Ganz gleich, welches Produkt oder welcher Service genutzt wird:', 'Die Grundlage bleibt dieselbe.'],
  prinzipien: ['Verantwortung', 'Qualität', 'Einfachheit', 'Verlässlichkeit'],
  produkte: [
    { name: 'Website Service', icon: 'layout', text: ['Moderne Unternehmenswebsites mit Fokus auf Verständlichkeit, Vertrauen und Nutzerfreundlichkeit.'], link: 'Mehr erfahren', pfad: '/angebot/' },
    { name: 'Individuelle Software', icon: 'code', text: ['Digitale Werkzeuge, die sich an Menschen und Arbeitsweisen anpassen.', 'Nicht umgekehrt.'], link: 'Mehr erfahren', pfad: '/produkte/#individuell' },
    { name: 'Weitere Lösungen', icon: 'spark', text: ['Neue Lösungen entstehen kontinuierlich auf derselben Grundlage.'], link: 'Alle Lösungen ansehen', pfad: '/produkte/' },
  ] as { name: string; icon: IconName; text: string[]; link: string; pfad: string }[],
  ende: 'Viele Lösungen. Eine Philosophie.',
  frage: { frage: 'Was bietet Waybuild konkret an?', antwort: ['Verschiedene Lösungen.', 'Eine gemeinsame Denkweise.'] } as Frage,
};

/** 8. Projekte und Ergebnisse – noch ohne freigegebene Referenzen: nur der Ablauf als Grafik (keine erfundenen Stimmen/Zahlen) */
export const HS_ERGEBNISSE = {
  titel: 'Gute Lösungen zeigen ihre Wirkung.',
  zeilen: ['Am Ende zählen keine Funktionen.', 'Am Ende zählen Ergebnisse.'],
  ablauf: ['Ausgangssituation', 'Analyse', 'Empfehlung', 'Umsetzung', 'Ergebnis'],
  frage: { frage: 'Funktioniert das wirklich?', antwort: ['Hier zeigen wir den Nachweis.'] } as Frage,
};

/** 9. Darauf können Sie sich verlassen */
export const HS_VERLASSEN = {
  titel: 'Das dürfen Sie von Waybuild erwarten.',
  erwartungen: [
    'feste Ansprechpartner',
    'schnelle Rückmeldungen',
    'klare Kommunikation',
    'nachvollziehbare Empfehlungen',
    'langfristige Betreuung',
    'möglichst wenig organisatorischen Aufwand',
    'Lösungen statt zusätzlicher Komplexität',
  ],
  zusatz: ['Gute Lösungen entstehen nicht durch mehr Abstimmungen.', 'Sie entstehen durch Verständnis, Verantwortung und konsequente Umsetzung.'],
};

/** 10. Abschluss */
export const HS_ABSCHLUSS = {
  titelVor: 'Welche Herausforderung möchten Sie ',
  titelAkzent: 'lösen?',
  text: ['Ob Website, Software, IT-Service oder eine neue Idee:', 'Wir helfen Unternehmen dabei, die passende Lösung zu finden und erfolgreich umzusetzen.'],
  ctaPrimaer: 'Produkte entdecken',
  ctaSekundaer: 'Gespräch vereinbaren',
};

/** Footer-Markenstatement (gilt seitenweit) */
export const HS_MARKE = {
  name: 'Waybuild',
  statement: 'Anspruchsvolle Lösungen. Überraschend einfach umgesetzt.',
  kurz: 'Waybuild entwickelt durchdachte Lösungen und übernimmt Verantwortung dafür, dass Projekte und Zusammenarbeit für Kunden möglichst einfach, verständlich und verlässlich bleiben.',
};
