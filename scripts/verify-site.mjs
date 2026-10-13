import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const inputUrl =
  process.argv[2] || process.env.VERIFY_SITE_URL || "http://localhost:3000";
const base = new URL(inputUrl);
assert.ok(
  base.protocol === "https:" ||
    (base.protocol === "http:" &&
      ["localhost", "127.0.0.1"].includes(base.hostname)),
  "Use HTTPS, except for a local HTTP test server.",
);
assert.equal(base.pathname, "/", "Pass a site origin, not a path.");
assert.equal(base.search, "");
assert.equal(base.hash, "");

const expectedOriginText = process.env.EXPECTED_SITE_ORIGIN?.trim();
let expectedOrigin;
if (expectedOriginText) {
  expectedOrigin = new URL(expectedOriginText);
  assert.equal(expectedOrigin.protocol, "https:");
  assert.ok(["", "/"].includes(expectedOrigin.pathname));
  assert.equal(expectedOrigin.search, "");
  assert.equal(expectedOrigin.hash, "");
}

const manifest = JSON.parse(
  await readFile(
    new URL("../public/manus-routes.json", import.meta.url),
    "utf8",
  ),
);
const routes = manifest.routes.map(({ path }) => path);
assert.deepEqual(routes, [
  "/",
  "/services",
  "/education",
  "/about",
  "/contact",
  "/privacy",
]);
const routeSet = new Set(routes);
const expectedHeadings = {
  "/": "Useful digital systems, built around your work.",
  "/services": "Digital work with a clear purpose.",
  "/education": "Every learning community has its own way.",
  "/about": "Technology should earn its place.",
  "/contact": "What would you like to work better?",
  "/privacy": "Privacy, made clear.",
};
const allowedStaticPaths = new Set([
  ...routes,
  "/robots.txt",
  "/sitemap.xml",
  "/manus-routes.json",
  "/favicon.ico",
  "/icon.png",
  "/apple-icon.png",
]);

function decodeHtml(value) {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#x2f;/gi, "/");
}

