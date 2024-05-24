import { posts } from "$lib/data/posts.js";
import { languageTag } from "$paraglide/runtime.js";

export function load({ params }) {
	const { slug } = params;

	if (!slug) {
		return {
			status: 404,
		};
	}

	const post = posts[languageTag()].items.find((post) => post.slug === slug);

	const response = {
		post: post
	};

	return response;
}
