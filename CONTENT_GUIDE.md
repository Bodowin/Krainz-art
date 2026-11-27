# Werke einfach aktualisieren

Die Website trennt Inhalte und Gestaltung. Alle Werke liegen zentral in
`src/content/artworks.ts`. Dadurch kann ein neues Werk ergänzt werden, ohne das
Design anzufassen.

## Benötigte Angaben je Werk

- Titel
- Jahr
- Maße
- Bilddatei oder öffentliche Bild-URL
- optional: als besonderes Werk auf der Startseite markieren

Technik, Preis und Verfügbarkeit werden in dieser ersten Version bewusst nicht
behauptet. Sie bleiben „auf Anfrage“, bis verlässliche Angaben vorhanden sind.

## Mit ChatGPT Work aktualisieren

Ein möglicher Auftrag lautet:

> Ergänze das Werk „Titel“, Jahr 2026, 80 × 100 cm mit dem beigefügten Foto zur
> KRAINZ-ART-Website. Zeige es auch auf der Startseite, prüfe Deutsch und
> Englisch und veröffentliche eine neue Vorschau.

ChatGPT kann dann Bild, Werkdaten, Detailseite, Metadaten und Vorschau gemeinsam
aktualisieren. Die Mutter muss dafür keine Layouts oder Quelltexte bearbeiten.

## Spätere Komfortstufe

Wenn die Website übernommen wird, kann auf derselben Inhaltsstruktur eine
kleine Verwaltungsoberfläche oder ein visuelles CMS aufgesetzt werden. Dann
lassen sich Bilder, Status und Preise auch ohne Chat ändern. Für die erste
Überzeugungsversion ist diese zusätzliche Komplexität bewusst noch nicht
eingebaut.
