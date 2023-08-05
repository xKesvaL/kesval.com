<script lang="ts">
  import type { PageData } from './$types';
  import BlogList from '$lib/components/blog/BlogList.svelte';
  import { t } from 'svelte-i18n';

  export let data: PageData;

  const { posts } = data;
</script>

<svelte:head>
  <title>{$t('blog.meta.title')} - KesvaL</title>
  <meta name="description" content={$t('blog.meta.description')} />
</svelte:head>

<section class="container container-wide section">
  <BlogList {posts} />
</section>
