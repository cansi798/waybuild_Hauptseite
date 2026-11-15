import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as href } from "./paths_WqKvl410.mjs";
// src/pages/site.webmanifest.ts
var site_webmanifest_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = () => new Response(JSON.stringify({
	name: "webgold – neue Website in Arbeit",
	short_name: "webgold",
	start_url: href("/"),
	scope: href("/"),
	display: "browser",
	background_color: "#faf8f4",
	theme_color: "#0b6d6b",
	icons: [
		{
			src: href("/icon-192.png"),
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: href("/icon-512.png"),
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: href("/icon-maskable-512.png"),
			sizes: "512x512",
			type: "image/png",
			purpose: "maskable"
		}
	]
}, null, 2), { headers: { "Content-Type": "application/manifest+json" } });
// \0virtual:astro:page:src/pages/site.webmanifest@_@ts
var page = () => site_webmanifest_exports;
export { page };
