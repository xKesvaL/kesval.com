import { getProjectByHref } from '$lib/utils/data';
import type { LayoutServerLoad } from './$types';
import { projects } from '$lib/utils/data';

const load: LayoutServerLoad = async ({ url }) => {
  const project = getProjectByHref(url.pathname);

  return {
    url: url.pathname,
    project,
    projects,
  };
};

export { load };
