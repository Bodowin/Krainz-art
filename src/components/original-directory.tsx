"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export interface DirectoryEntry { slug: string; title: string; category: string; image?: string; count: number }
export function OriginalDirectory({ entries, groups, locale }: { entries: DirectoryEntry[]; groups: { id: string; label: string }[]; locale: Locale }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const normalized = query.trim().toLocaleLowerCase(locale);
  const visible = entries.filter(p => (group === "all" || p.category === group) && p.title.toLocaleLowerCase(locale).includes(normalized));
  return <>
    <div className="directory-tools">
      <label className="directory-search"><span>{locale === "de" ? "Im Archiv suchen" : "Search the archive"}</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={locale === "de" ? "Zodiac, Atelier, Ausstellungen …" : "Zodiac, studio, exhibitions …"} /></label>
      <label className="directory-select"><span>{locale === "de" ? "Themenbereich" : "Category"}</span><select value={group} onChange={e => setGroup(e.target.value)}><option value="all">{locale === "de" ? "Alle Bereiche" : "All categories"}</option>{groups.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}</select></label>
    </div>
    <p className="directory-count" role="status">{visible.length} {locale === "de" ? "Seiten entdecken" : "pages to explore"}</p>
    <div className="directory-list">{visible.map((p, i) => <Link prefetch={false} className="directory-entry" key={p.slug} href={`/${locale}/pages/${p.slug}`}>
      <span className="directory-entry__number">{String(i + 1).padStart(2, "0")}</span>
      <div><small>{groups.find(g => g.id === p.category)?.label}</small><h2>{p.title}</h2></div>
      <span className="directory-entry__count">{p.count > 0 ? `${p.count} ${locale === "de" ? "Ansichten" : "images"}` : locale === "de" ? "Entdecken" : "Explore"}</span><span aria-hidden="true">↗</span>
    </Link>)}</div>
    {visible.length === 0 ? <div className="directory-empty"><h2>{locale === "de" ? "Noch nichts gefunden." : "No matches yet."}</h2><p>{locale === "de" ? "Versuche einen anderen Suchbegriff oder wähle alle Bereiche." : "Try another search term or choose all categories."}</p><button className="button button--outline" onClick={() => {setQuery("");setGroup("all");}}>{locale === "de" ? "Suche zurücksetzen" : "Reset search"}</button></div> : null}
  </>;
}
