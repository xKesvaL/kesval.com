import { getAllSlugs, posts } from "$lib/data/posts.js";
import type { AvailableLanguageTag } from "$paraglide/runtime";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, locals }) => {
	const { slug } = params;

	if (!slug) {
		return {
			status: 404,
		};
	}

	const lang = locals.paraglide.lang as AvailableLanguageTag;

	const post = posts[lang].items.find((post) => post.slug === slug);

	return {
		post: post,
	};
};

// export const entries: EntryGenerator = async () => {
// 	const slugs = await getAllSlugs();
// 	return slugs.map((slug) => ({ slug }));
// };