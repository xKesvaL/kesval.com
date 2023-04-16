import { getProjectByHref } from '$lib/utils/data';

export function load({ url }) {
  const project = getProjectByHref(url.pathname);

  return {
    url: url.pathname,
    project,
  };
}
