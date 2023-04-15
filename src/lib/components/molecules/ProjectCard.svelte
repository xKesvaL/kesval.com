<script lang="ts">
  import type { Project } from '$lib';
  import Image from '../atoms/Image.svelte';

  export let project: Project;
</script>

<a class="project-card" href={project.href}>
  <h2>{project.name}</h2>
  <div class="cover">
    <Image path={project.coverPath} alt={project.name} />
  </div>
</a>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  .project-card {
    min-width: 100%;
    background: var(--color-bg-card);
    border-radius: 1rem;
    box-shadow: 0.5rem 1rem 2rem rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
    padding: 1rem;
    position: relative;
    isolation: isolate;
    aspect-ratio: 16/9;
    overflow: hidden;
    flex: 1;
    max-height: 16rem;
    transition: scale 0.3s ease-in-out;

    .cover {
      position: absolute;
      inset: 0;
      z-index: -1;
      transition: all 0.3s ease;

      filter: blur(0.3rem) brightness(0.4);
    }

    @include breakpoint(xs) {
      min-width: 16rem;
    }

    &:hover,
    &:focus {
      scale: 1.05;

      .cover {
        filter: blur(0.1rem) brightness(0.8);
      }
    }
  }
</style>
