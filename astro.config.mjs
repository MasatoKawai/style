import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://strategy-and.art',
  output: 'static',
  adapter: vercel(),
});
