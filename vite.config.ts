import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { resolve } from 'path';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			format: 'route(path)'
		}),
		enhancedImages(),
		paraglide({
			outdir: './src/paraglide',
			project: './project.inlang'
		})
	],
	define: {
		alias: {
			$assets: resolve('/src/assets'),
			$routes: resolve('./src/routes'),
			$paraglide: resolve('./src/paraglide')
		}
	}
});
