// Gemeinsame Oberflächen-Texte (Kopfzeile, Menü, Footer, Kontaktleiste, Abschluss) je Sprache.
// Deutsch = bisherige Texte unverändert; Englisch für /en/… (Can, Talk k8oxzjva #4551, 04.11.2026).
import type { IconName } from '../config/site';
import { HOURS } from '../config/site';
import { FOOTER_KONTAKT } from '../config/home';
import { HS_MARKE } from '../config/startseite';
import type { Lang } from './lang';

export type NavChild = { label: string; path: string; icon?: IconName; desc?: string; group?: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

/** DACH-Botschaft (Can, Talk 4551): deutschlandweit, dazu Österreich und Schweiz, remote und persönlich */
export const DACH = {
  de: 'Wir arbeiten deutschlandweit und für Unternehmen in Österreich und der Schweiz, remote und persönlich.',
  en: 'We work across Germany and for businesses in Austria and Switzerland, remotely and with a personal point of contact.',
};

export const NAV_EN: NavItem[] = [
  { label: 'Products', path: '/en/products/' },
  { label: 'Why Waybuild', path: '/en/#warum' },
  {
    label: 'Company',
    children: [
      { label: 'About us', path: '/en/about/', icon: 'gebaeude', desc: 'Who we are and how we think' },
      { label: 'Careers', path: '/en/careers/', icon: 'rocket', desc: 'Working at Waybuild' },
    ],
  },
  { label: 'Contact', path: '/en/contact/' },
];

const de = {
  home: '/',
  kontakt: '/kontakt/',
  start: 'Start',
  skip: 'Zum Inhalt springen',
  vorschau: 'Vorschau, noch nicht veröffentlicht',
  hinweis: 'Hinweis',
  logoAria: 'Waybuild, zur Startseite',
  hauptnav: 'Hauptnavigation',
  mobilnav: 'Mobile Navigation',
  cta: 'Kostenloses Erstgespräch',
  menueAuf: 'Menü öffnen',
  menueZu: 'Menü schließen',
  hours: HOURS,
  antwortZeile: 'Antwort spätestens am nächsten Werktag',
  sprache: 'Sprache',
  crumbs: 'Brotkrumen',
  leiste: { aria: 'Schnellkontakt', cta: 'Erstgespräch', mail: 'E-Mail schreiben' },
  abschluss: {
    pre: FOOTER_KONTAKT.pre, accent: FOOTER_KONTAKT.accent, text: FOOTER_KONTAKT.text, hinweise: FOOTER_KONTAKT.hinweise,
    cta: 'Kostenloses Erstgespräch', mail: 'E-Mail schreiben', an: 'an', gut: 'Gut zu wissen', zeiten: 'Servicezeiten',
  },
  marke: HS_MARKE,
  footer: {
    produkte: 'Produkte', unternehmen: 'Unternehmen', arbeiten: 'So arbeiten wir', recht: 'Rechtliches',
    dach: 'Für Unternehmen in Deutschland, Österreich und der Schweiz.',
    rechtHinweis: '',
  },
};

export type UiTexte = typeof de;

const en: UiTexte = {
  home: '/en/',
  kontakt: '/en/contact/',
  start: 'Home',
  skip: 'Skip to content',
  vorschau: 'Preview, not yet published',
  hinweis: 'Notice',
  logoAria: 'Waybuild, to the home page',
  hauptnav: 'Main navigation',
  mobilnav: 'Mobile navigation',
  cta: 'Free consultation',
  menueAuf: 'Open menu',
  menueZu: 'Close menu',
  hours: 'Monday to Friday, 9 am to 6 pm (CET)',
  antwortZeile: 'Reply by the next working day',
  sprache: 'Language',
  crumbs: 'Breadcrumbs',
  leiste: { aria: 'Quick contact', cta: 'Get in touch', mail: 'Write an email' },
  abschluss: {
    pre: 'What would you like to ', accent: 'change?',
    text: 'Tell us what is unnecessarily complicated today, or which idea should finally become reality.',
    hinweise: ['free of charge', 'non-binding', 'reply by the next working day', 'no high-pressure sales talk'],
    cta: 'Free initial consultation', mail: 'Write an email', an: 'to', gut: 'Good to know', zeiten: 'Service hours',
  },
  marke: {
    name: 'Waybuild',
    statement: 'Sophisticated solutions. Surprisingly simple to work with.',
    kurz: 'Waybuild develops well-thought-out solutions and takes responsibility for keeping projects and collaboration as simple, clear and reliable as possible for its clients.',
  },
  footer: {
    produkte: 'Products', unternehmen: 'Company', arbeiten: 'How we work', recht: 'Legal (in German)',
    dach: 'For businesses in Germany, Austria and Switzerland.',
    rechtHinweis: 'Legal notice in German',
  },
};

export const UI: Record<Lang, UiTexte> = { de, en };
