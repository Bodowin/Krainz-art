import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryLink } from "@/components/inquiry-link";
import { artworks, getArtwork, sourcePageFor } from "@/content/artworks";
import { getCopy } from "@/content/translations";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    artworks.map((artwork) => ({ lang, slug: artwork.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/art/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const artwork = getArtwork(slug);
  if (!artwork) return {};
  const description = `${artwork.title}, ${artwork.year}, ${artwork.dimensions} — Gabriela Bittner-Krainz · KRAINZ ART`;
  return {
    title: artwork.title,
    description,
    alternates: {
      canonical: `/${lang}/art/${slug}`,
      languages: {
        de: `/de/art/${slug}`,
        en: `/en/art/${slug}`,
      },
    },
    openGraph: {
      title: `${artwork.title} · Gabriela Bittner-Krainz`,
      description,
      images: [
        {
          url: artwork.image.src,
          width: artwork.image.width,
          height: artwork.image.height,
          alt: `${artwork.title}, ${artwork.year}`,
        },
      ],
    },
  };
}

export default async function ArtworkPage({
  params,
}: PageProps<"/[lang]/art/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const artwork = getArtwork(slug);
  if (!artwork) notFound();
  const text = getCopy(lang);
  const currentIndex = artworks.findIndex((item) => item.slug === artwork.slug);
  const nextArtwork = artworks[(currentIndex + 1) % artworks.length];
  const artworkJsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    image: artwork.image.src,
    dateCreated: String(artwork.year),
    size: artwork.dimensions,
    creator: {
      "@type": "Person",
      name: "Gabriela Bittner-Krainz",
    },
  };

  return (
    <main id="main-content" className="artwork-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(artworkJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="artwork-page__topline">
        <Link href={`/${lang}/art`}>← {text.works.back}</Link>
        <span>KRAINZ ART · {artwork.year}</span>
      </div>
      <div className="artwork-page__layout">
        <figure className="artwork-page__image">
          <Image
            src={artwork.image.src}
            alt={`${artwork.title}, ${artwork.year}`}
            width={artwork.image.width}
            height={artwork.image.height}
            sizes="(max-width: 900px) 92vw, 58vw"
            priority
          />
        </figure>
        <div className="artwork-page__details">
          <p className="eyebrow">Original · {artwork.year}</p>
          <h1>{artwork.title}</h1>
          <dl>
            <div>
              <dt>{text.works.year}</dt>
              <dd>{artwork.year}</dd>
            </div>
            <div>
              <dt>{lang === "de" ? "Maße" : "Dimensions"}</dt>
              <dd>{artwork.dimensions}</dd>
            </div>
            <div>
              <dt>{lang === "de" ? "Status" : "Status"}</dt>
              <dd>{text.works.availability}</dd>
            </div>
          </dl>
          <InquiryLink
            locale={lang}
            artworkTitle={artwork.title}
            label={text.works.inquiry}
          />
          <a
            className="source-link"
            href={sourcePageFor(artwork.year)}
            target="_blank"
            rel="noreferrer"
          >
            {text.works.source} ↗
          </a>
        </div>
      </div>
      <Link className="next-artwork" href={`/${lang}/art/${nextArtwork.slug}`}>
        <span>{text.works.next}</span>
        <strong>{nextArtwork.title}</strong>
        <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
