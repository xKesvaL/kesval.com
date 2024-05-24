import { posts } from "$lib/data/posts.js";
import { languageTag } from "$paraglide/runtime.js";

export function load({ params }) {
	const { slug } = params;

	console.log('layout.ts', slug);

	if (!slug) {
		return {
			status: 404,
		};
	}

	const post = posts[languageTag()].items.find((post) => post.slug === slug);

	console.log('layout.ts', post);

	return {
		post: post,
	};
}
