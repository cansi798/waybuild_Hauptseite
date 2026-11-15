# waybuild_Hauptseite – Onepager „Neue Website in Arbeit“ (webgold)

> **15.11.2026 (Jamil, Talk k8oxzjva #6072):** Die frühere Hauptseite (WS-0001) wurde auf einen **Onepager** reduziert:
> was Kunden in Zukunft erwartet und dass gerade eine neue Website entsteht. Inhalte und Design aus WS-0007
> (`waybuild_website-neudesign`, Marke webgold). Rechtsträger: Waybuild UG (haftungsbeschränkt).
> **Keine Preise, Pakete, Laufzeiten und keine AGB-Verweise** (es gibt noch keine AGB). Kein Formular (nur Telefon, E-Mail, WhatsApp-Link).
> Alter Stand: Tags `vor-onepager-20261115` (quelle) und `vor-onepager-20261115-main` (main).

Seiten: `/` (Onepager), `/impressum/`, `/datenschutz/`, `404`, dazu `llms.txt`, `robots.txt`, `sitemap-index.xml`, `site.webmanifest`.

| Was | Wo |
|---|---|
| Firmendaten und alle Texte | [`src/config/site.ts`](src/config/site.ts) |
| Layout (Kopf, Fußzeile, Meta, JSON-LD) | [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) |
| Gestaltung (Palette webgold, Plus Jakarta Sans lokal) | [`src/styles/global.css`](src/styles/global.css) |
| Live-Server (Apache, Umleitung alter Unterseiten auf `/`) | [`server/.htaccess`](server/.htaccess) |

Quelltext im Branch `quelle`, gebaute Seite (`dist/`) auf `main` → GitHub Pages.
**Vorschau (noindex):** https://cansi798.github.io/waybuild_Hauptseite/

## Bauen

```bash
# Vorschau (GitHub Pages)
SITE=https://cansi798.github.io BASE=/waybuild_Hauptseite PUBLIC_PREVIEW=true node node_modules/astro/bin/astro.mjs build && node scripts/postbuild.mjs
node scripts/seo-audit.mjs   # Prüfung des Build-Outputs
# Live (eigener Server, Pfad "/"): ohne die Variablen bauen, dist/ inkl. .htaccess hochladen
```
