import { route } from '$lib/ROUTES';
import * as m from '$paraglide/messages';
import dayjs from 'dayjs';

import ImageHome from '$assets/logo.avif?enhanced';
import ImageBlog from '$assets/nav/nav_blog.webp?enhanced';
import ImageProjects from '$assets/nav/nav_projects.webp?enhanced';
import ImageJordan from '$assets/team/jordan.jpg?enhanced';
import { cn } from '$lib/utils/ui';
import type { Picture } from 'vite-imagetools';
import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconCode,
	IconDatabase,
	IconMail,
	IconServer,
	IconPalette,
	IconRocket,
	IconBolt,
	IconShield,
	IconBuilding,
	type Icon
} from '@tabler/icons-svelte';

export const brand = {
	email: 'contact@kesval.com',
	github: 'https://github.com/xKesvaL',
	instagram: 'https://instagram.com/kesval.studio',
	linkedin: 'https://linkedin.com/company/kesval-studio/',
	website: 'https://kesval.com',
	websiteShort: 'kesval.com',
	age: dayjs().diff(dayjs('2004-10-14'), 'year'),
	yearsOfExperience: dayjs().diff(dayjs('2022-01-01'), 'year'),
	name: 'KesvaL Studio',
	nameShort: 'KesvaL',
	keywords: [],
	ogImage: {
		url: '',
		width: '1200',
		height: '1200'
	},
	primary: '#4d02fd'
} as const satisfies BrandType;

export type BrandType = {
	email: string;
	github: string;
	instagram: string;
	linkedin: string;
	website: string;
	websiteShort: string;
	age: number;
	yearsOfExperience: number;
	name: string;
	nameShort: string;
	keywords: string[];
	ogImage?: OgImage;
	primary: string;
};

export type OgImage =
	| {
			url: string;
			width: string;
			height: string;
	  }
	| undefined;

export type LinkType = {
	label: keyof typeof m | (string & {});
	labelIsI18n?: boolean;
	href: string;
	external?: boolean;
};

export type LinkWithImageType = LinkType & {
	image: Picture;
	imageClass?: string;
};

export const navigationLinks = [
	{
		label: 'nav.home',
		href: route('/'),
		image: ImageHome,
		imageClass: cn('rounded-full border-4 border-primary-foreground')
	},
	{
		label: 'nav.services',
		href: route('/services'),
		image: ImageBlog
	},
	{
		label: 'nav.projects',
		href: route('/projets'),
		image: ImageProjects
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

export type TeamMemberSchema = {
	id: string;
	image: Picture;
	name: string;
	level: string;
	role: string;
	skills: Array<{
		name: string;
		icon: Icon;
	}>;
	socials: Array<{
		icon: Icon;
		href: string;
		label: string;
	}>;
};

export const team = {
	jordan: {
		id: 'jordan',
		image: ImageJordan,
		name: 'Jordan',
		level: 'founder',
		role: 'fullstack_dev',
		skills: [
			{
				name: 'front_end',
				icon: IconCode
			},
			{
				name: 'back_end',
				icon: IconDatabase
			},
			{
				name: 'devops',
				icon: IconServer
			}
		],
		socials: [
			{
				label: 'GitHub',
				href: 'https://github.com/xKesvaL',
				icon: IconBrandGithub
			},
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/jordan-abeddou/',
				icon: IconBrandLinkedin
			},
			{
				icon: IconMail,
				href: `mailto:jordan@kesval.com`,
				label: 'Email'
			}
		]
	}
} as const satisfies Record<string, TeamMemberSchema>;

export type TeamMember = (typeof team)[keyof typeof team];

export type ServiceTypeSchema = {
	id: string;
	icon: Icon;
	price: {
		adr?: boolean;
		recurring?: boolean;
		amount: 'quote' | number;
	};
	duration: {
		from: 'variable' | 'continous' | 'flexible' | number;
		to?: string | number;
	};
	highlight?: boolean;
	href: string;
	color: string;
};

export const services = [
	{
		id: 'web_on_premise',
		icon: IconCode,
		price: {
			amount: 1000
		},
		duration: {
			from: 7
		},
		href: route('/services/site-vitrine'),
		color: '#059669'
	},
	{
		id: 'web_apps',
		icon: IconRocket,
		price: {
			amount: 3000
		},
		duration: {
			from: 30
		},
		href: route('/'),
		color: brand.primary,
		highlight: true
	},
	{
		id: 'agencies',
		icon: IconBuilding,
		price: {
			adr: true,
			amount: 300
		},
		duration: {
			from: 'flexible'
		},
		href: route('/'),
		color: brand.primary
	},
	{
		id: 'design',
		icon: IconPalette,
		price: {
			amount: 'quote'
		},
		duration: {
			from: 'variable'
		},
		href: route('/'),
		color: brand.primary
	},
	{
		id: 'automation',
		icon: IconBolt,
		price: {
			amount: 'quote'
		},
		duration: {
			from: 'variable'
		},
		href: route('/'),
		color: brand.primary
	},

	{
		id: 'maintenance',
		icon: IconShield,
		price: {
			recurring: true,
			amount: 80
		},
		duration: {
			from: 'continous'
		},
		href: route('/'),
		color: brand.primary
	}
] as const satisfies ServiceTypeSchema[];

export type ServiceType = (typeof services)[number];
