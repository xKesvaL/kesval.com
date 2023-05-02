<script lang="ts">
  import type { Project } from '$lib';
  import Button from '../atoms/Button.svelte';
  import ProjectCard from '../molecules/ProjectCard.svelte';
  import { Search as SearchJS } from 'js-search';
  import Search from '$lib/icons/Search.svelte';

  let projectsToShow = 6;
  export let projects: Project[];

  $: moreProjects = projectsToShow < projects.length;

  // Searching setup
  let search = new SearchJS('id');
  search.addIndex('name');
  search.addIndex('language');
  search.addIndex('description');
  search.addIndex('id');
  search.addIndex('category');
  search.addIndex('tags');
  search.addDocuments(projects);

  let searchValue = '';
  let projectsShowed = projects.slice(0).splice(0, projectsToShow);

  $: projectsSearched = search.search(searchValue);

  $: if (projectsSearched?.length > 0) {
    projectsShowed = projectsSearched.slice(0).splice(0, projectsToShow) as Project[];
  } else if (projectsSearched?.length == 0 && searchValue != '') {
    projectsShowed = [];
  } else {
    projectsShowed = projects.slice(0).splice(0, projectsToShow);
  }

  const seeMore = () => {
    projectsToShow += 6;
    projectsShowed = projects.slice(0).splice(0, projectsToShow);
  };
</script>

<div class="projects-wrapper">
  <div class="search-wrapper">
    <div class="search-icon">
      <Search />
    </div>
    <input type="text" bind:value={searchValue} class="search" placeholder="Search..." />
  </div>
  <div class="projects">
    {#if projectsShowed && projectsShowed.length > 0}
      {#each projectsShowed as project}
        <ProjectCard {project} />
      {/each}
    {:else}
      Nothing to show here, sorry.
    {/if}
  </div>
  <div class="see-more" class:moreProjects>
    <Button size="large" on:click={seeMore}>See More</Button>
  </div>
</div>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  .projects-wrapper {
    .search-wrapper {
      position: relative;
      width: 100%;
      height: 4rem;
      border-radius: 2rem;
      margin: 1rem 0;
      font-size: 1.5rem;
      box-shadow: 0 0.5rem 1rem rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
      overflow: hidden;
      isolation: isolate;

      &:focus-within {
        outline: 2px solid var(--color-primary);
      }

      .search {
        position: absolute;
        inset: 0;
        background: var(--color-bg-card);
        z-index: -1;
        color: var(--color-text);
        padding: 1rem 2rem 1rem 4rem;
      }

      .search-icon {
        position: absolute;
        width: 2rem;
        aspect-ratio: 1/1;

        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--color-text);
        pointer-events: none;
      }
    }

    .see-more {
      display: flex;
      justify-content: center;
      padding: 1rem;
      display: none;

      &.moreProjects {
        display: flex;
      }
    }
    .projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
      gap: 1rem;

      @include breakpoint(md) {
        gap: 1.5rem;
      }
    }
  }
</style>
