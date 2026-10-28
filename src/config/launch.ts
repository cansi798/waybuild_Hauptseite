// Launch-Checkliste: alles, was vor dem offiziellen Start noch erledigt werden muss.
// Firmendaten werden automatisch geprüft, der Rest wird hier von Hand abgehakt (done: true).
import { company, isMissing, references, SHOW_HINTS } from './site';

export type Todo = {
  title: string;
  detail: string;
  where: string;
  done: boolean;
  priority: 'pflicht' | 'wichtig' | 'später';
};

type TextField = Exclude<keyof typeof company, 'sameAs'>;

const companyFields: [TextField, string, string][] = [
  ['managingDirector', 'Name der Geschäftsführung', 'Pflichtangabe im Impressum und in jeder geschäftlichen E-Mail.'],
  ['street', 'Straße & Hausnummer', 'Ladungsfähige Anschrift – Pflicht im Impressum (§ 5 DDG).'],
  ['zip', 'Postleitzahl', 'Teil der Anschrift im Impressum.'],
  ['city', 'Ort', 'Teil der Anschrift im Impressum.'],
  ['registerCourt', 'Registergericht', 'Steht im Handelsregisterauszug, z. B. „Amtsgericht München“.'],
  ['registerNumber', 'Handelsregisternummer (HRB)', 'Steht im Handelsregisterauszug.'],
  ['vatId', 'Umsatzsteuer-ID (nur falls vorhanden)', 'Kommt vom Bundeszentralamt für Steuern. Solange keine existiert, entfällt der Abschnitt im Impressum von selbst (eine Steuernummer gehört nicht ins Impressum).'],
  ['hoster', 'Server-Hoster (Name & Anschrift)', 'Pflichtangabe in der Datenschutzerklärung, sobald die Website auf dem eigenen Server liegt.'],
];

const auto: Todo[] = companyFields.map(([key, title, detail]) => ({
  title,
  detail,
  where: `src/config/site.ts → company.${key}`,
  done: !isMissing(company[key]),
  priority: key === 'vatId' ? 'wichtig' : 'pflicht',
}));

