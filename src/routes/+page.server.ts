import { filteredPosts } from '$lib/utils/posts';

export async function load() {
  const posts = filteredPosts.slice(0, 3);

  return {
    posts,
  };
}
