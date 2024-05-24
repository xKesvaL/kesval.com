import { getPosts } from "$lib/data/posts";
import { i18n } from "$lib/utils/i18n.js";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url }) => {
	const language = i18n.getLanguageFromUrl(url);
	const posts = {
		en: await getPosts({ language: "en" }),
		fr: await getPosts({ language: "fr" }),
	} as const;

	return {
		posts,
	};
};
