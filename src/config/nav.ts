// Navigation der waybuild-IT-Hauptseite (Dach-Marke, Jamil 19.10.2026): Ankerlinks auf der Startseite + Kontakt.
import type { IconName } from './site';

export type NavChild = { label: string; path: string; icon?: IconName; desc?: string; group?: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'Über uns', path: '/#ueber' },
  { label: 'Service-Zusagen', path: '/#zusagen' },
  { label: 'Ticketsystem', path: '/#ticketsystem' },
  { label: 'Werte', path: '/#werte' },
  { label: 'Produkte', path: '/#produkte' },
  { label: 'Kontakt', path: '/kontakt/' },
];
