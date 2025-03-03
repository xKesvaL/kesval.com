import { route } from '$lib/ROUTES';
import * as m from '$paraglide/messages';

export type Link = {
	label: keyof typeof m;
	href: string;
};

export const navigationLinks = [
	{
		label: 'nav_home',
		href: route('/')
	},
	{
		label: 'nav_about',
		href: route('/about')
	},
	{
		label: 'nav_projects',
		href: route('/projects')
	},
	{
		label: 'nav_blog',
		href: route('/blog')
	}
] as const satisfies Link[];

export const socialLinks = [
	{
		label: 'nav_github',
		href: 'https://github.com/xKesvaL'
	},
	{
		label: 'nav_instagram',
		href: 'https://instagram.com/xkesval'
	}
] as const satisfies Link[];
