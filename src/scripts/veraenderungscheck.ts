// Veränderungs-Check der Startseite: drei Regler-Fragen verteilt über die Seite, Ergebnis „Ihr Veränderungsprofil“.
// Stärke = niedrigster Wert, Engpass = höchster Wert, Potenzial = dort, wo der Engpass liegt.
// Eine Frage zählt erst, wenn sie bewegt oder per Tastatur verändert wurde (wie im bisherigen Selbstcheck).
type Frage = { id: string; nach: string; stufen: string[]; staerke: string; engpass: string; potenzial: string };
type Texte = { fragen: Frage[]; ohneEngpass: string; ohnePotenzial: string; ohneStaerke: string };

const T = (window as unknown as { __dwCheck?: Texte }).__dwCheck;
const boxen = Array.from(document.querySelectorAll<HTMLElement>('[data-frage]'));
const profil = document.querySelector<HTMLElement>('[data-profil]');

if (T && boxen.length && profil) {
  const werte: (number | null)[] = boxen.map(() => null);
  const offen = profil.querySelector<HTMLElement>('[data-profil-offen]')!;
  const ergebnis = profil.querySelector<HTMLElement>('[data-profil-ergebnis]')!;
  const feld = (n: string) => profil.querySelector<HTMLElement>(`[data-profil-${n}]`)!;

  const auswerten = () => {
    if (werte.some((w) => w === null)) { offen.hidden = false; ergebnis.hidden = true; return; }
    const w = werte as number[];
    const min = Math.min(...w), max = Math.max(...w);
    const iMin = w.indexOf(min), iMax = w.lastIndexOf(max);
    feld('staerke').textContent = min >= 4 ? T.ohneStaerke : T.fragen[iMin].staerke;
    feld('engpass').textContent = max <= 2 ? T.ohneEngpass : T.fragen[iMax].engpass;
    feld('potenzial').textContent = max <= 2 ? T.ohnePotenzial : T.fragen[iMax].potenzial;
    offen.hidden = true; ergebnis.hidden = false;
  };

  boxen.forEach((box) => {
    const i = Number(box.dataset.frage);
    const stufen: string[] = JSON.parse(box.dataset.stufen || '[]');
    const input = box.querySelector<HTMLInputElement>('input[type="range"]')!;
    const anzeige = box.querySelector<HTMLElement>('.regler__wert')!;
    box.classList.add('dw-frage--js');
    const zeigen = () => {
      const v = Number(input.value);
      input.style.setProperty('--wert', `${((v - 1) / 4) * 100}%`);
      input.classList.remove('regler--offen');
      input.setAttribute('aria-valuetext', stufen[v - 1]);
      anzeige.textContent = stufen[v - 1];
      werte[i] = v;
      auswerten();
    };
    input.addEventListener('input', zeigen);
    input.addEventListener('change', zeigen);
  });
  auswerten();
}
