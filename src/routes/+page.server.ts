import { filteredPosts } from '$lib/utils/posts';
import { projects } from '$lib/utils/data';

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    posts,
    projects,
  };
}
