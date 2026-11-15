// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Standard = Live-Version für den eigenen Server (Pfad "/").
// Die GitHub-Pages-VORSCHAU setzt SITE, BASE und PUBLIC_PREVIEW=true.
const site = process.env.SITE ?? 'https://waybuild.de';
const base = process.env.BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      lastmod: new Date(),
      // Onepager: nur die Startseite in die Sitemap (Rechtstexte und 404 nicht)
      filter: (page) => !/\/(impressum|datenschutz|404)\/?$/.test(page),
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
