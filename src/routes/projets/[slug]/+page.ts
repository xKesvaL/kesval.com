import type { EntryGenerator } from "./$types";
import { projects } from "$content/index";
import { getLocale } from "$paraglide/runtime";
import { getProject } from "$lib/utils/projects";

export const entries: EntryGenerator = () => {
	return projects.map((project) => {
		return { slug: project.uniqueId };
	});
};

export const load = ({ params }) => {
	return getProject(params.slug, getLocale());
};
