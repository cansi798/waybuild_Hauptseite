// Sprache einer Seite und Links zwischen den Sprachversionen (Pfade ohne BASE, wie href() sie erwartet).
import { ROUTES, ROUTES_EN } from './routes.mjs';

export type Lang = 'de' | 'en';
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Pfad ohne BASE, z. B. /waybuild_Hauptseite/en/careers/ → /en/careers/ */
export const ohneBase = (pathname: string) => {
  const p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return p.startsWith('/') ? p : `/${p}`;
};

export const langVon = (pathname: string): Lang => (ohneBase(pathname) === '/en/' || ohneBase(pathname).startsWith('/en/') ? 'en' : 'de');

/** Deutsche und englische Fassung zur aktuellen Seite (null = gibt es nicht) */
export const fassungen = (pathname: string): { de: string | null; en: string | null } => {
  const p = ohneBase(pathname);
  const r = ROUTES as Record<string, string>, e = ROUTES_EN as Record<string, string>;
  if (e[p]) return { de: e[p], en: p };
  if (r[p]) return { de: p, en: r[p] };
  return { de: langVon(pathname) === 'de' ? p : null, en: null };
};

/** Link in der jeweiligen Sprache: deutsche Pfade mit englischer Fassung werden auf /en/… umgebogen, Anker bleiben */
export const lp = (path: string, lang: Lang) => {
  if (lang === 'de') return path;
  const i = path.search(/[#?]/);
  const p = i < 0 ? path : path.slice(0, i);
  const en = (ROUTES as Record<string, string>)[p];
  return en ? en + path.slice(p.length) : path;
};
