# Originalseiten und Archiv · 16. Oktober 2026

## Umfang

Die öffentlich verlinkten HTML-Seiten auf `krainz-art.com`,
`mobile.krainz-art.com` und `krainzigartig.net` wurden rekursiv inventarisiert.
179 eindeutige Originalseiten waren erreichbar, ohne verbleibende Abruffehler.
Die ursprüngliche Hauptseite wird durch die bestehende neue Startseite vertreten;
178 zusätzliche Inhaltsseiten sind unter `/de/pages/[slug]` und
`/en/pages/[slug]` eingebunden. Die 45 bestehenden Werkdetailseiten bleiben erhalten.

Alle Seiten sind im Verzeichnis `/de/explore` bzw. `/en/explore` auffindbar.
Die acht Bereiche sind Werkgruppen, Serien, Künstlerin, Ausstellungen, Offspace,
Texte, Medien/Archiv und Kontakt/Information. Interne Originalverweise werden
auf die entsprechenden neuen Inhaltsseiten aufgelöst. PDFs und externe
Videoangebote bleiben klar gekennzeichnete Links zu den Originalressourcen.
Alte Flash-Einbettungen werden nicht geladen.

## Inhalte pflegen

- `src/content/original-pages.json`: Titel, Zuordnung, Original-URL, Texte,
  Bilder und weiterführende Links je Seite.
- `src/content/original.ts`: Themenbereiche, Navigation und URL-Zuordnung.
- `src/content/asset-sources.json`: Herkunft und lokale Zuordnung der Bilder.
- `public/archive/`: aus den Originalbildern erzeugte WebP-Dateien.
- `src/content/artworks.ts`: die bestehende Galerie mit 45 Werkdetailseiten.

Texte wurden aus dem veröffentlichten Archiv übernommen. Alte Termine sind
Rückblicke. Originaltexte bleiben in ihrer ursprünglichen Sprache; auch die
englische Oberfläche kennzeichnet das ausdrücklich. Preise und aktuelle
Verfügbarkeit werden weiterhin nicht behauptet.

Archivbilder sind lokal gesichert und ohne Hochskalierung auf maximal
1600 × 1600 Pixel begrenzt. Nichtinhaltliche Menü- und Rahmengrafiken der
alten Website wurden entfernt. Desktop-Serien mit unvollständigen alten
Betrachtern wurden um die zugehörigen Galerien der Mobilwebsite ergänzt.

## Verifikation

`node scripts/check-pages.mjs` rendert sämtliche 455 Seitenrouten direkt
über den gebauten Produktionshandler, einschließlich beider Sprachen,
Startseiten, Galerie, Markenstudie, Archiv und Werkdetailseiten. Es prüft
Status 200, Hauptüberschrift, Sprachangabe, Sprungziel und die beibehaltene
Noindex-Einstellung. Drei ungültige Routen werden auf Status 404 geprüft.
Die Bilddateien wurden zusätzlich auf Lesbarkeit geprüft.

Eine interaktive Browserprüfung war in dieser Umgebung nicht verfügbar.
Das Projekt bleibt eine nicht indexierte Konzeptwebsite mit dem bestehenden
Zugriffsmodus; die Originaldomains wurden nicht verändert.
