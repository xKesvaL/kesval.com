import { getAllSlugs } from "$lib/data/posts.js";
import type { EntryGenerator, PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
	const data = await parent();

	return data;
};

// export const entries: EntryGenerator = async () => {
// 	const slugs = await getAllSlugs();
// 	return slugs.map((slug) => ({ slug }));
// };

export const prerender = false;