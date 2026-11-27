import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404 · KRAINZ ART</p>
      <h1>Diese Seite ist nicht Teil der Ausstellung.</h1>
      <Link className="button button--dark" href="/de">
        Zur Startseite
      </Link>
    </main>
  );
}
