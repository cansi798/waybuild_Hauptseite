// /llms.txt – kompakte Zusammenfassung für KI-Suchen (ChatGPT, Perplexity, Gemini …).
// Dachmarke Waybuild (Jamil 27.10.2026, Talk 3475): erst was für ALLE Produkte gilt, dann die Produktliste.
// Nur Fakten aus src/config/ – Platzhalter („[Wert einsetzen]“, „TODO“) werden nie ausgegeben.
import type { APIRoute } from 'astro';
import { company, faqsAllgemein, faqsWebsite, isMissing, WAAS, INKLUSIVE, MODELL, PAKETE, formatEuro, steps } from '../config/site';
import { HERO, SLA_KERN, SLA_HINWEIS, ZUSAGEN, START_ABLAUF, QUALITAETEN, SAEULEN, PRODUKTE, produktName } from '../config/hauptseite';
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
    `> ${HERO.pre.trim()} ${HERO.accent} ${HERO.lead}`,
    '',
    `Kurz gesagt: ${company.name} ist ein IT-Dienstleister${adresse.length ? ` aus ${company.city}` : ''} für Unternehmen und Selbstständige in Deutschland (B2B). Erstes Produkt ist ein Website Service im Abo: Website, Hosting, Domain, Wartung und Betreuung zum festen Monatspreis. Während der Servicezeiten gibt es innerhalb einer Stunde eine erste Rückmeldung.`,
    '',
    'Waybuild ist die Dachmarke. Jedes Produkt hat einen eigenen Namen und eine eigene Seite. Zusagen, Werte und Ablauf gelten für alle Produkte. Alle Preise netto zzgl. gesetzlicher Umsatzsteuer (B2B).',
    '',
    '## Für alle Produkte: Service-Zusagen',
    // Zeilen mit Platzhalter bewusst weglassen – nur zugesagte Werte ausgeben.
    ...SLA_KERN.filter((z) => !z.wert.includes(PLATZHALTER)).map((z) => `- ${z.label}: ${z.wert} (${(z.text[0].toLowerCase() + z.text.slice(1)).replace(/\.\s*/, '). ')}`),
    ...ZUSAGEN.map((z) => `- ${z.title}. ${z.text}`),
    `- ${SLA_HINWEIS}`,
    '',
    '## Drei Säulen',
    ...SAEULEN.map((x) => `- ${x.titel}: ${x.text}`),
    '',
    '## So beginnt die Zusammenarbeit',
    ...START_ABLAUF.map((h, i) => `${i + 1}. ${h.titel}: ${h.text}`),
    '',
    '## Das dürfen Sie von uns erwarten',
    ...QUALITAETEN.map((q) => `- ${q.titel}: ${q.text}`),
    '',
    '## Produkte',
    ...PRODUKTE.map((p) => p.aktiv
      ? `- ${produktName(p)}${produktName(p) === p.kategorie ? '' : ` (${p.kategorie})`}, verfügbar: ` + [p.nutzen ?? p.zweck ?? '', ...(p.punkte ?? []).map((x) => x.text), p.url || p.pfad ? `Seite: ${p.url || url(p.pfad!)}` : `Anfrage: ${url('/kontakt/')}`].filter(Boolean).join(' ')
      : `- ${produktName(p)}: bald verfügbar.`),
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
    `- [Unsere Zusagen](${url('/zusagen/')}): Service-Zusagen, Ablauf einer Anfrage, Werte`,
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
