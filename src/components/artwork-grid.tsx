"use client";

import { useState } from "react";
import type { Artwork } from "@/content/artworks";
import type { Locale } from "@/lib/i18n";
import { ArtworkCard } from "@/components/artwork-card";

type Filter = "all" | Artwork["year"];

interface ArtworkGridProps {
  artworks: Artwork[];
  locale: Locale;
  labels: {
    all: string;
    year: string;
    details: string;
  };
}

const filters: Filter[] = ["all", 2024, 2023, 2022];

export function ArtworkGrid({ artworks, locale, labels }: ArtworkGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const visibleArtworks =
    activeFilter === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.year === activeFilter);

  return (
    <>
      <div className="filter-bar" aria-label={labels.year}>
        <span>{labels.year}</span>
        <div role="group" aria-label={labels.year}>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "all" ? labels.all : filter}
            </button>
          ))}
        </div>
      </div>
      <div className="artwork-grid" aria-live="polite">
        {visibleArtworks.map((artwork, index) => (
          <ArtworkCard
            key={artwork.slug}
            artwork={artwork}
            locale={locale}
            detailLabel={labels.details}
            priority={index < 3}
          />
        ))}
      </div>
    </>
  );
}
