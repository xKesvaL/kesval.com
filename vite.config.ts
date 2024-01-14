import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { resolve } from 'path';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import type { KIT_ROUTES } from '$lib/ROUTES';
import { PERSONAL } from './src/lib/data/personal';

export default defineConfig({
	plugins: [
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			format: 'route(path)',
			LINKS: {
				linkedin: {
					href: 'https://www.linkedin.com/in/jordan-abeddou/'
				},
				email: {
					href: `mailto:${PERSONAL.email}`
				},
				github: {
					href: 'https://github.com/xKesvaL'
				},
				instagram: {
					href: 'https://www.instagram.com/xKesvaL/'
				}
			}
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
