import { route } from '$lib/ROUTES';
import * as m from '$paraglide/messages';
import dayjs from 'dayjs';

import ImageHome from '$assets/logo.avif?enhanced';
import ImageBlog from '$assets/nav/blog_nav.webp?enhanced';
import type { Picture } from 'vite-imagetools';

export const brand = {
	email: 'contact@kesval.com',
	github: 'https://github.com/xKesvaL',
	instagram: 'https://instagram.com/kesval.studio',
	linkedin: 'https://linkedin.com/company/kesval-studio/',
	website: 'https://kesval.com',
	websiteShort: 'kesval.com',
	age: dayjs().diff(dayjs('2004-10-14'), 'year'),
	yearsOfExperience: dayjs().diff(dayjs('2022-01-01'), 'year')
} as const;

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
		href: brand.github,
		external: true
	},
	{
		label: 'nav.instagram',
		href: brand.instagram,
		external: true
	},
	{
		label: 'nav.linkedin',
		href: brand.linkedin,
		external: true
	}
] as const satisfies LinkType[];

export const GOOGLE_ANALYTICS_ID = 'G-VBZTZPQWJ9';
