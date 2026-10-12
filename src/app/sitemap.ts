import type { MetadataRoute } from "next";

const siteUrl = "https://mentisai-delta.vercel.app";
const routes = [
  "",
  "/services",
  "/education",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
