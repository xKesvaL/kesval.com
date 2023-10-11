import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "node_modules/@kesval/design/scss/utilities" as *;'
			}
		}
	},
	plugins: [sveltekit()],

	resolve: {
		alias: {
			$design: resolve('./node_modules/@kesval/design/scss/utilities'),
			$routes: resolve('./src/routes')
		}
	}
});
