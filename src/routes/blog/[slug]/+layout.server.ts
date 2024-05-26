import { posts } from "$lib/data/posts.js";
import { languageTag, type AvailableLanguageTag } from "$paraglide/runtime.js";

export function load({ params, locals }) {
	const { slug } = params;

	console.log('layout.ts', slug);

	if (!slug) {
		return {
			status: 404,
		};
	}

	const lang = locals.paraglide.lang as AvailableLanguageTag;

	const post = posts[lang].items.find((post) => post.slug === slug);

	console.log('layout.ts', post?.slug);

	return {
		post: post,
	};
}
