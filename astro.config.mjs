// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { ROUTES, ROUTES_EN } from './src/i18n/routes.mjs';

// Standard = Live-Version für den eigenen Server (waybuild.de, Pfad "/").
// Die GitHub-Pages-VORSCHAU setzt SITE, BASE und PUBLIC_PREVIEW=true im Workflow.
const site = process.env.SITE ?? 'https://waybuild.de';
const base = process.env.BASE ?? '/';
// Sitemap mit beiden Sprachen: Seiten mit deutscher und englischer Fassung bekommen hreflang-Links (de, en, x-default)
const voll = (pfad) => new URL(base.replace(/\/+$/, '') + pfad, site).href;
const sprachLinks = (url) => {
  const pfad = '/' + new URL(url).pathname.slice(base.replace(/\/+$/, '').length).replace(/^\/+/, '');
  const de = ROUTES[pfad] ? pfad : ROUTES_EN[pfad];
  if (!de) return undefined;
  return [{ lang: 'de', url: voll(de) }, { lang: 'en', url: voll(ROUTES[de]) }, { lang: 'x-default', url: voll(de) }];
};

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      lastmod: new Date(),
      // Rechtstexte, interne Seiten und 404 nicht in die Sitemap
      filter: (page) => !/\/(impressum|datenschutz|agb|404|checkliste|danke)\/?$/.test(page),
      serialize: (item) => { const links = sprachLinks(item.url); return links ? { ...item, links } : item; },
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
