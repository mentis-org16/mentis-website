import type { Metadata } from "next";

function resolveSiteOrigin(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return undefined;

  let url: URL;
  try {
    url = new URL(configured);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an absolute HTTPS origin verified by the site owner.",
    );
  }

  const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  const isVercelBuild =
    process.env.VERCEL === "1" || Boolean(process.env.VERCEL_ENV);
  if (isLocal && isVercelBuild) {
    throw new Error(
      "A localhost site origin is only allowed for local verification, never for a Vercel build.",
    );
  }

  if (
    (url.protocol !== "https:" && !(isLocal && url.protocol === "http:")) ||
    url.username ||
    url.password ||
    (url.pathname !== "/" && url.pathname !== "") ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a verified HTTPS origin without a path, credentials, query, or fragment.",
    );
  }

  return url.origin;
}

export const SITE_ORIGIN = resolveSiteOrigin();

export function getCanonicalUrl(path: string): string | undefined {
  if (!path.startsWith("/")) {
    throw new Error("Canonical paths must start with '/'.");
  }

  return SITE_ORIGIN ? new URL(path, `${SITE_ORIGIN}/`).toString() : undefined;
}

export function getRouteMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const canonical = getCanonicalUrl(path);
  const shareImage = getCanonicalUrl("/brand/mentis-ai-lockup.webp");

  return {
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      locale: "en_PK",
      siteName: "Mentis AI",
      title,
      description,
      ...(canonical ? { url: canonical } : {}),
      ...(shareImage
        ? {
            images: [
              {
                url: shareImage,
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
      ...(shareImage ? { images: [shareImage] } : {}),
    },
  };
}
