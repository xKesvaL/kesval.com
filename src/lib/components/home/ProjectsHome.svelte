<script lang="ts">
  import type { Project } from '$lib';
  import AllSVGs from '$lib/icons/languages/AllSVGs.svelte';
  import Card from '$lib/components/base/Card.svelte';
  import { json, t, isLoading } from 'svelte-i18n';

  export let projects: Project[] = [];
  $: projects = $json('projects.list') as Project[];

  let expandedIndex = '1';

  function projectClickHandle(e: MouseEvent | KeyboardEvent) {
    let target = (e.target as HTMLElement)?.closest('.project');
    if (!target) return;
    expandedIndex = target.id.replace('project-', '');
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<section class="container container-wide section">
  <h2>{$t('projects.meta.title')}</h2>
  <div class="projects" role="region" on:click={projectClickHandle} on:keypress={projectClickHandle}>
    {#each projects as project, i (project.projectId)}
      {#if i < 5}
        <div class="project" id="project-{i + 1}" aria-expanded={i + 1 === parseInt(expandedIndex)}>
          <Card padding="var(--panel-padding)" scale={false} cardBgStyle="padding-right: var(--panel-padding-right);">
            <h3 class="project-heading" id="project-{i + 1}-heading">
              <button
                class="project-trigger"
                aria-controls="project-{i + 1}-content"
                aria-expanded={i + 1 === parseInt(expandedIndex)}>
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
              aria-hidden={i + 1 === parseInt(expandedIndex)}
              role="region">
              <div class="project-more">
                {project.description}
              </div>
            </div>
            <div class="project-btn">
              <a href={project.href} class="btn btn-accent">{$t('std.seeMore')}</a>
            </div>
          </Card>
        </div>
      {/if}
    {/each}
  </div>
  <div class="more">
    <a href="/projects" class="btn btn-primary">{$t('projects.allMyProjects')}</a>
  </div>
</section>

<AllSVGs />

<style lang="scss">
  @use '$design' as *;

  section {
    h2 {
      text-align: center;
    }

    .projects {
      --button-size: 3.5rem;
      --panel-padding: 0.5rem;
      --panel-gap: 0.5rem;
      --panel-padding-right: 0;

      display: flex;
      flex-direction: column;
      gap: var(--size-4);
      justify-content: center;

      contain: content;

      @include mq(lg) {
        --panel-gap: 1rem;
        --panel-padding: 0.75rem;
        flex-direction: row;
        height: 20rem;
      }

      .project {
        position: relative;
        isolation: isolate;
        flex-basis: calc(var(--button-size) + (var(--panel-padding) * 2));
        overflow: hidden;
        cursor: pointer;
        background: linear-grad-primary(135deg, 0.025, 0), linear-grad-primary(315deg, 0.025, 0), grad-base(0.05);

        transition: 0.3s;
        will-change: flex-basis, flex-grow;

        &[aria-expanded='true'] {
          flex-basis: clamp(20rem, 30vh, 27.5rem);
          flex-grow: 1;

          @include mq(md) {
            --panel-padding-right: calc(var(--panel-padding) + var(--button-size) + var(--panel-gap));
          }

          & .project-content .project-more {
            transform: translateY(0);
            opacity: 1;
            transition: transform 0.3s 0.3s, opacity 0.3s 0.3s;
          }

          & .project-btn {
            opacity: 1;
            transform: translateX(0);
            transition: transform 0.3s 0.3s, opacity 0.3s 0.3s;
            pointer-events: all;
          }
        }

        &-more {
          transform: translateY(2rem);
          opacity: 0;
          margin-top: 1rem;
          color: var(--color-neutral-800);
          margin-left: 1rem;
          margin-right: 1rem;
          font-size: var(--fs-400);

          @include mq(xs) {
            font-size: var(--fs-500);
          }

          @include mq(md) {
            margin-left: calc(var(--button-size) + var(--panel-gap));
          }
        }

        &-title {
          font-size: var(--fs-300);
          color: var(--color-neutral-900);
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
            background: linear-gradient(
                135deg,
                rgba(var(--color-accent-500-rgb), 0.1),
                rgba(var(--color-base-200-rgb), 0.5)
              ),
              radial-gradient(rgba(var(--color-base-200-rgb), 0.3), rgba(var(--color-base-200-rgb), 0.3));

            @include mq(md) {
              opacity: 0;
            }
          }
        }

        &-icon {
          backdrop-filter: blur(0.5rem) saturate(3);
          width: var(--button-size);

          aspect-ratio: 1/1;
          border-radius: 50%;
          padding: 0.75rem;

          @include mq(md) {
            background: radial-gradient(rgba(var(--color-accent-500-rgb), 0.15), rgba(var(--color-base-200-rgb), 0.5)),
              radial-gradient(rgba(var(--color-base-200-rgb), 0.5), rgba(var(--color-base-200-rgb), 0.5));
          }
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

    .more {
      display: flex;
      justify-content: flex-end;
      margin-block: var(--size-9) 0;
    }
  }
</style>
