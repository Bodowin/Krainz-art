import type { Locale } from "@/lib/i18n";

interface InquiryLinkProps {
  locale: Locale;
  artworkTitle?: string;
  label: string;
  className?: string;
}

export function InquiryLink({
  locale,
  artworkTitle,
  label,
  className = "button button--dark",
}: InquiryLinkProps) {
  const subject = artworkTitle
    ? locale === "de"
      ? `Anfrage zum Werk „${artworkTitle}“`
      : `Enquiry about “${artworkTitle}”`
    : locale === "de"
      ? "Anfrage zu einem Kunstwerk"
      : "Artwork enquiry";

  const body = artworkTitle
    ? locale === "de"
      ? `Liebe Frau Bittner-Krainz,\n\nich interessiere mich für das Werk „${artworkTitle}“ und freue mich über Informationen zu Preis und Verfügbarkeit.\n\nFreundliche Grüße`
      : `Dear Ms Bittner-Krainz,\n\nI am interested in the work “${artworkTitle}” and would be grateful for information about its price and availability.\n\nKind regards`
    : locale === "de"
      ? "Liebe Frau Bittner-Krainz,\n\nich interessiere mich für Ihre Kunst und freue mich über weitere Informationen.\n\nFreundliche Grüße"
      : "Dear Ms Bittner-Krainz,\n\nI am interested in your art and would be grateful for further information.\n\nKind regards";

  return (
    <a
      className={className}
      href={`mailto:krainz@krainz-art.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
    >
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}
