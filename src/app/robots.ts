import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = getCanonicalUrl("/sitemap.xml");

  return {
    rules: { userAgent: "*", allow: "/" },
    ...(sitemap ? { sitemap } : {}),
  };
}
