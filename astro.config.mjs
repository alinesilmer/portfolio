import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in the host's environment once the final domain is known.
// It feeds canonical URLs, Open Graph tags and the sitemap.
const site = process.env.SITE_URL ?? 'https://aline-silva.vercel.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
  build: {
    // Keep CSS and JS in files so the Content-Security-Policy can forbid inline scripts.
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
