import { $ as ASTRO_GENERATOR, J as UnavailableAstroGlobal, M as InvalidComponentArgs, X as AstroError, f as renderTemplate, h as addAttribute, l as renderSlot, m as renderHead, x as unescapeHTML } from "./server_DXuKYexI.mjs";
import { a as company, i as POSITIONIERUNG, t as BESCHREIBUNG } from "./site_B5EqL84D.mjs";
import { n as href, t as absolute } from "./paths_WqKvl410.mjs";
// node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// node_modules/astro/dist/runtime/server/astro-global.js
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
// node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2?url
var plus_jakarta_sans_latin_wght_normal_default = "/waybuild_Hauptseite/_astro/plus-jakarta-sans-latin-wght-normal.eXO_dkmS.woff2";
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description, noindex = false, start = false } = Astro.props;
	const canonical = new URL(Astro.url.pathname, Astro.site).href;
	const siteRoot = absolute("/", Astro.site);
	const ogImage = absolute("/og-image.png", Astro.site);
	const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`;
	const organization = {
		"@context": "https://schema.org",
		"@type": ["Organization", "ProfessionalService"],
		"@id": `${siteRoot}#organization`,
		name: company.legalName,
		alternateName: company.name,
		description: BESCHREIBUNG,
		slogan: POSITIONIERUNG,
		url: siteRoot,
		logo: absolute("/icon-512.png", Astro.site),
		image: ogImage,
		foundingDate: company.foundingYear,
		email: company.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: company.street,
			postalCode: company.zip,
			addressLocality: company.city,
			addressCountry: company.country
		},
		areaServed: {
			"@type": "Country",
			name: "Deutschland",
			identifier: "DE"
		}
	};
	const website = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${siteRoot}#website`,
		url: siteRoot,
		name: company.name,
		inLanguage: "de-DE",
		publisher: { "@id": `${siteRoot}#organization` }
	};
	const jahr = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${fullTitle}</title><link rel="preload"${addAttribute(plus_jakarta_sans_latin_wght_normal_default, "href")} as="font" type="font/woff2" crossorigin><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><meta name="robots"${addAttribute("noindex, nofollow", "content")}><meta name="theme-color" content="#0b6d6b"><link rel="icon"${addAttribute(href("/favicon.ico"), "href")} sizes="any"><link rel="icon"${addAttribute(href("/icon-192.png"), "href")} type="image/png" sizes="192x192"><link rel="apple-touch-icon"${addAttribute(href("/apple-touch-icon.png"), "href")}><link rel="manifest"${addAttribute(href("/site.webmanifest"), "href")}><link rel="sitemap"${addAttribute(href("/sitemap-index.xml"), "href")}><meta property="og:type" content="website"><meta property="og:locale" content="de_DE"><meta property="og:site_name"${addAttribute(company.name, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="webgold: Hier entsteht unsere neue Website."><meta name="twitter:card" content="summary_large_image">${!noindex && [organization, website].map((obj) => renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(obj))}<\/script>`)}${renderHead($$result)}</head><body${addAttribute(start ? "ist-start" : void 0, "class")}><a class="skip" href="#main">Zum Inhalt springen</a>${renderTemplate`<div class="vorschau-leiste" role="note">Vorschau – nicht öffentlich</div>`}<header class="kopf"><div class="wrap kopf__innen"><a class="kopf__logo"${addAttribute(href("/"), "href")} aria-label="webgold, zur Startseite"><img${addAttribute(href("/logo-webgold.svg"), "src")} alt="webgold" width="132" height="32"></a></div></header><main id="main">${renderSlot($$result, $$slots["default"])}</main><footer class="fuss"><div class="wrap fuss__innen"><p>© ${jahr} ${company.legalName}</p><nav aria-label="Rechtliches"><ul><li><a${addAttribute(href("/impressum/"), "href")}>Impressum</a></li><li><a${addAttribute(href("/datenschutz/"), "href")}>Datenschutz</a></li></ul></nav></div></footer></body></html>`;
}, "/app/src/layouts/BaseLayout.astro", void 0);
export { createAstro as n, createComponent as r, $$BaseLayout as t };
