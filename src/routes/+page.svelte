<script lang="ts">
  import About from '$lib/components/home/AboutHome.svelte';
  import Hero from '$lib/components/home/HeroHome.svelte';
  import ProjectsHome from '$lib/components/home/ProjectsHome.svelte';
  import BlogHome from '$lib/components/home/BlogHome.svelte';
  import type { PageData } from './$types';
  import { t } from 'svelte-i18n';

  export let data: PageData;
  const { posts } = data;

  const title = `${$t('home.meta.title')} - KesvaL`;
  const description = $t('home.meta.description');
  const url = 'https://kesval.com/';
  const image = 'https://kesval.com/images/logos/kesval.png';
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

  <meta name="og:image" content={image} />
  <meta name="twitter:image" content={image} />
</svelte:head>
<Hero />
<About />
<ProjectsHome />
<BlogHome {posts} />
