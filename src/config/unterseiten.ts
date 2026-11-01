// Inhalte der Unterseiten Über uns, Produkte, Referenzen, Partner, Karriere (Jamil, Talk 4192, 01.11.2026).
// Regel: nur Fakten, die schon auf der Website, im Impressum oder in den Configs stehen. Keine erfundenen Kunden,
// Partner, Personen, Stellen oder Zahlen. Was fehlt, ist als Platzhalter markiert (Hint, nur solange SHOW_HINTS = true).
import type { IconName } from './site';
import { company, HOURS } from './site';
import { DW_HERO, DW_PRINZIPIEN, DW_PRODUKTBEREICH, DW_UMSETZEN } from './denkweise';
import { PRODUKTE, HALTUNG } from './hauptseite';

/* ─────────────── Über uns ─────────────── */
export const UEBER_UNS = {
  kopf: {
    eyebrow: 'Über uns',
    titelVor: 'Wir sind Waybuild aus ',
    titelAkzent: 'Norderstedt.',
    // Positionierung Vorschlag 1 (Talk 4065)
    lead: 'Wir entwickeln digitale Lösungen für Unternehmen, als fertiges Produkt oder individuell. Oft fangen wir mit der Website an.',
  },
  wer: {
    kenn: 'Wer wir sind',
    titel: 'Ein junges Unternehmen aus Norderstedt.',
    text: [
      // „klein, jung“: hauptseite.ts → STANDARDS (Jamil, Talk 2960); B2B: AGB § 1, FAQ
      `Waybuild ist eine UG (haftungsbeschränkt) mit Sitz in ${company.city}. Wir arbeiten ausschließlich für Unternehmen und Selbstständige.`,
      'Unser Hauptprodukt ist der Website Service. Passt kein fertiges Produkt, entwickeln wir individuelle Software. Weitere Produkte folgen.',
    ],
  },
  /** Steckbrief – alles aus company (Impressum) */
  fakten: [
    { icon: 'gebaeude' as IconName, label: 'Unternehmen', wert: company.legalName },
    { icon: 'pin' as IconName, label: 'Sitz', wert: `${company.street}, ${company.zip} ${company.city}` },
    { icon: 'doc' as IconName, label: 'Handelsregister', wert: `${company.registerCourt}, ${company.registerNumber}` },
    { icon: 'user' as IconName, label: 'Geschäftsführung', wert: company.managingDirector },
    { icon: 'users' as IconName, label: 'Für wen', wert: 'Unternehmen und Selbstständige (B2B)' },
    { icon: 'clock' as IconName, label: 'Servicezeiten', wert: HOURS },
  ],
  mission: {
    kenn: 'Wofür wir arbeiten',
    titel: DW_HERO.titel,
    text: [
      DW_HERO.lead,
      // Prinzipien Einfachheit („Eine Nachricht genügt.“) und Klarheit („Sie wissen jederzeit, woran Sie sind.“)
      'Die Zusammenarbeit soll dabei einfach bleiben. Eine Nachricht genügt, und Sie wissen jederzeit, woran Sie sind.',
    ],
    kernsatz: 'Wir verstehen, bevor wir umsetzen.',
    // Haltung, wörtlich aus Jamils Design-Briefing (Talk 3636)
    haltung: HALTUNG.slice(0, 3).map((h) => h.titel),
  },
  denkweise: {
    kenn: 'Unsere Denkweise',
    titel: 'Vom Impuls zur passenden Lösung.',
    text: [
      'Jede Veränderung beginnt mit einem Impuls: einer Idee, einem Wunsch oder einem Problem.',
      'Danach gehen wir immer dieselben Schritte. Wir verstehen Ihr Unternehmen, hinterfragen Annahmen, empfehlen einen Weg, setzen ihn um und verbessern die Lösung auch nach dem Start.',
    ],
    link: 'Die Denkweise ausführlich',
  },
  prinzipien: DW_PRINZIPIEN,
  team: {
    titel: 'Die Menschen hinter Waybuild',
    // wörtlich aus Jamils Design-Briefing (Talk 3636, „Menschen hinter Waybuild“)
    text: 'Wenn Sie Waybuild schreiben, landen Sie nicht anonym in einem System. Sie sprechen mit Menschen, die Ihr Anliegen verstehen und Verantwortung für den nächsten Schritt übernehmen.',
    // Nur Namen, die schon im Impressum stehen. Fotos: Platzhalter, bis echte Fotos vorliegen (keine Stockfotos).
    // 01.11.2026 (Jamil, Talk 4208): Jamil Iqbal mit Foto-Platzhalter neben Can. Seine Rolle steht weder im Impressum noch
    // auf einer Seite → als Platzhalter markiert (rolleFehlt), bis Jamil sie nennt.
    personen: [
      { name: company.managingDirector, rolle: 'Geschäftsführer', rolleFehlt: false, foto: '' },
      { name: 'Jamil Iqbal', rolle: 'Rolle folgt', rolleFehlt: true, foto: '' },
    ],
  },
};

