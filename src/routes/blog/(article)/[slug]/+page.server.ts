import { getAllSlugs } from "$lib/data/posts.js";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
	const data = await parent();
	return data;
};

// export const entries: EntryGenerator = async () => {
// 	const slugs = await getAllSlugs();
// 	return slugs.map((slug) => ({ slug }));
// };
