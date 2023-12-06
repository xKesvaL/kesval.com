import type { KIT_ROUTES } from '$lib/ROUTES';

import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { watch } from 'vite-plugin-watch';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "node_modules/@kesval/design/scss/utilities" as *;',
			},
		},
	},
	plugins: [
		enhancedImages(),
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			extra_search_params: 'with',
			format: 'route(path)',
		}),
		watch({
			command: 'paraglide-js compile --project ./project.inlang',
			pattern: 'src/lang/*.json',
		}),
	],

	resolve: {
		alias: {
			$assets: './src/assets',
			$paraglide: './src/paraglide',
			$routes: './src/routes',
		},
	},
});
