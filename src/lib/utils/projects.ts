import { IconBrandBaidu, type Icon } from '@tabler/icons-svelte';
import type { Picture } from 'vite-imagetools';
import logoKesval from '$assets/logo.avif?enhanced';

export type Project = {
	id: string;
	client?: string;
	url?: string;
	description?: string;
	icon?: Icon;
	logo?: Picture | string;
	images?: Array<Picture | string>;
	link?: string;

	colorBackground?: string;
	colorForeground?: string;

	startedAt?: Date;
	endedAt?: Date;
};

export const projects: Project[] = [
	{
		id: 'portfolio_kesval',
		client: 'KesvaL Studio™',
		icon: IconBrandBaidu,
		logo: logoKesval,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: [
			'https://picsum.photos/720/720?random=1',
			'https://picsum.photos/720/720?random=2',
			'https://picsum.photos/720/720?random=3',
			'https://picsum.photos/720/720?random=4',
			'https://picsum.photos/720/720?random=5'
		],
		startedAt: new Date('2023-02-10'),
		link: 'https://kesval.com',
		colorBackground: '#4d02fd',
		colorForeground: '#FFFFFF'
	},
	{
		id: 'project_2',
		client: 'Client',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: [
			'https://picsum.photos/720/720?random=9',
			'https://picsum.photos/720/720?random=10',
			'https://picsum.photos/720/720?random=11',
			'https://picsum.photos/720/720?random=12',
			'https://picsum.photos/720/720?random=13'
		]
	},
	{
		id: 'project_3',
		client: 'Client',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: [
			'https://picsum.photos/720/720?random=14',
			'https://picsum.photos/720/720?random=15',
			'https://picsum.photos/720/720?random=16',
			'https://picsum.photos/720/720?random=17',
			'https://picsum.photos/720/720?random=18'
		]
	},
	{
		id: 'project_4',
		client: 'Client',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=20']
	},
	{
		id: 'project_5',
		client: 'Client',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=35']
	},
	{
		id: 'project_6',
		client: 'Client',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=40']
	},
	{
		id: 'project_7',
		client: 'Client',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=42']
	},
	{
		id: 'project_8',
		client: 'Client',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=45']
	}
] as const satisfies Project[];

export const highlightedProjects = projects
	.filter((project) => ['portfolio_kesval', 'project_2', 'project_3'].includes(project.id))
	.sort((a, b) => (a.startedAt?.getTime() || 0) - (b.startedAt?.getTime() || 0));

export const filterProjects = (projects: Project[]) => {
	return projects;
};
