import { getPostBySlug } from "$lib/data/posts.js";
import { i18n } from "$lib/utils/i18n.js";
import { languageTag } from "$paraglide/runtime.js";

export async function load({ params }) {
	const { slug } = params;

	if (!slug) {
		return {
			status: 404,
		};
	}

	const response = {
		post: await getPostBySlug(i18n.route(slug), languageTag()),
	};

	return response;
}
