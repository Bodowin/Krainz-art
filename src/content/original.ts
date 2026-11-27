import data from "./original-pages.json";
import type { Locale } from "@/lib/i18n";

export interface ArchiveImage { src: string; width: number; height: number; caption: string }
export interface OriginalPage {
  slug: string; title: string; category: string; source: string;
  paragraphs: string[]; images: ArchiveImage[];
  links: { url: string; label: string }[];
}
export const originalPages: OriginalPage[] = data;
export const categories = [
  { id: "works", de: "Werkgruppen", en: "Works & media" },
  { id: "cycles", de: "Serien & Zyklen", en: "Series & cycles" },
  { id: "artist", de: "Die Künstlerin", en: "The artist" },
  { id: "exhibitions", de: "Ausstellungen", en: "Exhibitions" },
  { id: "offspace", de: "KRAINZigARTig", en: "KRAINZigARTig" },
  { id: "texts", de: "Texte & Perspektiven", en: "Texts & perspectives" },
  { id: "archive", de: "Medien & Archiv", en: "Media & archive" },
  { id: "information", de: "Kontakt & Information", en: "Contact & information" },
];
export function getOriginal(slug: string) { return originalPages.find(p => p.slug === slug); }
export function categoryLabel(id: string, locale: Locale) { return categories.find(c => c.id === id)?.[locale] ?? id; }
export function pageHref(slug: string, locale: Locale) { return `/${locale}/pages/${slug}`; }
function canonical(value: string) {
  try { const url = new URL(value); return url.hostname.replace(/^www\./, "") + decodeURIComponent(url.pathname).replace(/\/index.html$/, "/"); }
  catch { return value; }
}
const pageMap = new Map(originalPages.map(p => [canonical(p.source), p.slug]));
export function originalHref(url: string, locale: Locale) {
  const key = canonical(url);
  const slug = pageMap.get(key);
  if (slug) return pageHref(slug, locale);
  if (key === "krainz-art.com/" || key === "mobile.krainz-art.com/") return `/${locale}`;
  return url;
}
export const featuredSlugs = ["mixed-media", "figuratives", "landschaften", "objekte", "2013-zodiac", "214-second-lives", "2017-bluehende-heile-welt", "2018monotypien", "offspace-home", "offspace-atelier", "offspace-artothek-gabriela-bittner-krainz", "offspace-ausstellungsraum-krainzigartig", "kurzbiographie", "ausstellungen", "credo", "kataloge"];
