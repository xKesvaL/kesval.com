import type { BlogPost } from '$lib/typings/blog';
import type { AvailableLanguageTag } from '$paraglide/runtime';

export const getPosts = async (language: AvailableLanguageTag) => {
	let posts: BlogPost[] = [];

	let paths: Record<string, unknown>;

	switch (language) {
		case 'en':
			paths = import.meta.glob(`/src/posts/en/*.md`, { eager: true });
			break;
		case 'fr':
			paths = import.meta.glob(`/src/posts/fr/*.md`, { eager: true });
			break;
	}

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<BlogPost, 'slug'>;
			const post = { ...metadata, slug } satisfies BlogPost;
			post.published !== false && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) =>
			new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime()
	);

	return posts;
};
