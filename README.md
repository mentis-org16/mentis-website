# Mentis AI website

A Next.js App Router website for Mentis AI, an independent Islamabad-based digital solutions studio serving businesses and organisations. Education is an important market focus; it is not the only audience.

## Run locally

```bash
npm ci
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run type-check
npm run build
```

## Pages and features

- `/` — business-wide homepage, capabilities, fictional Academy Assistant demonstration, process, package starting points and FAQs
- `/services` — websites, workflows, AI assistants, integrations, dashboards and custom software
- `/education` — education-sector approach
- `/about` — company point of view
- `/contact` — pre-addressed WhatsApp, email and phone contact links
- `/privacy` — website and local-demo privacy note
- `/sitemap.xml` and `/robots.txt` — crawl metadata

The route manifest at `public/manus-routes.json` lists the public pages.

## Contact and demo behavior

The site uses the verified email `menttis.ai@gmail.com`, phone `+92 300 9853541` and WhatsApp `+92 300 9853541`. WhatsApp enquiries open with an editable message; a visitor chooses whether to send it. No enquiry form is presented as a backend submission.

The Academy Assistant is a **fictional, local-only demonstration**. Its question matching and example replies are defined in `src/lib/academy-assistant.ts`; it does not call an AI service, connect to an academy or send/store the visitor's messages. Do not add real academy schedules, fee amounts, student data or staff credentials without approved source information.

The Starter, Growth and Enterprise cards are package starting points, not fixed commercial terms. They do not publish numeric prices. Confirm scope, revision limits, delivery timing, hosting/API/AI/messaging charges, support and reporting in writing before presenting any package as a binding offer.

## Deployment and canonical URL

The site currently uses `https://mentisai-delta.vercel.app/` as its canonical origin, based on the earlier verified site inspection. The separate `portfolio-website` repository has its own existing Vercel Production deployment; do not change or replace it as part of work on `mentis-website`. Before publishing this repository, confirm that its Vercel project is separate, choose the intended domain for this new site, and update the canonical URL in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` together if that domain differs. The marketing site requires no new environment variables.

The app uses the repository's Next.js build and is suitable for a standard Vercel Next.js deployment after the target project and domain are confirmed.
