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
    preis: K.preis,   // wie auf der Startseite: „ab 79,99 € / Monat“ (drei Pakete seit 04.11.2026, /angebot/)
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
// 04.11.2026 (Can, Talk k8oxzjva, zwei Sprachnachrichten 17:57): feste Daueranzeigen („Wir suchen immer“) für
// IT-Freelancer, IT-Festanstellung, Büro, Dozenten (waybuild Akademie) und Initiativ; Benefits als Akrostichon
// W-A-Y-B-U-I-L-D. Ehrlich bleiben: keine Gehaltszahlen, keine erfundenen Benefits. Karriereseite in Du (Du-Kultur).
// Bewerbung per mailto an company.email mit Betreff je Stelle. Kein Formular.

export type Daueranzeige = {
  id: string;
  titel: string;
  kenn: string;          // Arbeitsform kurz (Kennzeile oben)
  text: string;
  listeTitel: string;    // „Aufgaben“, „Profil“, „Bereiche“ …
  punkte: string[];
  arbeitsform: string;
  betreff: string;
  icon: IconName;
  offen?: boolean;       // Initiativbewerbung: gestrichelte Karte
};

export type KarriereTexte = {
  kopf: { eyebrow: string; titelVor: string; titelAkzent: string; lead: string };
  ctaStellen: string;
  ctaWarum: string;
  stellen: { kenn: string; titel: string; text: string; arbeitsformLabel: string; button: string; buttonSr: string };
  anzeigen: Daueranzeige[];
  benefits: { kenn: string; titel: string; text: string; wortLabel: string; liste: { b: string; wort: string; rest: string; text: string }[] };
  bewerben: { kenn: string; titel: string; text: string; hinweis: string; betreff: string; cta: string; an: string };
  meta: { title: string; description: string; crumb: string };
};

/** Frühere Einzelstellen-Liste (leer); die Daueranzeigen stehen in KARRIERESEITE.anzeigen. */
export const STELLEN: { titel: string; art: string; ort: string; text: string }[] = [];

