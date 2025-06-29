import { getAllContentLocale } from '$lib/utils/content';
import { getLocale } from '$paraglide/runtime';

export const load = () => {
	const projects = getAllContentLocale(getLocale(), 'projects');

	return {
		projects
	};
};
