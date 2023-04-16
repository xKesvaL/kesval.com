import { projects } from '$lib/utils/data';

export function load({ url }) {
  const project = projects.find((project) => project.href === url.pathname);

  return {
    url: url.pathname,
    project,
  };
}