export const KARRIERESEITE: KarriereTexte = {
  kopf: {
    eyebrow: 'Karriere',
    titelVor: 'Arbeiten bei ',
    titelAkzent: 'Waybuild.',
    lead: 'Wir suchen immer gute Leute: in der IT, im Büro und für unsere Akademie. Wir arbeiten komplett remote und duzen uns. Bewirb dich einfach per E-Mail.',
  },
  ctaStellen: 'Stellen ansehen',
  ctaWarum: 'Warum Waybuild?',
  stellen: {
    kenn: 'Wir suchen immer',
    titel: 'Diese Stellen sind dauerhaft offen.',
    text: 'Du musst auf keine Ausschreibung warten. Such dir aus, was zu dir passt, und schreib uns.',
    arbeitsformLabel: 'Arbeitsform',
    button: 'Jetzt bewerben',
    buttonSr: 'als',
  },
  anzeigen: [
    {
      id: 'it-freelancer', icon: 'code', kenn: 'Freiberuflich · remote',
      titel: 'IT-Freelancer (m/w/d) – alle Bereiche',
      text: 'Du bist selbstständig in der IT unterwegs? Wir arbeiten gern langfristig mit Freelancern zusammen.',
      listeTitel: 'Bereiche',
      punkte: ['Webentwicklung und Software', 'IT-Administration, Cloud und Nextcloud', 'Support für unsere Kunden', 'Design, UX und Inhalte'],
      arbeitsform: 'Freiberuflich, projektbezogen, remote',
      betreff: 'Bewerbung: IT-Freelancer',
    },
    {
      id: 'it-festanstellung', icon: 'server', kenn: 'Festanstellung · remote',
      titel: 'IT-Fachkraft in Festanstellung (m/w/d)',
      text: 'Du willst fest in einem kleinen Team arbeiten und Lösungen von Anfang bis Ende mitgestalten.',
      listeTitel: 'Profil',
      punkte: ['Ausbildung, Studium oder vergleichbare Erfahrung in der IT', 'Erfahrung in Entwicklung, Administration oder Support', 'Du erklärst Technik verständlich', 'Du arbeitest gern selbstständig'],
      arbeitsform: 'Festanstellung, Umfang nach Absprache, remote',
      betreff: 'Bewerbung: IT-Festanstellung',
    },
    {
      id: 'buero', icon: 'folder', kenn: 'Anstellung · remote',
      titel: 'Büro und Verwaltung (m/w/d)',
      text: 'Du sorgst dafür, dass im Hintergrund alles läuft: Organisation, Kommunikation und Zahlen.',
      listeTitel: 'Aufgaben',
      punkte: ['Organisation und Terminabstimmung', 'Kommunikation mit Kunden und Partnern', 'Angebote, Rechnungen und Ablage vorbereiten', 'Arbeiten mit digitalen Werkzeugen statt Papier'],
      arbeitsform: 'Anstellung, Umfang nach Absprache, remote',
      betreff: 'Bewerbung: Büro und Verwaltung',
    },
    {
      id: 'dozenten', icon: 'book', kenn: 'Freiberuflich · waybuild Akademie',
      titel: 'Dozentinnen und Dozenten (m/w/d)',
      text: 'Du gibst dein Wissen gern weiter? Für die waybuild Akademie suchen wir laufend Lehrkräfte.',
      listeTitel: 'Einsätze',
      punkte: ['Aus- und Weiterbildung, Umschulung und Seminare', 'Kaufmännische Themen', 'IT-Themen', 'Fachwissen und Freude am Unterrichten'],
      arbeitsform: 'Freiberuflich, Einsätze nach Absprache',
      betreff: 'Bewerbung: Dozent/in',
    },
    {
      id: 'initiativ', icon: 'spark', kenn: 'Alles offen', offen: true,
      titel: 'Initiativbewerbung',
      text: 'Du passt in keine dieser Rollen, willst aber bei uns mitarbeiten? Erzähl uns, was du gut kannst und was du bei Waybuild machen möchtest.',
      listeTitel: '',
      punkte: [],
      arbeitsform: 'Nach Absprache',
      betreff: 'Initiativbewerbung',
    },
  ],
  benefits: {
    kenn: 'Warum Waybuild?',
    titel: 'Acht Buchstaben. Acht Gründe.',
    text: 'Unser Name verrät schon, was dich bei uns erwartet.',
    wortLabel: 'W, A, Y, B, U, I, L, D ergibt Waybuild',
    liste: [
      { b: 'W', wort: 'W', rest: 'o du willst', text: 'Wir arbeiten komplett remote. Du arbeitest dort, wo du gut arbeiten kannst.' },
      { b: 'A', wort: 'A', rest: 'ugenhöhe', text: 'Bei uns duzen sich alle. Kurze Wege zur Geschäftsführung, offenes Feedback in beide Richtungen.' },
      { b: 'Y', wort: 'Y', rest: 'our Ideas', text: 'Deine Ideen zählen. Wenn du einen besseren Weg siehst, probieren wir ihn aus.' },
      { b: 'B', wort: 'B', rest: 'eweglich', text: 'Flexible Arbeitszeiten nach Absprache. Ergebnisse zählen, nicht die Stechuhr.' },
      { b: 'U', wort: 'U', rest: 'nkompliziert', text: 'Wenig Bürokratie. Eine Nachricht genügt, Entscheidungen fallen schnell.' },
      { b: 'I', wort: 'I', rest: 'nnovativ', text: 'Moderne Werkzeuge und KI gehören bei uns zum Alltag.' },
      { b: 'L', wort: 'L', rest: 'ernen', text: 'Mit der waybuild Akademie haben wir Weiterbildung im eigenen Haus.' },
      { b: 'D', wort: 'D', rest: 'abei von Anfang an', text: 'Wir sind ein junges Start-up. Du baust mit auf und siehst, was deine Arbeit bewirkt.' },
    ],
  },
  bewerben: {
    kenn: 'So bewirbst du dich',
    titel: 'Eine E-Mail genügt.',
    text: 'Schreib uns kurz, wer du bist und welche Stelle dich interessiert.',
    hinweis: 'Lebenslauf und Zeugnisse als PDF genügen. Kein Anschreiben nötig.',
    betreff: 'Bewerbung',
    cta: 'Bewerbung per E-Mail',
    an: 'an',
  },
  meta: {
    title: 'Karriere: Jobs bei Waybuild, remote',
    description: 'Jobs bei Waybuild: Wir suchen immer IT-Freelancer, IT-Fachkräfte, Büro- und Verwaltungskräfte sowie Dozenten. Remote, Du-Kultur, Bewerbung per E-Mail.',
    crumb: 'Karriere',
  },
};
