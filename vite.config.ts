import type { ROUTES } from '$lib/ROUTES';

import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "node_modules/@kesval/design/scss/utilities" as *;',
			},
		},
	},
	plugins: [
		sveltekit(),
		kitRoutes<ROUTES>({
			default_type: 'number | string',
			extend: {
				PAGES: {},
			},
			extra_search_params: 'with',
		}),
	],

	resolve: {
		alias: {
			$design: resolve('./node_modules/@kesval/design/scss/utilities'),
			$routes: resolve('./src/routes'),
		},
	},
});
