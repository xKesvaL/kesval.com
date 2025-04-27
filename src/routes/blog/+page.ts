import { getAllPosts } from '$lib/utils/posts';
import { getLocale } from '$paraglide/runtime';

export const load = () => {
	const posts = getAllPosts(getLocale());

	return {
		posts
	};
};
