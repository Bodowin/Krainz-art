"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { otherLocale, type Locale } from "@/lib/i18n";
import { SignatureMark } from "@/components/signature-mark";

export function SiteHeader({ locale }: {locale: Locale}) {
  const pathname = usePathname();
  const activePath = pathname?.replace(/\/$/, "");
  const menu = useRef<HTMLDetailsElement>(null);
  const alternateLocale = otherLocale(locale);
  const alternatePath = pathname?.replace(/^\/(de|en)(?=\/|$)/, `/${alternateLocale}`) || `/${alternateLocale}`;
  const navigation = [
    { href: `/${locale}/art`, label: locale === "de" ? "Werke" : "Works" },
    { href: `/${locale}/pages/serien`, label: locale === "de" ? "Serien" : "Cycles" },
    { href: `/${locale}/pages/kurzbiographie`, label: locale === "de" ? "Künstlerin" : "Artist" },
    { href: `/${locale}/pages/offspace-home`, label: "KRAINZigARTig" },
    { href: `/${locale}/explore`, label: locale === "de" ? "Entdecken" : "Explore" },
    { href: `/${locale}/pages/kontakt`, label: locale === "de" ? "Kontakt" : "Contact" },
  ];
  return <header className="site-header"><div className="site-header__inner">
    <Link href={`/${locale}`} className="brand-lockup" aria-label="Gabriela Bittner-Krainz – KRAINZ ART"><SignatureMark priority/><span className="brand-lockup__text"><strong>Gabriela Bittner-Krainz</strong><span>KRAINZ ART</span></span></Link>
    <nav className="desktop-nav" aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}>{navigation.map(item=><Link key={item.href} href={item.href} aria-current={activePath === item.href ? "page" : undefined}>{item.label}</Link>)}<Link className="language-link" href={alternatePath} hrefLang={alternateLocale} aria-label={locale === "de" ? "Diese Seite auf Englisch" : "This page in German"}>{alternateLocale.toUpperCase()}</Link></nav>
    <details className="mobile-nav" ref={menu} onKeyDown={e=>{if(e.key === "Escape") {menu.current?.removeAttribute("open");menu.current?.querySelector("summary")?.focus();}}}>
      <summary aria-label={locale === "de" ? "Menü öffnen oder schließen" : "Open or close menu"}><span/><span/></summary>
      <nav aria-label={locale === "de" ? "Mobile Navigation" : "Mobile navigation"} onClick={e=>{if((e.target as HTMLElement).closest("a")) menu.current?.removeAttribute("open");}}>{navigation.map(item=><Link key={item.href} href={item.href} aria-current={activePath === item.href ? "page" : undefined}>{item.label}</Link>)}<Link href={alternatePath} hrefLang={alternateLocale}>{locale === "de" ? "English" : "Deutsch"}</Link></nav>
    </details>
  </div></header>;
}
