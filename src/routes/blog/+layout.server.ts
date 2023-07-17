import type { LayoutServerLoad } from './$types';
import { filteredPosts } from '$lib/utils/posts';

const load: LayoutServerLoad = async () => {
  return {
    posts: filteredPosts,
  };
};

export { load };
