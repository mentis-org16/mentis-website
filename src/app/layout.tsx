import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getCanonicalUrl, SITE_ORIGIN } from "@/lib/site";
import "./globals.css";

const title = "Mentis AI — Digital solutions for business";
const description =
  "Websites, AI assistants, workflow automation and custom software for businesses, with education as a specialism.";
const socialImage = getCanonicalUrl("/brand/mentis-ai-lockup.webp");

export const metadata: Metadata = {
  ...(SITE_ORIGIN ? { metadataBase: new URL(SITE_ORIGIN) } : {}),
  title: {
    default: title,
    template: "%s | Mentis AI",
  },
  description,
  applicationName: "Mentis AI",
  authors: [{ name: "Mentis AI" }],
  creator: "Mentis AI",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Mentis AI",
    title,
    description,
    ...(SITE_ORIGIN ? { url: SITE_ORIGIN } : {}),
    ...(socialImage
      ? {
          images: [
            {
              url: socialImage,
              width: 500,
              height: 482,
              alt: "Mentis AI logo",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary",
    title,
    description,
    ...(socialImage ? { images: [socialImage] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
