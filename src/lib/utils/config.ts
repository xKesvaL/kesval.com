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
	IconBuilding,
	IconBolt,
	IconDeviceDesktop,
	IconUsers,
	IconBriefcase,
	IconBrush,
	IconStars
} from '@tabler/icons-svelte';
import type { Icon } from '@tabler/icons-svelte';
import * as CookieConsent from 'vanilla-cookieconsent';
import type { Image } from 'velite';

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

	primary: '#4d02fd',
	url: 'https://kesval.com',
	urlShort: 'kesval.com'
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
	primary: string;
	url: string;
	urlShort: string;
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
	href?: string;
	external?: boolean;
	onclick?: () => void;
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

export const legalLinks = [
	{
		label: 'nav.legal_notice',
		href: route('/mentions-legales')
	},
	{
		label: 'nav.cookies_preferences',
		onclick: () => {
			CookieConsent.showPreferences();
		}
	},
	{
		label: 'nav.cgv',
		href: route('/conditions-generales-de-vente')
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
	id: 'web_on_premise' | 'web_apps' | 'design' | 'agencies';
	labelKey: string;
	icon: Icon;
	icons?: Icon[];
	hasMaintenanceAddon?: boolean;
	visual: {
		bg: string;
		border: string;
		point: string;
		ring: string;
		previewGlow: string;
	};
};

export const services = [
	{
		id: 'web_on_premise',
		labelKey: 'services.sections.sites',
		icon: IconCode,
		icons: [IconCode, IconDeviceDesktop, IconServer],
		hasMaintenanceAddon: true,
		visual: {
			bg: 'bg-[linear-gradient(140deg,rgba(16,185,129,0.06),transparent_60%)]',
			border: 'border-emerald-100',
			point: 'bg-emerald-400',
			ring: 'focus-visible:ring-emerald-300',
			previewGlow: 'bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]'
		}
	},
	{
		id: 'web_apps',
		labelKey: 'services.sections.apps',
		icon: IconRocket,
		icons: [IconBolt, IconDatabase, IconRocket],
		hasMaintenanceAddon: true,
		visual: {
			bg: 'bg-[linear-gradient(140deg,rgba(99,102,241,0.06),transparent_60%)]',
			border: 'border-indigo-100',
			point: 'bg-indigo-400',
			ring: 'focus-visible:ring-indigo-300',
			previewGlow: 'bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]'
		}
	},
	{
		id: 'design',
		labelKey: 'services.sections.design',
		icon: IconPalette,
		icons: [IconPalette, IconBrush, IconStars],
		visual: {
			bg: 'bg-[linear-gradient(140deg,rgba(244,114,182,0.06),transparent_60%)]',
			border: 'border-rose-100',
			point: 'bg-rose-400',
			ring: 'focus-visible:ring-rose-300',
			previewGlow:
				'bg-[radial-gradient(ellipse_at_top_right,rgba(244,114,182,0.08),transparent_60%)]'
		}
	},
	{
		id: 'agencies',
		labelKey: 'services.sections.agencies',
		icon: IconBuilding,
		icons: [IconBuilding, IconUsers, IconBriefcase],
		visual: {
			bg: 'bg-white',
			border: 'border-purple-100',
			point: 'bg-purple-400',
			ring: 'focus-visible:ring-purple-300',
			previewGlow: 'bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.08),transparent_60%)]'
		}
	}
] as const satisfies ServiceTypeSchema[];

export const getServiceRoute = (service: ServiceType) => {
	return `${route('/services')}#${service.id}`;
};

export type ServiceType = (typeof services)[number];

export const POSTHOG_PROXY_URL = '/we-the-people';
