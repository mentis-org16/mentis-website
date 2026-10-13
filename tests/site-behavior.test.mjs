import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { join } from "node:path";
import { test } from "node:test";
import { URL } from "node:url";

process.env.NEXT_PUBLIC_SITE_URL = "";
const testBuildDirectory = process.env.MENTIS_TEST_BUILD_DIR;
assert.ok(testBuildDirectory, "Run tests through scripts/run-tests.mjs");
const require = createRequire(import.meta.url);
const siteModulePath = require.resolve(
  join(testBuildDirectory, "src/lib/site.js"),
);
const { getCanonicalUrl } = require(siteModulePath);
const {
  ACADEMY_GREETING,
  SUGGESTED_QUESTIONS,
  getAcademyAssistantReply,
} = require(join(testBuildDirectory, "src/lib/academy-assistant.js"));
const { getWhatsAppHref, WHATSAPP_NUMBER } = require(
  join(testBuildDirectory, "src/lib/whatsapp.js"),
);

function withSiteConfiguration(configuration, callback) {
  const keys = ["NEXT_PUBLIC_SITE_URL", "VERCEL", "VERCEL_ENV"];
  const previous = new Map(keys.map((key) => [key, process.env[key]]));
  const cachedModule = require.cache[siteModulePath];

  try {
    for (const key of keys) {
      if (Object.hasOwn(configuration, key)) {
        const value = configuration[key];
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
      } else if (key === "VERCEL" || key === "VERCEL_ENV") {
        delete process.env[key];
      }
    }

    delete require.cache[siteModulePath];
    return callback(() => require(siteModulePath));
  } finally {
    for (const key of keys) {
      const value = previous.get(key);
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    delete require.cache[siteModulePath];
    if (cachedModule) require.cache[siteModulePath] = cachedModule;
  }
}

test("the demo greets visitors and includes suggested topics", () => {
  assert.match(ACADEMY_GREETING, /welcome/i);
  assert.equal(SUGGESTED_QUESTIONS.length, 5);
  for (const question of SUGGESTED_QUESTIONS) {
    assert.ok(question.length > 0);
    assert.ok(getAcademyAssistantReply(question).length > 0);
  }
});

test("the demo has distinct, bounded answers for common topics", () => {
  const questions = [
    "When are the class timings?",
    "Which subjects do you teach?",
    "What are the fees?",
    "How can I enrol?",
    "Do you offer online classes?",
  ];
  const replies = questions.map(getAcademyAssistantReply);

  assert.equal(new Set(replies).size, questions.length);
  assert.match(replies[0], /no class schedule configured/i);
  assert.match(replies[1], /no real programme list/i);
  assert.match(replies[2], /will not guess a price/i);
  assert.match(replies[3], /does not collect applications/i);
  assert.match(replies[4], /fictional example/i);
});

test("unknown input gets an honest non-production fallback", () => {
  const reply = getAcademyAssistantReply("Tell me about dinosaurs");
  assert.match(reply, /demonstrate/i);
  assert.match(reply, /configured/i);
});

test("canonical generation emits no guessed domain by default", () => {
  assert.equal(getCanonicalUrl("/services"), undefined);
  assert.equal(getCanonicalUrl("/sitemap.xml"), undefined);
});

test("a configured HTTPS origin generates route-specific canonical and social URLs", () => {
  withSiteConfiguration(
    {
      NEXT_PUBLIC_SITE_URL: "https://www.mentis.example",
      VERCEL: "",
      VERCEL_ENV: "",
    },
    (loadSite) => {
      const site = loadSite();
      const canonical = "https://www.mentis.example/education";
      assert.equal(site.SITE_ORIGIN, "https://www.mentis.example");
      assert.equal(site.getCanonicalUrl("/education"), canonical);

      const metadata = site.getRouteMetadata(
        "/education",
        "Education | Mentis AI",
        "Education technology for learning organisations.",
      );
      assert.equal(metadata.alternates.canonical, canonical);
      assert.equal(metadata.openGraph.url, canonical);
      assert.equal(
        metadata.openGraph.images[0].url,
        "https://www.mentis.example/brand/mentis-ai-lockup.webp",
      );
    },
  );
});

test("an origin rejects HTTP, credentials, paths, queries and fragments", () => {
  const invalidOrigins = [
    "http://mentis.example",
    "https://user:secret@mentis.example",
    "https://mentis.example/site",
    "https://mentis.example/?preview=1",
    "https://mentis.example/#home",
  ];

  for (const origin of invalidOrigins) {
    assert.throws(
      () =>
        withSiteConfiguration(
          {
            NEXT_PUBLIC_SITE_URL: origin,
            VERCEL: "",
            VERCEL_ENV: "",
          },
          (loadSite) => loadSite(),
        ),
      /verified HTTPS origin/i,
      origin,
    );
  }
});

test("localhost is available only for local verification, not a Vercel build", () => {
  withSiteConfiguration(
    {
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
      VERCEL: "",
      VERCEL_ENV: "",
    },
    (loadSite) => {
      assert.equal(loadSite().SITE_ORIGIN, "http://localhost:3000");
    },
  );

  for (const platform of [
    { VERCEL: "1", VERCEL_ENV: "preview" },
    { VERCEL: "1", VERCEL_ENV: "production" },
  ]) {
    assert.throws(
      () =>
        withSiteConfiguration(
          { NEXT_PUBLIC_SITE_URL: "http://localhost:3000", ...platform },
          (loadSite) => loadSite(),
        ),
      /only allowed for local verification/i,
    );
  }
});

test("canonical paths must be absolute site paths", () => {
  assert.throws(() => getCanonicalUrl("services"), /must start with/);
});

test("WhatsApp contact links use the intended number and encode messages", () => {
  const message = "Hello & thank you — could we discuss a project?";
  const url = new URL(getWhatsAppHref(message));

  assert.equal(url.protocol, "https:");
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, `/${WHATSAPP_NUMBER}`);
  assert.equal(url.searchParams.get("text"), message);
});
