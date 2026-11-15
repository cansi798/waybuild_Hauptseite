import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as company, i as POSITIONIERUNG, n as ERWARTET } from "./site_B5EqL84D.mjs";
import { t as absolute } from "./paths_WqKvl410.mjs";
// src/pages/llms.txt.ts
var llms_txt_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = ({ site }) => {
	const url = (p) => absolute(p, site);
	const lines = [
		`# ${company.name}`,
		"",
		`> ${POSITIONIERUNG} Hier entsteht gerade unsere neue Website.`,
		"",
		`${company.name} ist eine Marke der ${company.legalName} aus ${company.city}. Zielgruppe: klein- und mittelständische Unternehmen.`,
		"",
		`## ${ERWARTET.kenn}`,
		ERWARTET.lead,
		...ERWARTET.punkte.map((p) => `- ${p.titel}: ${p.text}`),
		"",
		"## Anbieter",
		`- Anschrift: ${company.legalName}, ${company.street}, ${company.zip} ${company.city}`,
		"",
		"## Seiten",
		`- [Startseite](${url("/")})`,
		`- [Impressum](${url("/impressum/")})`,
		`- [Datenschutz](${url("/datenschutz/")})`
	];
	return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
// \0virtual:astro:page:src/pages/llms.txt@_@ts
var page = () => llms_txt_exports;
export { page };
