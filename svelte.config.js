import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['.md'],
	remarkPlugins: [remarkUnwrapImages],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$assets: './src/assets',
			$routes: './src/routes',
			$paraglide: './src/paraglide'
		},
		prerender: {
			handleHttpError: 'ignore'
		}
	}
};

export default config;
