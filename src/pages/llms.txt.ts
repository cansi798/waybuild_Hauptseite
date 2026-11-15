// /llms.txt – kompakte Zusammenfassung für KI-Suchen. Nur Inhalte des Onepagers (keine Preise, keine AGB).
import type { APIRoute } from 'astro';
import { company, POSITIONIERUNG, ERWARTET } from '../config/site';
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
    '## Anbieter',
    `- Anschrift: ${company.legalName}, ${company.street}, ${company.zip} ${company.city}`,
    '',
    '## Seiten',
    `- [Startseite](${url('/')})`,
    `- [Impressum](${url('/impressum/')})`,
    `- [Datenschutz](${url('/datenschutz/')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
