import type { Post } from '$lib';
import Prism from 'prismjs';

const ifYouRemoveMeTheBuildFails = Prism;
// this is so prism is included in the build
import readingTime from 'reading-time';
import stripTags from 'striptags';

const importPosts = (): Post[] => {
  const imports = import.meta.glob('$routes/blog/**/*.md', {
    eager: true,
  });

  const posts: Post[] = [];
  for (const path in imports) {
    const slug = path.split('/').at(-2);
    const post = imports[path] as any;
    if (post) {
      posts.push({
        ...post.metadata,
        html: post.default.render()?.html, // for reading time
        slug,
      });
    }
  }

  return posts;
};

const filterPosts = (posts: Post[]): Post[] => {
  return posts
    .filter((post) => !post.hidden)
    .sort((a, b) =>
      new Date(a.date).getTime() > new Date(b.date).getTime()
        ? -1
        : new Date(a.date).getTime() < new Date(b.date).getTime()
        ? 1
        : 0,
    )
    .map((post) => {
      const readingTimeResult = post.html ? readingTime(stripTags(post.html)).text : undefined;
      const relatedPosts = getRelatedPosts(posts, post);

      return {
        ...post,
        readingTime: readingTimeResult ? readingTimeResult : '',
        relatedPosts,
      };
    });
};

const getRelatedPosts = (posts: Post[], post: Post): Post[] => {
  const relatedPosts: Post[] = posts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.categories.some((c) => post.categories.includes(c)))
    .sort((a, b) => {
      const aTags = a.tags.filter((t) => post.tags.includes(t));
      const bTags = b.tags.filter((t) => post.tags.includes(t));
      return aTags.length > bTags.length ? -1 : aTags.length < bTags.length ? 1 : 0;
    });
  return relatedPosts.slice(0, 3).map((p) => ({
    ...p,
    readingTime: p.html ? readingTime(stripTags(p.html)).text : '',
  }));
};

export const allPosts = importPosts();

export const filteredPosts = filterPosts(allPosts);
