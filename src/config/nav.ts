// Navigation der Waybuild-Hauptseite: Startseiten-Anker (Der Weg, Warum) + Unterseiten. Stand 27.10.2026 (Leitbild „Der Weg“).
import type { IconName } from './site';

export type NavChild = { label: string; path: string; icon?: IconName; desc?: string; group?: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

// Hauptnavigation nach Jamils kompaktem Design-Briefing (Talk 3636): Unternehmen, So arbeiten wir, Produkte,
// Kontakt. „Einblicke“ am 29.10.2026 mit dem Abschnitt entfernt (Jamil, Talk 3651). Zusagen/FAQ stehen im Footer.
export const NAV: NavItem[] = [
  { label: 'Unternehmen', path: '/#unternehmen' },
  { label: 'So arbeiten wir', path: '/#so-arbeiten-wir' },
  { label: 'Produkte', path: '/#produkte' },
  { label: 'Kontakt', path: '/kontakt/' },
];
