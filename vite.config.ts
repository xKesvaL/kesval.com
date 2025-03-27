import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { kitRoutes } from 'vite-plugin-kit-routes';
import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['cookie', 'url', 'preferredLanguage', 'baseLocale'],
			outputStructure: 'message-modules'
		}),
		kitRoutes<KIT_ROUTES>(),
		enhancedImages(),
		sveltekit(),
		tailwindcss()
	],

	build: {
		target: ['es2022', 'chrome90', 'safari14.1', 'firefox87']
	}
});
