<script lang="ts">
  import ProjectsList from '$lib/components/organisms/ProjectsList.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
  const { projects, categories, tags } = data;
</script>

<svelte:head>
  <title>Projects - KesvaL</title>
  <meta name="description" content="The full list of all of KesvaL's projects, right here" />
</svelte:head>

<section id="list">
  <h1>Projects</h1>
  <ProjectsList {projects} {categories} {tags} />
</section>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  section {
    padding-block: 2rem 5rem;
    padding-inline: 1rem;

    @include breakpoint(md) {
      padding-block: 5rem;
      padding-inline: 4rem;
    }

    @include breakpoint(lg) {
      padding-inline: 10rem;
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
