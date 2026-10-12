import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const siteUrl = "https://mentisai-delta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mentis AI — Digital products for education",
    template: "%s | Mentis AI",
  },
  description:
    "Mentis AI builds thoughtful websites, enquiry journeys and practical software for schools, academies and education businesses.",
  applicationName: "Mentis AI",
  authors: [{ name: "Mentis AI" }],
  creator: "Mentis AI",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "Mentis AI",
    title: "Mentis AI — Digital products for education",
    description:
      "Thoughtful websites, enquiry journeys and practical software for schools, academies and education businesses.",
  },
  twitter: {
    card: "summary",
    title: "Mentis AI — Digital products for education",
    description:
      "Thoughtful websites and practical software for education businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
