import { filteredPosts } from '$lib/utils/posts';
import { projects } from '$lib/utils/projects';

export async function load() {
  const posts = filteredPosts.slice(0, 3);

  return {
    posts,
    projects,
  };
}
