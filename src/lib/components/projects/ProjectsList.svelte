<script lang="ts">
  import type { Project, TagPrimary, TagSecondary } from '$lib';
  import { Search as SearchJS } from 'js-search';
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

  let projectsToShow = 9;

  export let projects: Project[] = [];

  export let categories: TagPrimary[];
  export let tags: TagSecondary[];

  let searchValue = '';
  let search = new SearchJS('projectId');
  search.addIndex('name');
  search.addIndex('language');
  search.addIndex('description');
  search.addIndex('projectId');
  search.addIndex('tags');
  search.addIndex('category');
  search.addDocuments(projects);
</script>

<div>
  <input type="text" placeholder="Search..." class="" bind:value={searchValue} />
  <div class="projects-list">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use '$design' as *;

  .projects-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @include mq(sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