const manual: Todo[] = [
  // Aus Jamils kompaktem Design-Briefing (Talk 3636, 28.10.2026) – Inhalte, die nur Jamil/Can liefern können:
  { title: 'Eigene Produktnamen', detail: 'Website Service, Kundenverwaltung Handwerk, Apps, Kundenverwaltung AZAV: bis dahin steht die Kategorie („Super Duper“ wurde auf Wunsch ersetzt).', where: 'src/config/hauptseite.ts → PRODUKTE.name', done: false, priority: 'wichtig' },
  { title: 'Kundennutzen + kurze Erklärung je Produkt', detail: 'Für Handwerk, Apps und AZAV gibt es bisher nur einen Zweck-Satz. Bitte je einen Nutzen-Satz und eine kurze Erklärung (nur, was das Produkt heute wirklich kann).', where: 'src/config/hauptseite.ts → PRODUKTE.nutzen / erklaerung', done: false, priority: 'wichtig' },
  { title: 'Eigene Produktseiten / Websites', detail: 'Ohne Adresse steht auf der Karte „Eigene Produktseite folgt.“. Mit Adresse erscheint der Knopf „Produkt kennenlernen“.', where: 'src/config/hauptseite.ts → PRODUKTE.url', done: false, priority: 'wichtig' },
  { title: 'Echte Kundenbeispiele (Einblicke)', detail: 'Drei Vorher/Nachher-Fälle mit Aussage und Ergebnis – nur mit schriftlicher Freigabe der Kunden. Bis dahin stehen typische Situationen, ausdrücklich als Beispiele gekennzeichnet.', where: 'src/pages/index.astro → GESCHICHTEN', done: false, priority: 'wichtig' },
  { title: 'Menschen hinter Waybuild', detail: 'Echte Teamfotos (keine Stockfotos), Namen, Aufgaben und je eine kurze persönliche Aussage.', where: 'src/pages/index.astro → Abschnitt „menschen“ + src/assets/bilder/', done: false, priority: 'wichtig' },
  { title: 'Zusagen operativ bestätigen', detail: 'Briefing: „Nur Zusagen veröffentlichen, die operativ dauerhaft eingehalten werden können.“ Bitte bestätigen: wer zuständig ist und was als Nächstes passiert, nächster konkreter Schritt mit der Antwort am nächsten Werktag.', where: 'src/config/hauptseite.ts → QUALITAETEN', done: false, priority: 'pflicht' },
  { title: 'Website entwickelt & online', detail: 'Alle Seiten mobil & Desktop, Deployment: Build lokal, dist auf main (GitHub Pages).', where: 'github.com/cansi798/waybuild_Hauptseite', done: true, priority: 'pflicht' },
  { title: 'SEO-Grundlagen', detail: 'Meta-Daten, strukturierte Daten (JSON-LD), Sitemap, Lighthouse SEO 100.', where: 'src/layouts/BaseLayout.astro', done: true, priority: 'pflicht' },
  { title: 'Favicon & Social-Media-Vorschau', detail: 'Icons für Browser, iPhone, Android sowie Vorschaubild für WhatsApp/LinkedIn.', where: 'public/', done: true, priority: 'wichtig' },
  { title: 'CI-Handbuch', detail: 'Logo, Farben, Schriften, Tonalität, Visitenkarte, E-Mail-Signatur – nur intern als PDF.', where: 'intern/Waybuild-CI-Handbuch.pdf (nicht in Git)', done: true, priority: 'wichtig' },
  {
    title: 'Domain & Server bereitstellen, Website hochladen',
    detail: 'GitHub Pages ist nur die Vorschau. Live-Build lokal erzeugen (npm run build) und den Inhalt von dist/ per SFTP/FTP auf den Server laden – Anleitung in der README.',
    where: 'README.md → „Live gehen (eigener Server)“',
    done: false,
    priority: 'pflicht',
  },
  {
    title: 'E-Mail-Postfach kontakt@waybuild.de einrichten',
    detail: 'Die Adresse steht überall auf der Website – sie muss vor dem Start funktionieren.',
    where: 'Beim E-Mail-/Domain-Anbieter',
    done: false,
    priority: 'pflicht',
  },
  {
    title: 'AGB anwaltlich prüfen lassen',
    detail: 'Die AGB-Seite ist eine Vorlage für das Abo-Modell. Ohne geprüfte AGB keine Abo-Verträge abschließen.',
    where: 'src/pages/agb.astro',
    done: false,
    priority: 'pflicht',
  },
  {
    title: 'Datenschutzerklärung prüfen lassen',
    detail: 'Web3Forms ist beschrieben (Oktober 2026). Vor dem Start prüfen lassen: Anbieterangaben/AV-Vertrag Web3Forms und Abschnitt Hosting nach Umzug auf den eigenen Server.',
    where: 'src/pages/datenschutz.astro',
    done: false,
    priority: 'pflicht',
  },
  {
    title: 'Kontaktformular aktivieren (Web3Forms)',
    detail: 'Auf web3forms.com mit kontakt@waybuild.de einen kostenlosen Access-Key holen und in GitHub als Variable WEB3FORMS_KEY speichern. Danach kommen Anfragen direkt per E-Mail an.',
    where: 'GitHub → Settings → Secrets and variables → Actions → Variables',
    done: Boolean(import.meta.env.PUBLIC_WEB3FORMS_KEY),
    priority: 'wichtig',
  },
  {
    title: 'Monatspreise für Website as a Service festlegen',
    detail: 'Festgelegt von Jamil am 19.10.2026: 79 € / Monat und 139 € / Monat (intelligente Website), netto.',
    where: 'src/config/site.ts → PAKETE',
    done: true,
    priority: 'pflicht',
  },
  {
    title: 'AGB an Website as a Service anpassen',
    detail: 'Am 25.10.2026 an das aktuelle Modell angepasst: zwei Varianten (79 € / 139 € netto im Monat), keine Einrichtungskosten, 24 Monate Laufzeit, Website/Code/Domain gehören dem Kunden. Offen bleibt allein die anwaltliche Prüfung (eigener Punkt).',
    where: 'src/pages/agb.astro',
    done: true,
    priority: 'pflicht',
  },
  {
    title: 'SLA-Wert für kleine Änderungen eintragen',
    detail: 'Auf /zusagen/ ist die Bearbeitungszeit für kleine Änderungen noch als Platzhalter markiert („[Wert einsetzen]“, nur in der Vorschau sichtbar; mit SHOW_HINTS = false wird die Karte ausgeblendet). Wert von Jamil/Can eintragen.',
    where: 'src/config/hauptseite.ts → SLA_KERN',
    done: false,
    priority: 'wichtig',
  },
  {
    title: 'Leistungsversprechen absichern',
    detail: '„Live in 14 Tagen“, „Sprachgesteuerte Änderungen“, „KI-gestützte Erstellung“, die Service-Versprechen (u. a. „kleine Änderungen oft in Minuten online“, „Antwort spätestens am nächsten Werktag“, Ticketsystem auf /zusagen/; „schriftliche Zusagen“ wurde am 27.10.2026 bis zur Klärung entfernt) und die selbstoptimierende „Intelligente Website“ stehen auf der Website. Für die Auswertung von Besucherdaten Datenschutzerklärung/Einwilligung prüfen. Prozesse und Werkzeuge so aufsetzen, dass das eingehalten wird.',
    where: 'src/config/site.ts → INKLUSIVE, faqs',
    done: false,
    priority: 'wichtig',
  },
  {
    title: 'Leistungsbeschreibungen für Abos (SLA, Fair Use, Speicher)',
    detail: 'Für IT-Betreuung, Nextcloud-Hosting und Software-Pflege je eine kurze Leistungsbeschreibung als Anlage zum Angebot erstellen – inkl. AV-Vertrag (Art. 28 DSGVO) für Nextcloud und IT.',
    where: 'Eigenes Dokument, Verweis in src/pages/agb.astro § 2a',
    done: false,
    priority: 'pflicht',
  },
  {
    title: 'Rechnungsvorlage: Bankverbindung (IBAN) & Steuernummer',
    detail: 'Für die ersten Abo-Rechnungen: IBAN, Steuernummer bzw. USt-ID auf Rechnung und im Angebot. Nicht auf der Website nötig.',
    where: 'Buchhaltung / Rechnungsprogramm',
    done: false,
    priority: 'wichtig',
  },
  {
    title: 'Produktnamen und Produkt-Websites',
    detail: 'Erstes Produkt heißt vorläufig „Super Duper Website Service“ (Arbeitsname, Jamil 27.10.2026). Adresse der eigenen Produkt-Website fehlt – bis dahin führt die Produktkarte auf /angebot/. waybuild_website erst verlinken, wenn Telefon-/WhatsApp-Platzhalter entfernt sind. Namen für Software, Cloud, Workplace und Process Service fehlen.',
    where: 'src/config/hauptseite.ts → PRODUKTE',
    done: false,
    priority: 'wichtig',
  },
  {
    title: 'Foto und Kurzvorstellung der Gründer',
    detail: 'Menschen kaufen von Menschen – ein echtes Foto auf „Über uns“ erhöht die Anfragen deutlich.',
    where: 'Startseite (src/pages/index.astro) – eigener Abschnitt, sobald Foto/Text vorliegen',
    done: false,
    priority: 'wichtig',
  },
  {
    title: 'Erste Referenzprojekte',
    detail: 'Sobald die ersten Kunden live sind (mit deren Freigabe) eintragen. Keine erfundenen Referenzen oder Bewertungen!',
    where: 'src/config/site.ts → references',
    done: references.length > 0,
    priority: 'später',
  },
  {
    title: 'Google Search Console & Unternehmensprofil',
    detail: 'Nach Domain-Umzug Sitemap einreichen und Google-Unternehmensprofil für lokales SEO anlegen.',
    where: 'search.google.com/search-console',
    done: false,
    priority: 'später',
  },
  {
    title: 'Social-Profile & Google-Unternehmensprofil verknüpfen',
    detail: 'Links in company.sameAs eintragen – Google verbindet dann Website und Profile zu einer Marke.',
    where: 'src/config/site.ts → company.sameAs',
    done: company.sameAs.length > 0,
    priority: 'später',
  },
  {
    title: 'Firmensitz / Einzugsgebiet für lokales SEO',
    detail: 'Adresse Norderstedt ist eingetragen – die Seite meldet waybuild jetzt als lokales Unternehmen (ProfessionalService) an Google. Optional später: Stadt in Titel & Texte aufnehmen („IT-Service Norderstedt“).',
    where: 'src/config/site.ts → company, src/pages/index.astro',
    done: true,
    priority: 'wichtig',
  },
  {
    title: 'Finales Logo (optional)',
    detail: 'Das waybuild-IT-Logo ist eingebaut (Header, Footer, Icons, Vorschaubild). Für noch schärfere Darstellung später eine SVG-Fassung vom Designer einsetzen.',
    where: 'public/logo-waybuild-it.png, src/components/Logo.astro',
    done: true,
    priority: 'später',
  },
  {
    title: 'Hinweise ausblenden',
    detail: 'Wenn alles erledigt ist: SHOW_HINTS auf false setzen. Dann verschwinden alle gelben Hinweise.',
    where: 'src/config/site.ts → SHOW_HINTS',
    done: !SHOW_HINTS,
    priority: 'pflicht',
  },
];

export const launchTodos: Todo[] = [...auto, ...manual];
