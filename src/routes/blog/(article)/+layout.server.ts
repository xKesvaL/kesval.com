import { getPostBySlug } from "$lib/data/posts.js";
import { i18n } from "$lib/utils/i18n.js";

export async function load({ params, url }) {
	const { slug } = params;
	const lang = i18n.getLanguageFromUrl(url);

	if (!slug) {
		return {
			status: 404,
		};
	}

	const response = {
		post: await getPostBySlug(slug, lang),
	};

	return response;
}
