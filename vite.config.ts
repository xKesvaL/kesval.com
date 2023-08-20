import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $routes: resolve('./src/routes'),
      $design: resolve('./node_modules/@kesval/design/scss/utilities'),
    },
  },
  define: {
    'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "node_modules/@kesval/design/scss/utilities" as *;',
      },
    },
  },
});
