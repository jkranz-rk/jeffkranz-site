// @ts-check
import { defineConfig } from 'astro/config';

const isProd = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://jkranz-rk.github.io' : 'http://localhost:4321',
  base: isProd ? '/jeffkranz-site' : '/',
});
