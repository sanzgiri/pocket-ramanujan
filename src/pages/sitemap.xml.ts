import { getCollection } from 'astro:content';

export async function GET({ site }: { site: URL }) {
  const discoveries = await getCollection('discoveries');
  const base = site.toString().replace(/\/$/, '');
  const urls = ['/', '/discoveries/', '/search/', ...discoveries.map((entry) => `/discoveries/${entry.data.slug}/`)];
  const body = urls.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