/* ─────────────── Produkte ─────────────── */
const K = DW_UMSETZEN.karte;
export const PRODUKTSEITE = {
  kopf: {
    eyebrow: 'Produkte',
    titelVor: 'Fertige Produkte und individuelle ',
    titelAkzent: 'Lösungen.',
    lead: 'Wir entwickeln digitale Lösungen für Unternehmen, als fertiges Produkt oder individuell. Oft fangen wir mit der Website an.',
  },
  titel: 'Unsere Produkte',
  website: {
    id: 'website-service', kenn: DW_PRODUKTBEREICH.hauptprodukt, name: K.titel, icon: 'layout' as IconName,
    nutzen: PRODUKTE[0].nutzen ?? '', text: K.text, punkte: K.punkte,
    preis: K.preis,   // wie auf der Startseite (Talk 4176); /angebot/ zeigt noch 79 € / 139 € – offen bei Jamil
    cta: K.cta, pfad: '/angebot/',
  },
  individuell: {
    id: 'individuell', kenn: DW_PRODUKTBEREICH.individuell.kenn, name: DW_PRODUKTBEREICH.individuell.name, icon: DW_PRODUKTBEREICH.individuell.icon,
    text: DW_PRODUKTBEREICH.individuell.text, cta: 'Anfragen', pfad: '/kontakt/?leistung=individuelle-software',
  },
  folgt: {
    name: DW_PRODUKTBEREICH.folgt, icon: 'spark' as IconName,
    text: 'Wir arbeiten an weiteren fertigen Produkten. Sobald eines verfügbar ist, stellen wir es hier vor.',
  },
  fuerAlle: {
    kenn: 'Für alle Produkte',
    titel: 'Was für alle Produkte gilt.',
    // aus hauptseite.ts → QUALITAETEN / VERTRAUEN (von Jamil bestätigt, Talk 3694/3726)
    punkte: [
      { icon: 'user' as IconName, titel: 'Ein fester Ansprechpartner', text: 'Sie müssen Ihre Situation nicht bei jeder Anfrage neu erklären.' },
      { icon: 'clock' as IconName, titel: 'Schnelle Rückmeldung', text: 'Während der Servicezeiten bekommen Sie innerhalb einer Stunde eine erste Rückmeldung.' },
      { icon: 'euro' as IconName, titel: 'Transparente Preise', text: 'Keine versteckten Kosten, Extras nur nach Absprache.' },
      { icon: 'doc' as IconName, titel: 'Nichts geht verloren', text: 'Jedes Anliegen wird dokumentiert und verfolgt, bis es abgeschlossen ist.' },
    ],
    link: 'Unsere Zusagen im Detail',
  },
};

/* ─────────────── Referenzen ─────────────── */
export type Referenz = {
  id: string;
  name: string;
  branche: string;
  leistung: string;
  text: string;
  url?: string;
  /** Nur mit schriftlicher Freigabe des Kunden auf true setzen – erst dann erscheint der Eintrag. */
  freigegeben: boolean;
};

/** Vorbereitete Einträge (Jamil, Talk 4192). Solange freigegeben = false, erscheint davon NICHTS auf der Website
 *  (auch nicht im HTML). Name, Branche und Kurztext erst nach Zustimmung des Kunden eintragen –
 *  das Repo ist öffentlich, deshalb stehen hier vorher keine Kundennamen. */
export const REFERENZEN: Referenz[] = [
  { id: 'referenz-1', name: 'TODO', branche: 'TODO', leistung: 'Website', text: 'TODO', freigegeben: false },
  { id: 'referenz-2', name: 'TODO', branche: 'TODO', leistung: 'Website', text: 'TODO', freigegeben: false },
  { id: 'referenz-3', name: 'TODO', branche: 'TODO', leistung: 'Website', text: 'TODO', freigegeben: false },
  { id: 'referenz-4', name: 'TODO', branche: 'TODO', leistung: 'Website', text: 'TODO', freigegeben: false },
];
export const sichtbareReferenzen = () => REFERENZEN.filter((r) => r.freigegeben && !r.text.startsWith('TODO'));

