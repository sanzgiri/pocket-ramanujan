import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://pocket-ramanujan.vercel.app',
  integrations: [mdx()],
  output: 'static',
});
