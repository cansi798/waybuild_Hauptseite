# waybuild_Hauptseite

> **Grundgerüst (19.10.2026):** 1:1-Kopie von [`waybuild_website`](https://github.com/cansi798/waybuild_website) (Stand 098019b) – wird Stück für Stück zur neuen waybuild-Hauptseite umgebaut.
> **Umbau 1 (19.10.2026, Jamil):** Dach-Seite für waybuild IT – Werte, Service-Zusagen, Produkte, Über uns; Inhalte in [`src/config/hauptseite.ts`](src/config/hauptseite.ts). Produktseiten (Preise, Leistungen, Branchen, Ratgeber …) entfernt.
> **Ausbau (26.10.2026):** Startseite um Abschnitte „Angebot“ (79/139 € aus `PAKETE`), „So starten wir“ (`steps`) und „Häufige Fragen“ (`faqs`, mit FAQPage-Markup) erweitert.
> **Leitbild „Der Weg“ (27.10.2026, Jamil Talk 3467/3470):** Startseite und alle Unterseiten neu im selben Stil – eine Linie als Bildsprache (verknotet = der übliche Weg, gerade = mit Waybuild). Gemeinsame Bausteine: `SectionHead`, `PageHeader`, `Weg` (Stationen-Linie), `Faq`, `FooterKontakt` (Abschluss „Was möchten Sie verändern?“). Vorschaubild `public/og-image.png` neu (ohne Preis).
> **Aufräumen (25.10.2026):** ungenutzte Alt-Komponenten/-Configs der waybuild_website entfernt; Launch-Checkliste (`/checkliste/`), AGB-Entwurf (`/agb/`) und `/llms.txt` ergänzt.

Website der **Waybuild UG (haftungsbeschränkt)** – „Wir bauen keine Websites. Wir bauen digitale Unternehmensplattformen.“ Angebot: **Website as a Service** (B2B, KMU) in zwei Varianten – Website 79 € und Intelligente Website 139 € netto im Monat. Software, Cloud & IT und Beratung als Ausbaustufen auf Anfrage.
Gebaut mit [Astro](https://astro.build) als rein statische Seite, Quelltext im Branch `quelle`, gebaute Seite (`dist/`) auf `main` → GitHub Pages.

**Vorschau (nur Ansicht, nicht für Google):** https://cansi798.github.io/waybuild_Hauptseite/
**Live (später):** eigener Server unter https://waybuild.de
**CI-Handbuch:** nur lokal unter `intern/Waybuild-CI-Handbuch.pdf` (Ordner `intern/` wird nicht gepusht)

## Inhalte pflegen

Firmendaten, Angebot und FAQ stehen zentral in [`src/config/site.ts`](src/config/site.ts):

| Was | Wo |
|---|---|
| Firmendaten (Adresse, HRB, USt-ID, E-Mail) | `company` – alle `TODO`-Werte ersetzen |
| Angebot (Name, Laufzeit) und **Preise der zwei Varianten** (79 € / 139 € netto) | `WAAS`, `PAKETE` |
| Bestandteile, Geschäftsmodell, Ablauf, Beratungsthemen | `INKLUSIVE`, `MODELL`, `steps`, `BERATUNG_THEMEN` |
| FAQ (fließt in `/llms.txt` für KI-Suchen) | `faqs` |

Weitere zentrale Dateien:

| Was | Wo |
|---|---|
| Hauptseite: Hero, Werte, Standards, SLAs, Ticketsystem, Prozesse, Vertrauen, Produkte | [`src/config/hauptseite.ts`](src/config/hauptseite.ts) |
| Footer-Kopf (Abschluss-CTA) | [`src/config/home.ts`](src/config/home.ts) |
| Navigation (Ankerlinks der Startseite) | [`src/config/nav.ts`](src/config/nav.ts) |
| Launch-Checkliste (offene Punkte, Badge unten rechts) | [`src/config/launch.ts`](src/config/launch.ts) |
| Herleitung der Preise (intern) | [`docs/wettbewerbsanalyse-2026-10.md`](docs/wettbewerbsanalyse-2026-10.md) |

## Bilder

Bilder einfach in **`src/assets/bilder/`** ablegen – sie werden beim Build automatisch zu AVIF/WebP in passenden
Größen optimiert. Welche Datei wohin gehört: [`src/assets/bilder/LIESMICH.md`](src/assets/bilder/LIESMICH.md).
KI-Prompts im Waybuild-Stil: [`src/assets/bilder/KI-PROMPTS.md`](src/assets/bilder/KI-PROMPTS.md).

## Hinweise & Launch-Checkliste

Solange Daten fehlen, zeigt die Website gelbe **„Fehlt: …“**-Hinweise genau an der Stelle, wo etwas nachgetragen werden muss
(Impressum, Kontakt, Über uns, AGB, Referenzen …). Unten rechts zeigt ein Badge, wie viele Punkte noch offen sind.

- Übersicht aller offenen Punkte: **`/checkliste/`** in der Vorschau (automatisch aus `src/config/launch.ts` + Firmendaten; im Live-Build wird sie entfernt)
- Firmendaten eintragen → Hinweise verschwinden automatisch
- Vor dem offiziellen Start: `SHOW_HINTS = false` in `src/config/site.ts` → alle Hinweise und Platzhalter-Bereiche weg

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build:preview   # Build wie die GitHub-Pages-Vorschau
npm run seo:preview     # Link-/SEO-Check dieses Builds (braucht dieselbe Env wie build:preview)
npm run check    # Typprüfung
npm run build    # statischer Build nach dist/
```

> Das Projekt liegt in einem VirtualBox-Shared-Folder. Deshalb `bin-links=false` in `.npmrc`
> und die Skripte rufen Astro direkt über `node node_modules/astro/bin/astro.mjs` auf.

## Deployment

### Vorschau – GitHub Pages
Pages läuft im Modus „main /“: Der Quelltext liegt im Branch **`quelle`**, auf **`main`** liegt nur die gebaute Seite.
Sie ist bewusst für Suchmaschinen gesperrt (`noindex`, `robots.txt: Disallow`) und zeigt oben ein „Vorschau“-Banner.

```bash
npm run build:preview                  # SITE=https://cansi798.github.io BASE=/waybuild_Hauptseite PUBLIC_PREVIEW=true
touch dist/.nojekyll
# dist/ in einen Checkout von main kopieren (alles außer .git ersetzen), committen, pushen
```

### Live gehen (eigener Server)
Lokal bauen:
```bash
cp .env.example .env     # Web3Forms-Key eintragen
npm run build            # erzeugt dist/ für https://waybuild.de (inkl. .htaccess)
```

Dann den **Inhalt** von `dist/` (inkl. der versteckten Datei `.htaccess`) per SFTP/FTP in das Web-Verzeichnis
des Servers laden (z. B. `htdocs/` oder `/var/www/waybuild`).

| Server | Konfiguration |
|---|---|
| Apache (IONOS, Strato, all-inkl …) | `.htaccess` liegt automatisch im Build: HTTPS, 404, Caching, Sicherheits-Header |
| nginx (VPS) | Vorlage: [`server/nginx.conf.example`](server/nginx.conf.example) |

Hoster: **ALL-INKL.COM** (in `company.hoster` und Datenschutz eingetragen; die `.htaccess` aus `server/` passt für dessen Apache). Vor dem Live-Gang: `SHOW_HINTS = false`.
Keine Telefonnummer/kein WhatsApp auf der Website (Entscheidung Can 26.10.2026) – Kontakt nur per E-Mail und Kontaktformular.
Andere Domain als waybuild.de? → `SITE` beim Build setzen und die Domain in `server/.htaccess` anpassen.

### Kontaktformular

Ohne Konfiguration öffnet das Formular das E-Mail-Programm (`mailto:`).
Für echten Versand einen Dienst wie Web3Forms oder Formspree nutzen und den Access-Key in `.env` (lokal, wird nicht gepusht) setzen – danach Datenschutzerklärung um den Dienst ergänzen.

## Qualität (Lighthouse, mobil)

Vor jedem Veröffentlichen prüfen: `npm run seo:preview` + `npm run check` (fehlerfrei) und Sichtprüfung bei 390 px und 1300 px.
(Die 100er-Messung von 10/2026 bezog sich auf die alte Seitenstruktur Start/Leistungen/Preise/Kontakt.)

## SEO-Bausteine

Prüfung: `npm run seo:preview` nach dem Vorschau-Build bzw. `npm run seo` nach dem Live-Build – bei Fehlern wird nicht veröffentlicht.


- Title, Description, Canonical, Open Graph & Twitter Card pro Seite (`src/layouts/BaseLayout.astro`)
- JSON-LD: `Organization` (ggf. `ProfessionalService`), `WebSite`, `BreadcrumbList` (`src/layouts/BaseLayout.astro`); `FAQPage` (die FAQ sind auf der Startseite sichtbar); bewusst keine Angebots-Markups
- `sitemap-index.xml` (ohne Rechtstexte, Checkliste, Danke-Seite), `robots.txt`
- Sichtbare Breadcrumbs, `lastmod` in der Sitemap, `max-image-preview:large`
- `/llms.txt` für KI-Suchen (ChatGPT, Perplexity, Gemini), automatisch aus der Konfiguration erzeugt (`src/pages/llms.txt.ts`)
- Mit vollständiger Adresse wird zusätzlich `ProfessionalService` (lokales Unternehmen) ausgegeben
- Keine Cookies, kein Tracking, Schriften lokal – kein Cookie-Banner nötig
- Bewusst **kein** Font-Preload: kostete 300 ms Blocking Time ohne LCP-Gewinn (gemessen)
