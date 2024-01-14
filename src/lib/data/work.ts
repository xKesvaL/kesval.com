import { route } from '$lib/ROUTES';

import type { ProgrammingLanguage } from './personal';

export interface Project {
	startDate: Date;
	endDate: Date | null;
	github: null | string;
	href: string;
	id: number;
	languages: ProgrammingLanguage[];
	imageUrl: string;
	name: string;
	site: null | string;
}

const PROJECTS: Project[] = [
	{
		endDate: null,
		github: 'https://github.com/xKesvaL/kesval.com',
		href: route('/work/portfolio'),
		id: 1,
		languages: ['svelte'],
		imageUrl: '/experiences/kesval.png',
		name: 'portfolio',
		site: 'https://kesval.com',
		startDate: new Date('2023-03-19')
	},
	{
		endDate: null,
		github: 'https://github.com/xKesvaL/supapower',
		href: route('/work/supapower'),
		id: 2,
		languages: ['svelte'],
		imageUrl: '/projects/supapower.png',
		name: 'supapower',
		site: null, // https://supapower.com',
		startDate: new Date('2023-05-01')
	}
] as const;

const FEATURED_PROJECTS = ['portfolio', 'supapower'] as const;

export { FEATURED_PROJECTS, PROJECTS };
