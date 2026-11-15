// /llms.txt – kompakte Zusammenfassung für KI-Suchen. Nur Inhalte des Onepagers (keine Preise, keine AGB).
import type { APIRoute } from 'astro';
import { company, HOURS, POSITIONIERUNG, ERWARTET, ABLAUF } from '../config/site';
import { absolute } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const url = (p: string) => absolute(p, site);
  const lines = [
    `# ${company.name}`,
    '',
    `> ${POSITIONIERUNG} Hier entsteht gerade unsere neue Website.`,
    '',
    `${company.name} ist eine Marke der ${company.legalName} aus ${company.city}. Zielgruppe: klein- und mittelständische Unternehmen.`,
    '',
    `## ${ERWARTET.kenn}`,
    ERWARTET.lead,
    ...ERWARTET.punkte.map((p) => `- ${p.titel}: ${p.text}`),
    '',
    `## ${ABLAUF.titel}`,
    ...ABLAUF.schritte.map((s, i) => `${i + 1}. ${s.titel} (${s.zeit}): ${s.text}`),
    '',
    '## Kontakt',
    `- Telefon und WhatsApp: ${company.phone}`,
    `- E-Mail: ${company.email}`,
    `- Erreichbar: ${HOURS}`,
    `- Anschrift: ${company.legalName}, ${company.street}, ${company.zip} ${company.city}`,
    '',
    '## Seiten',
    `- [Startseite](${url('/')})`,
    `- [Impressum](${url('/impressum/')})`,
    `- [Datenschutz](${url('/datenschutz/')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
