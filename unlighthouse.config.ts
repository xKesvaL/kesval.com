import { defineConfig } from 'unlighthouse';

export default defineConfig({
  site: 'kesval.com',
  debug: true,
  outputPath: '.vercel/output/static/performance',
  ci: {
    buildStatic: true,
  },
  discovery: {
    pagesDir: 'src/routes',
    supportedExtensions: ['svelte', 'md', 'svx'],
  },
  scanner: {
    sitemap: ['https://kesval.com/sitemap.xml'],
    crawler: true,
    maxRoutes: false,
  },
  
});
