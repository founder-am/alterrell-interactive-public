import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const port = parseInt(process.env.PORT ?? '4321');

export default defineConfig({
  output: 'static',
  // Stated explicitly rather than left to the default, so that it and
  // `publish` in netlify.toml are two visible values that can be compared.
  // They must stay equal; if this moves, netlify.toml moves with it.
  outDir: './dist',
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
