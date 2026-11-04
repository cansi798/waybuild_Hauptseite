// /llms.txt – kompakte Zusammenfassung für KI-Suchen (ChatGPT, Perplexity, Gemini …).
// Dachmarke Waybuild (Jamil 27.10.2026, Talk 3475): erst was für ALLE Produkte gilt, dann die Produktliste.
// Nur Fakten aus src/config/ – Platzhalter („[Wert einsetzen]“, „TODO“) werden nie ausgegeben.
import type { APIRoute } from 'astro';
import { company, faqsAllgemein, faqsWebsite, isMissing, WAAS, INKLUSIVE, MODELL, PAKETE, IN_ALLEN, formatEuro, brutto, steps } from '../config/site';
import { SLA_KERN, SLA_HINWEIS, ZUSAGEN, PRODUKTE, produktName } from '../config/hauptseite';
import { HS_HERO, HS_WARUM, HS_FUER_WEN, HS_HALTUNG, HS_ZUSAMMENARBEIT, HS_ENTSCHEIDUNGEN, HS_LOESUNGEN, HS_VERLASSEN, HS_MARKE } from '../config/startseite';
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
    // Botschaft der Startseite (Jamil, Talk 4544): Hero-Headline + Markenstatement
    `> ${HS_HERO.titel.join(' ')}${HS_HERO.titelAkzent} ${HS_MARKE.statement}`,
    '',
    `${HS_MARKE.kurz}`,
    '',
    `Kurz gesagt: ${company.name}${adresse.length ? ` aus ${company.city}` : ''} entwickelt digitale Produkte und individuelle Lösungen für Unternehmen und Selbstständige in Deutschland (B2B). Hauptprodukt ist der Website Service im Abo: Website, Hosting, Domain, Wartung und Betreuung zum festen Monatspreis, weil viele digitale Prozesse bei der Website beginnen. Während der Servicezeiten gibt es innerhalb einer Stunde eine erste Rückmeldung.`,
    '',
    'Waybuild ist die Dachmarke. Zusagen, Prinzipien und Prozesse gelten für alle Produkte. Alle Preise netto zzgl. gesetzlicher USt. Nur B2B.',
    '',
    '## Für alle Produkte: Service-Zusagen',
    // Zeilen mit Platzhalter bewusst weglassen – nur zugesagte Werte ausgeben.
    ...SLA_KERN.filter((z) => !z.wert.includes(PLATZHALTER)).map((z) => `- ${z.label}: ${z.wert} (${(z.text[0].toLowerCase() + z.text.slice(1)).replace(/\.\s*/, '). ')}`),
    ...ZUSAGEN.map((z) => `- ${z.title}. ${z.text}`),
    `- ${SLA_HINWEIS}`,
    '',
    `## Warum es Waybuild gibt: ${HS_WARUM.titel}`,
    `${HS_WARUM.einleitung.join(' ')} ${HS_WARUM.probleme.join(', ')}. ${HS_WARUM.ursache.join(' ')} ${HS_WARUM.ziel} ${HS_WARUM.zielSatz}`,
    '',
    `## Für wen: ${HS_FUER_WEN.titel}`,
    `${HS_FUER_WEN.zeilen.join(' ')} ${HS_FUER_WEN.text} ${HS_FUER_WEN.nachsatz.join(' ')}`,
    `${HS_FUER_WEN.erwartungenTitel}: ${HS_FUER_WEN.erwartungen.join(', ')}.`,
    '',
    `## Wofür Waybuild steht: ${HS_HALTUNG.titel}`,
    ...HS_HALTUNG.grundsaetze.map((g) => `- ${g.wort}: ${g.text.join(' ')}`),
    HS_HALTUNG.ende,
    '',
    `## Zusammenarbeit: ${HS_ZUSAMMENARBEIT.titel}`,
    `${HS_ZUSAMMENARBEIT.text.join(' ')} ${HS_ZUSAMMENARBEIT.erlebenTitel}: ${HS_ZUSAMMENARBEIT.erleben.join(', ')}. ${HS_ZUSAMMENARBEIT.zusatz.join(' ')}`,
    '',
    `## Wie wir Entscheidungen treffen: ${HS_ENTSCHEIDUNGEN.titel}`,
    `${HS_ENTSCHEIDUNGEN.einleitung} ${HS_ENTSCHEIDUNGEN.fragen.join(' ')} ${HS_ENTSCHEIDUNGEN.danach}`,
    ...HS_ENTSCHEIDUNGEN.stationen.map((st, i) => `${i + 1}. ${st.wort}: ${st.text}`),
    '',
    `## Unsere Lösungen: ${HS_LOESUNGEN.titel}`,
    `${HS_LOESUNGEN.text.join(' ')} ${HS_LOESUNGEN.prinzipien.join(', ')}.`,
    ...HS_LOESUNGEN.produkte.map((p) => `- ${p.name}: ${p.text.join(' ')} (${url(p.pfad)})`),
    HS_LOESUNGEN.ende,
    '',
    `## ${HS_VERLASSEN.titel}`,
    ...HS_VERLASSEN.erwartungen.map((e) => `- ${e}`),
    HS_VERLASSEN.zusatz.join(' '),
    '',
    '## Produkte',
    ...PRODUKTE.map((p) => p.aktiv
      ? `- ${produktName(p)}${produktName(p) === p.kategorie ? '' : ` (${p.kategorie})`}, verfügbar: ` + [p.nutzen ?? p.zweck ?? '', ...(p.punkte ?? []).map((x) => x.text), p.url || p.pfad ? `Seite: ${p.url || url(p.pfad!)}` : `Anfrage: ${url('/kontakt/')}`].filter(Boolean).join(' ')
      : `- ${produktName(p)}: einzelne Projekte auf Anfrage.`),
    '',
    `## ${websiteName} (Hauptprodukt)`,
    `${WAAS.claim}`,
    `- Enthalten: ${INKLUSIVE.map((i) => i.title).join(', ')}.`,
    `- Geschäftsmodell: ${MODELL.join(', ')}.`,
    `- In allen Paketen: ${IN_ALLEN.join(', ')}.`,
    ...PAKETE.map((p) => `- Paket ${p.name}: ${formatEuro(p.preis)} pro Monat netto zzgl. MwSt. (${formatEuro(brutto(p.preis))} inkl. MwSt.). ${p.kurz}. ${[...p.extras, ...p.features].join(', ')}.`),
    `- Laufzeit: ${WAAS.laufzeit} (mit einem Monat Frist zum Monatsende).`,
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
    `- [Produkte](${url('/produkte/')}): Website Service, individuelle Software, weitere Produkte folgen`,
    `- [Über uns](${url('/ueber-uns/')}): wer wir sind, Mission, Denkweise, Prinzipien`,
    `- [Referenzen](${url('/referenzen/')}): Projekte, nur mit Freigabe der Kunden`,
    `- [Partner](${url('/partner/')}): Partnerschaften und Partner werden`,
    `- [Karriere](${url('/karriere/')}): wir suchen immer IT-Freelancer, IT-Fachkräfte (Festanstellung), Büro und Verwaltung, Dozenten für die waybuild Akademie; Initiativbewerbung; remote; Bewerbung per E-Mail`,
    `- [Unsere Zusagen](${url('/zusagen/')}): Service-Zusagen, Prozess einer Anfrage, Prinzipien`,
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
