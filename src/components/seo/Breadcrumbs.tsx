import Link from "next/link";
import { getCanonicalUrl } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

type BreadcrumbsProps = {
  label: string;
  path: `/${string}`;
};

export function Breadcrumbs({ label, path }: BreadcrumbsProps) {
  const homeUrl = getCanonicalUrl("/");
  const currentUrl = getCanonicalUrl(path);
  const structuredData =
    homeUrl && currentUrl
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: label,
              item: currentUrl,
            },
          ],
        }
      : undefined;

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">
            /
          </li>
          <li>
            <span aria-current="page">{label}</span>
          </li>
        </ol>
      </nav>
      {structuredData ? <JsonLd data={structuredData} /> : null}
    </>
  );
}
