<script lang="ts">
  import type { Project } from '$lib';
  import Github from '$lib/icons/socials/IconGithub.svelte';
  import IconLink from '$lib/icons/IconLink.svelte';
  import { months } from '$lib/utils/data';
  import Chip from '$lib/components/base/Chip.svelte';
  import Card from '$lib/components/base/Card.svelte';

  export let project: Project;

  const startDate =
    project.startDate === 'next'
      ? 'Not started'
      : `${months[new Date(project.startDate).getMonth()]} ${new Date(project.startDate).getFullYear()}`;
</script>

<Card>
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
    <a href={project.href}>See more</a>
  </div>
</Card>

<style lang="scss">
  @use '$design' as *;

  .card-icon {
    height: 50px;
    width: 50px;
    margin-bottom: 1rem;
    margin-right: auto;
  }

  .chips {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    a {
      padding: 0.25rem 0.5rem;
      display: inline-block;
      border-radius: var(--border-radius-2);
      border: 1px solid rgba(var(--color-accent-900-rgb), 0.3);
      background: linear-gradient(225deg, rgba(var(--color-accent-500-rgb), 0.15), rgba(var(--color-base-200-rgb), 0.5)),
        radial-gradient(rgba(var(--color-base-200-rgb), 0.3), rgba(var(--color-base-200-rgb), 0.3));
      color: var(--color-neutral-800);
      transition: 0.2s;

      &:hover {
        scale: 1.05;
        border-color: rgba(var(--color-accent-900-rgb), 0.8);
      }
    }
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
      transition: 0.2s;

      &:hover {
        scale: 1.15;
        border-color: rgba(var(--color-primary-900-rgb), 0.9);
      }
    }

    div.icon {
      border: 1px solid rgba(var(--color-primary-900-rgb), 0.25);
      color: rgba(var(--color-primary-900-rgb), 0.25);
      cursor: not-allowed;
    }

    .icon {
      max-height: 28px;
      max-width: 28px;
      border-radius: var(--border-radius-2);
      padding: 0.25rem;
    }
  }

  hr {
    height: 1px;
    background: rgba(var(--color-primary-900-rgb), 0.4);
    margin-block: 1rem;
  }
</style>
