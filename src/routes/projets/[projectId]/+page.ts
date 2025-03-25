import { projects } from '$lib/utils/projects';
import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';
import { translate } from '$lib/utils/i18n';

export const entries: EntryGenerator = () => {
	return projects.map((project) => {
		return { projectId: project.id };
	});
};

export const load = async ({ params }) => {
	const projectId = params.projectId;
	const project = projects.find((project) => project.id === projectId);

	if (!project) {
		error(404, translate('projects.not_found', { projectId }));
	}

	return { project };
};
