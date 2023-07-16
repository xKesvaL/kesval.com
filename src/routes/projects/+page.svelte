<script lang="ts">
  import ProjectsList from '$lib/components/projects/ProjectsList.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
  const { projects, categories, tags } = data;
</script>

<svelte:head>
  <title>Projects - KesvaL</title>
  <meta name="description" content="The full list of all of KesvaL's projects, right here" />
</svelte:head>

<section id="list" class="container container-wide section">
  <h1 class="title">Projects</h1>
  <ProjectsList {projects} />
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    h1 {
      text-align: center;
    }
  }
</style>
