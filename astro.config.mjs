import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Migration vers un domaine personnalisé :
// site: 'https://mon-domaine.fr' et base: '/'. Rien d'autre à changer.
export default defineConfig({
  site: 'https://deffojoel.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    // Tout le CSS en fichiers externes, pour une CSP stricte sans 'unsafe-inline'.
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