export const REFERENZSEITE = {
  kopf: {
    eyebrow: 'Referenzen',
    titelVor: 'Unsere ',
    titelAkzent: 'Referenzen.',
    lead: 'Hier stellen wir Projekte vor, die wir mit Unternehmen umgesetzt haben. Einen Kunden nennen wir erst, wenn er zugestimmt hat.',
  },
  titel: 'Ausgewählte Projekte',
  platzhalter: { titel: 'Referenz folgt', text: 'Freigabe ausstehend' },
  anzahlPlatzhalter: 3,
  hinweis: 'Sie möchten vorab sehen, wie wir arbeiten? Fragen Sie im Erstgespräch nach Beispielen, die zu Ihrer Aufgabe passen.',
};

/* ─────────────── Partner ─────────────── */
/** 01.11.2026 (Jamil, Talk 4208: noch keine Partner): Die Seite ist eine kurze Einladung „Partner werden“.
 *  Keine leeren Plätze, keine Logos. Partner erst nennen, wenn eine Partnerschaft besteht und der Partner zustimmt. */
export const PARTNERSEITE = {
  kopf: {
    eyebrow: 'Partner',
    titelVor: 'Partner von Waybuild ',
    titelAkzent: 'werden.',
    lead: 'Sie unterstützen Unternehmen mit etwas, das gut zu unseren Produkten passt? Dann sprechen wir gern darüber, wie eine Zusammenarbeit aussehen kann.',
  },
  werden: {
    kenn: 'Partner werden',
    titel: 'Erzählen Sie uns, was Sie machen.',
    text: 'Eine kurze Nachricht genügt: Wer Sie sind, was Sie anbieten und wo Sie eine gemeinsame Chance sehen. Wir melden uns spätestens am nächsten Werktag.',
    betreff: 'Partnerschaft',
    // aus den drei Prinzipien der Startseite abgeleitet
    wichtig: 'Was uns in einer Zusammenarbeit wichtig ist',
    punkte: [
      { icon: 'search' as IconName, titel: 'Klarheit', text: 'Unsere Kunden wissen jederzeit, wer zuständig ist.' },
      { icon: 'arrow' as IconName, titel: 'Einfachheit', text: 'Für unsere Kunden bleibt die Zusammenarbeit einfach, auch wenn mehrere mitarbeiten.' },
      { icon: 'shield' as IconName, titel: 'Verlässlichkeit', text: 'Was wir zusagen, gilt auch, wenn ein Partner beteiligt ist.' },
    ],
  },
};

/* ─────────────── Karriere ─────────────── */
/** Offene Stellen – leer lassen, solange niemand gesucht wird. Keine erfundenen Stellen. */
export const STELLEN: { titel: string; art: string; ort: string; text: string }[] = [];

export const KARRIERESEITE = {
  kopf: {
    eyebrow: 'Karriere',
    titelVor: 'Arbeiten bei ',
    titelAkzent: 'Waybuild.',
    lead: 'Gerade haben wir keine offenen Stellen. Initiativbewerbungen lesen wir trotzdem gern. Wir arbeiten komplett remote.',
  },
  stellen: {
    kenn: 'Offene Stellen',
    leer: 'Aktuell keine offenen Stellen.',
    leerText: 'Sobald wir jemanden suchen, steht die Stelle hier.',
  },
  arbeit: {
    kenn: 'So arbeiten wir',
    titel: 'Was die Arbeit bei uns prägt.',
    // aus Denkweise, Prinzipien und FAQ („Welche Rolle spielt KI?“)
    punkte: [
      { icon: 'search' as IconName, titel: 'Erst verstehen, dann umsetzen', text: 'Wir fragen nach dem Warum, bevor wir etwas bauen.' },
      { icon: 'chat' as IconName, titel: 'Klartext', text: 'Wir erklären verständlich und sprechen Klartext statt Fachsprache.' },
      { icon: 'arrow' as IconName, titel: 'Einfache Wege', text: 'Eine Nachricht genügt. Änderungen müssen nicht durch viele Freigaben gehen.' },
      { icon: 'shield' as IconName, titel: 'Verlässlichkeit', text: 'Feste Zuständigkeiten und dokumentierte Prozesse, damit nichts verloren geht.' },
      { icon: 'spark' as IconName, titel: 'Moderne Werkzeuge', text: 'Bei der Umsetzung helfen uns KI-gestützte Werkzeuge.' },
      // Jamil, Talk 4208
      { icon: 'globe' as IconName, titel: 'Komplett remote', text: 'Wir arbeiten ortsunabhängig. Abstimmung läuft digital.' },
    ],
  },
  bewerben: {
    kenn: 'Initiativ bewerben',
    titel: 'Sie möchten bei uns mitarbeiten?',
    text: 'Schreiben Sie uns, wer Sie sind, was Sie gut können und was Sie bei Waybuild machen möchten.',
    betreff: 'Initiativbewerbung',
    cta: 'Bewerbung per E-Mail',
  },
};
