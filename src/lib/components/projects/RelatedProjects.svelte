<script lang="ts">
  import type { Project } from '$lib';
  import { t } from 'svelte-i18n';
  import ProjectCard from './ProjectCard.svelte';

  export let project: Project;
  export let projects: Project[];

  const relatedProjects = projects
    .filter((p) => p.projectId !== project.projectId)
    .filter((p) => p.category == project.category)
    .sort((a, b) => {
      const aTags = a.tags.filter((t) => project.tags.includes(t));
      const bTags = b.tags.filter((t) => project.tags.includes(t));
      return aTags.length > bTags.length ? -1 : aTags.length < bTags.length ? 1 : 0;
    })
    .slice(0, 2);
</script>

{#if relatedProjects && relatedProjects.length > 0}
  <section class="container container-wide">
    <h2>{$t('projects.show.relatedProjects')}</h2>
    <div class="related-projects">
      {#each relatedProjects as relatedProject}
        <ProjectCard project={relatedProject} />
      {/each}
    </div>
  </section>
{/if}

<style lang="scss">
  section {
    padding-block: 5rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 0 1rem;

      @include mq(md) {
        font-size: 3rem;
        margin-block: 0 2rem;
      }
    }

    .related-projects {
      display: grid;
      justify-content: center;
      padding: 1rem 0;
      gap: 1rem;
      grid-template-columns: 1fr;

      @include mq(md) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>
