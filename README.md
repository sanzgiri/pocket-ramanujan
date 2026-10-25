# Pocket Ramanujan

A static-first web guide to important mathematical ideas associated with Srinivasa Ramanujan.

## Development

```bash
npm install
npm run dev
```

Build and preview the production site:

```bash
npm run check
npm run build
npm run preview
```

The content is authored as version-controlled Markdown/MDX and uses KaTeX-rendered mathematics. The project intentionally excludes the 1729 anecdote from the discovery collection.

## Live site

https://ramanujan-beta.vercel.app/

## Deployment

The site deploys as a static Astro build on Vercel. Run `vercel --prod` after content changes, or connect the repository to Vercel for Git-based deployments. Set `PUBLIC_SITE_URL` to the canonical production URL when using another domain.
