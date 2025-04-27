import { defineConfig } from 'mdsx';
import { baseRemarkPlugins, baseRehypePlugins } from '@svecodocs/kit/mdsxConfig';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
	remarkPlugins: [...baseRemarkPlugins],
	rehypePlugins: [...baseRehypePlugins],
	blueprints: {
		default: {
			path: resolve(__dirname, './src/lib/components/markdown/Blueprint.svelte')
		}
	},
	extensions: ['.md']
});
