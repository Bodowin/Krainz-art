import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCopy } from "@/content/translations";
import { isLocale, locales } from "@/lib/i18n";

const displayFont = Cormorant_Garamond({
  variable: "--font-display-loaded",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = Manrope({
  variable: "--font-body-loaded",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const text = getCopy(lang);
  const indexingEnabled = process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true";

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://gabriela-krainz-art-preview.bodowin.chatgpt.site",
    ),
    title: {
      default: `${text.hero.title} · ${text.hero.subtitle}`,
      template: `%s · ${text.hero.title}`,
    },
    description: text.hero.statement,
    applicationName: "KRAINZ ART",
    authors: [{ name: "Gabriela Bittner-Krainz" }],
    creator: "Gabriela Bittner-Krainz",
    keywords:
      lang === "de"
        ? [
            "Gabriela Bittner-Krainz",
            "KRAINZ ART",
            "zeitgenössische Kunst Wien",
            "österreichische Künstlerin",
            "Malerei",
            "Mixed Media",
            "Kunst kaufen Wien",
          ]
        : [
            "Gabriela Bittner-Krainz",
            "KRAINZ ART",
            "contemporary art Vienna",
            "Austrian artist",
            "painting",
            "mixed media",
            "art for sale Vienna",
          ],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        de: "/de",
        en: "/en",
      },
    },
    robots: {
      index: indexingEnabled,
      follow: indexingEnabled,
      googleBot: {
        index: indexingEnabled,
        follow: indexingEnabled,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "de" ? "de_AT" : "en_GB",
      alternateLocale: lang === "de" ? ["en_GB"] : ["de_AT"],
      title: `${text.hero.title} · ${text.hero.subtitle}`,
      description: text.hero.statement,
      siteName: "KRAINZ ART",
      images: [
        {
          url: "/archive/e1994444bebbe5813a.webp",
          width: 320,
          height: 322,
          alt: "Wirrwarr, Gabriela Bittner-Krainz, 2024",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          {lang === "de" ? "Zum Inhalt springen" : "Skip to content"}
        </a>
        <SiteHeader locale={lang} />
        {children}
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
