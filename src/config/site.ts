// ONEPAGER „Neue Website in Arbeit“ (Jamil, Talk k8oxzjva #6072, 15.11.2026).
// Alle Texte stammen aus WS-0007 (waybuild_website-neudesign, src/config/*.ts) – nur Aussagen, die dort so stehen.
// BEWUSST NICHT enthalten: Preise, Pakete, Laufzeiten, Zahlungsaussagen, AGB-Verweise (es gibt noch keine AGB).
// Alte Hauptseite (WS-0001): Tag vor-onepager-20261115 (quelle) bzw. vor-onepager-20261115-main (main).

/** Firmendaten wie WS-0007 src/config/site.ts (Handelsregister-Auszug 15.11.2026). */
export const company = {
  name: 'webgold',
  legalName: 'Waybuild UG (haftungsbeschränkt)',
  email: 'service@webgold.io',
  phone: '0151 56156578',
  street: 'Kuno-Liesenberg-Kehre 32a',
  zip: '22844',
  city: 'Norderstedt',
  country: 'DE',
  managingDirector: 'Can Siebert',
  registerCourt: 'Amtsgericht Kiel',
  registerNumber: 'HRB 29883 KI',
  /** keine USt-IdNr. vorhanden → Zeile im Impressum ausgeblendet */
  vatId: '',
  hoster: 'ALL-INKL.COM – Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf',
  foundingYear: '2026',
};

/** Erreichbarkeit (WS-0007 HOURS) */
export const HOURS = 'Montag bis Freitag, 9 bis 17 Uhr';

export const phoneTel = () => '+49' + company.phone.replace(/\s/g, '').replace(/^0/, '');
export const whatsappLink = (text = 'Hallo webgold, ich interessiere mich für eine kostenlose Erstberatung.') =>
  `https://wa.me/${phoneTel().replace('+', '')}?text=${encodeURIComponent(text)}`;

/** Positionierung (WS-0007 variante.ts POSITIONIERUNG, Jamil #6055 Fr. 20) */
export const POSITIONIERUNG = 'Ihre Website im Abo und auf Wunsch eine Web-App für Ihren digitalen Alltag.';

export const HERO = {
  badge: 'Neue Website in Arbeit',
  titel: 'Website und Web-\u2060App für Ihren digitalen Alltag im Abo', // Jamil #6104 (\u2060 = kein Umbruch nach dem Bindestrich)
  unter: 'Hier entsteht gerade unsere neue Website.',
  knopf: 'Kostenlose Erstberatung', // WS-0007 HERO_KNOPF
  knopf2: 'Was Sie bald erwartet',
};

/** „Was Sie bald erwartet“ – Kernangebot aus WS-0007 (ohne Preise/Pakete/Laufzeiten) */
export const ERWARTET = {
  kenn: 'Was Sie bald erwartet',
  titel: 'Website und Arbeitsalltag in einem System.', // WS-0007 start-system.ts loesung · Karten Jamil #6104
  lead: 'Wir entwickeln digitale Lösungen, die Kunden gewinnen, Arbeitsabläufe vereinfachen und mit Ihrem Unternehmen mitwachsen.', // WS-0007 V_HERO.unter
  punkte: [
    { icon: 'website', titel: 'Website im Abo', text: 'Fertig gebaut und laufend betreut.' },
    { icon: 'app', titel: 'Web-App im Abo', text: 'Anfragen an einem Ort, alles im Blick.' },
    { icon: 'server', titel: 'Hosting in Deutschland', text: 'Betreuung inklusive, DSGVO-orientiert.' },
  ] as { icon: IconName; titel: string; text: string }[],
};

export type IconName = 'website' | 'app' | 'vorschau' | 'mensch' | 'schild' | 'server' | 'phone' | 'mail' | 'whatsapp' | 'pfeil';

export const BESCHREIBUNG = 'Hier entsteht die neue Website von webgold: Website im Abo, auf Wunsch mit Web-App.';
