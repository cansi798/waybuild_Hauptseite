// Englische Fassung (Can, Talk k8oxzjva #4551, 04.11.2026): Startseite, Produkte, Über uns, Karriere, Kontakt.
// Natürliche Übersetzungen, sinngemäß statt Wort für Wort; gleiche Form wie die deutschen Texte, damit Aufbau und
// Animationen wiederverwendet werden. Keine Paket- bzw. Abo-Namen (Jamil, Talk 4554/4555). Rechtstexte bleiben deutsch.
import type { IconName } from './site';
import { company } from './site';
import type { HsTexte, Frage } from './startseite';
import type { KarriereTexte } from './unterseiten';

export const BESCHREIBUNG_EN = 'We take responsibility. You stay focused. Waybuild develops solutions and keeps collaboration simple, clear and reliable.';
export const META_START_EN = 'We take responsibility. You stay focused. Waybuild builds digital solutions for businesses across Germany, Austria and Switzerland.';
export const HOURS_EN = 'Monday to Friday, 9 am to 6 pm (CET)';

/* ─────────────── Startseite ─────────────── */
export const HS_EN: HsTexte = {
  HERO: {
    titel: ['We take responsibility.', 'You stay '],
    titelAkzent: 'focused.',
    sub: [
      'Digital projects rarely fail because of technology.',
      'What is often missing are clear recommendations, quick decisions and someone who takes responsibility.',
    ],
    sub2: 'Waybuild develops solutions and makes sure that working together stays simple, clear and reliable.',
    ctaPrimaer: 'Explore our products',
    ctaSekundaer: 'Why Waybuild?',
    netz: ['open tasks', 'queries', 'meetings', 'waiting times', 'decision points'],
    ergebnis: ['Responsibility', 'Clarity', 'Progress'],
    darunter: 'Less effort. More focus.',
  },
  WARUM: {
    titel: 'Good solutions should take the load off businesses.',
    einleitung: ['Many businesses invest time, money and energy in new solutions.', 'And yet the same problems keep coming up:'],
    probleme: [
      'too many alignment meetings',
      'unnecessary complexity',
      'unclear recommendations',
      'nobody taking responsibility',
      'solutions that don’t really fit the business',
    ],
    ursache: ['The problem is rarely the technology.', 'It starts when nobody looks at the bigger picture.'],
    ziel: 'That is why Waybuild develops solutions with one clear goal:',
    zielSatz: 'moving businesses forward while taking work off their plate.',
    bereiche: [
      { text: 'Website', icon: 'layout' },
      { text: 'Software', icon: 'code' },
      { text: 'IT', icon: 'server' },
      { text: 'Communication', icon: 'chat' },
      { text: 'Support', icon: 'user' },
      { text: 'digital processes', icon: 'ablauf' },
    ] as { text: string; icon: IconName }[],
    frage: { frage: 'Why should I trust you?', antwort: ['Because Waybuild doesn’t just deliver.', 'Waybuild takes responsibility.'] } as Frage,
  },
  FUER_WEN: {
    titel: 'For businesses that expect more.',
    zeilen: ['Some businesses are looking for a supplier.', 'Others are looking for a partner.'],
    text: 'Waybuild is for businesses that value quality, clear recommendations and reliable collaboration.',
    nachsatz: ['For businesses that don’t just want something built.', 'But a solution that truly fits them.'],
    erwartungenTitel: 'What our clients expect',
    erwartungen: [
      'Someone who thinks along',
      'Someone who takes responsibility',
      'Recommendations that make sense',
      'Communication without hassle',
      'Results over features',
    ],
    frage: { frage: 'Am I in the right place?', antwort: ['If you expect more than just execution: yes.'] } as Frage,
  },
  HALTUNG: {
    titel: 'Our ambition is bigger than any single product.',
    zeilen: ['Technologies change.', 'Products change.', 'Requirements change.'],
    bleibt: 'Our principles stay the same.',
    grundsaetze: [
      { wort: 'Responsibility', icon: 'shield', text: ['We don’t just implement requirements.', 'We think along, ask questions and recommend the most sensible way forward.'] },
      { wort: 'Quality', icon: 'stern', text: ['We build solutions that work in the long run, not ones that only impress in the short term.'] },
      { wort: 'Simplicity', icon: 'layers', text: ['We keep decisions, communication and collaboration as straightforward as possible.'] },
      { wort: 'Reliability', icon: 'clock', text: ['We stay reachable and support our clients well beyond delivery.'] },
    ] as { wort: string; icon: IconName; text: string[] }[],
    ende: 'One attitude. Many solutions.',
    frage: { frage: 'What makes you different?', antwort: ['Not technology.', 'But responsibility, quality, simplicity and reliability.'] } as Frage,
  },
  ZUSAMMENARBEIT: {
    titel: 'Working together should be simple.',
    text: [
      'Digital projects don’t have to be complicated.',
      'We shape collaboration so that decisions get easier, communication works and progress stays visible.',
    ],
    erlebenTitel: 'What clients experience',
    erleben: [
      'quick responses',
      'a dedicated contact person',
      'pragmatic communication',
      'clear recommendations',
      'decisions you can follow',
      'little organisational effort',
      'long-term support',
    ],
    zusatz: ['Not every client needs the same path.', 'But every client deserves the same attention.'],
    eingang: [
      { text: 'Tasks', icon: 'check' },
      { text: 'Documents', icon: 'doc' },
      { text: 'Ideas', icon: 'idee' },
      { text: 'Change requests', icon: 'pen' },
      { text: 'Messages', icon: 'chat' },
    ] as { text: string; icon: IconName }[],
    struktur: [
      { text: 'open topics', icon: 'folder' },
      { text: 'next steps', icon: 'arrow' },
      { text: 'decisions', icon: 'target' },
      { text: 'completed tasks', icon: 'check' },
    ] as { text: string; icon: IconName }[],
    frage: { frage: 'What will working together look like?', antwort: ['Simple, transparent and reliable.'] } as Frage,
  },
  ENTSCHEIDUNGEN: {
    titel: 'Understand. Recommend. Deliver.',
    einleitung: 'Every challenge starts with the same questions:',
    fragen: ['What do you want to achieve?', 'What already works well?', 'What is standing in the way?', 'Which solution really makes sense?'],
    danach: 'Only then do we recommend the next step.',
    stationen: [
      { wort: 'Understand', icon: 'search', text: 'We get to know your goals, your requirements and how everything fits together.' },
      { wort: 'Recommend', icon: 'compass', text: 'We work out the most sensible way forward.' },
      { wort: 'Deliver', icon: 'rocket', text: 'We deliver high-quality results and stay by your side for the long term.' },
    ] as { wort: string; icon: IconName; text: string }[],
    frage: { frage: 'Do you just work through a list of requirements?', antwort: ['No.', 'We understand first, then recommend the most sensible path.'] } as Frage,
  },
  LOESUNGEN: {
    titel: 'All our solutions follow the same principles.',
    text: ['Whichever product or service you use:', 'the foundation stays the same.'],
    prinzipien: ['Responsibility', 'Quality', 'Simplicity', 'Reliability'],
    produkte: [
      { name: 'Website Service', icon: 'layout', text: ['Modern business websites built for clarity, trust and ease of use.'], link: 'Learn more', pfad: '/produkte/#website-service' },
      { name: 'Custom software', icon: 'code', text: ['Digital tools that adapt to people and the way they work.', 'Not the other way round.'], link: 'Learn more', pfad: '/produkte/#individuell' },
      { name: 'More solutions', icon: 'spark', text: ['New solutions keep emerging on the same foundation.'], link: 'See all solutions', pfad: '/produkte/' },
    ] as { name: string; icon: IconName; text: string[]; link: string; pfad: string }[],
    ende: 'Many solutions. One philosophy.',
    frage: { frage: 'What exactly does Waybuild offer?', antwort: ['Different solutions.', 'One shared way of thinking.'] } as Frage,
  },
  ERGEBNISSE: {
    titel: 'Good solutions show their impact.',
    zeilen: ['In the end, features don’t count.', 'Results do.'],
    ablauf: ['Starting point', 'Analysis', 'Recommendation', 'Implementation', 'Result'],
    frage: { frage: 'Does this really work?', antwort: ['This is where we show the proof.'] } as Frage,
  },
  VERLASSEN: {
    titel: 'What you can expect from Waybuild.',
    erwartungen: [
      'a dedicated contact person',
      'quick responses',
      'clear communication',
      'recommendations you can follow',
      'long-term support',
      'as little organisational effort as possible',
      'solutions instead of extra complexity',
    ],
    zusatz: ['Good solutions don’t come from more meetings.', 'They come from understanding, responsibility and consistent execution.'],
  },
  ABSCHLUSS: {
    titelVor: 'Which challenge would you like to ',
    titelAkzent: 'solve?',
    text: ['Website, software, IT service or a brand-new idea:', 'we help businesses find the right solution and make it work.'],
    ctaPrimaer: 'Explore our products',
    ctaSekundaer: 'Book a call',
  },
  frageAria: 'Question and answer',
  grundlageAria: 'Our foundation',
  ablaufAria: 'How a project unfolds',
  heroBildAria: (netz: string[], ergebnis: string[]) => `A tangled network of ${netz.join(', ')} is untangled by the Waybuild line. What remains: ${ergebnis.join(', ')}.`,
};

