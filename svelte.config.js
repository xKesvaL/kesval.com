import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsx } from 'mdsx';
import mdsxConfig from './mdsx.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [mdsx(mdsxConfig), vitePreprocess()],

	kit: {
		adapter: adapter(),

		prerender: {
			handleHttpError: 'warn'
		},

		alias: {
			$assets: './src/assets',
			$paraglide: './src/lib/paraglide',
			$routes: './src/routes',
			'$content/*': '.velite/*'
		}
	},

	extensions: ['.svelte', '.md']
};

export default config;
