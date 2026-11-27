export interface Artwork {
  slug: string;
  title: string;
  year: 2022 | 2023 | 2024;
  dimensions: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    slug: "schwamm-drueber",
    title: "Schwamm drüber!",
    year: 2024,
    dimensions: "100 × 100 × 4,5 cm",
    image: { src: "/archive/38e5beb493cf99f4f7.webp", width: 320, height: 317 },
    featured: true,
  },
  {
    slug: "wirrwarr",
    title: "Wirrwarr",
    year: 2024,
    dimensions: "100 × 100 × 4,5 cm",
    image: { src: "/archive/e1994444bebbe5813a.webp", width: 320, height: 322 },
    featured: true,
  },
  {
    slug: "allegretto",
    title: "Allegretto",
    year: 2024,
    dimensions: "120 × 100 cm",
    image: { src: "/archive/1451665c522488b235.webp", width: 320, height: 264 },
  },
  {
    slug: "backstage",
    title: "Backstage",
    year: 2024,
    dimensions: "120 × 100 cm",
    image: { src: "/archive/22d7f9e1139b962781.webp", width: 320, height: 266 },
    featured: true,
  },
  {
    slug: "chat-noir-aus-dem-sack",
    title: "Chat Noir aus dem Sack",
    year: 2024,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/57344ac452fbcc2eae.webp", width: 320, height: 471 },
  },
  {
    slug: "geheimnis-gelueftet",
    title: "Geheimnis gelüftet",
    year: 2024,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/ef230d0ec62d6cf426.webp", width: 320, height: 476 },
  },
  {
    slug: "hirngespinnst",
    title: "Hirngespinnst",
    year: 2024,
    dimensions: "40 × 50 cm",
    image: { src: "/archive/ea5700240397e0b919.webp", width: 320, height: 398 },
  },
  {
    slug: "ein-auge-geworfen",
    title: "Ein Auge geworfen …",
    year: 2024,
    dimensions: "40 × 40 cm",
    image: { src: "/archive/61a9c25dbef3708c47.webp", width: 320, height: 314 },
    featured: true,
  },
  {
    slug: "rauchen-gestattet",
    title: "Rauchen gestattet",
    year: 2024,
    dimensions: "40 × 40 cm",
    image: { src: "/archive/c5562898fc4b849e42.webp", width: 320, height: 320 },
  },
  {
    slug: "bussi",
    title: "Bussi",
    year: 2024,
    dimensions: "15 × 15 × 2,5 cm",
    image: { src: "/archive/0e86160928e54489bd.webp", width: 320, height: 322 },
  },
  {
    slug: "regret",
    title: "regret",
    year: 2024,
    dimensions: "15 × 15 × 2,5 cm",
    image: { src: "/archive/01b944fad35ab986b9.webp", width: 320, height: 321 },
  },
  {
    slug: "ich-denk-drueber-nach",
    title: "Ich denk’ drüber nach",
    year: 2024,
    dimensions: "15 × 15 × 2,5 cm",
    image: { src: "/archive/96199b23a515d88a28.webp", width: 320, height: 328 },
  },
  {
    slug: "skepsis",
    title: "Skepsis",
    year: 2024,
    dimensions: "40 × 40 cm",
    image: { src: "/archive/bb20a1d9f75361efcb.webp", width: 320, height: 323 },
    featured: true,
  },
  {
    slug: "jahr-des-drachen",
    title: "Jahr des Drachen",
    year: 2024,
    dimensions: "40 × 40 cm",
    image: { src: "/archive/ab95ab6d1edf6c8679.webp", width: 320, height: 323 },
  },
  {
    slug: "gossip",
    title: "Gossip",
    year: 2024,
    dimensions: "20 × 20 × 5 cm",
    image: { src: "/archive/faf03bc24a5a79edf0.webp", width: 320, height: 316 },
  },
  {
    slug: "papierkram",
    title: "Papierkram",
    year: 2023,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/34c2c6e6088ff1e0b6.webp", width: 320, height: 479 },
    featured: true,
  },
  {
    slug: "der-blaue-faden",
    title: "Der blaue Faden",
    year: 2023,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/3bac754e6040480785.webp", width: 320, height: 482 },
  },
  {
    slug: "crescendo",
    title: "Crescendo",
    year: 2023,
    dimensions: "120 × 80 cm",
    image: { src: "/archive/88437d95dddaa449f0.webp", width: 320, height: 214 },
  },
  {
    slug: "werkstatt",
    title: "Werkstatt",
    year: 2023,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/2b3863afdacdc7be02.webp", width: 320, height: 480 },
  },
  {
    slug: "unbeschwert-kind-sein",
    title: "Unbeschwert Kind sein",
    year: 2023,
    dimensions: "30 × 30 × 5,5 cm",
    image: { src: "/archive/937e8c1b1b25f1a1ee.webp", width: 320, height: 319 },
  },
  {
    slug: "befreien",
    title: "befreien",
    year: 2023,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/6d19fc812033a948b0.webp", width: 320, height: 472 },
  },
  {
    slug: "the-feeder",
    title: "The Feeder",
    year: 2023,
    dimensions: "20 × 20 × 5 cm",
    image: { src: "/archive/8f7b27a6bfcff86411.webp", width: 320, height: 320 },
  },
  {
    slug: "verwirrung",
    title: "Verwirrung",
    year: 2023,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/3e67e63b007df3b3c6.webp", width: 320, height: 471 },
  },
  {
    slug: "agitato",
    title: "Agitato – ungestüm",
    year: 2023,
    dimensions: "100 × 100 × 4 cm",
    image: { src: "/archive/ec4a7456dba65654bc.webp", width: 320, height: 316 },
    featured: true,
  },
  {
    slug: "starkes-pink",
    title: "Starkes Pink",
    year: 2023,
    dimensions: "80 × 120 cm",
    image: { src: "/archive/9d004818b6d702108c.webp", width: 320, height: 475 },
  },
  {
    slug: "perdendo",
    title: "Perdendo – sich verlierend",
    year: 2023,
    dimensions: "120 × 80 cm",
    image: { src: "/archive/e2e9895ba215095628.webp", width: 320, height: 216 },
  },
  {
    slug: "der-traeumer",
    title: "Der Träumer",
    year: 2023,
    dimensions: "80 × 80 × 4 cm",
    image: { src: "/archive/501668f56e37ff24af.webp", width: 320, height: 318 },
  },
  {
    slug: "nur-ein-wort",
    title: "Nur ein Wort",
    year: 2023,
    dimensions: "40 × 50 cm",
    image: { src: "/archive/ee0554fd5d0bc639a8.webp", width: 320, height: 387 },
  },
  {
    slug: "beinahe",
    title: "beinahe",
    year: 2023,
    dimensions: "15 × 15 × 5 cm",
    image: { src: "/archive/4e998d8435562c9916.webp", width: 320, height: 327 },
  },
  {
    slug: "wabi-sabi",
    title: "Wabi Sabi – Schönheit des Unvollkommenen",
    year: 2023,
    dimensions: "2 × (25 × 135 cm)",
    image: { src: "/archive/0a12b331de96261047.webp", width: 233, height: 500 },
  },
  {
    slug: "mondscheinbad",
    title: "Baden gegangen … Mondscheinbad",
    year: 2023,
    dimensions: "30 × 30 × 5 cm",
    image: { src: "/archive/a593c3b6cf82ee283d.webp", width: 320, height: 313 },
  },
  {
    slug: "ikebana-pink",
    title: "Ikebana Pink",
    year: 2022,
    dimensions: "80 × 80 × 4 cm",
    image: { src: "/archive/92d5a34773737fecf2.webp", width: 320, height: 319 },
    featured: true,
  },
  {
    slug: "ikebana-gruen",
    title: "Ikebana grün",
    year: 2022,
    dimensions: "80 × 80 × 4 cm",
    image: { src: "/archive/b8c23e899112e79c18.webp", width: 320, height: 322 },
  },
  {
    slug: "kokolores",
    title: "Kokolores",
    year: 2022,
    dimensions: "140 × 100 cm",
    image: { src: "/archive/83fae4742091152090.webp", width: 320, height: 232 },
  },
  {
    slug: "rosenklang",
    title: "Rosenklang",
    year: 2022,
    dimensions: "80 × 80 × 4 cm",
    image: { src: "/archive/cc56279d11dc1b0fc3.webp", width: 320, height: 322 },
    featured: true,
  },
  {
    slug: "turteltaube-auf-brautschau",
    title: "Turteltaube auf Brautschau",
    year: 2022,
    dimensions: "40 × 50 cm",
    image: { src: "/archive/96ba007c36ab55016a.webp", width: 320, height: 397 },
  },
  {
    slug: "palast-der-winde",
    title: "Palast der Winde",
    year: 2022,
    dimensions: "40 × 40 × 65 cm",
    image: { src: "/archive/67093c07d92e7c4c66.webp", width: 320, height: 363 },
  },
  {
    slug: "barock",
    title: "Barock",
    year: 2022,
    dimensions: "30 × 40 cm",
    image: { src: "/archive/9d5cbbcad863aaac03.webp", width: 320, height: 430 },
  },
  {
    slug: "empire",
    title: "Empire",
    year: 2022,
    dimensions: "30 × 40 cm",
    image: { src: "/archive/4e604ffe0eaee29814.webp", width: 320, height: 423 },
  },
  {
    slug: "vernebelung",
    title: "Vernebelung",
    year: 2022,
    dimensions: "80 × 80 × 4 cm",
    image: { src: "/archive/76868c7c9e9d83a489.webp", width: 320, height: 323 },
  },
  {
    slug: "cremiger-herbst",
    title: "Cremiger Herbst",
    year: 2022,
    dimensions: "80 × 100 cm",
    image: { src: "/archive/0e819486715e3cb73d.webp", width: 320, height: 399 },
  },
  {
    slug: "maschine-mit-hand-und-fuss",
    title: "Maschine mit Hand und Fuß",
    year: 2022,
    dimensions: "80 × 80 × 4 cm",
    image: { src: "/archive/c91337f88edadce2b0.webp", width: 320, height: 323 },
  },
  {
    slug: "fantasie-schleife",
    title: "Fantasie – Schleife",
    year: 2022,
    dimensions: "50 × 70 cm",
    image: { src: "/archive/4cf1b6026ad2c469ca.webp", width: 320, height: 443 },
  },
  {
    slug: "fantasie-mocca",
    title: "Fantasie – Mocca",
    year: 2022,
    dimensions: "50 × 70 cm",
    image: { src: "/archive/1e2c176e4d7345894b.webp", width: 320, height: 438 },
  },
  {
    slug: "fantasie-rot",
    title: "Fantasie – Rot",
    year: 2022,
    dimensions: "50 × 70 cm",
    image: { src: "/archive/9e859ae02d5fb37047.webp", width: 320, height: 447 },
  },
];

export const roomScenes = [
  { src: "/archive/e5ffbd5450b80cfd5b.webp", width: 320, height: 366 },
  { src: "/archive/aa9bcea4821c70bbcb.webp", width: 320, height: 569 },
  { src: "/archive/69d9bcf0c8ae01588b.webp", width: 320, height: 320 },
  { src: "/archive/70780f69c5bf312ff7.webp", width: 320, height: 427 },
];

export const artistStudioImage = {
  src: "/archive/d4702f1fb43687ad29.webp",
  width: 777,
  height: 400,
};

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((artwork) => artwork.featured);
}

export function sourcePageFor(year: Artwork["year"]): string {
  return `https://mobile.krainz-art.com/${year}.html`;
}
