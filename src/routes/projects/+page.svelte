<script lang="ts">
  import ProjectsList from '$lib/components/organisms/ProjectsList.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
  const { projects } = data;
</script>

<svelte:head>
  <title>Projects - KesvaL</title>
  <meta name="description" content="The full list of all of KesvaL's projects, right here" />
</svelte:head>

<section id="list" class="container">
  <h1>Projects</h1>
  <ProjectsList {projects} />
</section>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  section {
    padding-block: 2rem 5rem;

    @include breakpoint(md) {
      padding-block: 5rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 0 2rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 0 5rem;
      }
    }
  }
</style>
