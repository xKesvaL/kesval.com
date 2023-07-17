<script lang="ts">
  import type { Project } from '$lib';
  import AllSVGs from '$lib/icons/languages/AllSVGs.svelte';
  import Image from '../base/Image.svelte';
  let expandedIndex = '1';

  export let projects: Project[] = [];

  const arrayProjects = Object.values(projects).splice(0, 5);

  function projectClickHandle(e: MouseEvent) {
    let target = (e.target as HTMLElement)?.closest('.project-panel');
    if (!target) return;
    expandedIndex = target.id.replace('project-', '');
  }
</script>

<section class="container container-wide section" id="projects">
  <h2>Projects</h2>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="projects" on:click={projectClickHandle} role="region">
    {#each arrayProjects as project, i (project.projectId)}
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
            <Image src={project.coverPath} alt={project.name} border={false} />
          </div>
        </div>
        <div class="project-btn">
          <a href={project.href} class="btn btn-primary">See More</a>
        </div>
      </div>
    {/each}
  </div>
  <div class="see-all">
    <a href="/projects" class="btn btn-primary">See All Projects</a>
  </div>
</section>

<AllSVGs />

<style lang="scss">
  @use '$design' as *;

  section {
    h2 {
      text-align: center;
    }

    .see-all {
      display: flex;
      justify-content: center;
      margin-block: $size-9 0;
    }

    .projects {
      --button-size: 3.5rem;
      --panel-padding: 0.25rem;
      --panel-gap: 0.5rem;

      display: flex;
      flex-direction: column;
      gap: $size-4;
      justify-content: center;

      contain: content;

      @include mq(md) {
        --panel-gap: 1rem;
        --panel-padding: 0.75rem;
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
        will-change: flex-basis, flex-grow;

        &:hover,
        &:focus {
          .project-image {
            transform: scale(1.05);
            filter: brightness(0.75);
          }
        }

        &[aria-expanded='true'] {
          flex-basis: clamp(20rem, 40vh, 40rem);
          flex-grow: 1;
          padding-right: $size-4;

          @include mq(md) {
            padding-right: calc(var(--panel-padding) + var(--button-size) + var(--panel-gap));
          }

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
          margin-top: 1rem;
          color: white;
          margin-left: 1rem;
          font-size: var(--fs-400);

          @include mq(xs) {
            font-size: var(--fs-500);
          }

          @include mq(md) {
            font-size: var(--fs-600);
            margin-left: calc(var(--button-size) + var(--panel-gap));
          }
        }
      }

      &-title {
        font-size: var(--fs-300);
        padding-top: 0.5rem;
        color: white;
        position: relative;
        isolation: isolate;

        display: grid;
        align-items: center;

        @include mq(xs) {
          font-size: var(--fs-500);
        }

        @include mq(lg) {
          font-size: var(--fs-700);
        }

        &::after {
          content: '';
          position: absolute;

          left: calc((var(--panel-gap) + var(--button-size)) * -1);
          height: var(--button-size);
          width: calc(100% + (var(--button-size) * 2));
          z-index: -1;
          border-radius: 100vw;
          background: hsl(0, 0%, 0%, 0.5);

          @include mq(md) {
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

        @include mq(md) {
          bottom: 2rem;
          right: 2rem;
        }
      }
    }
  }
</style>
