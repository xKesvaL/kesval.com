import { projects, type Project } from '$content/index';
import { localizeHref, type Locale } from '$paraglide/runtime';
import { error, redirect } from '@sveltejs/kit';
import { getContentLocales, type ContentResolver } from './content';
import { route } from '$lib/ROUTES';

// Define sorting options type
export type SortOption = 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc';

const featuredProjectsIds = ['ma-voiture-parfaite', 'bella-vista-restaurant', 'kesval-studio'];

export const getFeaturedProjects = (locale: Locale) => {
	return projects
		.filter((project) => {
			return featuredProjectsIds.includes(project.uniqueId as string) && project.locale === locale;
		})
		.sort((a, b) => {
			return (
				featuredProjectsIds.indexOf(a.uniqueId as string) -
				featuredProjectsIds.indexOf(b.uniqueId as string)
			);
		});
};

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

	const filtered = allProjects.filter((project) => {
		const searchLower = searchTerm.toLowerCase();
		const nameMatch = project.title.toLowerCase().includes(searchLower);
		const descriptionMatch = project.excerpt?.toLowerCase().includes(searchLower);
		const tagMatch = project.tags?.some((tag) => tag.toLowerCase().includes(searchLower));
		const clientMatch = project.client?.toLowerCase().includes(searchLower);

		const searchCondition = nameMatch || descriptionMatch || tagMatch || clientMatch;

		const tagCondition =
			selectedTags.length === 0 || selectedTags.every((tag) => project.tags?.includes(tag));

		return searchCondition && tagCondition;
	});

	// Sorting logic
	filtered.sort((a, b) => {
		switch (sortBy) {
			case 'date-asc':
				return (
					(new Date(a.startedAt || '').getTime() || 0) -
					(new Date(b.startedAt || '').getTime() || 0)
				);
			case 'date-desc':
				return (
					(new Date(b.startedAt || '').getTime() || 0) -
					(new Date(a.startedAt || '').getTime() || 0)
				);
			case 'name-asc':
				return a.title.localeCompare(b.title);
			case 'name-desc':
				return b.title.localeCompare(a.title);
		}
	});

	// Remove temporary translated properties before returning
	return filtered;
};

export const getProject = async (slug: string, locale: Locale) => {
	const slugMetadata = projects.find((item) => {
		return item.uniqueId?.startsWith(slug) && item.locale === locale;
	});

	const availableProjects = getContentLocales(slugMetadata?.uniqueId || '', 'projects');
	const metadata = availableProjects.find((project) => project.locale === locale);
	const hrefSlug = metadata?.slug?.slice(0, -3);

	if (!metadata || !hrefSlug) {
		error(404, 'Could not find the project.');
	}

	if (slugMetadata?.locale !== locale) {
		return redirect(302, localizeHref(route('/projets/[slug]', { slug: hrefSlug }), { locale }));
	}

	const projectsModules = import.meta.glob('/src/content/projects/**/*.md');

	const projectGlob = Object.entries(projectsModules).find(([key]) => {
		const path = key.split('/').slice(3).join('/').replace('.md', '');
		return path === `projects/${metadata.uniqueId}/${metadata.slug}`;
	});

	if (!projectGlob) {
		error(404, 'Could not find the project markdown.');
	}

	const project = await (projectGlob[1] as ContentResolver<'projects'>)();

	return {
		component: project.default,
		metadata: metadata as Project
	};
};
