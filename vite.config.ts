import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";
import { resolve } from "node:path";
import { enhancedImages } from "@sveltejs/enhanced-img";
import type { KIT_ROUTES } from "$lib/ROUTES";
import { PERSONAL } from "./src/lib/data/personal";
import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [
		paraglide({
			outdir: "./src/paraglide",
			project: "./project.inlang",
		}),
		kitRoutes<KIT_ROUTES>({
			format: "route(path)",
			LINKS: {
				linkedin: {
					href: "https://www.linkedin.com/in/jordan-abeddou/",
				},
				email: {
					href: `mailto:${PERSONAL.email}`,
				},
				github: {
					href: "https://github.com/xKesvaL",
				},
				instagram: {
					href: "https://www.instagram.com/xKesvaL/",
				},
			},
		}),
		enhancedImages(),
		nodePolyfills(),
		sveltekit(),
	],
	define: {
		alias: {
			$assets: resolve("/src/assets"),
			$routes: resolve("./src/routes"),
			$paraglide: resolve("./src/paraglide"),
		},
	},
});