/* ─────────────── Produkte (ohne Paketnamen) ─────────────── */
export const PRODUKTSEITE_EN = {
  kopf: {
    eyebrow: 'Products',
    titelVor: 'Ready-made products and custom ',
    titelAkzent: 'solutions.',
    lead: 'We build digital solutions for businesses, either as a ready-made product or tailored to you. Often we start with the website.',
  },
  titel: 'Our products',
  website: {
    id: 'website-service', kenn: 'Our main product', name: 'Website Service', icon: 'layout' as IconName,
    nutzen: 'We build and look after your website and change it whenever you want.',
    text: 'Changes to your website, made simple.',
    punkte: ['A dedicated contact person', 'Ongoing support', 'Changes without project stress', 'Predictable costs'],
    preis: 'from €79.99 / month plus VAT',
    cta: 'Ask about it', pfad: '/kontakt/?leistung=website+service',
  },
  individuell: {
    id: 'individuell', kenn: 'On request', name: 'Custom software', icon: 'code' as IconName,
    text: 'No ready-made product fits? Then we build the solution for your business, for example your own software.',
    cta: 'Enquire', pfad: '/kontakt/?leistung=individuelle-software',
  },
  folgt: {
    name: 'More products coming soon.', icon: 'spark' as IconName,
    text: 'We are working on more ready-made products. As soon as one is available, you will find it here.',
  },
  fuerAlle: {
    kenn: 'For all products',
    titel: 'What applies to every product.',
    punkte: [
      { icon: 'user' as IconName, titel: 'One dedicated contact person', text: 'You don’t have to explain your situation again with every request.' },
      { icon: 'clock' as IconName, titel: 'Quick response', text: 'During our service hours you get a first response within one hour.' },
      { icon: 'euro' as IconName, titel: 'Transparent pricing', text: 'No hidden costs. Extras only by agreement.' },
      { icon: 'doc' as IconName, titel: 'Nothing gets lost', text: 'Every request is documented and followed up until it is resolved.' },
    ],
    link: 'Our service commitments (in German)',
  },
  labels: { ctaKopf: 'Discover the Website Service', ctaKopfPfad: '/produkte/#website-service', ctaKontakt: 'Free initial consultation', srZum: 'about the', dach: 'For businesses in Germany, Austria and Switzerland, remotely and with a personal point of contact.' },
  meta: {
    title: 'Products: Website Service and custom software',
    description: 'Waybuild products: the Website Service as our main product and custom software on request, for businesses in Germany, Austria and Switzerland.',
    crumb: 'Products', listName: 'Products by Waybuild',
  },
};

