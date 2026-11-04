// Texte der Kontaktseite (DE /kontakt/, EN /en/contact/ in src/config/en.ts → KONTAKT_EN, gleiche Form).
// Deutsch = bisherige Texte unverändert, dazu die DACH-Zeile (Can, Talk 4551).
export const KONTAKT_DE = {
  eyebrow: 'Kontakt',
  titel: 'Was möchten Sie',
  akzent: 'verändern?',
  lead: 'Erzählen Sie uns, worum es geht. Das Erstgespräch ist kostenlos und unverbindlich, und wir antworten spätestens am nächsten Werktag.',
  worum: 'Worum geht es?',
  allgemein: 'Allgemeine Anfrage',
  interessen: {} as Record<string, string>,   // leer = Namen aus der Produkt-Config
  name: 'Name*', email: 'E-Mail*', telefon: 'Telefon', telefonKlein: '(für Rückruf)', firma: 'Unternehmen',
  nachricht: 'Nachricht', optional: '(optional)', platzhalter: 'z. B. Branche, Anzahl Mitarbeitende, bestehende Domain oder Software …',
  einwilligungVor: 'Ich habe die ', einwilligungLink: 'Datenschutzerklärung', einwilligungNach: ' gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.*',
  senden: 'Nachricht senden',
  danachAria: 'So geht es weiter',
  danach: [['Heute', 'Anfrage senden'], ['Nächster Werktag', 'Wir melden uns'], ['Persönlich', 'Ein fester Ansprechpartner']],
  direkt: 'Direkt per E-Mail',
  zeiten: 'Servicezeiten',
  versprechen: [['Antwort spätestens am nächsten Werktag', 'Persönlich, nicht automatisiert.'], ['Unverbindlich', 'Fragen kostet nichts.'], ['Ehrliche Beratung', 'Wir empfehlen, was Sie wirklich brauchen.']],
  dach: 'Wir arbeiten deutschlandweit und für Unternehmen in Österreich und der Schweiz, remote und persönlich.',
  js: {
    mailOffen: 'Ihr E-Mail-Programm ist geöffnet. Bitte senden Sie die Nachricht dort ab.',
    sendet: 'Wird gesendet …',
    fehler: 'Das hat leider nicht geklappt. Bitte schreiben Sie uns direkt an',
    betreff: 'Anfrage',
    beratung: 'Beratung',
    felder: { name: 'Name', firma: 'Unternehmen', email: 'E-Mail', telefon: 'Telefon', interesse: 'Interesse', paket: 'Paket', branche: 'Branche' },
  },
  meta: {
    title: 'Kontakt und kostenloses Erstgespräch',
    description: 'Kontakt zu Waybuild: persönlicher Ansprechpartner, erste Rückmeldung innerhalb einer Stunde während der Servicezeiten. Für Unternehmen in der DACH-Region.',
    crumb: 'Kontakt',
  },
};
export type KontaktTexte = typeof KONTAKT_DE;
