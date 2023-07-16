import { projects } from '$lib/utils/projects';
import { tags as allTags, categories } from '$lib/utils/data';
import type { LayoutServerLoad } from './$types';
import type { TagSecondary } from '$lib';

const load: LayoutServerLoad = async function ({ url }) {
  const tags = url.searchParams.getAll('tag');
  const category = url.searchParams.get('category');
  const returnProjects = projects.filter((p) => {
    return tags.every((tag) => p.tags.includes(tag as TagSecondary)) && (!category || p.category === category);
  });

  return {
    projects: returnProjects,
    tags: allTags,
    categories,
  };
};

export { load };
