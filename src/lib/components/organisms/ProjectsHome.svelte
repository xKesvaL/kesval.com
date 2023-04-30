<script lang="ts">
  import type { Project } from '$lib';
  import AllSVGs from '$lib/icons/languages/allSVGs.svelte';
  import Button from '../atoms/Button.svelte';
  import Image from '../atoms/Image.svelte';
  let expandedIndex = '1';

  export let projects: Project[] = [];

  projects = projects.splice(0, 5);

  function projectClickHandle(e: MouseEvent) {
    let target = (e.target as HTMLElement)?.closest('.project-panel');
    if (!target) return;
    expandedIndex = target.id.replace('project-', '');
  }
</script>

<section class="container" id="projects">
  <h2>Projects</h2>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="projects" on:click={projectClickHandle}>
    {#each projects as project, i (project.idProject)}
      <div
        class="project-panel"
        aria-expanded={i + 1 === parseInt(expandedIndex) ? 'true' : 'false'}
        id="project-{i + 1}">
        <h3 class="project-heading" id="project-{i + 1}-heading">
          <button
            class="project-trigger"
            aria-controls="project-{i + 1}-content"
            aria-expanded={i + 1 === parseInt(expandedIndex) ? 'true' : 'false'}>
            <span class="project-title">{project.name}</span>
            <svg class="project-icon">
              <use href="#{project.language}-logo" xlink:href="#{project.language}-logo" />
            </svg>
          </button>
        </h3>
        <div
          class="project-content"
          id="project-{i + 1}-content"
          aria-labelledby="project-{i + 1}-heading"
          aria-hidden={i + 1 === parseInt(expandedIndex) ? 'false' : 'true'}
          role="region">
          <div class="project-more">
            {project.description}
          </div>
          <div class="project-image">
            <Image path={project.coverPath} alt={project.name} />
          </div>
        </div>
        <div class="project-btn">
          <Button href={project.href}>See More</Button>
        </div>
      </div>
    {/each}
  </div>
  <div class="see-all">
    <Button href="/projects">See All Projects</Button>
  </div>
</section>

<AllSVGs />

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-block: 5rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 0 5rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 2.5rem 7.5rem;
      }
    }

    .see-all {
      display: flex;
      justify-content: center;
      margin-block: 2.5rem 0;
    }

    .projects {
      --button-size: 3.5rem;
      --panel-padding: 0.75rem;
      --panel-gap: 1rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;

      contain: content;

      @include breakpoint(sm) {
        flex-direction: row;
        height: 30rem;
      }
    }

    .project {
      &-panel {
        position: relative;
        isolation: isolate;
        flex-basis: calc(var(--button-size) + (var(--panel-padding) * 2));
        overflow: hidden;
        padding: var(--panel-padding);
        border-radius: calc((var(--button-size) + (var(--panel-padding) * 2)) / 2);
        cursor: pointer;

        transition: flex-basis 0.3s ease, flex-grow 0.3s ease;

        &:hover,
        &:focus {
          .project-image {
            transform: scale(1.05);
            filter: brightness(0.75);
          }
        }

        will-change: flex-basis, flex-grow;

        &[aria-expanded='true'] {
          flex-basis: clamp(20rem, 40vh, 40rem);
          flex-grow: 1;
          padding-right: calc(var(--panel-padding) + var(--button-size) + var(--panel-gap));

          & .project-content .project-more {
            transform: translateY(0);
            opacity: 1;
            transition: transform 0.3s 0.3s, opacity 0.3s 0.3s;
          }

          & .project-image {
            transform: scale(1.05);
            filter: brightness(0.5) blur(0.3rem);
          }

          & .project-btn {
            opacity: 1;
            transform: translateX(0);
            transition: transform 0.3s 0.3s, opacity 0.3s 0.3s;
            pointer-events: all;
          }
        }
      }

      &-content {
        .project-more {
          transform: translateY(2rem);
          opacity: 0;
          margin-left: calc(var(--button-size) + var(--panel-gap));
          margin-top: 1rem;
          color: var(--color-static-text);

          @include breakpoint(md) {
            font-size: 1.25rem;
          }
        }
      }

      &-title {
        font-size: 1rem;
        font-weight: 700;
        padding-top: 0.5rem;
        color: var(--color-static-text);
        position: relative;
        isolation: isolate;

        display: grid;
        align-items: center;

        @include breakpoint(xs) {
          font-size: 1.5rem;
        }

        @include breakpoint(md) {
          font-size: 2rem;
        }

        &::after {
          content: '';
          position: absolute;

          left: calc((var(--panel-gap) + var(--button-size)) * -1);
          height: var(--button-size);
          width: calc(100% + (var(--button-size) * 2));
          background: pink;
          z-index: -1;
          border-radius: 100vw;
          background: hsl(0, 0%, 0%, 0.5);

          @include breakpoint(sm) {
            opacity: 0;
          }
        }
      }

      &-image {
        position: absolute;
        inset: 0;
        object-fit: cover;
        z-index: -1;
        transition: filter 0.6s, transform 0.6s;
        filter: brightness(0.9);
      }

      &-icon {
        background: hsl(0, 0%, 0%, 0.5);
        backdrop-filter: blur(0.5rem) saturate(3);
        width: var(--button-size);

        aspect-ratio: 1/1;
        border-radius: 50%;
        padding: 0.75rem;
      }

      &-heading {
        min-width: calc(var(--button-size) + (var(--panel-padding) * 2));
      }

      &-trigger {
        display: flex;
        width: 1000%;
        align-items: center;
        gap: var(--panel-gap);
        flex-direction: row-reverse;
        justify-content: flex-end;
      }

      &-btn {
        position: absolute;
        bottom: 1rem;
        right: 1rem;

        opacity: 0;
        transform: translateX(2rem);
        pointer-events: none;

        z-index: 10;

        @include breakpoint(md) {
          bottom: 2rem;
          right: 2rem;
        }
      }
    }
  }
</style>
