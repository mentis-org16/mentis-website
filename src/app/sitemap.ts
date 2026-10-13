import type { MetadataRoute } from "next";
import { getCanonicalUrl, SITE_ORIGIN } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/education", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_ORIGIN) return [];

  return routes.flatMap(({ path, priority, changeFrequency }) => {
    const url = getCanonicalUrl(path);
    return url ? [{ url, priority, changeFrequency }] : [];
  });
}
