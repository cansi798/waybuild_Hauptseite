// /llms.txt – kompakte Zusammenfassung für KI-Suchen (ChatGPT, Perplexity, Gemini …).
// Wird beim Build aus der Konfiguration erzeugt, damit Angebot & Zusagen immer aktuell sind.
// Nur Fakten aus src/config/ – Platzhalter („[Wert einsetzen]“, „TODO“) werden nie ausgegeben.
import type { APIRoute } from 'astro';
import { company, faqs, isMissing, PHONE_IS_PLACEHOLDER, WAAS, INKLUSIVE, MODELL, OFFER, PAKETE, formatEuro } from '../config/site';
import { HERO, UEBER, SLA_KERN, SLA_HINWEIS, PRODUKTE, PRODUKTE_HINWEIS } from '../config/hauptseite';
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
    `> ${HERO.pre.trim()}${HERO.accent} ${HERO.lead} ${UEBER.text}`,
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
    '## Produkte',
    ...PRODUKTE.map((p) => [
      `- ${p.name}${p.slogan ? ` – ${p.slogan}` : ''}: ${p.text}`,
      ...(p.bausteine ? [`  - Bausteine: ${p.bausteine.map((b) => b.label).join(', ')} (${p.bausteineHinweis ?? 'einzeln buchbar'}).`] : []),
    ]).flat(),
    `- ${PRODUKTE_HINWEIS}`,
    '',
    '## Häufige Fragen',
    ...faqs.map((f) => `- ${f.q} ${f.a}`),
    '',
    '## Seiten',
    `- [Startseite](${url('/')})`,
    `- [Kontakt](${url('/kontakt/')}): kostenloses Erstgespräch`,
    `- [Impressum](${url('/impressum/')})`,
    `- [Datenschutz](${url('/datenschutz/')})`,
    `- [AGB](${url('/agb/')})`,
    '',
    '## Kontakt',
    `- E-Mail: ${company.email}`,
    ...(isMissing(company.phone) || PHONE_IS_PLACEHOLDER ? [] : [`- Telefon: ${company.phone}`]),
    ...adresse,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
