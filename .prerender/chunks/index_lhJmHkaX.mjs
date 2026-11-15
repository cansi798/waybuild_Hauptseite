import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead, x as unescapeHTML } from "./server_DXuKYexI.mjs";
import { n as createAstro, r as createComponent, t as $$BaseLayout } from "./BaseLayout_Chz4_gna.mjs";
import { n as ERWARTET, r as HERO, t as BESCHREIBUNG } from "./site_B5EqL84D.mjs";
// src/components/Icon.astro
createAstro("https://cansi798.github.io");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { name, size = 24 } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg viewBox="0 0 24 24"${addAttribute(size, "width")}${addAttribute(size, "height")} fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${unescapeHTML({
		website: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 9h18M7 6.5h.01M10 6.5h.01\"/>",
		app: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/><path d=\"M17.5 14v7M14 17.5h7\"/>",
		vorschau: "<path d=\"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
		mensch: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7\"/>",
		schild: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
		server: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"13\" width=\"18\" height=\"7\" rx=\"1.5\"/><path d=\"M7 7.5h.01M7 16.5h.01\"/>",
		phone: "<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2\"/>",
		mail: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 7l9 6 9-6\"/>",
		whatsapp: "<path d=\"M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 8 19.3z\"/><path d=\"M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.4-1.6-1-2-2l1-1-1-2z\"/>",
		pfeil: "<path d=\"M5 12h14M13 6l6 6-6 6\"/>"
	}[name])}</svg>`;
}, "/app/src/components/Icon.astro", void 0);
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "webgold: Website im Abo und Web-App – neue Website in Arbeit",
		"description": BESCHREIBUNG,
		"start": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero" aria-labelledby="h1"><div class="hero__mesh" aria-hidden="true"><span class="hero__blob hero__blob--1"></span><span class="hero__blob hero__blob--2"></span><span class="hero__blob hero__blob--3"></span></div><div class="wrap hero__innen"><p class="badge"><span class="badge__punkt" aria-hidden="true"></span>${HERO.badge}</p><h1 id="h1">${HERO.titel}</h1><p class="hero__unter">${HERO.unter}</p><p class="hero__fuer">${HERO.fuer}</p></div></section><section class="abschnitt" id="erwartet" aria-labelledby="erwartet-h"><div class="wrap"><p class="kenn">${ERWARTET.kenn}</p><h2 class="h2" id="erwartet-h">${ERWARTET.titel}</h2><ul class="karten">${ERWARTET.punkte.map((p) => renderTemplate`<li class="karte"><span class="karte__ico">${renderComponent($$result, "Icon", $$Icon, { "name": p.icon })}</span><h3>${p.titel}</h3><p>${p.text}</p></li>`)}</ul></div></section>` })}`;
}, "/app/src/pages/index.astro", void 0);
var $$file = "/app/src/pages/index.astro";
var $$url = "/waybuild_Hauptseite/";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
