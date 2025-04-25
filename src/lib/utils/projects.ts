import { IconBrandBaidu, type Icon } from '@tabler/icons-svelte';
import type { Picture } from 'vite-imagetools';
import logoKesval from '$assets/logo.avif?enhanced';
import { translate } from './i18n';

export type Project = {
	id: string;
	client?: string;
	url?: string;
	description?: string; // Keep this for potential detailed descriptions if needed elsewhere
	icon?: Icon;
	logo?: Picture | string;
	images?: Array<Picture | string>;
	link?: string;
	tags?: string[]; // Added tags property

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
		tags: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Portfolio'],
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
		tags: ['Web App', 'API', 'Database'],
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
		tags: ['Mobile App', 'React Native'],
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
		tags: ['Web App', 'E-commerce'],
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=20']
	},
	{
		id: 'project_5',
		client: 'Client',
		icon: IconBrandBaidu,
		tags: ['Design System', 'UI/UX'],
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=35']
	},
	{
		id: 'project_6',
		client: 'Client',
		icon: IconBrandBaidu,
		tags: ['Web App', 'SaaS'],
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=40']
	},
	{
		id: 'project_7',
		client: 'Client',
		icon: IconBrandBaidu,
		tags: ['Data Visualization', 'Dashboard'],
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=42']
	},
	{
		id: 'project_8',
		client: 'Client',
		icon: IconBrandBaidu,
		tags: ['Web App', 'Community Platform'],
		description:
			"Un projet de développement d'une application web. Un projet de développement d'une application web.",
		images: ['https://picsum.photos/720/720?random=45']
	}
] as const satisfies Project[];

// Extract all unique tags from projects
export const allTags = [
	...new Set(projects.flatMap((project) => project.tags || []))
];

export const highlightedProjects = projects
	.filter((project) => ['portfolio_kesval', 'project_2', 'project_3'].includes(project.id))
	// Sort highlighted projects by start date (newest first)
	.sort((a, b) => (b.startedAt?.getTime() || 0) - (a.startedAt?.getTime() || 0));

// Define sorting options type
export type SortOption = 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc';

// Updated filterProjects function
export const filterProjects = async (
	allProjects: Project[],
	options: {
		searchTerm?: string;
		selectedTags?: string[];
		sortBy?: SortOption;
	} = {}
): Promise<Project[]> => {
	const { searchTerm = '', selectedTags = [], sortBy = 'date-desc' } = options;

	// Fetch translated names for sorting
	const projectsWithNames = await Promise.all(
		allProjects.map(async (project) => ({
			...project,
			translatedName: await translate(`projects.${project.id}.name`),
			translatedDescription: await translate(`projects.${project.id}.description`)
		}))
	);

	const filtered = projectsWithNames.filter((project) => {
		const searchLower = searchTerm.toLowerCase();
		const nameMatch = project.translatedName.toLowerCase().includes(searchLower);
		const descriptionMatch = project.translatedDescription?.toLowerCase().includes(searchLower);
		const tagMatch = project.tags?.some((tag) => tag.toLowerCase().includes(searchLower));
		const clientMatch = project.client?.toLowerCase().includes(searchLower);

		const searchCondition = nameMatch || descriptionMatch || tagMatch || clientMatch;

		const tagCondition =
			selectedTags.length === 0 ||
			selectedTags.every((tag) => project.tags?.includes(tag));

		return searchCondition && tagCondition;
	});

	// Sorting logic
	filtered.sort((a, b) => {
		switch (sortBy) {
			case 'date-asc':
				return (a.startedAt?.getTime() || 0) - (b.startedAt?.getTime() || 0);
			case 'name-asc':
				return a.translatedName.localeCompare(b.translatedName);
			case 'name-desc':
				return b.translatedName.localeCompare(a.translatedName);
			case 'date-desc': // Default: newest first
			default:
				return (b.startedAt?.getTime() || 0) - (a.startedAt?.getTime() || 0);
		}
	});

	// Remove temporary translated properties before returning
	return filtered.map(({ translatedName, translatedDescription, ...rest }) => rest);
};

// Helper function to get translated project data (if needed elsewhere)
export const getTranslatedProject = async (project: Project) => {
	return {
		...project,
		name: await translate(`projects.${project.id}.name`),
		description: await translate(`projects.${project.id}.description`)
	};
};
