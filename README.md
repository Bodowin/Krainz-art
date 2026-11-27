# Gabriela Bittner-Krainz · KRAINZ ART

Zweisprachige Konzeptwebsite für die Künstlerin Gabriela Bittner-Krainz.

## Enthalten

- Deutsch und Englisch unter `/de` und `/en`
- 45 Werke aus dem öffentlichen Archiv 2022–2024
- eigene Detailseite pro Werk
- 178 übernommene Unterseiten von Hauptwebsite, Mobilarchiv und KRAINZigARTig
- durchsuchbares Gesamtverzeichnis mit acht Themenbereichen
- lokale Archivbilder und zugängliche Bildvergrößerung
- Anfrage per vorausgefüllter E-Mail statt Checkout
- Künstlerinnenprofil, internationale Stationen und Raumansichten
- separate Markenstudie unter `/de/brand`
- strukturierte Daten für Künstlerin und Werke
- Sitemap, Open-Graph-Metadaten und semantische HTML-Struktur
- in der Vorschau absichtlich `noindex`

## Lokal starten

```bash
npm install
npm run dev
```

## Prüfen

```bash
npm run typecheck
npm run build
npm run check:pages
```

## Google-Indexierung später aktivieren

Die Vorschau ist absichtlich nicht indexierbar. Für die finale Domain werden
folgende Variablen gesetzt:

```text
NEXT_PUBLIC_SITE_URL=https://krainz-art.com
NEXT_PUBLIC_INDEXING_ENABLED=true
```

Vor der Aktivierung müssen hochauflösende Bilder, finale Texte, Impressum,
Datenschutz und Domain-Weiterleitungen geprüft werden.

Die laufende Inhaltspflege ist in [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)
beschrieben.

Die Inhaltsübernahme und Prüfung sind in [CONTENT_MIGRATION.md](./CONTENT_MIGRATION.md) dokumentiert.

## Zusammenarbeit und GitHub

- Arbeitsregeln: [AGENTS.md](AGENTS.md) und [WORKING_MODE.md](docs/WORKING_MODE.md)
- Einzige rollierende Übergabe: [HANDOFF.md](HANDOFF.md)
- Nächste Schritte: [ROADMAP.md](docs/ROADMAP.md)
- Erster Claude-Auftrag: [CLAUDE_NEXT.md](docs/CLAUDE_NEXT.md)
- Import: [GITHUB_IMPORT.md](docs/GITHUB_IMPORT.md)

Die GitHub-Actions-Konfiguration prüft Typen, Build und Seitenantworten. Sie
veröffentlicht die Website nicht. Bisherige Browser- und iPhone-Prüflücken sind
im Handoff festgehalten. Alle Bilder und Inhalte verbleiben bei ihren jeweiligen
Rechteinhabern; dieses Repository vergibt keine neue Nutzungslizenz.
