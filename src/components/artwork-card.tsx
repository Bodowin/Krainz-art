import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/content/artworks";
import type { Locale } from "@/lib/i18n";

interface ArtworkCardProps {
  artwork: Artwork;
  locale: Locale;
  detailLabel: string;
  priority?: boolean;
}

export function ArtworkCard({
  artwork,
  locale,
  detailLabel,
  priority = false,
}: ArtworkCardProps) {
  return (
    <article className="artwork-card">
      <Link href={`/${locale}/art/${artwork.slug}`} className="artwork-card__image-link">
        <span
          className="artwork-card__image"
          style={{ aspectRatio: `${artwork.image.width} / ${artwork.image.height}` }}
        >
          <Image
            src={artwork.image.src}
            alt={`${artwork.title}, ${artwork.year}`}
            width={artwork.image.width}
            height={artwork.image.height}
            sizes="(max-width: 720px) 92vw, (max-width: 1100px) 45vw, 30vw"
            priority={priority}
          />
          <span className="artwork-card__reveal">{detailLabel} <span aria-hidden="true">↗</span></span>
        </span>
      </Link>
      <div className="artwork-card__meta">
        <h2>
          <Link href={`/${locale}/art/${artwork.slug}`}>{artwork.title}</Link>
        </h2>
        <p>{artwork.year} · {artwork.dimensions}</p>
      </div>
    </article>
  );
}
