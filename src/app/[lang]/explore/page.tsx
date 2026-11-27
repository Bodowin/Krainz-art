import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OriginalDirectory } from "@/components/original-directory";
import { originalPages, categories } from "@/content/original";
import { isLocale } from "@/lib/i18n";

type Props = {params: Promise<{lang: string}>};
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {lang} = await params;
  return {title: lang === "de" ? "Kunst & Geschichten entdecken" : "Explore art & stories", alternates: {canonical: `/${lang}/explore`, languages: {de: "/de/explore", en: "/en/explore"}}};
}
export default async function ExplorePage({params}: Props) {
  const {lang} = await params;if(!isLocale(lang)) notFound();
  return <main id="main-content" className="content-page">
    <header className="editorial-heading"><p className="eyebrow">KRAINZ ART · KRAINZigARTig</p><h1>{lang === "de" ? <>Ein Kosmos.<br/><em>Viele Perspektiven.</em></> : <>One universe.<br/><em>Many perspectives.</em></>}</h1><p>{lang === "de" ? "Werkgruppen und Zyklen, Atelier und Begegnungen, Geschichten und Erinnerungen. Entdecken Sie die ganze Vielfalt des künstlerischen Schaffens." : "Works and cycles, studio and encounters, stories and memories. Explore the many facets of an artistic practice."}</p><Link className="text-link" href={`/${lang}/art`}>{lang === "de" ? "Direkt zur Galerie 2022–2024" : "Go to the 2022–2024 gallery"} ↗</Link></header>
    <OriginalDirectory locale={lang} entries={originalPages.map(p => ({slug:p.slug,title:p.title,category:p.category,count:p.images.length}))} groups={categories.map(g => ({id:g.id,label:g[lang]}))} />
  </main>;
}
