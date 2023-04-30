import { filteredPosts } from '$lib/utils/posts';
import type { LayoutServerLoad } from './$types';

const load: LayoutServerLoad = async ({ url }) => {
  const { pathname } = url;
  const slug = pathname.replace('/', '');
  const post = filteredPosts.find((p) => p.slug === slug);

  return {
    post,
  };
};

export { load };
