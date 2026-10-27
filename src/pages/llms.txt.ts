// /llms.txt – kompakte Zusammenfassung für KI-Suchen (ChatGPT, Perplexity, Gemini …).
// Wird beim Build aus der Konfiguration erzeugt, damit Angebot & Zusagen immer aktuell sind.
// Nur Fakten aus src/config/ – Platzhalter („[Wert einsetzen]“, „TODO“) werden nie ausgegeben.
import type { APIRoute } from 'astro';
import { company, faqs, isMissing, WAAS, INKLUSIVE, MODELL, OFFER, PAKETE, formatEuro } from '../config/site';
import { HERO, UEBER, SLA_KERN, SLA_HINWEIS } from '../config/hauptseite';
import { absolute } from '../lib/paths';

const PLATZHALTER = '[Wert einsetzen]';

export const GET: APIRoute = ({ site }) => {
  const url = (p: string) => absolute(p, site);
  const adresse = [company.street, company.zip, company.city].some(isMissing)
    ? []
    : [`- Anschrift: ${company.legalName}, ${company.street}, ${company.zip} ${company.city}`];
  const lines = [
    `# ${company.legalName}`,
    '',
    `> ${HERO.pre.trim()} ${HERO.accent} ${HERO.lead} ${UEBER.text}`,
    '',
    `Alle Preise netto zzgl. gesetzlicher Umsatzsteuer (B2B). ${company.slogan}`,
    '',
    `## Angebot: ${WAAS.name}`,
    `${WAAS.claim} ${OFFER}`,
    `- Enthalten: ${INKLUSIVE.map((i) => i.title).join(', ')}.`,
    `- Geschäftsmodell: ${MODELL.join(', ')}.`,
    ...PAKETE.map((p) => `- ${p.name}: ${formatEuro(p.preis)} pro Monat, netto – ${p.kurz}. ${p.features.join(', ')}.`),
    '',
    '## Service-Zusagen (SLAs)',
    // Zeilen mit Platzhalter bewusst weglassen – nur zugesagte Werte ausgeben.
    ...SLA_KERN.filter((z) => !z.wert.includes(PLATZHALTER)).map((z) => `- ${z.label}: ${z.wert}. ${z.text}`),
    `- ${SLA_HINWEIS}`,
    '',
    '## Services',
    '- Website Service (aktiv): Wir betreuen Ihre Website und setzen Änderungen per Sprachnachricht oder Text um, zum festen Monatspreis.',
    '- Software Service, Cloud Service, Workplace Service, Process Service: bald verfügbar. Weitere Angebote folgen.',
    '',
    '## Häufige Fragen',
    ...faqs.map((f) => `- ${f.q} ${f.a}`),
    '',
    '## Seiten',
    `- [Startseite](${url('/')})`,
    `- [Angebot und Preise](${url('/angebot/')})`,
    `- [Service-Zusagen](${url('/zusagen/')})`,
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
