import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://parentingjourney.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/content']
    }
  }
});
