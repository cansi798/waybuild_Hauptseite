// Navigation der Waybuild-Hauptseite: Startseiten-Anker (Der Weg, Warum) + Unterseiten. Stand 27.10.2026 (Leitbild „Der Weg“).
import type { IconName } from './site';

export type NavChild = { label: string; path: string; icon?: IconName; desc?: string; group?: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

// Hauptnavigation nach Jamils kompaktem Design-Briefing (Talk 3636): Unternehmen, So arbeiten wir, Produkte,
// Kontakt. „Einblicke“ am 29.10.2026 mit dem Abschnitt entfernt (Jamil, Talk 3651). Zusagen/FAQ stehen im Footer.
// 30.10.2026: Startseite „Denkweise“ (Jamil, Talk 3799) – Anker an die neue Geschichte angepasst.
// 01.11.2026 (Jamil, Talk 4192): neue Unterseiten Über uns, Referenzen, Partner, Karriere unter „Unternehmen“;
// „Produkte“ führt auf die neue Produktübersicht /produkte/; „Umsetzen“ springt direkt zum Abschnitt Umsetzen
// (vorher /#kapitel-2 = Abschnitt „Entscheiden“).
// 02.11.2026 (Jamil, Talk 4331/4332): Sprunglinks „Verstehen“ und „Umsetzen“ aus der Navigation entfernt (die Abschnitte
// bleiben auf der Startseite); „Referenzen“ ist kein Unterpunkt von „Unternehmen“ mehr, sondern ein eigener Hauptpunkt.
export const NAV: NavItem[] = [
  { label: 'Produkte', path: '/produkte/' },
  { label: 'Referenzen', path: '/referenzen/' },
  // Talk 4544: neue Startseite – „Warum Waybuild?“ springt zu Abschnitt 2 (vorher „Prinzipien“, Talk 4087)
  { label: 'Warum Waybuild', path: '/#warum' },
  {
    label: 'Unternehmen',
    children: [
      { label: 'Über uns', path: '/ueber-uns/', icon: 'gebaeude', desc: 'Wer wir sind und wie wir denken' },
      { label: 'Partner', path: '/partner/', icon: 'users', desc: 'Zusammenarbeit mit Partnern' },
      { label: 'Karriere', path: '/karriere/', icon: 'rocket', desc: 'Arbeiten bei Waybuild' },
    ],
  },
  { label: 'Kontakt', path: '/kontakt/' },
];
