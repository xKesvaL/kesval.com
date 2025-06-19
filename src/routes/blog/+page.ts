import { getAllContentLocale } from '$lib/utils/content';
import { getLocale } from '$paraglide/runtime';

export const load = () => {
	const posts = getAllContentLocale(getLocale(), 'posts');

	return {
		posts
	};
};
