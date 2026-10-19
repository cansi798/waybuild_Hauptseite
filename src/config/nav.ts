// Navigation der waybuild-IT-Hauptseite (Dach-Marke, Jamil 19.10.2026): Ankerlinks auf der Startseite + Kontakt.
import type { IconName } from './site';

export type NavChild = { label: string; path: string; icon?: IconName; desc?: string; group?: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'Wofür wir stehen', path: '/#werte' },
  { label: 'Service-Zusagen', path: '/#zusagen' },
  { label: 'Produkte', path: '/#produkte' },
  { label: 'Über uns', path: '/#ueber' },
  { label: 'Kontakt', path: '/kontakt/' },
];
