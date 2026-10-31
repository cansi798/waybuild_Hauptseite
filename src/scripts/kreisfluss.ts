// Lichtpunkt im Kreis „Verbessern“ (Jamil, Talk 3929): läuft auf dem geschlossenen Kreis; erreicht er die Umrandung
// eines Begriffs, teilt er sich in zwei Punkte, die oben und unten an der Umrandung entlanglaufen und sich am anderen
// Ende wieder treffen, dann geht es auf dem Kreis weiter. Pfeile rücken kurz nach, der Begriff leuchtet, solange ihn
// der Punkt umläuft.
//
// Läuft nur, solange der Kreis geschlossen (ist-zu) und im Bild (ist-sichtbar) ist – beide Klassen setzt denkweise.ts.
// Maße (Begriffs-Umrandungen) werden nur beim Start und nach Größenänderung gemessen; pro Frame werden nur cx/cy der
// zwölf Punkte geschrieben. Reduzierte Bewegung / ohne JS: kein Lichtpunkt (statischer Kreis mit Pfeilen).

type Pt = { x: number; y: number };
type Pille = { chip: HTMLElement; phi: number; gx: number; gy: number; a2: number; rr: number; P: number };
type Seg = { typ: 'k'; s0: number; len: number; a: number } | { typ: 'p'; s0: number; len: number; p: Pille; sIn: number; LA: number; LB: number };

