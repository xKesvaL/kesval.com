import { slugFromPath } from "$lib/utils/content";
import { defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const transform = <T extends { path: string }>(data: T) => {
	return {
		...data,
		uniqueId: data.path.split("/")[1],
		slug: slugFromPath(data.path), // generate slug from path
		slugClean: slugFromPath(data.path)?.slice(0, -3),
		locale: data.path.split(".")[1],
	};
};

export default defineConfig({
	root: "./src/content",
	output: {
		assets: "static/content",
	},
	collections: {
		posts: {
			name: "Post", // collection type name
			pattern: "./blog/**/*.md", // content files glob pattern
			schema: s
				.object({
					title: s.string().max(99), // Zod primitive type
					path: s.path(), // auto generate path from file name
					slug: s.slug("posts").optional(),
					publishedAt: s.isodate(), // input Date-like string, output ISO Date string.
					updatedAt: s.isodate().optional(), // optional field
					tags: s.array(s.string()),
					cover: s.image(), // input image relative path, output image object with blurImage.
					coverAvif: s.image(), // avif image, but we leave normal one for compatibility issues
					video: s.file().optional(), // input file relative path, output file public path.
					metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
					excerpt: s.excerpt(), // excerpt of markdown content
					author: s.object({
						name: s.string(),
						email: s.string().email(),
						image: s.string(),
					}),
					content: s.markdown(), // transform markdown to html
					toc: s.toc(),
				})
				.transform(transform),
		},
		projects: {
			name: "Project",
			pattern: "./projects/**/*.md",
			schema: s
				.object({
					title: s.string().max(99),
					path: s.path(),
					slug: s.slug("projects").optional(),
					publishedAt: s.isodate(),
					updatedAt: s.isodate().optional(),
					tags: s.array(s.string()),
					cover: s.image(),
					coverAvif: s.image(),
					// images: s.array(s.image()),
					video: s.file().optional(),
					metadata: s.metadata(),
					excerpt: s.excerpt(),
					author: s.object({
						name: s.string(),
						email: s.string().email(),
						image: s.string(),
					}),
					content: s.markdown(),
					toc: s.toc(),

					icon: s.image(),
					iconAvif: s.image(),

					client: s.string().optional(),
					website: s.string().optional(),
					github: s.string().optional(),

					// Preview fields for case study sidebar
					figma: s.string().optional(), // Figma prototype URL
					previewUrl: s.string().optional(), // Live site or sandbox URL for iframe preview

					startedAt: s.isodate().optional(),
					finishedAt: s.isodate().optional(),
					technologies: s.array(s.string()),
					featured: s.boolean().optional(),

					price: s.number().optional(),

					// array of enum values
					projectType: 
						s.enum([
							"web_showcase",
							"web_ecommerce",
							"web_saas",
							"design_showcase",
							"design_ecommerce",
							"app_mobile",
							"app_desktop",
							"app_saas",
							"app_open_source",
							"other",
						]),
				
				})
				.transform(transform),
		},
	},
});
