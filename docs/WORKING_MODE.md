# Arbeitsweise für KRAINZ ART

Stand: 18. Oktober 2026. Übertragen aus dem gemeinsamen Fairway-Arbeitsmodell,
angepasst an eine Künstlerinnenwebsite mit Archiv.

## Rollen

| Rolle | Verantwortung |
| --- | --- |
| Gabriela | Inhaltliche und gestalterische Freigabe, Bildrechte, Werkdaten und Bildauswahl |
| Bodo | Product Owner, Prioritäten, Entscheidungen und Freigabe von Merge/Veröffentlichung |
| ChatGPT | Roadmap, begrenzte Arbeitsaufträge, unabhängiger Review und Qualitätskontrolle |
| Claude Code | Repo-Prüfung, technische Gegenprüfung, Umsetzung, Tests, PR und Handoff |

## Ablauf eines Arbeitspakets

1. ChatGPT formuliert Problem, Ziel, Grenzen und prüfbare Abnahmekriterien.
2. Claude liest den Handoff und aktuellen GitHub-Stand und meldet Widersprüche.
3. Claude arbeitet in einem eigenen Branch und erstellt einen kleinen PR.
4. Der PR dokumentiert Vorher/Nachher, Tests, Commit-SHA und offene Fragen.
5. ChatGPT prüft den tatsächlichen Diff und die Belege am aktuellen PR-Head.
6. Bodo und bei inhaltlichen/gestalterischen Fragen Gabriela testen und entscheiden.
7. Merge und Veröffentlichung erhalten jeweils eine klare Freigabe. Anschließend
   wird der Handoff mit tatsächlichem Stand und nächstem Schritt aktualisiert.

## Eine technische Wahrheit, eine Übergabe

GitHub ist nach dem Import die technische Arbeitsgrundlage. HANDOFF.md ist für
KRAINZ ART zunächst die einzige rollierende Übergabe; keine zweite konkurrierende
Statuskopie. Ein optionaler späterer Notion-Handoff soll diese Übergabe ersetzen
oder darauf verlinken. Das ist eine bewusst kleinere Organisation als bei Fairway.

Die aktuell veröffentlichte Sites-Version bleibt ein eigener nachweisbarer Stand.
Ein GitHub-Commit ist erst live, wenn er ausdrücklich veröffentlicht wurde.
Vor jeder Veröffentlichung Quellstand/Commit und Zielversion abgleichen.
Bei konkurrierenden Änderungen nicht überschreiben, sondern Unterschiede klären.

## Was als Beleg zählt

- Build/Typecheck: tatsächlicher Befehl, Ergebnis und geprüfter Commit.
- CI: Link zum Workflow-Lauf und korrekter PR-Head.
- Browser: Seitenpfade, Viewports, Browser und Screenshots oder Befund.
- iPhone: realer Test von Navigation, Bildvergrößerung, Formular-/Mail-Links
  und Lesbarkeit. Ein Desktop-Viewport ersetzt diesen Test nicht vollständig.
- Inhalte: Quellenverweis oder konkrete Freigabe von Gabriela.

Fehlende Belege sind offen, nicht automatisch bestanden. Ein Review nach einem
neuen Commit wird für die betroffenen Änderungen erneut durchgeführt.

## Veröffentlichung

Bestehendes Hosting: ChatGPT Sites. GitHub ist zunächst Entwicklungsrepository;
keine automatische Veröffentlichung und kein Hosting-Wechsel eingerichtet.
Die Originaldomains werden erst in einem separat freigegebenen Schritt umgestellt.
Noindex bleibt aktiv, bis Inhalte, Rechtstexte, Domain und Weiterleitungen geprüft sind.
