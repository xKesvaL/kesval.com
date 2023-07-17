<script lang="ts">
  import type { PageData } from './$types';
  import BlogList from '$lib/components/blog/BlogList.svelte';

  export let data: PageData;

  const { posts } = data;
</script>

<svelte:head>
  <title>Blog - KesvaL</title>
  <meta name="description" content="I talk about a lot of things that are worthy to be shared in my opinion." />
</svelte:head>

<section class="container container-wide section">
  <BlogList {posts} />
</section>
