// Startseite „Denkweise“: EINE durchgehende Linie über die ganze Seite, scrollgekoppelt.
//
// Aufbau
// - Wegpunkte: Elemente mit [data-weg] in Dokument-Reihenfolge. Werte: "start" | "durch" | "ein" (Linie endet hier,
//   die Szene zeichnet ihr Inneres selbst) | "aus" (Linie geht hier weiter). [data-weg-nur="d"|"m"] gilt nur am
//   Desktop bzw. Handy; [data-weg-x="links"|"rechts"] legt die Linie neben ein Textelement.
//   Zwischen zwei Wegpunkten entsteht eine weiche S-Kurve mit senkrechten Tangenten (wie ein Weg, nicht geometrisch).
// - Die Spitze der Linie folgt einer Lese-Höhe im Fenster (62 %); beim Laden zeichnet sie sich im Hero einmal von selbst.
// - Szenen [data-szene]: Fortschritt 0…1, solange die Spitze durch ihre Fläche läuft. Elemente darin tragen
//   [data-an="art:a-b[:min] …"] mit art = zeichnen | linear | auf | aus | blende | wachsen | erscheinen | links |
//   rechts | breit | hoch (Wegpunkte selbst nie verschieben, sonst stimmt die Messung nicht),
//   a-b = Bereich im Szenen-Fortschritt oder "auto" (nach Lage des Elements in der Szene).
//
// Performance: alle Maße einmal messen (Laden, Schriften, Größenänderung, Kopfzeilen-Wechsel); pro Frame nur scrollY
// lesen, Nachschlagetabelle statt getPointAtLength, nur sichtbare Szenen, nur transform/opacity/dashoffset schreiben
// und nur, wenn sich der Wert ändert. Reduzierte Bewegung: alles fertig gezeichnet, keine Animation.

type Spur = { art: string; a: number; b: number; min: number; auto: boolean };
type Item = { el: HTMLElement | SVGElement; spuren: Spur[]; alt: Record<string, string> };
type Szene = { el: HTMLElement; top: number; h: number; items: Item[]; p: number; ende: boolean };

