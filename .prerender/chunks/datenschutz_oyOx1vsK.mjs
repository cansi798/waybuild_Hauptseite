import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_DXuKYexI.mjs";
import { r as createComponent, t as $$BaseLayout } from "./BaseLayout_Chz4_gna.mjs";
import { a as company } from "./site_B5EqL84D.mjs";
// src/pages/datenschutz.astro
var datenschutz_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Datenschutz,
	file: () => $$file,
	url: () => $$url
});
var $$Datenschutz = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Datenschutzerklärung",
		"description": `Datenschutzerklärung der ${company.legalName}.`,
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap prose"><h1>Datenschutzerklärung</h1><h2>1. Verantwortlicher</h2><p>${company.legalName}, ${company.street}, ${company.zip} ${company.city}<br>Vertreten durch: ${company.managingDirector}<br>E-Mail: <a${addAttribute(`mailto:${company.email}`, "href")}>${company.email}</a></p><h2>2. Grundsatz: So wenig Daten wie möglich</h2><p>Diese Website verwendet keine Cookies, kein Tracking, keine Analyse-Tools und kein Kontaktformular. Sie speichert nichts in Ihrem Browser und lädt beim Aufruf keine Inhalte von Drittanbietern; auch die Schriftart wird von unserem eigenen Webspace ausgeliefert.</p><h2>3. Hosting</h2>${renderTemplate`<p>Diese Vorschau wird bei GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA) gehostet. Beim Aufruf verarbeitet der Hoster technisch notwendige Daten (u. a. IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser) in Server-Logfiles. Dabei können Daten in die USA übermittelt werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung).</p>`}<h2>4. Kontakt per E-Mail</h2><p>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben (zum Beispiel Name, E-Mail-Adresse, Unternehmen und Ihr Anliegen) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p><h2>5. Ihre Rechte</h2><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO) sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde, zum Beispiel beim Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein.</p></div>` })}`;
}, "/app/src/pages/datenschutz.astro", void 0);
var $$file = "/app/src/pages/datenschutz.astro";
var $$url = "/waybuild_Hauptseite/datenschutz/";
// \0virtual:astro:page:src/pages/datenschutz@_@astro
var page = () => datenschutz_exports;
export { page };
