<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# KRAINZ ART — gemeinsamer Arbeitsmodus

## Auftrag und Rollen
- Gabriela Bittner-Krainz ist die Künstlerin und gibt Werke, Werkdaten, Texte,
  Bildauswahl, Gestaltung und Kontaktangaben fachlich frei.
- Bodo ist Product Owner: Ziele, Prioritäten, Scope und Freigaben.
- ChatGPT koordiniert Produkt/Roadmap und prüft Änderungen unabhängig.
- Claude Code prüft den echten Stand, hinterfragt Annahmen, implementiert,
  debuggt, testet und bereitet einen prüfbaren Pull Request vor.

## Vor Beginn
Lies README.md, HANDOFF.md, docs/WORKING_MODE.md und docs/ROADMAP.md.
Prüfe Branch, HEAD, offene Änderungen und aktuelle PRs. Eine KI pro Arbeitspaket;
kein gleichzeitiger Umbau derselben Dateien durch mehrere Umsetzer.

## Durchführung und Abschluss
- Ein klar begrenztes Arbeitspaket pro Branch/PR. Keine ungefragten Sammelumbauten.
- Erst den Fehler oder Bedarf nachvollziehen, dann die kleinste sinnvolle Lösung.
- Reale Werkdaten nur aus belegten Quellen oder Angaben der Künstlerin.
  Preise, Maße, Techniken und Verfügbarkeit niemals ergänzen, wenn unbekannt.
- Herkunft der Archivbilder erhalten; Originaltitel nicht still umbenennen.
- Vor Abschluss passende Prüfungen ausführen, Ergebnisse mit Commit-SHA belegen
  und HANDOFF.md aktualisieren. Nicht ausgeführte Checks ausdrücklich offenlassen.
- Kein automatisches Merge, Live-Deployment, Domainwechsel oder Aktivieren der
  Indexierung. Dafür ist Bodos konkrete Freigabe erforderlich.
- Keine kostenpflichtigen Dienste, neue Datenbank, CMS oder Authentifizierung ohne
  begründetes eigenes Arbeitspaket und Freigabe.
- Keine Geheimnisse, Zugangstokens oder lokalen Umgebungsdateien committen.
- Browser-/iPhone-Tests gelten nur mit tatsächlicher Durchführung als bestanden.
  Ein erfolgreicher Build oder Seitenrenderer beweist keine visuelle Qualität.

## Bestehende Veröffentlichung
Die Website wird aktuell über ChatGPT Sites veröffentlicht. Eine Kopie auf GitHub
ändert weder Hosting noch Domain. Ein GitHub-Push löst hier kein Live-Deployment
 aus. Hosting-Konfiguration und Site-ID erhalten; Änderungen aus GitHub müssen
vor einer Veröffentlichung gezielt in den Sites-Quellstand übernommen werden.
