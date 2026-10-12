# Mentis AI website

A Next.js App Router website for Mentis AI, an independent technology business building useful digital products for education businesses.

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

## Pages

- `/` — homepage and service overview
- `/services` — capabilities
- `/education` — education-sector approach
- `/about` — company point of view
- `/contact` — direct email, phone and WhatsApp links
- `/privacy` — current website privacy note
- `/sitemap.xml` and `/robots.txt` — crawl metadata

The route manifest at `public/manus-routes.json` lists the public pages.

## Contact behavior

There is intentionally no form that implies a backend submission. Visitors can contact Mentis AI using the verified email `menttis.ai@gmail.com`, phone `+92 300 9853541`, or WhatsApp link. Messages are handled by the selected external service.

## Deployment and canonical URL

The current public deployment inspected during this rebuild is `https://mentisai-delta.vercel.app/`. It is used as the canonical site origin in metadata and sitemap generation. Update the site URL in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` together if the verified production domain changes.

The app uses the repository's Next.js build and is suitable for Vercel's standard Next.js deployment. No extra environment variables are required by the marketing site.
