import { paraglideSveltekit } from '@inlang/paraglide-sveltekit';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		tailwindcss(),
		paraglideSveltekit({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	]
});
