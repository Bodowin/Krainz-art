import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkCard } from "@/components/artwork-card";
import { InquiryLink } from "@/components/inquiry-link";
import {
  artistStudioImage,
  getFeaturedArtworks,
  roomScenes,
} from "@/content/artworks";
import { getOriginal } from "@/content/original";
import { getCopy } from "@/content/translations";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const text = getCopy(lang);
  return {
    title: `${text.hero.title} · ${text.hero.subtitle}`,
    description: text.hero.statement,
  };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const text = getCopy(lang);
  const featured = getFeaturedArtworks().slice(0, 9);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriela Bittner-Krainz",
    alternateName: "KRAINZ ART",
    jobTitle: lang === "de" ? "Bildende Künstlerin" : "Visual artist",
    url: "https://krainz-art.com/",
    sameAs: ["https://www.instagram.com/krainzart/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vienna",
      addressCountry: "AT",
    },
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">{text.hero.eyebrow}</p>
          <h1>{text.hero.title}</h1>
          <p className="hero__brand">{text.hero.subtitle}</p>
          <p className="hero__statement">{text.hero.statement}</p>
          <div className="hero__actions">
            <Link className="button button--dark" href={`/${lang}/art`}>
              {text.hero.viewWorks} <span aria-hidden="true">↘</span>
            </Link>
            <InquiryLink
              locale={lang}
              label={text.hero.inquire}
              className="button button--text"
            />
          </div>
        </div>

        <div className="hero__art" aria-label="Selected artwork">
          <div className="hero__art-main">
            <Image
              src="/archive/e1994444bebbe5813a.webp"
              alt="Wirrwarr, Gabriela Bittner-Krainz, 2024"
              width={320}
              height={322}
              priority
              sizes="(max-width: 800px) 88vw, 48vw"
            />
          </div>
          <div className="hero__art-secondary">
            <Image
              src="/archive/bb20a1d9f75361efcb.webp"
              alt="Skepsis, Gabriela Bittner-Krainz, 2024"
              width={320}
              height={323}
              priority
              sizes="(max-width: 800px) 38vw, 18vw"
            />
          </div>
          <span className="hero__vertical-mark">KRAINZ ART · ORIGINAL WORKS</span>
        </div>

        <a className="hero__scroll" href="#werke">
          {text.hero.scroll} <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section section--works" id="werke">
        <header className="section-heading">
          <div>
            <p className="eyebrow">{text.featured.eyebrow}</p>
            <h2>{text.featured.title}</h2>
          </div>
          <div>
            <p>{text.featured.text}</p>
            <Link className="text-link" href={`/${lang}/art`}>
              {text.featured.allWorks} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>
        <div className="featured-grid">
          {featured.map((artwork, index) => (
            <ArtworkCard
              key={artwork.slug}
              artwork={artwork}
              locale={lang}
              detailLabel={text.works.details}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="discovery-section section">
        <header className="section-heading"><div><p className="eyebrow">{lang === "de" ? "Facetten eines künstlerischen Kosmos" : "Facets of an artistic universe"}</p><h2>{lang === "de" ? <>Immer wieder<br/><em>andere Wege.</em></> : <>Always finding<br/><em>new paths.</em></>}</h2></div><div><p>{lang === "de" ? "Von ausdrucksstarker Malerei zu überraschenden Materialien. Von persönlichen Zyklen zu einem offenen Raum für Kunst und Begegnung." : "From expressive painting to unexpected materials. From personal cycles to an open space for art and encounters."}</p><Link className="text-link" href={`/${lang}/explore`}>{lang === "de" ? "Alle Bereiche entdecken" : "Explore every facet"} ↗</Link></div></header>
        <div className="discovery-grid">{[
          {slug: "2013-zodiac", label: lang === "de" ? "Serien & Zyklen" : "Series & cycles", title: lang === "de" ? "Ein Thema. Unzählige Welten." : "One theme. Endless worlds.", image: getOriginal("2013-zodiac")?.images[0]?.src},
          {slug: "mixed-media", label: "Mixed Media", title: lang === "de" ? "Material wird Möglichkeit." : "Materials become possibilities.", image: getOriginal("mixed-media")?.images[0]?.src},
          {slug: "offspace-home", label: "Offspace KRAINZigARTig", title: lang === "de" ? "Raum für Begegnungen." : "A space for encounters.", image: getOriginal("offspace-aussstellungsraum-fotos")?.images[0]?.src},
        ].map((item,index)=><Link className={`discovery-card discovery-card--${index+1}`} href={`/${lang}/pages/${item.slug}`} key={item.slug}><div className="discovery-card__image">{item.image ? <Image src={item.image} alt={item.label} width={700} height={650} sizes="(max-width: 720px) 92vw, 31vw"/> : null}</div><div><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><span aria-hidden="true">↗</span></div></Link>)}</div>
      </section>

      <section className="room-section">
        <div className="room-section__intro">
          <p className="eyebrow">{text.room.eyebrow}</p>
          <h2>{text.room.title}</h2>
          <p>{text.room.text}</p>
        </div>
        <div className="room-strip">
          {roomScenes.slice(0, 3).map((scene, index) => (
            <figure key={scene.src} className={`room-strip__item room-strip__item--${index + 1}`}>
              <Image
                src={scene.src}
                alt={
                  lang === "de"
                    ? "Werk von Gabriela Bittner-Krainz in einer Raumansicht"
                    : "Artwork by Gabriela Bittner-Krainz shown in an interior"
                }
                width={scene.width}
                height={scene.height}
                sizes="(max-width: 720px) 78vw, 31vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="artist-section" id="kuenstlerin">
        <div className="artist-section__image">
          <Image
            src={artistStudioImage.src}
            alt={
              lang === "de"
                ? "Ateliermoment von Gabriela Bittner-Krainz"
                : "A studio moment from Gabriela Bittner-Krainz"
            }
            width={artistStudioImage.width}
            height={artistStudioImage.height}
            sizes="(max-width: 900px) 92vw, 46vw"
          />
        </div>
        <div className="artist-section__copy">
          <p className="eyebrow">{text.artist.eyebrow}</p>
          <h2>{text.artist.title}</h2>
          <blockquote>{text.artist.quote}</blockquote>
          <p>{text.artist.body}</p>
          <Link className="text-link" href={`/${lang}/pages/kurzbiographie`}>{text.artist.more} ↗</Link>
        </div>
      </section>

      <section className="credentials" id="vita">
        <p>{text.credentials.exhibitions}</p>
        <p>{text.credentials.cities}</p>
        <p>{text.credentials.awards}</p>
        <p>{text.credentials.practice}</p>
      </section>

      <section className="contact-section" id="kontakt">
        <div>
          <p className="eyebrow">{text.contact.eyebrow}</p>
          <h2>{text.contact.title}</h2>
        </div>
        <div className="contact-section__body">
          <p>{text.contact.text}</p>
          <div className="contact-section__actions">
            <InquiryLink locale={lang} label={text.contact.email} />
            <a
              className="button button--outline"
              href="https://www.instagram.com/krainzart/"
              target="_blank"
              rel="noreferrer"
            >
              {text.contact.instagram} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <small>{text.contact.note}</small>
        </div>
      </section>
    </main>
  );
}
