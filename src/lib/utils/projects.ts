import { IconBrandBaidu, type Icon } from '@tabler/icons-svelte';

type Project = {
	client?: string;
	name: string;
	url?: string;
	description?: string;
	icon?: Icon;
	image?: string;

	startedAt?: Date;
	endedAt?: Date;
};

export const projects = [
	{
		client: 'Client',
		name: 'Projet 1',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=5'
	},
	{
		client: 'Client',
		name: 'Projet 2',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=10'
	},
	{
		client: 'Client',
		name: 'Projet 3',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=15'
	},
	{
		client: 'Client',
		name: 'Projet 4',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=20'
	},
	{
		client: 'Client',
		name: 'Projet 5',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=35'
	},
	{
		client: 'Client',
		name: 'Projet 6',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=40'
	},
	{
		client: 'Client',
		name: 'Projet 7',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=42'
	},
	{
		client: 'Client',
		name: 'Projet 8',
		icon: IconBrandBaidu,
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		image: 'https://picsum.photos/720/720?random=45'
	}
] as const satisfies Project[];
