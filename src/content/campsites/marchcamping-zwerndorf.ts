import type { CampsiteConfig } from "../types";

const IMG = "/campsites/marchcamping-zwerndorf";

const marchcampingZwerndorf: CampsiteConfig = {
  name: "MarchCamping Zwerndorf",
  shortName: "MarchCamping",
  slug: "marchcamping-zwerndorf",
  ort: "Zwerndorf, Weiden an der March",
  region: "Marchfeld",
  brandKind: "Camping & Fahrrad-Rastplatz",
  regionLong: "Marchfeld · Weinviertel · Niederösterreich",

  // KEIN theme-Feld (Original-Palette). heroVariant immer center.
  heroVariant: "center",

  claim: "Camping an Österreichs östlichstem Grenzfluss",
  claimEmphasis: "östlichstem Grenzfluss",
  emailDetail: "die Sommerküche, die bei euch rund um die Uhr offen ist",
  intro:
    "Auf gepflegter Wiese direkt an der March stellst du dein Wohnmobil, deinen Wohnwagen oder dein Zelt ab — mit Sommerküche rund um die Uhr, warmen Duschen und einem eigenen Fahrrad-Rastplatz mitten im Marchfeld.",

  statement: {
    text: "Bei uns bezahlst du selbst und eigenverantwortlich — so lebt hier ein vertrauensvoller Flair.",
    emphasis: "vertrauensvoller Flair",
  },

  pillars: [
    {
      title: "Direkt an der March",
      text: "Der Platz liegt entlang der March — dem Grenzfluss zur Slowakei, mitten in der weiten Au-Landschaft.",
      image: { src: `${IMG}/gallery-92cdb8ea08.webp`, alt: "Die March mit ihrer Auenlandschaft bei Zwerndorf" },
    },
    {
      title: "Im Herzen der Radregion",
      text: "Flache Radwege entlang des Marchdamms — der KTM-Radweg und die EuroVelo-Route ziehen durchs Marchfeld.",
      image: { src: `${IMG}/gallery-22eb50c908.webp`, alt: "Radfahrer auf der Wiese am MarchCamping Zwerndorf" },
    },
    {
      title: "Campingleben unter alten Bäumen",
      text: "Gepflegte Wiese im Schatten alter Bäume — Raum für Wohnwagen, Wohnmobil, Zelt und gemütliche Abende.",
      image: { src: `${IMG}/gallery-99b5333a76.webp`, alt: "Wohnmobil auf der gepflegten Wiese unter alten Bäumen am MarchCamping Zwerndorf" },
    },
  ],

  usps: [
    "Sommerküche rund um die Uhr",
    "Warme Duschen",
    "WLAN per Glasfaser",
    "Fahrrad-Rastplatz",
    "E-Bike-Ladestation",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Klein, ruhig und mitten in der Au",
    headingEmphasis: "mitten in der Au",
    intro:
      "Ein junger, überschaubarer Platz, auf dem du selbst zur Ruhe kommst: kurze Wege, eine Sommerküche für jede Tageszeit und die March-Auen gleich vor dem Vorzelt.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-638673a1bf.webp`, alt: "Familie beim Federball und Radfahren am Wohnmobil auf dem MarchCamping Zwerndorf" },
  },

  camping: {
    heading: "Camping in Eigenregie",
    intro:
      "Gepflegte Wiese für Wohnmobil, Wohnwagen und Zelt, dazu ein Wohncontainer für Radfahrer — Sommerküche, warme Duschen und Glasfaser-WLAN gehören dazu.",
    features: [
      {
        title: "Gepflegte Wiese für alle",
        text: "Wohnmobil, Wohnwagen oder Zelt stehen auf ebener Wiese — für Radler gibt es einen Wohncontainer mit Betten.",
        image: { src: `${IMG}/gallery-0ec0bc9a85.webp`, alt: "Spielende Kinder auf der Campingwiese mit Wohnmobil und Zelten" },
      },
      {
        title: "Sommerküche rund um die Uhr",
        text: "Die Sommerküche ist Tag und Nacht offen — mit Herd, Kühlschrank, Geschirr, Kaffeemaschine und Kaminofen.",
        image: { src: `${IMG}/gallery-c64a96f319.webp`, alt: "Familie beim gemeinsamen Frühstück in der Küche" },
      },
      {
        title: "Bio-Hofladen ums Eck",
        text: "Unweit vom Platz hat der Biohof Bubenicek-Meiberger 24 Stunden geöffnet — Frischgemüse und veredelte Produkte.",
        image: { src: `${IMG}/gallery-a75cce3e1e.webp`, alt: "Bio-Hofladen Bubenicek-Meiberger nahe dem Campingplatz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Marchfeld",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Wien etwa 40 km ostwärts durchs Marchfeld nach Zwerndorf — Bratislava liegt rund 45 km südlich.",
      },
      {
        title: "Mit der Bahn",
        text: "Mit der S-Bahn ins Marchfeld, den letzten Abschnitt bringt dich Marchfeld mobil als Zubringer zum Platz.",
      },
      {
        title: "Mit dem Rad",
        text: "Über den KTM-Radweg oder die EuroVelo-Route führt dich der Weg direkt entlang der March bis Zwerndorf.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Platz",
    intro: "Ein paar Aufnahmen von der Wiese, der March und dem Leben am MarchCamping Zwerndorf.",
    tag: "Marchfeld",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz an der March",
    headingEmphasis: "an der March",
    intro:
      "Sag uns Zeitraum und Personen — Horst Reischütz meldet sich persönlich. Ein Anruf genügt, der Platz ist rund um die Uhr erreichbar.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht für 2 Erwachsene (je € 11) inkl. Stellplatz — Strom € 5 und Nächtigungstaxe € 2,50 pro Person kommen dazu, Kinder günstiger.",
    highlight: {
      title: "Rund um die Uhr offen",
      text: "Der Platz ist jederzeit erreichbar — ein Anruf genügt.",
    },
    categories: [
      { id: "wohnmobil", label: "Wohnmobil", perNight: 35, perExtraGuest: 11 },
      { id: "wohnwagen", label: "Wohnwagen & Auto", perNight: 36, perExtraGuest: 11 },
      { id: "zelt", label: "Zelt", perNight: 29, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    tel: "+43 676 4733641",
    telHref: "tel:+436764733641",
    mail: "office@marchcamping-zwerndorf.at",
    facebook: "https://www.facebook.com/MarchCamping-Zwerndorf-102553214826405/",
    adresse: "Dorfstraße 41 · 2295 Zwerndorf · Marchfeld",
    coords: { lat: 48.343694, lng: 16.840803 },
  },

  languages: ["DE", "SK"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default marchcampingZwerndorf;
