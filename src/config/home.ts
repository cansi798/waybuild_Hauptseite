// Verbliebener Start-/Footer-Inhalt. Die übrigen Alt-Texte der waybuild_website wurden am
// 25.10.2026 mit den ungenutzten Komponenten entfernt (Inhalte der Hauptseite: config/hauptseite.ts).

/** Gemeinsamer Abschluss vor dem Footer auf jeder Seite (außer Kontakt/Danke) – Leitbild „Der Weg“, 27.10.2026.
 *  Die Frage greift Jamils Nachdenk-Ansatz auf (Talk 3401): einladen statt verkaufen. */
export const FOOTER_KONTAKT = {
  pre: 'Was möchten Sie ',
  accent: 'verändern?',
  // Text und Hinweise wörtlich aus Jamils kompaktem Design-Briefing (Talk 3636); belegt: Erstgespräch kostenlos/unverbindlich (site.ts steps), Antwort nächster Werktag (SLA_KERN)
  text: 'Erzählen Sie uns, was heute unnötig kompliziert ist oder welche Idee endlich umgesetzt werden soll. Das Erstgespräch ist kostenlos und unverbindlich. Wir melden uns spätestens am nächsten Werktag.',
  hinweise: ['kostenlos', 'unverbindlich', 'Antwort spätestens am nächsten Werktag', 'kein Verkaufsgespräch mit Druck'],
};
