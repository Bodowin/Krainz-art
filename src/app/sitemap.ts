import type { MetadataRoute } from "next";
import { originalPages } from "@/content/original";
import { artworks } from "@/content/artworks";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabriela-krainz-art-preview.bodowin.chatgpt.site";
  const staticPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date("2026-07-10"),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/art`,
      lastModified: new Date("2026-07-10"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ]);
  const artworkPages = locales.flatMap((locale) =>
    artworks.map((artwork) => ({
      url: `${baseUrl}/${locale}/art/${artwork.slug}`,
      lastModified: new Date(`${artwork.year}-12-31`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  );

  return [...staticPages, ...artworkPages, ...locales.flatMap(locale => [{url:`${baseUrl}/${locale}/explore`, priority:0.8}, ...originalPages.map(page => ({url:`${baseUrl}/${locale}/pages/${page.slug}`, priority:0.6}))])];
}
