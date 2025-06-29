import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';
import { translate } from '$lib/utils/i18n';
import { projects } from '$content/index';

export const entries: EntryGenerator = () => {
	return projects.map((project) => {
		return { slug: project.uniqueId };
	});
};

export const load = async ({ params }) => {
	const slug = params.slug;
	const project = projects.find((project) => project.uniqueId === slug);

	if (!project) {
		error(404, await translate('projects.not_found', { projectId: slug }));
	}

	return { project };
};
