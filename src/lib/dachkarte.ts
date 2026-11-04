// Geometrie der DACH-Karte (beim Build berechnet, im Browser nur statisches SVG + CSS).
// Projektion: längentreu bei 50,5° N (einfach, Norden oben). Umrisse: dach-umriss.ts (Natural Earth, gemeinfrei).
// Bögen: quadratische Kurven vom Sitz zu jeder Stadt, nach außen gebogen (westliche Städte nach Westen, östliche nach Osten),
// enden kurz vor dem Stadtpunkt. Reihenfolge der Animation: nahe Städte zuerst (Welle vom Sitz nach außen).
import { DEUTSCHLAND, OESTERREICH, SCHWEIZ, LIECHTENSTEIN, type Ring } from './dach-umriss';
import { SITZ, STAEDTE } from '../config/einsatzgebiet';

const K = 54, LON0 = 5.75, LAT0 = 55.15, C = Math.cos((50.5 * Math.PI) / 180);
const r1 = (n: number) => Math.round(n * 10) / 10;
export const P = (lon: number, lat: number): [number, number] => [r1((lon - LON0) * C * K), r1((LAT0 - lat) * K)];

/** viewBox mit Rand für Beschriftungen */
export const KARTE = { x: -62, y: -14, breite: 484, hoehe: 552 };

const pfad = (ringe: Ring[]) =>
  ringe.map((r) => 'M' + r.map(([lo, la]) => P(lo, la).join(' ')).join('L') + 'Z').join('');

export function dachKarte() {
  const [sx, sy] = P(SITZ.lon, SITZ.lat);
  const R_SITZ = 7, R_STADT = 4.2;
  const staedte = STAEDTE.map((s, i) => {
    const [x, y] = P(s.lon, s.lat);
    return { ...s, i, x, y, l: Math.hypot(x - sx, y - sy) };
  });
  // Hamburg liegt am Sitz → kein eigener Punkt/Bogen
  const sichtbar = staedte.filter((s) => s.l > 20);
  const reihe = [...sichtbar].sort((a, b) => a.l - b.l);
  const boegen = reihe.map((s, nr) => {
    const dx = s.x - sx, dy = s.y - sy, l = s.l, ux = dx / l, uy = dy / l;
    // Normale, die nach außen zeigt (weg von der Nord-Süd-Achse durch den Sitz)
    let nx = -uy, ny = ux;
    if (Math.sign(nx) !== Math.sign(dx || 1)) { nx = -nx; ny = -ny; }
    const w = l * (Math.abs(dx) < 25 ? 0.06 : 0.16);
    const cx = sx + dx * 0.5 + nx * w, cy = sy + dy * 0.5 + ny * w;
    // Start außerhalb des Sitz-Rings, Ende kurz vor dem Stadtpunkt (Parameter t entlang der Kurve)
    const q = (t: number): [number, number] => [
      (1 - t) ** 2 * sx + 2 * (1 - t) * t * cx + t * t * s.x,
      (1 - t) ** 2 * sy + 2 * (1 - t) * t * cy + t * t * s.y,
    ];
    let t0 = 0, t1 = 1;
    while (t0 < 0.5 && Math.hypot(q(t0)[0] - sx, q(t0)[1] - sy) < R_SITZ + 5) t0 += 0.002;
    while (t1 > 0.5 && Math.hypot(q(t1)[0] - s.x, q(t1)[1] - s.y) < R_STADT + 2.5) t1 -= 0.002;
    // Teilkurve [t0, t1] einer quadratischen Bézierkurve
    const a = q(t0), b = q(t1);
    const ctrl: [number, number] = [
      (1 - t0) * ((1 - t1) * sx + t1 * cx) + t0 * ((1 - t1) * cx + t1 * s.x),
      (1 - t0) * ((1 - t1) * sy + t1 * cy) + t0 * ((1 - t1) * cy + t1 * s.y),
    ];
    const d = `M${r1(a[0])} ${r1(a[1])}Q${r1(ctrl[0])} ${r1(ctrl[1])} ${r1(b[0])} ${r1(b[1])}`;
    return { d, nr, stadt: s.de };
  });
  const nrVon = Object.fromEntries(boegen.map((b) => [b.stadt, b.nr]));
  return {
    laender: { DE: pfad(DEUTSCHLAND), AT: pfad(OESTERREICH), CH: pfad(SCHWEIZ), LI: pfad(LIECHTENSTEIN) },
    sitz: { x: sx, y: sy, r: R_SITZ },
    staedte: sichtbar.map((s) => ({ ...s, nr: nrVon[s.de] })),
    boegen,
    rStadt: R_STADT,
    // Ländernamen außerhalb der Umrisse (Nordsee, unter Österreich, unter der Schweiz) – kreuzen so keine Linien
    landLabel: { DE: [KARTE.x + 8, P(0, 53.92)[1]] as [number, number], AT: P(15.1, 46.2), CH: P(8.3, 45.5) },
  };
}
