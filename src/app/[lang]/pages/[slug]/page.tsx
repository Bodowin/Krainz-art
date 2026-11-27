import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveGallery } from "@/components/archive-gallery";
import { InquiryLink } from "@/components/inquiry-link";
import { getOriginal, originalPages, categoryLabel, originalHref, pageHref } from "@/content/original";
import { isLocale, locales } from "@/lib/i18n";

type Props = { params: Promise<{lang: string; slug: string}> };
export function generateStaticParams() {return locales.flatMap(lang => originalPages.map(p => ({lang,slug:p.slug})));}
export const dynamicParams = false;
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {lang,slug} = await params;const page=getOriginal(slug);if(!page || !isLocale(lang)) return {};
  return {title: page.title, description: page.paragraphs.find(p=>p.length>80)?.slice(0,180) || `${page.title} · Gabriela Bittner-Krainz · KRAINZ ART`, alternates: {canonical:pageHref(slug,lang),languages:{de:pageHref(slug,"de"),en:pageHref(slug,"en")}}};
}
export default async function OriginalContentPage({params}: Props) {
  const {lang,slug} = await params;if(!isLocale(lang)) notFound();const page=getOriginal(slug);if(!page) notFound();
  const related = originalPages.filter(p => p.category === page.category && p.slug !== slug);
  const internal = page.links.map(link => ({...link,href:originalHref(link.url,lang)})).filter(link=>link.href.startsWith(`/${lang}/`) && link.href !== pageHref(slug,lang));
  const external = page.links.filter(link => !originalHref(link.url,lang).startsWith(`/${lang}/`) && !/^https?:\/\/(www\.)?(krainz-art.com|mobile.krainz-art.com|krainzigartig.net)\/$/.test(link.url));
  const isContact = ["kontakt","offspace-kontakt-gabriela-bittner-krainz"].includes(slug);
  const historical = page.category === "exhibitions" || /offspace-20\d\d|offspace-event-/.test(slug);
  const prose = isContact ? [] : page.paragraphs;
  const leadCount = page.images.length ? Math.min(2, prose.length) : prose.length > 30 ? 12 : prose.length;
  return <main id="main-content" className="content-page original-page">
    <nav className="breadcrumbs" aria-label={lang === "de" ? "Brotkrumennavigation" : "Breadcrumb"}><Link href={`/${lang}`}>KRAINZ ART</Link><span>/</span><Link href={`/${lang}/explore`}>{lang === "de" ? "Entdecken" : "Explore"}</Link><span>/</span><span>{categoryLabel(page.category,lang)}</span></nav>
    <header className="editorial-heading original-heading"><p className="eyebrow">{categoryLabel(page.category,lang)}</p><h1>{page.title}</h1>{historical ? <p className="archive-note">{lang === "de" ? "Aus dem Ausstellungsarchiv · dokumentierte Veranstaltungen und Rückblicke" : "From the exhibition archive · documented events and retrospectives"}</p> : null}{lang === "en" ? <p className="archive-language">Original archive texts are preserved in their source language.</p> : null}</header>
    {isContact ? <section className="contact-card"><h2>{lang === "de" ? "Wir bleiben in Verbindung." : "Let’s keep in touch."}</h2><div><a href="mailto:krainz@krainz-art.com">krainz@krainz-art.com ↗</a><a href="tel:+436803032000">+43 680 303 2000</a><p>Stumpergasse 38 · 1060 Wien</p><p>{lang === "de" ? "Atelierbesuche bitte telefonisch vereinbaren." : "Please call ahead to arrange a studio visit."}</p><InquiryLink locale={lang} label={lang === "de" ? "Kontakt aufnehmen" : "Get in touch"}/></div></section> : null}
    {prose.length ? <section className="original-prose" aria-label={lang === "de" ? "Einführung" : "Introduction"}>{prose.slice(0,leadCount).map((p,i)=><p key={i}>{p}</p>)}{!page.images.length && prose.length > leadCount ? <details className="archive-reading"><summary>{lang === "de" ? "Vollständige Chronik lesen" : "Read the full chronology"} <span>＋</span></summary><div>{prose.slice(leadCount).map((p,i)=><p key={i}>{p}</p>)}</div></details> : null}</section> : null}
    {page.images.length ? <section className="original-image-section"><div className="collection-topline"><h2>{lang === "de" ? "Einblicke" : "In view"}</h2><span>{page.images.length} {lang === "de" ? "Ansichten · zum Vergrößern öffnen" : "images · select to enlarge"}</span></div><ArchiveGallery images={page.images} title={page.title} locale={lang}/></section> : null}
    {page.images.length > 0 && prose.length > leadCount ? <section className="original-prose original-prose--after"><p className="eyebrow">{lang === "de" ? "Hintergründe & Gedanken" : "Background & reflections"}</p>{prose.slice(leadCount,leadCount+8).map((p,i)=><p key={i}>{p}</p>)}{prose.length > leadCount+8 ? <details className="archive-reading"><summary>{lang === "de" ? "Den vollständigen Text lesen" : "Read the full text"} <span>＋</span></summary><div>{prose.slice(leadCount+8).map((p,i)=><p key={i}>{p}</p>)}</div></details> : null}</section> : null}
    {internal.length ? <section className="related-section"><p className="eyebrow">{lang === "de" ? "Weiterführende Seiten" : "Continue exploring"}</p><div className="page-link-grid">{internal.map(link=><Link prefetch={false} key={link.url} href={link.href}><span>{link.label || getOriginal(link.href.split('/').pop()!)?.title || page.title}</span><span aria-hidden="true">↗</span></Link>)}</div></section> : null}
    {external.length ? <section className="archive-resources"><h2>{lang === "de" ? "Dokumente & Verweise" : "Documents & references"}</h2>{external.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer"><span>{link.label || (lang === "de" ? "Original öffnen" : "Open original")}</span><small>{/\.pdf($|\?)/i.test(link.url) ? "PDF ↗" : /youtu|vimeo/i.test(link.url) ? "VIDEO ↗" : "↗"}</small></a>)}</section> : null}
    <footer className="original-source"><span>{lang === "de" ? "Aus dem Originalarchiv von Gabriela Bittner-Krainz" : "From Gabriela Bittner-Krainz’s original archive"}</span><a href={page.source} target="_blank" rel="noreferrer">{lang === "de" ? "Originalseite" : "Original page"} ↗</a></footer>
    {related.length ? <section className="related-section"><p className="eyebrow">{categoryLabel(page.category,lang)}</p><h2>{lang === "de" ? "Es gibt mehr zu entdecken." : "There is more to discover."}</h2><div className="page-link-grid">{related.slice(0,6).map(p=><Link prefetch={false} key={p.slug} href={pageHref(p.slug,lang)}><span>{p.title}</span><span aria-hidden="true">↗</span></Link>)}</div><Link className="text-link" href={`/${lang}/explore`}>{lang === "de" ? "Alle Bereiche entdecken" : "Explore all categories"} ↗</Link></section> : null}
  </main>;
}
