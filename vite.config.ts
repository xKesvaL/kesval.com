import { paraglideSveltekit } from '@inlang/paraglide-sveltekit';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { kitRoutes } from 'vite-plugin-kit-routes';
import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [
		kitRoutes<KIT_ROUTES>(),
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
		paraglideSveltekit({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	]
});
