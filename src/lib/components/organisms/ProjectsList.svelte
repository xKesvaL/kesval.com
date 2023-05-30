<script lang="ts">
  import type { Project, TagPrimary, TagSecondary } from '$lib';
  import Button from '../atoms/Button.svelte';
  import ProjectCard from '../molecules/ProjectCard.svelte';
  import { Search as SearchJS } from 'js-search';
  import Search from '$lib/icons/Search.svelte';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import ChevronDown from '$lib/icons/ChevronDown.svelte';

  let projectsToShow = 6;
  export let projects: Project[];
  export let categories: TagPrimary[];
  export let tags: TagSecondary[];

  $: moreProjects = projectsToShow < projects.length;

  // Searching setup
  let search = new SearchJS('projectId');
  search.addIndex('name');
  search.addIndex('language');
  search.addIndex('description');
  search.addIndex('projectId');
  search.addIndex('tags');
  search.addIndex('category');
  search.addDocuments(projects);

  let searchValue = '';
  let searchTags: string[] = [];
  let projectsShowed = projects.slice(0).splice(0, projectsToShow);
  let filtersOpen = false;
  let categoriesOpen = true;
  let tagsOpen = true;

  $: projectsSearched = search.search(`${searchValue} ${searchTags.join(' ')}`);

  $: if (projectsSearched?.length > 0) {
    projectsShowed = projectsSearched.slice(0).splice(0, projectsToShow) as Project[];
  } else if (projectsSearched?.length == 0 && (searchValue != '' || searchTags.length != 0)) {
    projectsShowed = [];
  } else {
    projectsShowed = projects.slice(0).splice(0, projectsToShow);
  }

  const seeMore = () => {
    projectsToShow += 6;
    projectsShowed = projects.slice(0).splice(0, projectsToShow);
  };

  const toggleTag = (tag) => {
    if (searchTags.includes(tag)) {
      searchTags = searchTags.filter((t) => t != tag);
    } else {
      searchTags = [...searchTags, tag];
    }
    console.log(searchTags);
  };

  const toggleFilters = () => {
    filtersOpen = !filtersOpen;
  };

  onMount(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      filtersOpen = true;
    }
  });
</script>

<button
  class="open-filters"
  on:click={() => {
    toggleFilters();
  }}>
  Open Filters
</button>

