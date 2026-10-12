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
    default: "Mentis AI — Digital Solutions for Education",
    template: "%s | Mentis AI",
  },
  description:
    "Mentis AI builds websites, AI assistants, and automation tools for schools, academies, and education businesses in Pakistan.",
  keywords: [
    "education technology",
    "school websites",
    "academy software",
    "AI assistant",
    "Pakistan education",
    "Mentis AI",
  ],
  authors: [{ name: "Mentis AI" }],
  creator: "Mentis AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mentis AI",
    title: "Mentis AI — Digital Solutions for Education",
    description:
      "Websites, AI assistants, and automation tools for schools, academies, and education businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentis AI — Digital Solutions for Education",
    description:
      "Websites, AI assistants, and automation tools for schools, academies, and education businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-surface text-graphite-800 antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
