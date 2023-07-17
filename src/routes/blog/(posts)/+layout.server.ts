import type { LayoutServerLoad } from './$types';
import type { Post } from '$lib';

const load: LayoutServerLoad = async ({ url, parent }) => {
  const { posts } = await parent();
  const { pathname } = url;
  const slug = pathname.replace('/blog/', '');
  const post = posts.find((p) => p.slug === slug) as Post;

  return {
    post,
  };
};

export { load };
