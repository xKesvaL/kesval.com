import { route } from '$lib/ROUTES';
import * as m from '$paraglide/messages';
import dayjs from 'dayjs';

import ImageHome from '$assets/logo.avif?enhanced';
import ImageBlog from '$assets/nav/blog_nav.png?enhanced';
import type { Picture } from 'vite-imagetools';

export type LinkType = {
	label: keyof typeof m;
	href: string;
	external?: boolean;
};

export type LinkWithImageType = LinkType & {
	image: Picture;
};

export const navigationLinks = [
	{
		label: 'nav.home',
		href: route('/'),
		image: ImageHome
	},
	{
		label: 'nav.about',
		href: route('/a-propos'),
		image: ImageBlog
	},
	{
		label: 'nav.projects',
		href: route('/projets'),
		image: ImageBlog
	},
	{
		label: 'nav.blog',
		href: route('/blog'),
		image: ImageBlog
	}
] as const satisfies LinkWithImageType[];

export const socialLinks = [
	{
		label: 'nav.github',
		href: 'https://github.com/xKesvaL',
		external: true
	},
	{
		label: 'nav.instagram',
		href: 'https://instagram.com/xkesval',
		external: true
	},
	{
		label: 'nav.linkedin',
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
