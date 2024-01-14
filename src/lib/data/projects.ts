import { route } from '$lib/ROUTES';

import type { ProgrammingLanguage } from './personal';

export interface Project {
	description: string;
	endDate: Date | null;
	excerpt: string;
	github: null | string;
	href: string;
	id: number;
	languages: ProgrammingLanguage[];
	name: string;
	imageUrl: string;
	site: null | string;
	startDate: Date;
}

const PROJECTS: Project[] = [
	{
		description:
			"Web identity is important, and I think it's very cool to share things with the world. So I made this website to share my work and my thoughts.",
		endDate: null,
		excerpt:
			'My own website to share my work and my thoughts made with TypeScript, SvelteKit, TailwindCSS and Shadcn/ui.',
		github: 'https://github.com/xKesvaL/kesval.com',
		href: route('/work/portfolio'),
		id: 1,
		languages: ['svelte'],
		name: 'portfolio',
		imageUrl: "/experiences/kesval.png",
		site: 'https://kesval.com',
		startDate: new Date('2023-03-19'),
	},
	{
		description:
			'I love going to the gym, but finding a good program can be hard or expensive. So I made SupaPower, an open-source app made to to help you track your workouts and create a program suited to your needs.',
		endDate: null,
		excerpt: 'Track your workouts and find a program suited to your needs.',
		github: 'https://github.com/xKesvaL/leetstrength',
		href: route('/work/supapower'),
		id: 2,
		languages: ['svelte'],
		name: 'supapower',
		imageUrl: "/projects/supapower.png",
		site: null, // https://supapower.com',
		startDate: new Date('2023-05-01'),
	},
] as const;

const FEATURED_PROJECTS = ['portfolio', 'supapower'] as const satisfies (typeof PROJECTS)[number]['name'][]

export { FEATURED_PROJECTS, PROJECTS };
