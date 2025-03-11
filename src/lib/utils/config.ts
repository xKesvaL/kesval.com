import { route } from '$lib/ROUTES';
import * as m from '$paraglide/messages';
import dayjs from 'dayjs';

export type LinkType = {
	label: keyof typeof m;
	href: string;
	external?: boolean;
};

export const navigationLinks = [
	{
		label: 'nav_home',
		href: route('/')
	},
	{
		label: 'nav_about',
		href: route('/a-propos')
	},
	{
		label: 'nav_projects',
		href: route('/projets')
	},
	{
		label: 'nav_blog',
		href: route('/blog')
	}
] as const satisfies LinkType[];

export const socialLinks = [
	{
		label: 'nav_github',
		href: 'https://github.com/xKesvaL',
		external: true
	},
	{
		label: 'nav_instagram',
		href: 'https://instagram.com/xkesval',
		external: true
	},
	{
		label: 'nav_linkedin',
		href: 'https://www.linkedin.com/in/jordan-abeddou/',
		external: true
	}
] as const satisfies LinkType[];

export const brand = {
	email: 'xkesval@gmail.com',
	github: 'https://github.com/xKesvaL',
	instagram: 'https://instagram.com/xkesval',
	linkedin: 'https://www.linkedin.com/in/jordan-abeddou/',
	website: 'https://kesval.com',
	websiteShort: 'kesval.com',
	age: dayjs().diff(dayjs('2004-10-14'), 'year'),
	yearsOfExperience: dayjs().diff(dayjs('2022-01-01'), 'year')
} as const;

export const GOOGLE_ANALYTICS_ID = 'G-VBZTZPQWJ9';