/* ─────────────── Über uns ─────────────── */
export const UEBER_UNS_EN = {
  kopf: {
    eyebrow: 'About us',
    titelVor: 'We are Waybuild from ',
    titelAkzent: 'Norderstedt.',
    lead: 'We build digital solutions for businesses, either as a ready-made product or tailored to you. Often we start with the website.',
  },
  wer: {
    kenn: 'Who we are',
    titel: 'A young company from Norderstedt, Germany.',
    text: [
      `Waybuild is a German limited company (UG haftungsbeschränkt) based in ${company.city}, right next to Hamburg. We work exclusively for businesses and the self-employed, across Germany, Austria and Switzerland.`,
      'Our main product is the Website Service. If no ready-made product fits, we develop custom software. More products are on the way.',
    ],
  },
  steckbrief: 'Fact sheet',
  fakten: [
    { icon: 'gebaeude' as IconName, label: 'Company', wert: company.legalName },
    { icon: 'pin' as IconName, label: 'Registered office', wert: `${company.street}, ${company.zip} ${company.city}, Germany` },
    { icon: 'doc' as IconName, label: 'Commercial register', wert: `${company.registerCourt}, ${company.registerNumber}` },
    { icon: 'user' as IconName, label: 'Managing director', wert: company.managingDirector },
    { icon: 'users' as IconName, label: 'Who we work for', wert: 'Businesses and the self-employed (B2B)' },
    { icon: 'globe' as IconName, label: 'Where we work', wert: 'Germany, Austria, Switzerland (DACH), remotely with a personal point of contact' },
    { icon: 'clock' as IconName, label: 'Service hours', wert: HOURS_EN },
  ],
  mission: {
    kenn: 'What we work for',
    titel: 'Digital solutions that fit your business.',
    text: [
      'We don’t do off-the-shelf. We understand your business, recommend the most sensible path and implement digital solutions that fit.',
      'Working together should stay simple. One message is enough, and you always know where you stand.',
    ],
    kernsatz: 'We understand before we build.',
    haltung: ['We listen.', 'We think along.', 'We like simple solutions.'],
  },
  denkweise: {
    kenn: 'How we think',
    titel: 'From first impulse to the right solution.',
    text: [
      'Every change starts with an impulse: an idea, a wish or a problem.',
      'From there we always take the same steps. We understand your business, question assumptions, recommend a way forward, put it into practice and keep improving the solution after launch.',
    ],
    link: 'Our approach on the home page',
  },
  prozess: [
    { wort: 'Impulse', icon: 'impuls' as IconName, kurz: 'An idea. A wish. A problem.', anker: true, ziel_id: 'denkweise' },
    { wort: 'Understand', icon: 'search' as IconName, kurz: 'Good solutions start with understanding.', ziel_id: 'verstehen' },
    { wort: 'Question', icon: 'frage' as IconName, kurz: 'First the why, then the how.', ziel_id: 'hinterfragen' },
    { wort: 'Decide', icon: 'target' as IconName, kurz: 'We recommend before we build.', ziel_id: 'entscheiden' },
    { wort: 'Deliver', icon: 'rocket' as IconName, kurz: 'Insights turn into solutions.', ziel_id: 'umsetzen' },
    { wort: 'Improve', icon: 'refresh' as IconName, kurz: 'Good change keeps evolving.', anker: true, ziel: true, ziel_id: 'verbessern' },
  ],
  prozessAria: 'The Waybuild approach in six steps',
  prinzipien: {
    titel: 'Our principles',
    liste: [
      {
        wort: 'Clarity', icon: 'search' as IconName,
        kern: 'You always know where you stand.',
        text: ['Digital solutions don’t have to be a mystery.', 'We explain things clearly, show options you can follow and speak plainly instead of in jargon.'],
        schluss: 'You don’t need to be an IT expert to make decisions.',
      },
      {
        wort: 'Simplicity', icon: 'arrow' as IconName,
        kern: 'Working together should be easy.',
        text: ['Reporting a problem, requesting a change or pursuing a new idea shouldn’t be a project in itself.', 'That is why we make every interaction with us as straightforward as possible.'],
        schluss: 'You should be able to focus on your business, not on IT processes.',
      },
      {
        wort: 'Reliability', icon: 'shield' as IconName,
        kern: 'You can count on it.',
        text: ['Digital solutions only work in the long run if responsibilities, communication and processes are clearly defined.'],
        schluss: 'So nothing gets lost and you know that someone is taking care of it.',
      },
    ],
  },
  prinzipienLink: 'Our principles on the home page',
  team: {
    kenn: 'Team',
    titel: 'The people behind Waybuild',
    text: 'When you write to Waybuild, you don’t disappear into an anonymous system. You talk to people who understand your request and take responsibility for the next step.',
    personen: [
      { name: company.managingDirector, rolle: 'Managing Director', rolleFehlt: false, foto: '' },
      { name: 'Jamil Iqbal', rolle: 'Role to follow', rolleFehlt: true, foto: '' },
    ],
    fotoFolgt: (name: string) => `Photo of ${name} coming soon`,
    fotoMarke: 'Photo coming soon',
    platzhalter: 'Placeholder',
  },
  aktionen: { cta: 'Free initial consultation', produkte: 'Our products' },
  meta: {
    title: 'About us: Waybuild from Norderstedt, Germany',
    description: 'Waybuild from Norderstedt near Hamburg builds digital solutions for businesses across Germany, Austria and Switzerland. Who we are and how we think.',
    crumb: 'About us', pageName: 'About us',
  },
};

