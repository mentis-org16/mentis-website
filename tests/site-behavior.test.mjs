import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { join } from "node:path";
import { test } from "node:test";
import { URL } from "node:url";

process.env.NEXT_PUBLIC_SITE_URL = "";
const testBuildDirectory = process.env.MENTIS_TEST_BUILD_DIR;
assert.ok(testBuildDirectory, "Run tests through scripts/run-tests.mjs");
const require = createRequire(import.meta.url);
const { getCanonicalUrl } = require(
  join(testBuildDirectory, "src/lib/site.js"),
);
const {
  ACADEMY_GREETING,
  SUGGESTED_QUESTIONS,
  getAcademyAssistantReply,
} = require(join(testBuildDirectory, "src/lib/academy-assistant.js"));
const { getWhatsAppHref, WHATSAPP_NUMBER } = require(
  join(testBuildDirectory, "src/lib/whatsapp.js"),
);

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

test("WhatsApp contact links use the intended number and encode messages", () => {
  const message = "Hello & thank you — could we discuss a project?";
  const url = new URL(getWhatsAppHref(message));

  assert.equal(url.protocol, "https:");
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, `/${WHATSAPP_NUMBER}`);
  assert.equal(url.searchParams.get("text"), message);
});
