import { getAllSlugs } from "$lib/data/posts.js";

export async function load({ parent }) {
	const data = await parent();
	return data;
}

export async function entries() {
	const slugs = await getAllSlugs();
	return slugs.map((slug) => ({ slug }));
}
