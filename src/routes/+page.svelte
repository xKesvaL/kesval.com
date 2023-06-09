<script lang="ts">
  import About from '$lib/components/organisms/AboutHome.svelte';
  import Hero from '$lib/components/organisms/HeroHome.svelte';
  import ProjectsHome from '$lib/components/organisms/ProjectsHome.svelte';
  import BlogHome from '$lib/components/organisms/BlogHome.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const { posts, projects } = data;

  const title = 'Home - KesvaL';
  const description =
    "I'm a fullstack developer with a passion for building beautiful, performant and accessible web apps or websites.";
  const url = 'https://kesval.com/';
  const image = 'https://kesval.com/optimized-images/favicon-400w.png';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta name="keywords" content="kesval, fullstack, developer, frontend, backend, front, back, end" />
  <meta name="subject" content="The portfolio for a fullstack developer named Jordan, KesvaL" />

  <meta name="og:url" content={url} />
  <meta name="twitter:url" content={url} />

  <meta name="og:image" content={image} />
  <meta name="twitter:image" content={image} />

  <meta name="og:locale" content="en" />
  <meta name="og:site_name" content="KesvaL" />
</svelte:head>
<Hero />
<About />
<ProjectsHome {projects} />
<BlogHome {posts} />
