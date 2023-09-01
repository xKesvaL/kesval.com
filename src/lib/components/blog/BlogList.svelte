<script lang="ts">
  import type { Post } from '$lib';
  import BlogCard from '$lib/components/blog/BlogCard.svelte';
  import { Search as SearchJS } from 'js-search';

  let blogPostToShow = 9;

  export let posts: Post[];

  let searchValue = '';
  const searchTags: string[] = [];
  let postsShowed = posts.slice(0).splice(0, blogPostToShow);
  const search = new SearchJS('slug');
  search.addIndex('title');
  search.addIndex('description');
  search.addIndex('date');
  search.addIndex('categories');
  search.addIndex('tags');
  search.addDocuments(posts);

  $: postsSearched = search.search(`${searchValue} ${searchTags.join(' ')}`);

  $: if (postsSearched?.length > 0) {
    postsShowed = postsSearched.slice(0).splice(0, blogPostToShow) as Post[];
  } else if (postsSearched?.length == 0 && (searchValue != '' || searchTags.length != 0)) {
    postsShowed = [];
  } else {
    postsShowed = posts.slice(0).splice(0, blogPostToShow);
  }
</script>

<div>
  {#each postsShowed as post, i}
    <BlogCard {post} vertical={(i + 3) % 4 === 0} />
  {/each}
</div>

<style lang="scss">
  div {
    display: grid;
    gap: 1rem;

    @include mq(lg) {
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