<div class="projects-wrapper">
  <div class="search-wrapper">
    <div class="search-icon">
      <Search />
    </div>
    <input type="text" bind:value={searchValue} class="search" placeholder="Search..." />
  </div>

  {#if filtersOpen}
    <div
      class="tagging {filtersOpen ? 'open' : ''}"
      transition:fly={{
        y: 20,
      }}>
      <h2>
        Filters
        <button
          on:click={() => {
            toggleFilters();
          }}>
          +
        </button>
      </h2>

      <div class="tagging-inner">
        <div class:open={categoriesOpen === true}>
          <button
            on:click={() => {
              categoriesOpen = !categoriesOpen;
            }}>
            <h3>
              Categories
              <div class="icon">
                <ChevronDown />
              </div>
            </h3>
          </button>
          <div class="list">
            <div>
              {#each categories as category}
                <button
                  class={searchTags.includes(category) ? 'active' : ''}
                  on:click={() => {
                    toggleTag(category);
                  }}>
                  {category}
                </button>
              {/each}
            </div>
          </div>
        </div>
        <div class:open={tagsOpen === true}>
          <button
            on:click={() => {
              tagsOpen = !tagsOpen;
            }}>
            <h3>
              Tags
              <div class="icon">
                <ChevronDown />
              </div>
            </h3>
          </button>
          <div class="list">
            <div>
              {#each tags as tag}
                <button
                  class={searchTags.includes(tag) ? 'active' : ''}
                  on:click={() => {
                    toggleTag(tag);
                  }}>
                  {tag}
                </button>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  {#if projectsShowed && projectsShowed.length <= 0}
    <div class="nothing" transition:fade={{ duration: 300 }}>Nothing to show here, sorry.</div>
  {/if}
  <div class="projects">
    {#if projectsShowed && projectsShowed.length > 0}
      {#each projectsShowed as project}
        <ProjectCard {project} />
      {/each}
    {/if}
  </div>
  <div class="see-more" class:moreProjects>
    <Button size="large" on:click={seeMore}>See More</Button>
  </div>
</div>

<style lang="scss">
  @use '$lib/scss/mixins' as *;
  @use '$lib/scss/breakpoints' as *;

  .open-filters {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(var(--color-bg-card-rgb), 0.9);
    backdrop-filter: blur(2rem) saturate(2);
    padding: 1rem;
    color: var(--color-text);
    z-index: 11;
    font-family: var(--font-title);
    font-size: 2rem;
    margin-bottom: -0.5rem;
    border-top: var(--color-primary) 1px solid;

    @include breakpoint(md) {
      display: none;
    }
  }

  .projects-wrapper {
    display: grid;
    position: relative;
    gap: 2rem;
    align-items: start;
    justify-items: center;

    @include breakpoint(md) {
      grid-template-columns: 1fr 2fr;
    }

    @include breakpoint(xl) {
      grid-template-columns: 1fr 3fr;
    }

    .tagging {
      position: fixed;
      inset: 0;
      background: rgba(var(--color-bg-card-rgb), 0.5);
      backdrop-filter: blur(2rem) saturate(2);
      box-shadow: var(--box-shadow-default);
      display: flex;
      flex-direction: column;
      align-items: center;
      isolation: isolate;
      z-index: 12;
      overflow: hidden;

      @include breakpoint(md) {
        inset: 0;
        border-radius: 1rem;
        position: relative;
      }

      & > h2 {
        position: relative;
        z-index: 10;
        padding: 1.5rem 2rem 1rem;
        color: var(--color-text);
        text-transform: uppercase;
        font-size: 2rem;
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        text-align: left;
        border-bottom: 1px var(--color-primary) solid;

        button {
          color: var(--color-text);
          font-size: 4rem;
          position: absolute;
          right: 2rem;
          top: 54%;
          transform: translateY(-50%) rotate(45deg);

          @include breakpoint(md) {
            display: none;
          }
        }
      }

      .tagging-inner {
        padding: 1rem;
        overflow-y: scroll;
        overscroll-behavior: contain;

        div {
          &.open {
            button {
              h3 {
                .icon {
                  transform: rotateX(0deg);
                }
              }
            }

            .list {
              grid-template-rows: 1fr;
            }
          }

          button {
            width: 100%;

            h3 {
              font-size: 1.5rem;
              margin-top: 1.5rem;
              border-bottom: 1px var(--color-primary) solid;
              display: flex;
              align-items: center;
              justify-content: space-between;
              color: var(--color-text);

              .icon {
                width: 24px;
                aspect-ratio: 1/1;
                transform: rotateX(180deg);
                transition: transform 0.3s ease-in-out;
              }
            }
          }

          .list {
            width: 100%;
            padding: 0.75rem 0.5rem;
            gap: 0.5rem;
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.3s ease-in-out;

            & > div {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
              overflow: hidden;
            }

            button {
              flex-basis: min-content;
              flex-grow: 1;
              background: var(--color-bg-body);
              padding: 0.5rem 1rem;
              color: var(--color-text);
              text-transform: uppercase;
              border-radius: 0.5rem;
              border: 1px solid var(--color-primary);
              transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
              min-width: max-content;

              &.active {
                background: var(--color-primary);
                color: var(--color-bg-card);
              }
            }
          }
        }
      }
    }

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
      grid-column: 1/-1;

      @include breakpoint(sm) {
        width: 60%;
      }

      @include breakpoint(md) {
        width: 50%;
      }

      @include breakpoint(lg) {
        width: 40%;
      }

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
      justify-content: center;
      padding: 1rem;
      display: none;

      &.moreProjects {
        display: flex;
      }
    }

    .nothing {
      font-size: 1.5rem;
      text-align: center;
      transition: 300ms;
    }

    .projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      @include breakpoint(md) {
        gap: 1.5rem;
      }
    }
  }
</style>