/* ─────────────── Karriere ─────────────── */
export const KARRIERESEITE_EN: KarriereTexte = {
  kopf: {
    eyebrow: 'Careers',
    titelVor: 'Working at ',
    titelAkzent: 'Waybuild.',
    lead: 'We are always looking for good people: in IT, in the office and for our academy. We work fully remotely and on first-name terms. Simply apply by email.',
  },
  ctaStellen: 'View roles',
  ctaWarum: 'Why Waybuild?',
  stellen: {
    kenn: 'Always hiring',
    titel: 'These roles are always open.',
    text: 'No need to wait for a job ad. Pick what suits you and write to us. Most of our work is in German, so good German skills are usually needed.',
    arbeitsformLabel: 'Working model',
    button: 'Apply now',
    buttonSr: 'as',
  },
  anzeigen: [
    {
      id: 'it-freelancer', icon: 'code', kenn: 'Freelance · remote',
      titel: 'IT freelancers (m/f/d) – all areas',
      text: 'Working as a freelancer in IT? We like to build long-term relationships with freelancers.',
      listeTitel: 'Areas',
      punkte: ['Web development and software', 'IT administration, cloud and Nextcloud', 'Support for our clients', 'Design, UX and content'],
      arbeitsform: 'Freelance, project-based, remote',
      betreff: 'Application: IT freelancer',
    },
    {
      id: 'it-festanstellung', icon: 'server', kenn: 'Permanent · remote',
      titel: 'IT professional, permanent position (m/f/d)',
      text: 'You want a permanent role in a small team and to shape solutions from start to finish.',
      listeTitel: 'Profile',
      punkte: ['Vocational training, a degree or comparable IT experience', 'Experience in development, administration or support', 'You explain technology in plain language', 'You enjoy working independently'],
      arbeitsform: 'Permanent employment, hours by arrangement, remote',
      betreff: 'Application: IT permanent position',
    },
    {
      id: 'buero', icon: 'folder', kenn: 'Employed · remote',
      titel: 'Office and administration (m/f/d)',
      text: 'You make sure everything runs smoothly behind the scenes: organisation, communication and numbers.',
      listeTitel: 'Tasks',
      punkte: ['Organisation and scheduling', 'Communication with clients and partners', 'Preparing quotes, invoices and filing', 'Working with digital tools instead of paper'],
      arbeitsform: 'Employment, hours by arrangement, remote',
      betreff: 'Application: Office and administration',
    },
    {
      id: 'dozenten', icon: 'book', kenn: 'Freelance · waybuild Akademie',
      titel: 'Trainers and lecturers (m/f/d)',
      text: 'Enjoy sharing what you know? We are always looking for trainers for our academy, the waybuild Akademie.',
      listeTitel: 'Assignments',
      punkte: ['Vocational and further training, retraining and seminars', 'Business and commercial topics', 'IT topics', 'Expertise and a passion for teaching'],
      arbeitsform: 'Freelance, assignments by arrangement',
      betreff: 'Application: Trainer',
    },
    {
      id: 'initiativ', icon: 'spark', kenn: 'Open to anything', offen: true,
      titel: 'Speculative application',
      text: 'You don’t fit any of these roles but would like to work with us? Tell us what you are good at and what you would like to do at Waybuild.',
      listeTitel: '',
      punkte: [],
      arbeitsform: 'By arrangement',
      betreff: 'Speculative application',
    },
  ],
  benefits: {
    kenn: 'Why Waybuild?',
    titel: 'Eight letters. Eight reasons.',
    text: 'Our name already tells you what to expect.',
    wortLabel: 'W, A, Y, B, U, I, L, D spells Waybuild',
    liste: [
      { b: 'W', wort: 'W', rest: 'ork from anywhere', text: 'We work fully remotely. You work wherever you do your best work.' },
      { b: 'A', wort: 'A', rest: 't eye level', text: 'Everyone is on first-name terms. Short paths to management and open feedback in both directions.' },
      { b: 'Y', wort: 'Y', rest: 'our ideas count', text: 'If you see a better way, we will try it.' },
      { b: 'B', wort: 'B', rest: 'alance', text: 'Flexible working hours by arrangement. Results count, not the time clock.' },
      { b: 'U', wort: 'U', rest: 'ncomplicated', text: 'Little bureaucracy. One message is enough and decisions are made quickly.' },
      { b: 'I', wort: 'I', rest: 'nnovative', text: 'Modern tools and AI are part of our everyday work.' },
      { b: 'L', wort: 'L', rest: 'earning', text: 'With our own academy, the waybuild Akademie, training is right in-house.' },
      { b: 'D', wort: 'D', rest: 'irectly involved', text: 'We are a young start-up. You help build the company and see the impact of your work.' },
    ],
  },
  bewerben: {
    kenn: 'How to apply',
    titel: 'One email is enough.',
    text: 'Tell us briefly who you are and which role interests you.',
    hinweis: 'Your CV and references as PDF files are enough. No cover letter needed.',
    betreff: 'Application',
    cta: 'Apply by email',
    an: 'to',
  },
  meta: {
    title: 'Careers: jobs at Waybuild, remote',
    description: 'Jobs at Waybuild: we are always looking for IT freelancers, IT professionals, office staff and trainers. Fully remote, first-name culture, apply by email.',
    crumb: 'Careers',
  },
};

