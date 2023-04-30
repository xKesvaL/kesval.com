import type { LayoutServerLoad } from './$types';
import { projects } from '$lib/utils/projects';

const load: LayoutServerLoad = async ({ url }) => {
  const project = projects.find((p) => p.href === url.pathname);

  return {
    url: url.pathname,
    project,
    projects,
  };
};

export { load };
