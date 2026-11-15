// src/lib/paths.ts
var base = "/waybuild_Hauptseite/".replace(/\/+$/, "");
function href(path = "/") {
	return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
function absolute(path, site) {
	return new URL(href(path), site).href;
}
export { href as n, absolute as t };
