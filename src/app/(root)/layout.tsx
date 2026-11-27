import { Cormorant_Garamond, Manrope } from "next/font/google";
import "../globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display-loaded",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = Manrope({
  variable: "--font-body-loaded",
  subsets: ["latin"],
});

export default function RootRedirectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
