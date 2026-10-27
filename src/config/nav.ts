// Navigation der waybuild-IT-Hauptseite (Dach-Marke, Jamil 19.10.2026): Ankerlinks auf der Startseite + Kontakt.
import type { IconName } from './site';

export type NavChild = { label: string; path: string; icon?: IconName; desc?: string; group?: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'Angebot', path: '/angebot/' },
  { label: 'Warum waybuild', path: '/#warum' },
  { label: 'Unsere Zusagen', path: '/zusagen/' },
  { label: 'Häufige Fragen', path: '/faq/' },
  { label: 'Kontakt', path: '/kontakt/' },
];
