<script lang="ts">
  import type { Project } from '$lib';
  import Image from '../atoms/Image.svelte';
  import { fade } from 'svelte/transition';

  export let project: Project;

  let tags: string[] = project.tags.slice(0).splice(0, 2);
</script>

<a class="project-card" href={project.href} transition:fade={{ duration: 300 }}>
  <h2>{project.name}</h2>
  <div class="cover">
    <Image path={project.coverPath} alt={project.name} />
  </div>
  <p>
    {project.description}
  </p>
  <ul class="tags">
    <li>{project.category}</li>
    {#each tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
</a>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  .project-card {
    min-width: 100%;
    background: var(--color-bg-card);
    border-radius: 1rem;
    box-shadow: 0.5rem 1rem 2rem rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
    padding: 1.5rem;
    position: relative;
    isolation: isolate;
    aspect-ratio: 16/9;
    overflow: hidden;
    flex: 1;
    max-height: 20rem;
    transition: scale 0.3s ease-in-out;
    color: var(--color-static-text);

    @include breakpoint(xs) {
      min-width: 20rem;
      max-height: 16rem;
    }

    h2 {
      font-size: 1.25rem;

      @include breakpoint(xs) {
        font-size: 1.5rem;
      }
    }

    p {
      font-size: 0.875rem;

      @include breakpoint(xs) {
        font-size: 1rem;
      }
    }

    .tags {
      list-style: none;
      display: flex;
      position: absolute;
      bottom: 0;
      right: 0;
      gap: 0.5rem;
      padding: 0.5rem;
      text-transform: uppercase;

      li {
        padding: 0.375rem 0.75rem;
        background: var(--color-bg-card);
        border-radius: 0.5rem;
        font-size: 0.8rem;

        @include breakpoint(xs) {
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }

        &:first-child {
          color: hsl(var(--color-primary-hue), 100%, var(--primary-dark-lightness));
          border: var(--color-primary) 2px solid;
        }

        &:not(:first-child) {
          color: hsl(var(--color-tertiary-hue), 100%, var(--primary-dark-lightness));
          border: var(--color-tertiary) 2px solid;
        }
      }
    }

    .cover {
      position: absolute;
      inset: 0;
      z-index: -1;
      transition: all 0.3s ease;
      scale: 1;

      filter: blur(0.3rem) brightness(0.4);
    }

    &:hover,
    &:focus {
      scale: 1.05;

      .cover {
        scale: 1.25;
        filter: blur(0.1rem) brightness(0.6);
      }
    }
  }
</style>
