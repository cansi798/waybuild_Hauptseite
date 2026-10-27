// Navigation der Waybuild-Hauptseite: Startseiten-Anker (Der Weg, Warum) + Unterseiten. Stand 27.10.2026 (Leitbild „Der Weg“).
import type { IconName } from './site';

export type NavChild = { label: string; path: string; icon?: IconName; desc?: string; group?: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'So arbeiten wir', path: '/#weg' },
  { label: 'Warum Waybuild', path: '/#warum' },
  { label: 'Produkte', path: '/#produkte' },
  { label: 'Unsere Zusagen', path: '/zusagen/' },
  { label: 'Häufige Fragen', path: '/faq/' },
  { label: 'Kontakt', path: '/kontakt/' },
];
