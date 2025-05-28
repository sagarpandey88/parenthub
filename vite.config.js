import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.replit.dev',
      '.riker.replit.dev',
      'a8fb25b3-9401-4058-bc42-05a0f784e7e0-00-147kzaytnqq7i.riker.replit.dev'
    ],
    hmr: {
      host: '0.0.0.0',
      port: 5000
    }
  }
});