<script lang="ts">
  import type { Project } from '$lib';
  import Github from '$lib/icons/socials/IconGithub.svelte';
  import IconLink from '$lib/icons/IconLink.svelte';
  import Chip from '$lib/components/base/Chip.svelte';
  import Card from '$lib/components/base/Card.svelte';
  import { t } from 'svelte-i18n';

  export let project: Project;

  let startDate: string;
  $: startDate =
    project.startDate === 'next'
      ? $t('projects.card.notStarted')
      : `${$t(`std.months.${new Date(project.startDate).getMonth().toString()}`)} ${new Date(
          project.startDate,
        ).getFullYear()}`;
</script>

<Card cardBgStyle="min-height: 20rem;">
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
    <a href={project.href}>{$t('std.seeMore')}</a>
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
      border-radius: 0.5rem;
      border: 1px solid rgba(var(--secondary-900-rgb), 0.3);
      background: linear-gradient(225deg, rgba(var(--secondary-500-rgb), 0.15), rgba(var(--base-200-rgb), 0.5)),
        radial-gradient(rgba(var(--base-200-rgb), 0.3), rgba(var(--base-200-rgb), 0.3));
      color: var(--base-800);
      transition: 0.2s;

      &:hover {
        scale: 1.05;
        border-color: rgba(var(--secondary-900-rgb), 0.8);
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
      border: 1px solid rgba(var(--primary-900-rgb), 0.75);
      transition: 0.2s;

      &:hover {
        scale: 1.15;
        border-color: rgba(var(--primary-900-rgb), 0.9);
      }
    }

    div.icon {
      border: 1px solid rgba(var(--primary-900-rgb), 0.25);
      color: rgba(var(--primary-900-rgb), 0.25);
      cursor: not-allowed;
    }

    .icon {
      max-height: 28px;
      max-width: 28px;
      border-radius: 0.5rem;
      padding: 0.25rem;
    }
  }

  hr {
    height: 1px;
    background: rgba(var(--primary-900-rgb), 0.4);
    margin-block: 1rem;
  }
</style>
