// /llms.txt – kompakte Zusammenfassung für KI-Suchen (ChatGPT, Perplexity, Gemini …).
// Dachmarke Waybuild (Jamil 27.10.2026, Talk 3475): erst was für ALLE Produkte gilt, dann die Produktliste.
// Nur Fakten aus src/config/ – Platzhalter („[Wert einsetzen]“, „TODO“) werden nie ausgegeben.
import type { APIRoute } from 'astro';
import { company, faqsAllgemein, faqsWebsite, isMissing, WAAS, INKLUSIVE, MODELL, PAKETE, formatEuro, steps } from '../config/site';
import { SLA_KERN, SLA_HINWEIS, ZUSAGEN, QUALITAETEN, PRODUKTE, produktName } from '../config/hauptseite';
import { DW_HERO, DW_KAPITEL, DW_IDEE, DW_VERSTEHEN, DW_HINTERFRAGEN, DW_ENTSCHEIDEN, DW_UMSETZEN, DW_VERBESSERN, DW_VERLAESSLICH, DW_PRINZIPIEN } from '../config/denkweise';
import { absolute } from '../lib/paths';

const PLATZHALTER = '[Wert einsetzen]';

export const GET: APIRoute = ({ site }) => {
  const url = (p: string) => absolute(p, site);
  const adresse = [company.street, company.zip, company.city].some(isMissing)
    ? []
    : [`- Anschrift: ${company.legalName}, ${company.street}, ${company.zip} ${company.city}`];
  const website = PRODUKTE[0];
  const websiteName = produktName(website);
  const lines = [
    `# ${company.legalName}`,
    '',
    `> ${DW_HERO.titel} ${DW_HERO.lead}`,
    '',
    `Kurz gesagt: ${company.name} ist ein IT-Dienstleister${adresse.length ? ` aus ${company.city}` : ''} für Unternehmen und Selbstständige in Deutschland (B2B). Erstes Produkt ist ein Website Service im Abo: Website, Hosting, Domain, Wartung und Betreuung zum festen Monatspreis. Während der Servicezeiten gibt es innerhalb einer Stunde eine erste Rückmeldung.`,
    '',
    'Waybuild ist die Dachmarke. Jedes Produkt hat einen eigenen Namen und eine eigene Seite. Zusagen, Werte und Prozesse gelten für alle Produkte. Alle Preise netto zzgl. gesetzlicher Umsatzsteuer (B2B).',
    '',
    '## Für alle Produkte: Service-Zusagen',
    // Zeilen mit Platzhalter bewusst weglassen – nur zugesagte Werte ausgeben.
    ...SLA_KERN.filter((z) => !z.wert.includes(PLATZHALTER)).map((z) => `- ${z.label}: ${z.wert} (${(z.text[0].toLowerCase() + z.text.slice(1)).replace(/\.\s*/, '). ')}`),
    ...ZUSAGEN.map((z) => `- ${z.title}. ${z.text}`),
    `- ${SLA_HINWEIS}`,
    '',
    '## Die Waybuild-Denkweise',
    'Kein Projektprozess, sondern die Art, wie wir an jede Veränderung herangehen. Produkte sind mögliche Ergebnisse dieses Weges.',
    `Kernsatz: ${DW_KAPITEL[0].kern} Die Startseite erzählt das in drei Teilen: ${DW_KAPITEL.map((k) => k.titel).join(', ')}.`,
    `1. Idee: ${DW_IDEE.titel} ${DW_IDEE.schluss}`,
    `2. Verstehen: ${DW_VERSTEHEN.titel} ${DW_VERSTEHEN.einleitung} ${DW_VERSTEHEN.punkte.join(', ')}. ${DW_VERSTEHEN.schluss}`,
    `3. Hinterfragen: ${DW_HINTERFRAGEN.titel} ${DW_HINTERFRAGEN.zeilen.join(' ')} ${DW_HINTERFRAGEN.schluss}`,
    `4. Entscheiden: ${DW_ENTSCHEIDEN.titel} ${DW_ENTSCHEIDEN.zeilen.join(' ')} ${DW_ENTSCHEIDEN.ziel.join(' ')}`,
    `5. Umsetzen: ${DW_UMSETZEN.titel} ${DW_UMSETZEN.zeilen.join(' ')}`,
    `6. Verbessern: ${DW_VERBESSERN.titel} ${DW_VERBESSERN.unterzeile} (PDCA: ${DW_VERBESSERN.kreis.map((k, i) => `${k}/${DW_VERBESSERN.kreisEn[i]}`).join(', ')})`,
    '',
    '## Bereiche',
    ...DW_UMSETZEN.bereiche.filter((b) => !b.folgt).map((b) => `- ${b.name}${b.hinweis ? ` (${b.hinweis})` : ''}`),
    '- Weitere Produkte folgen.',
    '',
    `## Verlässlichkeit: ${DW_VERLAESSLICH.titel}`,
    ...DW_VERLAESSLICH.pfeiler.map((p) => `- ${p.titel}: ${p.text}${p.zusatz ? ` ${p.zusatz}` : ''}`),
    '',
    `## Drei Prinzipien: ${DW_PRINZIPIEN.titel}`,
    ...DW_PRINZIPIEN.liste.map((p) => `- ${p.wort}: ${p.text}`),
    '',
    '## Das dürfen Sie von uns erwarten',
    ...QUALITAETEN.map((q) => `- ${q.titel}: ${q.text}`),
    '',
    '## Produkte',
    ...PRODUKTE.map((p) => p.aktiv
      ? `- ${produktName(p)}${produktName(p) === p.kategorie ? '' : ` (${p.kategorie})`}, verfügbar: ` + [p.nutzen ?? p.zweck ?? '', ...(p.punkte ?? []).map((x) => x.text), p.url || p.pfad ? `Seite: ${p.url || url(p.pfad!)}` : `Anfrage: ${url('/kontakt/')}`].filter(Boolean).join(' ')
      : `- ${produktName(p)}: einzelne Projekte auf Anfrage.`),
    '',
    `## ${websiteName} (erstes Produkt)`,
    `${WAAS.claim}`,
    `- Enthalten: ${INKLUSIVE.map((i) => i.title).join(', ')}.`,
    `- Geschäftsmodell: ${MODELL.join(', ')}.`,
    ...PAKETE.map((p) => `- ${p.name}: ${formatEuro(p.preis)} pro Monat, netto, ${p.kurz}. ${p.features.join(', ')}.`),
    ...steps.map((s, i) => `- Schritt ${i + 1}, ${s.title}: ${s.text}`),
    '',
    '## Häufige Fragen zu Waybuild',
    ...faqsAllgemein.map((f) => `- ${f.q} ${f.a}`),
    '',
    `## Häufige Fragen zum ${websiteName}`,
    ...faqsWebsite.map((f) => `- ${f.q} ${f.a}`),
    '',
    '## Seiten',
    `- [Startseite](${url('/')})`,
    `- [${websiteName}](${website.url || url(website.pfad ?? '/')}): Preise und Details`,
    `- [Unsere Zusagen](${url('/zusagen/')}): Service-Zusagen, Prozess einer Anfrage, Werte`,
    `- [Häufige Fragen](${url('/faq/')})`,
    `- [Kontakt](${url('/kontakt/')}): kostenloses Erstgespräch`,
    `- [Impressum](${url('/impressum/')})`,
    `- [Datenschutz](${url('/datenschutz/')})`,
    `- [AGB](${url('/agb/')})`,
    '',
    '## Kontakt',
    ...(isMissing(company.email) ? [] : [`- E-Mail: ${company.email}`]),
    ...adresse,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