/* ─────────────── Kontakt ─────────────── */
export const KONTAKT_EN = {
  eyebrow: 'Contact',
  titel: 'What would you like to',
  akzent: 'change?',
  lead: 'Tell us what it is about. The initial consultation is free and non-binding, and we will reply by the next working day at the latest.',
  worum: 'What is it about?',
  allgemein: 'General enquiry',
  interessen: { 'website service': 'Website Service', 'individuelle-software': 'Custom software', partnerschaft: 'Partnership' } as Record<string, string>,
  name: 'Name*', email: 'Email*', telefon: 'Phone', telefonKlein: '(for a call back)', firma: 'Company',
  nachricht: 'Message', optional: '(optional)', platzhalter: 'e.g. industry, number of employees, existing domain or software …',
  einwilligungVor: 'I have read the ', einwilligungLink: 'privacy policy (in German)', einwilligungNach: ' and agree that my details will be processed to handle my enquiry.*',
  senden: 'Send message',
  danachAria: 'What happens next',
  danach: [['Today', 'Send your enquiry'], ['Next working day', 'We get back to you'], ['Personal', 'One dedicated contact']],
  direkt: 'Directly by email',
  zeiten: 'Service hours',
  versprechen: [['Reply by the next working day', 'Personal, not automated.'], ['Non-binding', 'Asking costs nothing.'], ['Honest advice', 'We recommend what you really need.']],
  dach: 'We work for businesses in Germany, Austria and Switzerland, remotely and with a personal point of contact.',
  js: {
    mailOffen: 'Your email program has opened. Please send the message from there.',
    sendet: 'Sending …',
    fehler: 'Unfortunately that didn’t work. Please write to us directly at',
    betreff: 'Enquiry',
    beratung: 'Consultation',
    felder: { name: 'Name', firma: 'Company', email: 'Email', telefon: 'Phone', interesse: 'Interest', paket: 'Package', branche: 'Industry' },
  },
  meta: {
    title: 'Contact and free initial consultation',
    description: 'Contact Waybuild: one dedicated contact person, a first response within one hour during service hours. Across Germany, Austria and Switzerland.',
    crumb: 'Contact',
  },
};
