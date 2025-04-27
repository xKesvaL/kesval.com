import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { kitRoutes } from 'vite-plugin-kit-routes';
import type { KIT_ROUTES } from './src/lib/ROUTES';
import { urlPatterns } from './src/lib/utils/pathnames';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
	build: {
		target: ['es2022', 'chrome90', 'safari14.1', 'firefox87']
	},
	plugins: [
		kitRoutes<KIT_ROUTES>(),
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'preferredLanguage', 'baseLocale'],
			outputStructure: 'message-modules',
			urlPatterns: urlPatterns
		})
	],
	resolve: {
		alias: {
			// Map the deep import to the actual folder in the package.
			'@tabler/icons-svelte/icons': resolve(
				__dirname,
				'node_modules/@tabler/icons-svelte/dist/icons'
			)
		}
	},
	server: {
		fs: {
			allow: ['./.velite']
		}
	}
});