function visibleText(markup) {
  return decodeHtml(
    markup
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function domTextContent(markup) {
  return decodeHtml(markup.replace(/<[^>]+>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
}

function tags(markup, name) {
  return [...markup.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map(
    ([tag]) => tag,
  );
}

function attribute(tag, name) {
  const match = new RegExp(
    `\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    "i",
  ).exec(tag);
  return match ? decodeHtml(match[1] ?? match[2] ?? match[3] ?? "") : undefined;
}

function metaValue(metaTags, selectorName, selectorValue) {
  const meta = metaTags.find(
    (tag) => attribute(tag, selectorName)?.toLowerCase() === selectorValue,
  );
  return meta ? attribute(meta, "content") : undefined;
}

async function request(path) {
  return fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(15_000),
  });
}

async function requireOk(path) {
  const response = await request(path);
  assert.equal(
    response.status,
    200,
    `${path} should return HTTP 200, not a redirect`,
  );
  return response;
}

const pageHtml = new Map();
const inboundLinks = Object.fromEntries(routes.map((route) => [route, 0]));
const externalLinks = [];
const titles = new Set();
let breadcrumbsChecked = 0;

for (const path of routes) {
  const response = await requireOk(path);
  assert.equal(
    response.headers.get("x-robots-tag")?.toLowerCase().includes("noindex") ??
      false,
    false,
  );
  const markup = await response.text();
  pageHtml.set(path, markup);

  const titleMatch = /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(markup);
  assert.ok(titleMatch, `${path} needs a title`);
  const title = visibleText(titleMatch[1]);
  assert.ok(
    title.length >= 20 && title.length <= 75,
    `${path} title should be descriptive`,
  );
  assert.ok(!titles.has(title), `Duplicate title: ${title}`);
  titles.add(title);

  const metaTags = tags(markup, "meta");
  const description = metaValue(metaTags, "name", "description");
  assert.ok(
    description && description.length >= 60 && description.length <= 180,
    `${path} needs a useful description`,
  );
  assert.ok(
    !/\bnoindex\b/i.test(metaValue(metaTags, "name", "robots") ?? ""),
    `${path} must remain indexable`,
  );

  const headings = [...markup.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  assert.equal(headings.length, 1, `${path} should have one primary H1`);
  assert.equal(
    domTextContent(headings[0][1]),
    expectedHeadings[path],
    `${path} H1 should retain semantic word boundaries`,
  );
  assert.ok(
    visibleText(headings[0][1]).length > 5,
    `${path} H1 should be meaningful`,
  );

  const canonicalTags = tags(markup, "link").filter(
    (tag) => attribute(tag, "rel")?.toLowerCase() === "canonical",
  );
  const ogUrl = metaValue(metaTags, "property", "og:url");
  if (expectedOrigin) {
    const canonical = new URL(path, `${expectedOrigin.origin}/`).href;
    assert.equal(
      canonicalTags.length,
      1,
      `${path} should emit one canonical for the verified origin`,
    );
    assert.equal(attribute(canonicalTags[0], "href"), canonical);
    assert.equal(ogUrl, canonical);
  } else {
    assert.equal(
      canonicalTags.length,
      0,
      `${path} must not guess a production canonical`,
    );
    assert.equal(ogUrl, undefined, `${path} must not guess an og:url`);
  }

  const imageTags = tags(markup, "img");
  for (const image of imageTags) {
    assert.notEqual(
      attribute(image, "alt"),
      undefined,
      `${path} image is missing alt text`,
    );
  }

  if (path !== "/") {
    assert.match(
      markup,
      /<nav\b[^>]*aria-label="Breadcrumb"/i,
      `${path} needs a visible breadcrumb`,
    );
    breadcrumbsChecked += 1;
  }

  for (const link of tags(markup, "a")) {
    const href = attribute(link, "href");
    if (!href) continue;
    const rel = (attribute(link, "rel") ?? "").toLowerCase().split(/\s+/);
    if (attribute(link, "target") === "_blank") {
      assert.ok(
        rel.includes("noopener"),
        `New-tab link needs rel=noopener: ${href}`,
      );
    }

    const target = new URL(href, new URL(path, base));
    if (target.origin === base.origin) {
      assert.ok(
        allowedStaticPaths.has(target.pathname) ||
          target.pathname.startsWith("/_next/"),
        `Broken internal target ${href} on ${path}`,
      );
      if (routeSet.has(target.pathname) && target.pathname !== path) {
        inboundLinks[target.pathname] += 1;
      }
    } else if (
      ["https:", "http:", "mailto:", "tel:"].includes(target.protocol)
    ) {
      externalLinks.push(href);
    } else {
      assert.fail(`Unexpected link protocol ${target.protocol} on ${path}`);
    }
  }
  console.log(
    `${path}: HTTP 200; unique title/description; one H1; ${imageTags.length} image alt(s)`,
  );
}

for (const path of routes.filter((route) => route !== "/")) {
  assert.ok(
    inboundLinks[path] > 0,
    `${path} should have an internal inbound link`,
  );
}

const home = pageHtml.get("/");
const homeText = visibleText(home).toLowerCase();
assert.match(homeText, /education is a specialism, not the whole story/);
assert.match(homeText, /nothing is sent or saved/);
assert.match(homeText, /fictional/);

const faqScripts = [
  ...home.matchAll(
    /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  ),
];
const faqPage = faqScripts
  .map(([, json]) => JSON.parse(json))
  .find((data) => data["@type"] === "FAQPage");
assert.ok(
  faqPage?.mainEntity?.length,
  "Homepage should include visible FAQPage data",
);
for (const question of faqPage.mainEntity) {
  assert.ok(
    homeText.includes(question.name.toLowerCase()),
    `FAQ question must be visible: ${question.name}`,
  );
  assert.ok(
    homeText.includes(question.acceptedAnswer.text.toLowerCase()),
    `FAQ answer must be visible: ${question.name}`,
  );
}

const packageCards = [
  ...home.matchAll(
    /<article\b[^>]*class="[^"]*\bpackage-card\b[^"]*"[^>]*>([\s\S]*?)<\/article>/gi,
  ),
];
assert.equal(
  packageCards.length,
  3,
  "Expected Starter, Growth and Enterprise discussion cards",
);
for (const [index, [, card]] of packageCards.entries()) {
  const cardText = visibleText(card);
  assert.match(cardText, /Contact us for pricing\./);
  assert.doesNotMatch(
    cardText,
    /(?:\bPKR\b|\bRs\.?|\$|€|£)\s*\d/i,
    "Do not invent numeric package prices",
  );
  const cta = tags(card, "a")[0];
  assert.ok(cta, "Each package needs an enquiry link");
  const href = attribute(cta, "href");
  const whatsapp = new URL(href);
  assert.equal(whatsapp.hostname, "wa.me");
  assert.equal(whatsapp.pathname, "/923009853541");
  assert.ok((whatsapp.searchParams.get("text") ?? "").length > 30);
  assert.ok(cardText.includes(["Starter", "Growth", "Enterprise"][index]));
}

assert.ok(
  externalLinks.some((href) => href.startsWith("mailto:menttis.ai@gmail.com")),
);
assert.ok(externalLinks.some((href) => href.startsWith("tel:+923009853541")));
assert.ok(externalLinks.some((href) => href.includes("wa.me/923009853541")));
assert.ok(
  externalLinks.some((href) =>
    href.includes("linkedin.com/company/menttis-ai"),
  ),
);

const routeManifestResponse = await requireOk("/manus-routes.json");
const routeManifest = await routeManifestResponse.json();
assert.deepEqual(
  routeManifest.routes.map(({ path }) => path),
  routes,
);

const robotsResponse = await requireOk("/robots.txt");
const robotsText = await robotsResponse.text();
assert.match(robotsText, /Allow:\s*\//i);
assert.doesNotMatch(robotsText, /Disallow:\s*\//i);
if (expectedOrigin) {
  assert.match(
    robotsText,
    new RegExp(
      `Sitemap:\\s*${expectedOrigin.origin.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}\\/sitemap\\.xml`,
      "i",
    ),
  );
} else {
  assert.doesNotMatch(
    robotsText,
    /Sitemap:/i,
    "Do not publish an unverified sitemap URL",
  );
}

const sitemapResponse = await requireOk("/sitemap.xml");
const sitemapText = await sitemapResponse.text();
assert.match(sitemapText, /^\s*<\?xml/i);
assert.match(sitemapText, /<urlset\b/i);
const sitemapLocations = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/gi)].map(
  ([, url]) => decodeHtml(url),
);
if (expectedOrigin) {
  assert.deepEqual(
    sitemapLocations,
    routes.map((route) => new URL(route, `${expectedOrigin.origin}/`).href),
  );
} else {
  assert.equal(
    sitemapLocations.length,
    0,
    "Do not emit unverified absolute sitemap URLs",
  );
  assert.doesNotMatch(sitemapText, /manus\.computer|mentisai-delta/i);
}

for (const path of [
  "/brand/mentis-ai-lockup.webp",
  "/brand/mentis-ai-mark.webp",
  "/favicon.ico",
  "/icon.png",
  "/apple-icon.png",
]) {
  const response = await requireOk(path);
  assert.match(response.headers.get("content-type") ?? "", /^image\//i);
  assert.ok((await response.arrayBuffer()).byteLength > 0);
}

const rootHeaders = await request("/");
const headers = rootHeaders.headers;
assert.equal(headers.get("x-content-type-options"), "nosniff");
assert.equal(headers.get("referrer-policy"), "strict-origin-when-cross-origin");
assert.equal(
  headers.get("permissions-policy"),
  "camera=(), microphone=(), geolocation=()",
);
if (["localhost", "127.0.0.1"].includes(base.hostname)) {
  assert.equal(headers.get("x-frame-options"), "SAMEORIGIN");
}
const csp = headers.get("content-security-policy") ?? "";
for (const directive of [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
]) {
  assert.ok(csp.includes(directive), `Missing CSP directive: ${directive}`);
}
assert.doesNotMatch(
  csp,
  /(?:https?:\/\/|wss?:\/\/)[^\s;]+/i,
  "Production CSP should not authorize arbitrary external origins",
);

const missing = await request("/__mentis_site_verification_missing_route__");
assert.equal(
  missing.status,
  404,
  "Unknown paths must remain 404, not redirect to home",
);
const missingHtml = await missing.text();
const notFoundHeading = /<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(missingHtml);
assert.ok(notFoundHeading);
assert.equal(
  domTextContent(notFoundHeading[1]),
  "This page took a different route.",
);
const missingRobots = tags(missingHtml, "meta").find(
  (tag) => attribute(tag, "name")?.toLowerCase() === "robots",
);
assert.match(attribute(missingRobots ?? "", "content") ?? "", /noindex/i);

console.log(
  JSON.stringify(
    {
      result: "passed",
      base: base.origin,
      publicRoutes: routes.length,
      internalInboundLinks: inboundLinks,
      breadcrumbs: breadcrumbsChecked,
      visibleFaqs: faqPage.mainEntity.length,
      packages: packageCards.length,
      imageAndIconEndpoints: 5,
      sitemapEntries: sitemapLocations.length,
      expectedProductionOriginConfigured: Boolean(expectedOrigin),
      securityHeaders: [
        "Content-Security-Policy",
        "X-Content-Type-Options",
        "Referrer-Policy",
        "X-Frame-Options (verified locally; preview edge may strip)",
        "Permissions-Policy",
      ],
      unknownRouteStatus: missing.status,
    },
    null,
    2,
  ),
);
