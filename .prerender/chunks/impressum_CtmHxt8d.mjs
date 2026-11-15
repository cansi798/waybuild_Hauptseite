import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as renderComponent, f as renderTemplate, h as addAttribute, o as Fragment, p as maybeRenderHead } from "./server_DXuKYexI.mjs";
import { r as createComponent, t as $$BaseLayout } from "./BaseLayout_Chz4_gna.mjs";
import { a as company } from "./site_B5EqL84D.mjs";
// src/pages/impressum.astro
var impressum_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Impressum,
	file: () => $$file,
	url: () => $$url
});
var $$Impressum = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Impressum",
		"description": `Impressum der ${company.legalName}.`,
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap prose"><h1>Impressum</h1><h2>Angaben gemäß § 5 DDG</h2><p>${company.name} – powered by ${company.legalName}<br>${company.street}<br>${company.zip} ${company.city}</p><p>Vertreten durch die Geschäftsführung: ${company.managingDirector}<br>Registergericht: ${company.registerCourt}<br>Registernummer: ${company.registerNumber}</p><h2>Kontakt</h2><p>E-Mail: <a${addAttribute(`mailto:${company.email}`, "href")}>${company.email}</a><br>Telefon: ${company.phone}</p>${company.vatId && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${company.vatId}</p>` })}`}<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2><p>${company.managingDirector}, Anschrift wie oben</p><h2>Verbraucherstreitbeilegung</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p></div>` })}`;
}, "/app/src/pages/impressum.astro", void 0);
var $$file = "/app/src/pages/impressum.astro";
var $$url = "/waybuild_Hauptseite/impressum/";
// \0virtual:astro:page:src/pages/impressum@_@astro
var page = () => impressum_exports;
export { page };
