// src/config/site.ts
/** Firmendaten wie WS-0007 src/config/site.ts (Handelsregister-Auszug 15.11.2026). */
var company = {
	name: "webgold",
	legalName: "Waybuild UG (haftungsbeschränkt)",
	email: "service@webgold.io",
	phone: "0151 56156578",
	street: "Kuno-Liesenberg-Kehre 32a",
	zip: "22844",
	city: "Norderstedt",
	country: "DE",
	managingDirector: "Can Siebert",
	registerCourt: "Amtsgericht Kiel",
	registerNumber: "HRB 29883 KI",
	/** keine USt-IdNr. vorhanden → Zeile im Impressum ausgeblendet */
	vatId: "",
	hoster: "ALL-INKL.COM – Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf",
	foundingYear: "2026"
};
/** Positionierung (WS-0007 variante.ts POSITIONIERUNG, Jamil #6055 Fr. 20) */
var POSITIONIERUNG = "Ihre Website im Abo und auf Wunsch eine Web-App für Ihren digitalen Alltag.";
var HERO = {
	badge: "Neue Website in Arbeit",
	titel: POSITIONIERUNG,
	unter: "Hier entsteht gerade unsere neue Website.",
	knopf: "Kostenlose Erstberatung",
	knopf2: "Was Sie bald erwartet",
	fuer: "Für klein- und mittelständische Unternehmen."
};
/** „Was Sie bald erwartet“ – Kernangebot aus WS-0007 (ohne Preise/Pakete/Laufzeiten) */
var ERWARTET = {
	kenn: "Was Sie bald erwartet",
	titel: "Website und Arbeitsalltag in einem System.",
	lead: "Wir entwickeln digitale Lösungen, die Kunden gewinnen, Arbeitsabläufe vereinfachen und mit Ihrem Unternehmen mitwachsen.",
	punkte: [
		{
			icon: "website",
			titel: "Website im Abo",
			text: "Fertig gebaut und laufend betreut."
		},
		{
			icon: "app",
			titel: "Auf Wunsch Web-App",
			text: "Anfragen an einem Ort, alles im Blick."
		},
		{
			icon: "vorschau",
			titel: "Kostenlose Vorschau",
			text: "Unverbindlich, zu jeder Anfrage."
		},
		{
			icon: "server",
			titel: "Hosting in Deutschland",
			text: "Betreuung inklusive, DSGVO-orientiert."
		}
	]
};
var BESCHREIBUNG = "Hier entsteht die neue Website von webgold: Website im Abo, auf Wunsch mit Web-App.";
export { company as a, POSITIONIERUNG as i, ERWARTET as n, HERO as r, BESCHREIBUNG as t };
