import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_DXuKYexI.mjs";
import { r as createComponent, t as $$BaseLayout } from "./BaseLayout_Chz4_gna.mjs";
import { n as href } from "./paths_WqKvl410.mjs";
// src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Seite nicht gefunden",
		"description": "Diese Seite gibt es nicht (mehr). Unsere neue Website entsteht gerade.",
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="wrap nf"><h1>Diese Seite gibt es nicht (mehr).</h1><p>Hier entsteht gerade unsere neue Website. Auf der Startseite finden Sie, was Sie bald erwartet, und wie Sie uns erreichen.</p><a class="btn"${addAttribute(href("/"), "href")}>Zur Startseite</a></section>` })}`;
}, "/app/src/pages/404.astro", void 0);
var $$file = "/app/src/pages/404.astro";
var $$url = "/waybuild_Hauptseite/404/";
// \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
export { page };
