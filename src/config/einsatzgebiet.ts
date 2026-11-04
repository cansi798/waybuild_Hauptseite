// Einsatzgebiet DACH (Can, Talk k8oxzjva, Sprachnachricht 04.11.2026 19:08): Karte mit Deutschland, Österreich und der Schweiz,
// Linien vom Sitz in Norderstedt (bei Hamburg) zu den großen Städten. Genutzt von der Karte (DachKarte.astro), dem JSON-LD
// (areaServed in BaseLayout.astro) und llms.txt.
// WICHTIG (Wettbewerbsrecht, UWG § 5): Wir haben nur EINEN Sitz (Norderstedt). Die Städte stehen für das Einsatzgebiet,
// NICHT für Standorte, Büros oder Niederlassungen. Deshalb nie „Standorte“/„Niederlassungen“ schreiben.
// Keine Stadt-Unterseiten (Doorway Pages) – die Städte erscheinen nur hier, in der Karte und im JSON-LD.
import type { Lang } from '../i18n/lang';

export type Land = 'DE' | 'AT' | 'CH';
/** Seite der Beschriftung: r rechts, l links, o oben, u unten */
export type Seite = 'r' | 'l' | 'o' | 'u';
export type Stadt = { de: string; en: string; land: Land; lon: number; lat: number; seite: Seite; haupt?: boolean };

export const SITZ = { de: 'Norderstedt', en: 'Norderstedt', naheDe: 'bei Hamburg', naheEn: 'near Hamburg', lon: 10.0, lat: 53.7 };

export const LAENDER: Record<Land, { de: string; en: string }> = {
  DE: { de: 'Deutschland', en: 'Germany' },
  AT: { de: 'Österreich', en: 'Austria' },
  CH: { de: 'Schweiz', en: 'Switzerland' },
};

/** Hamburg liegt direkt neben dem Sitz (ca. 17 km) und bekommt deshalb keinen eigenen Punkt – steht aber im Einsatzgebiet. */
export const STAEDTE: Stadt[] = [
  { de: 'Hamburg', en: 'Hamburg', land: 'DE', lon: 9.99, lat: 53.55, seite: 'r' },
  { de: 'Berlin', en: 'Berlin', land: 'DE', lon: 13.4, lat: 52.52, seite: 'r', haupt: true },
  { de: 'München', en: 'Munich', land: 'DE', lon: 11.58, lat: 48.14, seite: 'u', haupt: true },
  { de: 'Köln', en: 'Cologne', land: 'DE', lon: 6.96, lat: 50.94, seite: 'l', haupt: true },
  { de: 'Frankfurt', en: 'Frankfurt', land: 'DE', lon: 8.68, lat: 50.11, seite: 'l', haupt: true },
  { de: 'Stuttgart', en: 'Stuttgart', land: 'DE', lon: 9.18, lat: 48.78, seite: 'l', haupt: true },
  { de: 'Düsseldorf', en: 'Düsseldorf', land: 'DE', lon: 6.78, lat: 51.23, seite: 'l' },
  { de: 'Leipzig', en: 'Leipzig', land: 'DE', lon: 12.37, lat: 51.34, seite: 'u', haupt: true },
  { de: 'Hannover', en: 'Hanover', land: 'DE', lon: 9.73, lat: 52.37, seite: 'l', haupt: true },
  { de: 'Bremen', en: 'Bremen', land: 'DE', lon: 8.8, lat: 53.08, seite: 'l', haupt: true },
  { de: 'Nürnberg', en: 'Nuremberg', land: 'DE', lon: 11.08, lat: 49.45, seite: 'r', haupt: true },
  { de: 'Dresden', en: 'Dresden', land: 'DE', lon: 13.74, lat: 51.05, seite: 'r', haupt: true },
  { de: 'Wien', en: 'Vienna', land: 'AT', lon: 16.37, lat: 48.21, seite: 'o', haupt: true },
  { de: 'Graz', en: 'Graz', land: 'AT', lon: 15.44, lat: 47.07, seite: 'u', haupt: true },
  { de: 'Linz', en: 'Linz', land: 'AT', lon: 14.29, lat: 48.31, seite: 'o' },
  { de: 'Salzburg', en: 'Salzburg', land: 'AT', lon: 13.04, lat: 47.8, seite: 'u' },
  { de: 'Innsbruck', en: 'Innsbruck', land: 'AT', lon: 11.4, lat: 47.27, seite: 'u' },
  { de: 'Zürich', en: 'Zurich', land: 'CH', lon: 8.54, lat: 47.38, seite: 'r', haupt: true },
  { de: 'Basel', en: 'Basel', land: 'CH', lon: 7.59, lat: 47.56, seite: 'l' },
  { de: 'Bern', en: 'Bern', land: 'CH', lon: 7.45, lat: 46.95, seite: 'l' },
  { de: 'Genf', en: 'Geneva', land: 'CH', lon: 6.14, lat: 46.2, seite: 'u', haupt: true },
  { de: 'Luzern', en: 'Lucerne', land: 'CH', lon: 8.31, lat: 47.05, seite: 'r' },
];

export const stadtName = (s: Stadt, lang: Lang) => (lang === 'en' ? s.en : s.de);

/** Texte des Kartenblocks (ehrlich: „Einsatzgebiet“, nicht „Standorte“) */
export const DACH_KARTE = {
  de: {
    kenn: 'Einsatzgebiet',
    titel: 'Für Unternehmen in ganz Deutschland, Österreich und der Schweiz',
    text: 'Sitz in Norderstedt bei Hamburg. Wir arbeiten remote und, wenn es passt, persönlich vor Ort.',
    sitz: 'Sitz',
    gebiet: 'Einsatzgebiet',
    legendeAria: 'Legende',
    kartenTitel: 'Karte: Deutschland, Österreich und die Schweiz',
    kartenText: (staedte: string) => `Linien führen vom Sitz in Norderstedt bei Hamburg zu Städten im Einsatzgebiet: ${staedte}. Die Punkte zeigen das Einsatzgebiet, keine Niederlassungen.`,
  },
  en: {
    kenn: 'Where we work',
    titel: 'For businesses across Germany, Austria and Switzerland',
    text: 'Based in Norderstedt near Hamburg. We work remotely and, where it makes sense, in person on site.',
    sitz: 'Head office',
    gebiet: 'Service area',
    legendeAria: 'Legend',
    kartenTitel: 'Map: Germany, Austria and Switzerland',
    kartenText: (staedte: string) => `Lines run from our head office in Norderstedt near Hamburg to cities in our service area: ${staedte}. The dots show where we work, not branch offices.`,
  },
};
