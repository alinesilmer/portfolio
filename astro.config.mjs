import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in the host's environment once the final domain is known.
// It feeds canonical URLs, Open Graph tags, hreflang links, robots.txt and the sitemap.
const site = process.env.SITE_URL ?? 'https://aline-silva.vercel.app';

export default defineConfig({
  site,
  // Spanish at the root, English under /en/ (see src/i18n).
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-AR', en: 'en' } },
    }),
  ],
  build: {
    // Keep CSS and JS in files so the Content-Security-Policy can forbid inline scripts.
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
