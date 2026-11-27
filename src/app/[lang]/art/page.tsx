import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkGrid } from "@/components/artwork-grid";
import { artworks } from "@/content/artworks";
import { getCopy } from "@/content/translations";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/art">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const text = getCopy(lang);
  return {
    title: text.works.title,
    description: text.works.intro,
    alternates: {
      canonical: `/${lang}/art`,
      languages: { de: "/de/art", en: "/en/art" },
    },
  };
}

export default async function ArtPage({ params }: PageProps<"/[lang]/art">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const text = getCopy(lang);

  return (
    <main id="main-content" className="archive-page">
      <header className="archive-hero">
        <p className="eyebrow">{text.works.eyebrow}</p>
        <h1>{text.works.title}</h1>
        <p>{text.works.intro}</p>
      </header>
      <div className="gallery-paths"><Link href={`/${lang}/pages/kunst`}>{lang === "de" ? "Alle Werkgruppen" : "All media"} ↗</Link><Link href={`/${lang}/pages/serien`}>{lang === "de" ? "Serien & Zyklen" : "Series & cycles"} ↗</Link><Link href={`/${lang}/explore`}>{lang === "de" ? "Das gesamte Archiv" : "The complete archive"} ↗</Link></div>
      <ArtworkGrid
        artworks={artworks}
        locale={lang}
        labels={{
          all: text.works.all,
          year: text.works.year,
          details: text.works.details,
        }}
      />
    </main>
  );
}
