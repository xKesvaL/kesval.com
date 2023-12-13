import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { resolve } from 'path';
import { enhancedImages } from '@sveltejs/enhanced-img'

export default defineConfig({
	plugins: [
		sveltekit(),
		kitRoutes({

		}),
		enhancedImages()
	],
	define: {
		alias: {
			'$assets': resolve('/src/assets'),
			'$paraglide': resolve('./src/paraglide'),
		}
	}
});
