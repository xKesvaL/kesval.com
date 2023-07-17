<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements/index';
  import type { Project } from '$lib';
  import Github from '$lib/icons/socials/IconGithub.svelte';
  import IconLink from '$lib/icons/IconLink.svelte';
  import { months } from '$lib/utils/data';
  import Chip from '$lib/components/base/Chip.svelte';

  let el: HTMLElement;

  export let project: Project;

  const tiltDegree = 5;
  const startDate =
    project.startDate === 'next'
      ? 'Not started'
      : `${months[new Date(project.startDate).getMonth()]} ${new Date(project.startDate).getFullYear()}`;

  $: if (el) {
    el.style.setProperty('--drop-color', project.color);
  }

  const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
    const target = ev.currentTarget;

    const rect = target.getBoundingClientRect();

    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    el.style.setProperty('--drop-x', `${x}px`);
    el.style.setProperty('--drop-y', `${y}px`);

    const width = el.offsetWidth;
    const height = el.offsetHeight;

    const cX = rect.x + width / 2;
    const cY = rect.y + height / 2;

    const mX = ev.clientX - cX;
    const mY = ev.clientY - cY;

    const rY = ((tiltDegree * mX) / (width / 2)).toFixed(2);
    const rX = ((-1 * (tiltDegree * mY)) / (height / 2)).toFixed(2);

    el.style.setProperty('--rot-x', `${rX}deg`);
    el.style.setProperty('--rot-y', `${rY}deg`);
  };
</script>

<div bind:this={el} on:mousemove={onHover} class="card" role="region">
  <div class="card-bg-img">
    <svg class="card-icon">
      <use href="#{project.language}-logo" xlink:href="#{project.language}-logo" />
    </svg>
    <h3>
      {project.name}
      <div>
        <svelte:element this={project.github ? 'a' : 'div'} href={project.github} target="_blank" class="icon">
          <Github />
        </svelte:element>
        <svelte:element this={project.site ? 'a' : 'div'} href={project.site} target="_blank" class="icon">
          <IconLink />
        </svelte:element>
      </div>
    </h3>
    <hr />
    <p>
      {project.shortDescription}
    </p>
    <div class="chips">
      <Chip label={startDate} />
    </div>
  </div>
</div>

<style lang="scss">
  @use '$design' as *;

  .card {
    --drop-x: 0;
    --drop-y: 0;

    --drop-color: rgba(var(--color-primary-300-rgb), 0.3);

    --rot-x: 0;
    --rot-y: 0;

    display: inline-flex;
    flex-direction: column;
    border: 1px solid rgba(var(--color-primary-900-rgb), 0.3);
    background: rgba(var(--color-base-200-rgb), 0.1);
    border-radius: $border-radius-4;
    overflow: hidden;
    transition: 0.2s;
    position: relative;
    box-shadow: $box-shadow-2;

    &-icon {
      height: 50px;
      width: 50px;
      margin-bottom: 1rem;
      margin-right: auto;
    }

    &-bg-img {
      padding: 1.5rem;
      transition: 0.2s;
      height: 100%;
      display: flex;
      flex-direction: column;

      .chips {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
      }

      p {
        flex: 1;
      }

      h3 {
        font-size: var(--fs-600);
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        a.icon {
          border: 1px solid rgba(var(--color-primary-900-rgb), 0.75);
        }

        div.icon {
          border: 1px solid rgba(var(--color-primary-900-rgb), 0.25);
          color: rgba(var(--color-primary-900-rgb), 0.25);
          cursor: not-allowed;
        }

        .icon {
          max-height: 28px;
          max-width: 28px;
          border-radius: $border-radius-2;
          padding: 0.25rem;
        }
      }

      hr {
        height: 1px;
        background: rgba(var(--color-primary-900-rgb), 0.4);
        margin-block: 1rem;
      }

      &:hover {
        background-color: rgba(var(--color-base-200-rgb), 0.3);
        background-image: radial-gradient(circle at var(--drop-x) var(--drop-y), var(--drop-color), transparent);
      }
    }

    &:hover {
      transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.02);
      border-color: rgba(var(--color-primary-900-rgb), 0.8);
    }
  }
</style>
