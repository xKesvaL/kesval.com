import { projects, type Project } from '$content/index';
import type { Locale } from '$paraglide/runtime';

// Extract all unique tags from projects
export const highlightedProjects = projects
	.filter((project) => project.featured)
	.sort(
		(a, b) =>
			(new Date(b.startedAt || '').getTime() || 0) - (new Date(a.startedAt || '').getTime() || 0)
	);

export const getHighlightedProjects = (locale: Locale) => {
	return highlightedProjects.filter((project) => project.locale === locale);
};

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
