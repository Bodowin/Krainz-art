"use client";

import { useRef, useState } from "react";
import type { ArchiveImage } from "@/content/original";
import type { Locale } from "@/lib/i18n";

export function ArchiveGallery({ images, title, locale }: { images: ArchiveImage[]; title: string; locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const current = images[selected];
  const open = (index: number) => {setSelected(index);dialog.current?.showModal();};
  const move = (step: number) => setSelected(value => (value + step + images.length) % images.length);
  if (!images.length) return null;
  return <>
    <div className={`archive-gallery ${images.length === 1 ? "archive-gallery--single" : ""}`}>
      {images.map((image, index) => <figure key={image.src}>
        <button className="archive-gallery__open" type="button" onClick={() => open(index)} aria-label={`${locale === "de" ? "Bild vergrößern" : "Enlarge image"}: ${image.caption || `${title}, ${index + 1}`}`}>
          {/* Original archive images are served as ordinary images to preserve their original dimensions. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} width={image.width} height={image.height} alt={image.caption || `${title} · ${locale === "de" ? "Archivansicht" : "Archive image"} ${index + 1}`} loading="lazy" decoding="async" />
          <span className="archive-gallery__zoom" aria-hidden="true">↗</span>
        </button>
        {image.caption ? <figcaption>{image.caption}</figcaption> : null}
      </figure>)}
    </div>
    <dialog ref={dialog} className="art-lightbox" onClick={e => {if(e.target === e.currentTarget) dialog.current?.close();}} onKeyDown={e => {if (e.key === "ArrowRight") move(1);if(e.key === "ArrowLeft") move(-1);}} aria-label={title}>
      <div className="art-lightbox__body">
        <header><span>{selected + 1} / {images.length}</span><button type="button" onClick={() => dialog.current?.close()} aria-label={locale === "de" ? "Schließen" : "Close"}>×</button></header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current.src} alt={current.caption || title} width={current.width} height={current.height} />
        <footer><button type="button" onClick={() => move(-1)} aria-label={locale === "de" ? "Vorheriges Bild" : "Previous image"}>←</button><p>{current.caption || title}</p><button type="button" onClick={() => move(1)} aria-label={locale === "de" ? "Nächstes Bild" : "Next image"}>→</button></footer>
      </div>
    </dialog>
  </>;
}
