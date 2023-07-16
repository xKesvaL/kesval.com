<script lang="ts">
  import type { Project, TagPrimary, TagSecondary } from '$lib';
  import { Search as SearchJS } from 'js-search';
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
  import AllSVGs from '$lib/icons/languages/AllSVGs.svelte';
  import IconSearch from '$lib/icons/IconSearch.svelte';

  let projectsToShow = 9;

  export let projects: Project[] = [];

  let searchValue = '';
  let searchTags = [];
  let projectsShowed = projects.slice(0).splice(0, projectsToShow);
  let search = new SearchJS('projectId');
  search.addIndex('name');
  search.addIndex('language');
  search.addIndex('description');
  search.addIndex('shortDescription');
  search.addIndex('projectId');
  search.addIndex('tags');
  search.addIndex('category');
  search.addDocuments(projects);

  $: projectsSearched = search.search(`${searchValue} ${searchTags.join(' ')}`);

  $: if (projectsSearched?.length > 0) {
    projectsShowed = projectsSearched.slice(0).splice(0, projectsToShow) as Project[];
  } else if (projectsSearched?.length == 0 && (searchValue != '' || searchTags.length != 0)) {
    projectsShowed = [];
  } else {
    projectsShowed = projects.slice(0).splice(0, projectsToShow);
  }
</script>

<div class="wrapper">
  <div class="search">
    <div class="search-icon">
      <IconSearch />
    </div>
    <input type="text" placeholder="Search..." class="search-input" bind:value={searchValue} />
  </div>
  <div class="projects-list">
    {#each projectsShowed as project}
      <ProjectCard {project} />
    {/each}
  </div>
</div>

<AllSVGs />

<style lang="scss">
  @use '$design' as *;

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .search {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    @include mq(md) {
      width: 50%;
      margin-inline: auto;
    }

    &-icon {
      position: absolute;
      left: 0.5rem;
      height: 24px;
      width: 24px;
    }

    &-input {
      border-radius: $border-radius-2;
      width: 100%;
      padding: 0.5rem 0.5rem 0.5rem 2.5rem;
      font-size: var(--fs-600);
    }
  }

  .projects-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @include mq(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
