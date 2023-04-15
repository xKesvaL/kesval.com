<script lang="ts">
  import { projects } from '$lib/utils/data';
  import ProjectCard from '../molecules/ProjectCard.svelte';
</script>

<div class="projects">
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;

    @include breakpoint(md) {
      gap: 1.5rem;
    }
  }
</style>
