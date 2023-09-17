import { defineConfig } from 'unlighthouse';

export default defineConfig({
  site: 'kesval.com',
  ci: {
    buildStatic: true,
  },
  scanner: {
    sitemap: ['https://kesval.com/sitemap.xml'],
    crawler: true,
    maxRoutes: false,
  },
  urls: [
    'https://kesval.com/',
    'https://kesval.com/about/',
    'https://kesval.com/projects/',
    'https://kesval.com/blog/',
    'https://kesval.com/blog/svelte-the-best-framework',
    'https://kesval.com/blog/bun-a-revolution',
    'https://kesval.com/blog/adding-types-to-json',
  ],
});
