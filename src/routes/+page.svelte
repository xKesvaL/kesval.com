<script lang="ts">
  import About from '$lib/components/organisms/AboutHome.svelte';
  import Hero from '$lib/components/organisms/Hero.svelte';
  import ProjectsHome from '$lib/components/organisms/ProjectsHome.svelte';
  import { projects } from '$lib/utils/data';
</script>

<svelte:head>
  <title>Home - KesvaL</title>
  <meta name="og:title" content="Home - KesvaL" />

  <meta
    name="description"
    content="I'm a fullstack developer with a passion for building beautiful, performant and accessible web apps or websites." />
  <meta
    name="og:description"
    content="I'm a fullstack developer with a passion for building beautiful, performant and accessible web apps or websites." />

  <meta name="keywords" content="kesval, fullstack, developer, frontend, backend, front, back, end" />
  <meta name="subject" content="The portfolio for a fullstack developer named Jordan, KesvaL" />

  <meta name="og:url" content="http://kesval.com/" />
  <meta name="og:image" content="http://kesval.com/optimized-images/favicon-400w.png" />
</svelte:head>

<Hero />
<About />
<ProjectsHome {projects} />
