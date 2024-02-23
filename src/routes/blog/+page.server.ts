import { getPosts } from "$lib/data/posts";
import { i18n } from "$lib/utils/i18n.js";

export const load = async ({ url }) => {
	const language = i18n.getLanguageFromUrl(url);
	const posts = await getPosts({ language: language });

	return {
		posts,
	};
};
