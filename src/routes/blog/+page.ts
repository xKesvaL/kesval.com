import { getAllPostsLocale } from '$lib/utils/posts';
import { getLocale } from '$paraglide/runtime';

export const load = () => {
	const posts = getAllPostsLocale(getLocale());

	return {
		posts
	};
};