const RUNDE_MS = 7500;               // eine Runde inkl. Umläufe der Begriffe (vorher 12 s)
const LAG = [0, 10, 20, 30];         // Nachleuchten: Abstand der Geister-Punkte auf dem Weg (viewBox-Einheiten)

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function starte(el: HTMLElement) {
  const k = JSON.parse(el.dataset.kreis || '{}') as { W: number; CX: number; CY: number; R: number; r: number };
  const { W, CX, CY, R, r } = k;
  const kreisPt = (phi: number): Pt => { const t = ((180 + r * phi) * Math.PI) / 180; return { x: CX + R * Math.sin(t), y: CY - R * Math.cos(t) }; };
  const chips = Array.from(el.querySelectorAll<HTMLElement>('.dw-chip--auf-linie[data-phi]'));
  const pfeile = Array.from(el.querySelectorAll<SVGGElement>('.dw-pfeil[data-phi]')).map((g) => ({ g, phi: +(g.dataset.phi || 0), an: false }));
  const punkte = Array.from(el.querySelectorAll<SVGCircleElement>('.dw-fluss__ast circle')).map((c) => ({
    c, ast: +((c.parentNode as SVGGElement).dataset.ast || 0), lag: LAG[+(c.dataset.geist || 0)] ?? 0, sicht: true,
  }));

  let segs: Seg[] = [], L = 1, dirty = true, aktiv = false, raf = 0, zuletzt = 0, lauf = 0, umlauf: HTMLElement | null = null;

  const stadionPt = (p: Pille, s: number): Pt => {
    s = ((s % p.P) + p.P) % p.P;
    const a = 2 * p.a2, b = Math.PI * p.rr;
    if (s < a) return { x: p.gx - p.a2 + s, y: p.gy - p.rr };
    if (s < a + b) { const t = (s - a) / p.rr - Math.PI / 2; return { x: p.gx + p.a2 + p.rr * Math.cos(t), y: p.gy + p.rr * Math.sin(t) }; }
    if (s < 2 * a + b) return { x: p.gx + p.a2 - (s - a - b), y: p.gy + p.rr };
    const t = (s - 2 * a - b) / p.rr + Math.PI / 2; return { x: p.gx - p.a2 + p.rr * Math.cos(t), y: p.gy + p.rr * Math.sin(t) };
  };
  const projiziere = (p: Pille, q: Pt) => {
    let best = 0, bd = Infinity;
    for (let i = 0; i < 480; i++) { const s = (i / 480) * p.P, o = stadionPt(p, s), d = (o.x - q.x) ** 2 + (o.y - q.y) ** 2; if (d < bd) { bd = d; best = s; } }
    return best;
  };

  const messen = () => {
    dirty = false;
    const skala = W / Math.max(1, el.getBoundingClientRect().width);
    const pillen: Pille[] = chips.map((chip) => {
      const phi = +(chip.dataset.phi || 0), g = kreisPt(phi);
      const w = chip.offsetWidth * skala, h = chip.offsetHeight * skala, rr = h / 2, a2 = Math.max(0, w / 2 - rr);
      return { chip, phi, gx: g.x, gy: g.y, a2, rr, P: 4 * a2 + 2 * Math.PI * rr };
    }).sort((a, b) => a.phi - b.phi);
    const drin = (p: Pille, q: Pt) => { const dx = Math.max(Math.abs(q.x - p.gx) - p.a2, 0), dy = q.y - p.gy; return dx * dx + dy * dy <= p.rr * p.rr; };
    // Winkel, bei dem der Kreis die Umrandung verlässt (je Seite, Halbierungssuche)
    const rand = (p: Pille, seite: 1 | -1) => { let lo = 0, hi = 80; for (let i = 0; i < 24; i++) { const m = (lo + hi) / 2; if (drin(p, kreisPt(p.phi + seite * m))) lo = m; else hi = m; } return lo; };
    const rad = (g: number) => (g * Math.PI) / 180;
    segs = []; L = 0;
    const erste = pillen.find((p) => p.phi === 0) || pillen[0];
    const reihe = [...pillen.filter((p) => p !== erste), erste];
    let phi = erste.phi + rand(erste, 1);
    for (const p of reihe) {
      const vor = rand(p, -1), nach = rand(p, 1), ziel = (p === erste ? 360 : p.phi) - vor;
      const lenK = R * rad(Math.max(0, ziel - phi));
      segs.push({ typ: 'k', s0: L, len: lenK, a: phi }); L += lenK;
      const pin = kreisPt(ziel), pout = kreisPt((p === erste ? 360 : p.phi) + nach);
      const sIn = projiziere(p, pin), sOut = projiziere(p, pout);
      const LA = (((sOut - sIn) % p.P) + p.P) % p.P, LB = p.P - LA, len = Math.max(LA, LB);
      segs.push({ typ: 'p', s0: L, len, p, sIn, LA, LB }); L += len;
      phi = (p === erste ? 360 : p.phi) + nach;
    }
    L = Math.max(1, L);
  };

  /** Lage auf dem Weg: ein Punkt (Kreis) oder zwei (geteilt an einem Begriff), dazu Winkel bzw. Begriff */
  const lage = (s: number): { pts: Pt[]; phi?: number; p?: Pille } => {
    s = ((s % L) + L) % L;
    let seg = segs[segs.length - 1];
    for (const x of segs) { if (s < x.s0 + x.len) { seg = x; break; } }
    const d = s - seg.s0;
    if (seg.typ === 'k') { const phi = seg.a + (d / R) * (180 / Math.PI); return { pts: [kreisPt(phi)], phi: phi % 360 }; }
    const u = seg.len ? d / seg.len : 0;
    return { pts: [stadionPt(seg.p, seg.sIn + u * seg.LA), stadionPt(seg.p, seg.sIn - u * seg.LB)], p: seg.p };
  };

  const frame = (jetzt: number) => {
    raf = 0;
    if (!aktiv) return;
    if (dirty) messen();
    lauf += Math.min(64, jetzt - (zuletzt || jetzt)); zuletzt = jetzt;
    const s = (lauf / RUNDE_MS) * L;
    const kopf = lage(s);
    for (const q of punkte) {
      const l = q.lag ? lage(s - q.lag) : kopf;
      const pt = l.pts.length === 2 ? l.pts[q.ast] : q.ast === 0 ? l.pts[0] : null;
      if (!pt) { if (q.sicht) { q.sicht = false; q.c.setAttribute('visibility', 'hidden'); } continue; }
      if (!q.sicht) { q.sicht = true; q.c.removeAttribute('visibility'); }
      q.c.setAttribute('cx', pt.x.toFixed(1)); q.c.setAttribute('cy', pt.y.toFixed(1));
    }
    const chip = kopf.p ? kopf.p.chip : null;
    if (chip !== umlauf) { umlauf?.classList.remove('ist-umlauf'); chip?.classList.add('ist-umlauf'); umlauf = chip; }
    for (const pf of pfeile) {
      const an = kopf.phi !== undefined && kopf.phi >= pf.phi - 6 && kopf.phi <= pf.phi + 14;
      if (an !== pf.an) { pf.an = an; pf.g.classList.toggle('ist-schub', an); }
    }
    raf = requestAnimationFrame(frame);
  };

  const pruefen = () => {
    const soll = el.classList.contains('ist-zu') && el.classList.contains('ist-sichtbar');
    if (soll === aktiv) return;
    aktiv = soll;
    if (aktiv) { zuletzt = 0; if (!raf) raf = requestAnimationFrame(frame); }
    else if (raf) { cancelAnimationFrame(raf); raf = 0; }
  };
  new MutationObserver(pruefen).observe(el, { attributes: true, attributeFilter: ['class'] });
  if ('ResizeObserver' in window) new ResizeObserver(() => { dirty = true; }).observe(el);
  document.fonts?.ready.then(() => { dirty = true; });
  pruefen();
}

if (!reduce) {
  document.querySelectorAll<HTMLElement>('[data-denkweise] .dw-kreis[data-kreis]').forEach(starte);
  // Glimmen der Glühbirne im Hero (Talk 3930) nur, solange sie im Bild ist
  // … und des Ziel-Kreises „Verbessern“ mit Lichtschimmer (Talk 3933)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('ist-sichtbar', e.isIntersecting)));
    document.querySelectorAll('[data-denkweise] .dw-idee__kreis, [data-denkweise] .dw-ziel').forEach((el) => io.observe(el));
  }
}
