import { getAllPosts, getPost } from '$lib/utils/posts';
import { getLocale } from '$paraglide/runtime.js';
import type { EntryGenerator } from './$types.js';

export const load = ({ params }) => {
	return getPost(`${params.slug}`, getLocale());
};

export const entries: EntryGenerator = () => {
	const allPosts = getAllPosts();
	return allPosts.map((post) => {
		const slug = post.slug?.slice(0, -3);

		if (!slug) {
			throw new Error('Slug is undefined or empty');
		}

		return {
			slug: slug
		};
	});
};
