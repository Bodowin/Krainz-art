# Claude Code — erster Auftrag: K01 Bestandsaudit

Arbeite als Implementierer und technischer Gegenprüfer für die Künstlerinnenwebsite
KRAINZ ART. Bodo entscheidet Produkt/Scope und Freigaben; Gabriela gibt Inhalte und
Gestaltung frei. ChatGPT übernimmt unabhängigen Review.

1. Lies AGENTS.md, HANDOFF.md, docs/WORKING_MODE.md und docs/ROADMAP.md.
   Prüfe den echten Repository-Stand, Branch/HEAD, offene PRs und CI. Melde
   Widersprüche zwischen Handoff und GitHub, bevor du sie durch Annahmen ersetzt.
2. Bestätige den Import: 178 Originalseiten, 45 Werkdatensätze, alle referenzierten
   lokalen Bilddateien. Keine Dateien oder Archivseiten ungefragt löschen.
3. Führe Typecheck, Build und Seitenprüfung aus. Starte anschließend die Website
   lokal und prüfe sie mit einem vorhandenen unterstützten Browser-Testwerkzeug.
   Falls Browserzugriff fehlt, dokumentiere das; nicht als bestanden behandeln.
4. Prüfe Desktop und schmale Ansichten für Startseite, Galerie, Gesamtverzeichnis,
   Zodiac, Second Lives, Meerestinte, Offspace, Atelier, Biografie, Kontakt und
   mindestens drei historische Ausstellungsseiten. Teste Suche/Filter, Sprachwechsel,
   mobile Navigation, Bildvergrößerung inklusive Esc/Pfeiltasten/Fokus und Mail-/Telefonlinks.
5. Erstelle docs/AUDIT_K01.md mit Pfad, Befund, Schweregrad, Beleg und Empfehlung.
   Prüfe besonders Bildzuordnung, übrig gebliebene Menü-/Rahmengrafiken,
   irreführende Aktualität und doppelte/unsaubere Archivtexte.
6. Behebe nur eindeutige, kleine technische Fehler im Branch `work/k01-audit`.
   Keine großen Texte umschreiben, Werke neu zuordnen, Bilder erzeugen oder
   Gestaltung neu erfinden. Solche Fragen als Entscheidungen für Gabriela notieren.
7. Öffne einen PR mit Vorher/Nachher und tatsächlichen Tests, aktualisiere HANDOFF.md
   und ende mit geprüftem Commit-SHA, PR-/CI-Links und verbleibenden Einschränkungen.

Kein eigenmächtiges Merge, Deployment, Domainwechsel, Noindex-Wechsel, neuer Dienst
oder kostenpflichtige Infrastruktur. Ein reales iPhone-Review bleibt ein eigener
Testpunkt für Bodo/Gabriela. Nach dem PR für ChatGPT-Gegenreview stoppen.
