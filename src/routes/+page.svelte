<script lang="ts">
  import type { Project } from '$lib';
  import About from '$lib/components/organisms/About.svelte';
  import Hero from '$lib/components/organisms/Hero.svelte';
  import ProjectsHome from '$lib/components/organisms/ProjectsHome.svelte';

  let projects: Project[] = [
    { name: 'Project 1', id: '1', coverPath: 'about', language: 'svelte', href: '/projects' },
    { name: 'Project 2', id: '2', coverPath: 'about', language: 'js', href: '/projects' },
    { name: 'Project 3', id: '3', coverPath: 'about', language: 'react', href: '/projects' },
    { name: 'Project 4', id: '4', coverPath: 'about', language: 'ts', href: '/projects' },
    { name: 'Project 5', id: '5', coverPath: 'about', language: 'svelte', href: '/projects' },
  ];
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
