# Mentis AI website

A Next.js App Router website for Mentis AI, an Islamabad-based digital solutions business serving organisations and businesses. Education is an important specialism, not the only audience.

## Run locally

Use Node.js `^20.19`, `^22.13`, or `>=24` for the complete local checks (including ESLint 10).

```bash
npm ci
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run type-check
npm test
npm run build
npm audit
npm audit --omit=dev
```

## Pages and features

- `/` — business-wide homepage, capabilities, fictional Academy Assistant example, process, package starting points and visible FAQs
- `/services` — websites, workflows, AI assistants, integrations, dashboards and custom software
- `/education` — education-sector approach
- `/about` — company point of view
- `/contact` — pre-addressed WhatsApp, email and phone links; no mock submission form
- `/privacy` — website and local-demo privacy information
- `/sitemap.xml` and `/robots.txt` — public crawl metadata

The route manifest at `public/manus-routes.json` lists the public pages.

## Brand assets

The supplied original Mentis logo remains in `context/WhatsApp Image 2026-07-12 at 11.02.44 PM.jpeg`. Transparent, proportion-preserving web derivatives live in `public/brand/`; Next.js uses matching symbol-based favicon, app and Apple touch icons from `src/app/`. The website palette is limited to neutrals sampled from `context/font idea.jfif`.

## Contact and demo behavior

The website uses the verified email `menttis.ai@gmail.com`, phone `+92 300 9853541`, WhatsApp `+92 300 9853541`, and the specified Mentis AI LinkedIn page. WhatsApp opens with an editable message; a visitor chooses whether to send it. The website does not store enquiries.

The Academy Assistant is a **fictional, local-only demonstration**. Its question matching and example replies are in `src/lib/academy-assistant.ts`; it does not call an AI service, connect to an academy or send/store messages. It contains no real academy schedules, fee amounts, student data or staff credentials.

The Starter, Growth and Enterprise cards are project discussion starting points, not fixed commercial terms. They publish no numeric prices and make no popularity or unlimited-revision claim. Confirm scope, revision limits, timeline, hosting/API/AI/messaging charges and support in writing before presenting a binding offer.

## Production origin and SEO

The actual production domain for this repository has **not** been verified. Do not assume that the prior reference URL `https://mentisai-delta.vercel.app/` is this repository's production domain. Until the owner confirms the correct HTTPS origin, the site intentionally omits canonical URLs, absolute `og:url` values and absolute sitemap entries rather than publishing guessed addresses.

After verifying the new site's production domain, set it as the sole origin in `NEXT_PUBLIC_SITE_URL` (for example, `NEXT_PUBLIC_SITE_URL=https://your-verified-domain.example`, with the real verified domain substituted). Do not use a temporary preview URL. The metadata helper then generates route-specific canonical and social URLs, and the sitemap/robots handlers advertise the same origin. `NEXT_PUBLIC_SITE_URL=http://localhost:3000` is allowed for local verification only.

The target Vercel project, linked repository and production domain require owner-authorized access and confirmation before any deployment or switch. This repository's PR and local/public preview can be reviewed independently. The previous Mentis site repository is retained as a rollback archive; it was not modified as part of this replacement work.

The initial full-tree audit found five high-severity development-tree findings and zero production findings. The affected path was `eslint-config-next@16.4.0` → `@next/eslint-plugin-next@16.4.0` → `fast-glob@3.3.1` → `micromatch@4.0.8` → `braces@3.0.3`, for [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). At audit time, the registry offered no patched compatible `braces` release; its published 3.x version was covered by the advisory. The suggested preset downgrade would have mismatched the Next 16.4 application, so the affected dev-only lint preset was removed and replaced with focused TypeScript and React Hooks lint rules. ESLint 10 and `@eslint/js` 10 are now used on the verified compatible Node range in `engines`. The final full and production-only audits both reported zero vulnerabilities. The target Vercel project's Node version still needs owner-authorized verification before deployment.
