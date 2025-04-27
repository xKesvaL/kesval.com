import { slugFromPath } from '$lib/utils/posts';
import { defineConfig, defineSchema, s } from 'velite';
import { exec } from 'child_process';
import { promisify } from 'util';

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const execAsync = promisify(exec);

const timestamp = defineSchema(() =>
	s
		.custom<string | undefined>((i) => i === undefined || typeof i === 'string')
		.transform<string>(async (value, { meta, addIssue }) => {
			if (value != null) {
				addIssue({
					fatal: false,
					code: 'custom',
					message: '`s.timestamp()` schema will resolve the value from `git log -1 --format=%cd`'
				});
			}
			const { stdout } = await execAsync(`git log -1 --format=%cd ${meta.path}`);
			return new Date(stdout || Date.now()).toISOString();
		})
);

export default defineConfig({
	root: './src/content',
	output: {
		assets: 'static/blog'
	},
	collections: {
		posts: {
			name: 'Post', // collection type name
			pattern: './**/*.md', // content files glob pattern
			schema: s
				.object({
					title: s.string().max(99), // Zod primitive type
					path: s.path(), // auto generate path from file name
					slug: s.slug('posts').optional(),
					publishedAt: s.isodate(), // input Date-like string, output ISO Date string.
					updatedAt: timestamp(), // optional field
					tags: s.array(s.string()),
					cover: s.image(), // input image relative path, output image object with blurImage.
					video: s.file().optional(), // input file relative path, output file public path.
					metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
					excerpt: s.excerpt(), // excerpt of markdown content
					content: s.markdown(), // transform markdown to html
					toc: s.toc()
				})
				.transform((data) => {
					return {
						...data,
						uniqueId: data.path.split('/').shift(),
						slug: slugFromPath(data.path), // generate slug from path
						slugClean: slugFromPath(data.path)?.slice(0, -3),
						locale: data.path.split('.')[1]
					};
				})
		}
	}
});
