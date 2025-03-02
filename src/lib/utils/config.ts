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
		href: route('/')
	},
	{
		label: 'nav_projects',
		href: route('/')
	},
	{
		label: 'nav_blog',
		href: route('/')
	}
] as const satisfies Link[];

export const socialLinks = [
	{
		label: 'nav_github',
		href: 'https://github.com/xKesvaL'
	}
] as const satisfies Link[];
