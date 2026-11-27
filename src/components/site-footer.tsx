import Link from "next/link";
import { getCopy } from "@/content/translations";
import type { Locale } from "@/lib/i18n";
import { SignatureMark } from "@/components/signature-mark";

export function SiteFooter({ locale }: {locale: Locale}) {
  const text = getCopy(locale);
  const groups = [
    {title: locale === "de" ? "Kunst entdecken" : "Explore art", links: [["art",locale === "de" ? "Galerie 2022–2024" : "Gallery 2022–2024"],["pages/serien",locale === "de" ? "Serien & Zyklen" : "Series & cycles"],["pages/kunst",locale === "de" ? "Werkgruppen" : "Works & media"],["pages/kataloge",locale === "de" ? "Kataloge" : "Catalogues"]]},
    {title: "KRAINZigARTig", links: [["pages/offspace-home","Offspace"],["pages/offspace-atelier",locale === "de" ? "Atelier" : "Studio"],["pages/offspace-artothek-gabriela-bittner-krainz", "Artothek"],["pages/offspace-events",locale === "de" ? "Events & Begegnungen" : "Events & encounters"]]},
    {title: locale === "de" ? "Hinter den Werken" : "Behind the works", links: [["pages/kurzbiographie",locale === "de" ? "Die Künstlerin" : "The artist"],["pages/ausstellungen",locale === "de" ? "Ausstellungen" : "Exhibitions"],["pages/texte",locale === "de" ? "Texte & Perspektiven" : "Texts & perspectives"],["explore",locale === "de" ? "Alle Seiten" : "All pages"]]},
  ];
  return <footer className="site-footer site-footer--expanded"><div className="footer-top"><div className="site-footer__brand"><SignatureMark/><div><strong>Gabriela Bittner-Krainz</strong><span>KRAINZ ART · VIENNA</span></div></div><a className="footer-email" href="mailto:krainz@krainz-art.com">{locale === "de" ? "Lassen wir Kunst sprechen." : "Let art start a conversation."} ↗</a></div>
    <div className="footer-columns">{groups.map(group=><div key={group.title}><h2>{group.title}</h2>{group.links.map(([href,label])=><Link key={href} href={`/${locale}/${href}`}>{label}</Link>)}</div>)}<div><h2>{locale === "de" ? "Kontakt" : "Contact"}</h2><a href="mailto:krainz@krainz-art.com">krainz@krainz-art.com</a><a href="tel:+436803032000">+43 680 303 2000</a><span>Stumpergasse 38<br/>1060 Wien</span><a href="https://www.instagram.com/krainzart/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
    <div className="footer-bottom"><small>© {new Date().getFullYear()} {text.footer.copyright}</small><small>{text.footer.preview}</small><div><Link href={`/${locale}/pages/impressum`}>{text.footer.imprint}</Link><Link href={`/${locale}/pages/disclaimer`}>Disclaimer</Link><Link href={`/${locale}/brand`}>{text.footer.brandStudy}</Link></div></div>
  </footer>;
}
