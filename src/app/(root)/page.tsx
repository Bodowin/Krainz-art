import type { Metadata } from "next";
import Link from "next/link";
import { SignatureMark } from "@/components/signature-mark";

export const metadata: Metadata = {
  title: "Gabriela Bittner-Krainz · KRAINZ ART",
  description: "Zeitgenössische Kunst von Gabriela Bittner-Krainz in Wien.",
  robots: { index: false, follow: false },
};

export default function RootRedirectPage() {
  return (
    <main className="root-redirect">
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/de/');",
        }}
      />
      <SignatureMark priority />
      <p>KRAINZ ART</p>
      <h1>Gabriela Bittner-Krainz</h1>
      <Link className="button button--dark" href="/de/">
        Galerie öffnen
      </Link>
    </main>
  );
}