const root = document.querySelector<HTMLElement>('[data-denkweise]');
if (root) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const breit = window.matchMedia('(min-width: 960px)');
  const svg = root.querySelector<SVGSVGElement>('.dw-linie')!;
  // Je Teilstück ein eigener <path>: Chrome beginnt das Strichmuster an jedem Teilpfad (M) neu,
  // deshalb wird jedes Stück einzeln über seinen Anteil an der Gesamtlänge aufgedeckt.
  const vorlage = svg.querySelector<SVGPathElement>('path')!;
  let stuecke: { el: SVGPathElement; start: number; len: number; off: string }[] = [];
  const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const glatt = (t: number) => t * t * (3 - 2 * t);

  const parse = (s: string): Spur[] => s.trim().split(/\s+/).map((tok) => {
    const [art, bereich = 'auto', min = '0'] = tok.split(':');
    if (bereich === 'auto') return { art, a: 0, b: 1, min: +min, auto: true };
    const [a, b] = bereich.split('-').map(Number);
    return { art, a, b, min: +min, auto: false };
  });

  const szenen: Szene[] = Array.from(root.querySelectorAll<HTMLElement>('[data-szene]')).map((el) => ({
    el, top: 0, h: 1, p: -1, ende: el.hasAttribute('data-szene-ende'),
    items: Array.from(el.querySelectorAll<HTMLElement>('[data-an]')).map((it) => ({ el: it, spuren: parse(it.dataset.an || ''), alt: {} })),
  }));

  let L = 1, N = 1, maxY = new Float32Array(1), offset = '', introVon = 0, introBis = 0, introStart = 0, introAktiv = false, introWert = 0, rootTop = 0;
  const SCHRITT = 6;

  const messen = () => {
    const rr = root.getBoundingClientRect();
    rootTop = rr.top + window.scrollY;
    const w = root.clientWidth, h = root.scrollHeight;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('width', String(w)); svg.setAttribute('height', String(h));
    const modus = breit.matches ? 'd' : 'm';
    const punkte: { x: number; y: number; typ: string }[] = [];
    root.querySelectorAll<HTMLElement>('[data-weg]').forEach((el) => {
      const nur = el.dataset.wegNur; if (nur && nur !== modus) return;
      if (!el.getClientRects().length) return; // ausgeblendete Variante
      const r = el.getBoundingClientRect();
      const xm = el.dataset.wegX;
      const x = (xm === 'links' ? r.left - 28 : xm === 'rechts' ? r.right + 28 : r.left + r.width / 2) - rr.left;
      punkte.push({ x, y: r.top + r.height / 2 - rr.top, typ: el.dataset.weg || 'durch' });
    });
    const ds: string[] = [];
    punkte.forEach((pt, i) => {
      const vor = punkte[i - 1];
      if (!vor || vor.typ === 'ein') { ds.push(`M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`); return; }
      const dy = pt.y - vor.y, k = 0.55;
      ds[ds.length - 1] += ` C ${vor.x.toFixed(1)} ${(vor.y + dy * k).toFixed(1)} ${pt.x.toFixed(1)} ${(pt.y - dy * k).toFixed(1)} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    });
    const teile = ds.filter((d) => d.includes('C'));
    while (stuecke.length > teile.length) stuecke.pop()!.el.remove();
    while (stuecke.length < teile.length) { const el = vorlage.cloneNode() as SVGPathElement; svg.appendChild(el); stuecke.push({ el, start: 0, len: 1, off: '' }); }
    vorlage.style.display = 'none';
    L = 0;
    stuecke.forEach((st, i) => {
      st.el.setAttribute('d', teile[i]); st.el.style.display = '';
      st.start = L; st.len = Math.max(1, st.el.getTotalLength()); L += st.len; st.off = '';
      st.el.style.strokeDasharray = `${st.len.toFixed(1)} ${(st.len + 10).toFixed(1)}`;
    });
    L = Math.max(1, L);
    N = Math.ceil(L / SCHRITT);
    maxY = new Float32Array(N + 1);
    let m = -1e9, si = 0;
    for (let i = 0; i <= N; i++) {
      const l = (i / N) * L;
      while (si < stuecke.length - 1 && l > stuecke[si].start + stuecke[si].len) si++;
      const st = stuecke[si]; if (!st) break;
      const y = st.el.getPointAtLength(clamp(l - st.start, 0, st.len)).y; if (y > m) m = y; maxY[i] = m;
    }
    offset = '';
    szenen.forEach((s) => {
      const r = s.el.getBoundingClientRect();
      s.top = r.top - rr.top; s.h = Math.max(1, r.height); s.p = -1;
      s.items.forEach((it) => it.spuren.forEach((sp) => {
        if (!sp.auto) return;
        const ir = (it.el as Element).getBoundingClientRect();
        const yr = clamp((ir.top + ir.height / 2 - r.top) / s.h);
        sp.a = clamp(yr - 0.12); sp.b = clamp(yr + 0.02, sp.a + 0.04);
      }));
    });
    const iv = punkte[0], ib = root.querySelector<HTMLElement>('[data-intro-ende]');
    introVon = iv ? iv.y : 0;
    introBis = ib ? ib.getBoundingClientRect().top + ib.offsetHeight / 2 - rr.top + 24 : introVon;
  };

  /** gezeichnete Länge, bis die Linie die Höhe y erreicht */
  const laengeBis = (y: number) => {
    if (y >= maxY[N]) return L;
    if (y <= maxY[0]) return 0;
    let lo = 0, hi = N;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (maxY[mid] >= y) hi = mid; else lo = mid; }
    const f = (y - maxY[lo]) / Math.max(0.001, maxY[hi] - maxY[lo]);
    return ((lo + clamp(f)) / N) * L;
  };

  const setz = (it: Item, prop: string, wert: string) => {
    if (it.alt[prop] === wert) return;
    it.alt[prop] = wert;
    (it.el as HTMLElement).style.setProperty(prop, wert);
  };

  const anwenden = (s: Szene, p: number) => {
    for (const it of s.items) {
      let op = 1, tf = '', dash = -1, opNutzt = false;
      for (const sp of it.spuren) {
        const t = glatt(clamp((p - sp.a) / Math.max(0.001, sp.b - sp.a)));
        switch (sp.art) {
          case 'zeichnen': dash = 1 - t; break;
          case 'linear': dash = 1 - clamp((p - sp.a) / Math.max(0.001, sp.b - sp.a)); break;
          case 'auf': op *= t; opNutzt = true; tf += ` translate3d(0, ${((1 - t) * 10).toFixed(1)}px, 0)`; break;
          case 'aus': op *= 1 - (1 - sp.min) * t; opNutzt = true; break;
          case 'blende': op *= t; opNutzt = true; break;
          case 'wachsen': tf += ` scale(${t.toFixed(3)})`; break;
          case 'erscheinen': op *= t; opNutzt = true; tf += ` scale(${(0.6 + 0.4 * t).toFixed(3)})`; break;
          case 'links': op *= t; opNutzt = true; tf += ` translate3d(${(-(1 - t) * 28).toFixed(1)}px, 0, 0)`; break;
          case 'rechts': op *= t; opNutzt = true; tf += ` translate3d(${((1 - t) * 28).toFixed(1)}px, 0, 0)`; break;
          case 'breit': tf += ` scaleX(${t.toFixed(3)})`; break;
          case 'hoch': tf += ` scaleY(${t.toFixed(4)})`; break;
        }
      }
      if (dash >= 0) setz(it, 'stroke-dashoffset', dash.toFixed(4));
      if (opNutzt) setz(it, 'opacity', op.toFixed(3));
      if (tf) setz(it, 'transform', tf.trim());
    }
  };

  let laeuft = false, fertig = false;
  const zeichnen = (jetzt = performance.now()) => {
    laeuft = false;
    const sy = window.scrollY, vh = window.innerHeight;
    let spitze = reduce ? 1e9 : sy + vh * 0.62 - rootTop;
    // Einmaliges Zeichnen im Hero beim Laden; danach bleibt der Hero-Abschnitt gezeichnet (kein Zurückziehen)
    if (introAktiv) {
      const t = clamp((jetzt - introStart) / 2400);
      introWert = introVon + (introBis - introVon) * (1 - Math.pow(1 - t, 3));
      if (t >= 1) introAktiv = false; else anfordern();
    }
    spitze = Math.max(spitze, introWert);
    const len = laengeBis(spitze), o = len.toFixed(1);
    if (o !== offset) {
      offset = o;
      for (const st of stuecke) {
        const so = (st.len - clamp(len - st.start, 0, st.len)).toFixed(1);
        if (so !== st.off) { st.off = so; st.el.style.strokeDashoffset = so; }
      }
    }
    let ende = false;
    for (const s of szenen) {
      // Szenen sind fertig, wenn die Spitze 85 % ihrer Höhe erreicht: so steht das Ergebnis noch gut sichtbar im Bild
      const p = clamp((spitze - s.top) / (s.h * 0.85));
      if (s.ende && p >= 0.88) ende = true;
      // Szenen vor oder hinter der Spitze haben p = 0 bzw. 1 und werden nach dem ersten Mal nicht mehr angefasst
      if (p === s.p) continue;
      s.p = p;
      anwenden(s, p);
    }
    if (ende !== fertig) { fertig = ende; root.classList.toggle('dw--fertig', ende); }
  };
  const anfordern = () => { if (!laeuft) { laeuft = true; requestAnimationFrame(zeichnen); } };
  const neu = () => { messen(); zeichnen(); };

  if (!reduce) root.classList.add('dw--live');
  neu();
  if (!reduce) { introStart = performance.now() + 450; introAktiv = true; anfordern(); }
  window.addEventListener('scroll', anfordern, { passive: true });
  let rz = 0;
  const spaeter = () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(neu); };
  if ('ResizeObserver' in window) new ResizeObserver(spaeter).observe(root);
  else (window as Window).addEventListener('resize', spaeter);
  document.fonts?.ready.then(spaeter);
  // Kopfzeile schrumpft (72 → 62 px) und verschiebt alles darunter: nach der Übergangszeit neu messen
  let kz = 0;
  new MutationObserver(() => { clearTimeout(kz); kz = window.setTimeout(spaeter, 260); }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}
