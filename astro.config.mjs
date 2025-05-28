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
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/content']
    },
    server: {
      host: '0.0.0.0',
      port: 5000,
      hmr: {
        host: '0.0.0.0',
        port: 5000
      }
    }
  }
});
