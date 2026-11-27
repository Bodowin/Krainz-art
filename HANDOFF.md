# Aktueller Handoff — KRAINZ ART

Aktualisiert: 27. November 2026.

## Stand und Belege
- Veröffentlicht: https://gabriela-krainz-art-preview.bodowin.chatgpt.site
- Sites-Version: 12.
- Veröffentlichter Quellstand: `86ac3a357e94345a85fefdb7180e0279fa24f8af`.
- Dieses Importpaket enthält diesen Stand plus Arbeitsregeln, Roadmap und CI.
- GitHub-Repository: [Bodowin/Krainz-art](https://github.com/Bodowin/Krainz-art), öffentlich mit Freigabe von Bodo.
- 45 Werkdetailseiten, 178 zusätzliche Archiv-/Inhaltsseiten in Deutsch/Englisch.
- 1.958 lokale Archiv-/Websitebilder; ursprüngliche Daten bleiben in ihren
  Quellsprachen. Englische Navigation ist keine vollständige Textübersetzung.
- Beim vorherigen Website-Release: Build und 455 Seitenrouten erfolgreich geprüft;
  drei unbekannte Routen liefern 404. Keine visuelle Browserprüfung belegt.

## Prüfung des Importpakets am 18. Oktober 2026
- `npm run typecheck`: bestanden.
- `npm run build`: bestanden.
- `npm run check:pages`: 455 Routen und drei 404-Fälle bestanden.
- Alle lokalen Archivbild-Verweise vorhanden; 1.958 WebP-Dateien enthalten.
- GitHub-CI und Browser-/iPhone-Review weiterhin nicht ausgeführt.

## Jetzt offen
1. Qualitätsprüfungen manuell starten und Ergebnis dokumentieren.
2. Paket K01: visuelles und inhaltliches Bestandsaudit. Siehe ROADMAP und CLAUDE_NEXT.

## Wichtige Grenzen
Keine automatische Veröffentlichung aus GitHub eingerichtet. Keine Domainumstellung,
kein Merge und keine Indexierungsfreigabe erteilt. Archivübernahme beweist noch keine
inhaltlich korrekte Zuordnung jedes Bildes und keine zeitgemäße Besucherführung.

## Entscheidungen für Bodo und Gabriela
- Welchen Zweck soll die Startseite priorisieren: Werkinteresse, Ausstellungsbesuch,
  künstlerische Position oder eine Mischung mit klarer Reihenfolge?
- Welche 8–12 Werke und welche Werkgruppen sollen im Vordergrund stehen?
- Welche Kontakte/Angebote des historischen Offspace sind weiterhin aktuell?
- Welche Sprache(n) sollen vollständig gepflegt werden?

## Nächste Aktion
Claude erhält `docs/CLAUDE_NEXT.md`. Zuerst auditieren; konkrete Korrekturen klein
und belegbar umsetzen. Kein Redesign und keine neuen Funktionen ohne eigenes Paket.
