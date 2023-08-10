<script lang="ts">
  import type { PageData } from './$types';
  import BlogList from '$lib/components/blog/BlogList.svelte';
  import { t } from 'svelte-i18n';

  export let data: PageData;

  const { posts } = data;

  const title = `${$t('blog.meta.title')} - KesvaL`
  const description = $t('blog.meta.description');
  const url = 'https://kesval.com/blog';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta name="og:url" content={url} />
  <meta name="twitter:url" content={url} />
</svelte:head>

<section class="container container-wide section">
  <BlogList {posts} />
</section>
