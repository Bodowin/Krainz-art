import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SignatureMark } from "@/components/signature-mark";
import { getCopy } from "@/content/translations";
import { isLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "KRAINZ ART · Brand study",
  robots: { index: false, follow: false },
};

export default async function BrandPage({
  params,
}: PageProps<"/[lang]/brand">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const text = getCopy(lang);

  return (
    <main id="main-content" className="brand-page">
      <header className="brand-page__intro">
        <p className="eyebrow">{text.brand.eyebrow}</p>
        <h1>{text.brand.title}</h1>
        <p>{text.brand.intro}</p>
      </header>

      <section className="brand-concept brand-concept--heritage">
        <p>{text.brand.original}</p>
        <div className="heritage-lockup">
          <SignatureMark />
          <span>
            <strong>Gabriela Bittner-Krainz</strong>
            <em>KRAINZ ART</em>
          </span>
        </div>
      </section>

      <section className="brand-concept brand-concept--monogram">
        <p>{text.brand.monogram}</p>
        <div className="monogram-lockup">
          <span className="monogram-lockup__mark">GB<span>K</span></span>
          <span className="monogram-lockup__name">Gabriela Bittner-Krainz</span>
          <span className="monogram-lockup__art">KRAINZ ART · VIENNA</span>
        </div>
      </section>

      <section className="brand-concept brand-concept--editorial">
        <p>{text.brand.editorial}</p>
        <div className="editorial-lockup">
          <span>GABRIELA</span>
          <span>BITTNER—KRAINZ</span>
          <i>KRAINZ ART</i>
        </div>
      </section>

      <p className="brand-page__note">{text.brand.note}</p>
    </main>
  );
}
