// Sprachversionen (Can, Talk k8oxzjva #4551, 04.11.2026): Deutsch ist die Hauptsprache, Englisch unter /en/ für die
// wichtigsten Seiten. Impressum, Datenschutz und AGB bleiben deutsch. Keine automatische Umleitung per Browsersprache.
// Als .mjs, damit astro.config.mjs (Sitemap mit hreflang) dieselbe Zuordnung nutzt.
/** deutscher Pfad → englischer Pfad (ohne BASE) */
export const ROUTES = {
  '/': '/en/',
  '/produkte/': '/en/products/',
  '/ueber-uns/': '/en/about/',
  '/karriere/': '/en/careers/',
  '/kontakt/': '/en/contact/',
};
export const ROUTES_EN = Object.fromEntries(Object.entries(ROUTES).map(([de, en]) => [en, de]));
