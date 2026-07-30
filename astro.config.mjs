import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const port = parseInt(process.env.PORT ?? '4321');

export default defineConfig({
  output: 'static',
  integrations: [mdx()],
  server: {
    port,
    host: '0.0.0.0',
  },
  preview: {
    port,
    host: '0.0.0.0',
  },
  vite: {
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});
