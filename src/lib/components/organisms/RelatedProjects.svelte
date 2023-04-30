<script lang="ts">
  import type { Project } from '$lib';
  import ProjectCard from '../molecules/ProjectCard.svelte';

  export let project: Project;
  export let projects: Project[];

  const relatedProjects = projects
    .filter((p) => p.idProject !== project.idProject)
    .filter((p) => p.category == project.category)
    .sort((a, b) => {
      const aTags = a.tags.filter((t) => project.tags.includes(t));
      const bTags = b.tags.filter((t) => project.tags.includes(t));
      return aTags.length > bTags.length ? -1 : aTags.length < bTags.length ? 1 : 0;
    })
    .slice(0, 3);
</script>

{#if relatedProjects && relatedProjects.length > 0}
  <section class="container">
    <h2>Related Projects</h2>
    <div class="related-projects">
      {#each relatedProjects as relatedProject}
        <ProjectCard project={relatedProject} />
      {/each}
    </div>
  </section>
{/if}

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  section {
    padding-block: 5rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      margin-block: 0 1rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 0rem 2rem;
      }
    }

    .related-projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
      gap: 1rem;
    }
  }
</style>
