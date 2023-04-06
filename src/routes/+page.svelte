<script lang="ts">
  import About from '$lib/components/organisms/About.svelte';
  import Hero from '$lib/components/organisms/Hero.svelte';
  import ProjectsHome from '$lib/components/organisms/ProjectsHome.svelte';
  import { projects } from '$lib/utils/data';
</script>

<svelte:head>
  <title>Home | KesvaL</title>
  <meta
    name="description"
    content="I'm a fullstack developer with a passion for building beautiful, performant and accessible web apps or websites." />
</svelte:head>

<Hero />
<About />
<ProjectsHome {projects} />
