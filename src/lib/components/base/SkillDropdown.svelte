<!--suppress HtmlUnknownTag, CheckEmptyScriptTag -->
<script lang="ts">
  import type { Skill } from '$lib';
  import Code from '$lib/icons/IconCode.svelte';
  import More from '$lib/icons/IconMore.svelte';
  import Server from '$lib/icons/IconServer.svelte';
  import { onMount } from 'svelte';
  export let skills: Skill[];
  export let skillType: keyof typeof skillNames;

  let skillNames = {
    frontend: 'Front-End',
    backend: 'Back-End',
    other: 'Others',
  };

  let opened = false;

  onMount(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      opened = true;
    }
  });

  function toggleDropdown() {
    opened = !opened;
  }
</script>

<div class="main">
  <button
    class="dropdown"
    class:opened
    on:click={() => {
      toggleDropdown();
    }}>
    <div class="title">
      {#if skillType === 'frontend'}
        <div class="icon"><Code /></div>
      {:else if skillType === 'backend'}
        <div class="icon"><Server /></div>
      {:else if skillType === 'other'}
        <div class="icon"><More /></div>
      {/if}
      <h3>{skillNames[skillType]}</h3>
    </div>
  </button>
  <ul class="content {opened ? 'opened' : ''} {skillType}">
    <div>
      {#each skills as skill}
        <li>
          <label for="sk-react-{skill.name}">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </label>
          <div id="sk-react-{skill.name}" class="progress-wrap">
            <div class="progress" style="width: {skill.percentage}%;" />
          </div>
        </li>
      {/each}
    </div>
  </ul>
</div>

<style lang="scss">
  .main {
    isolation: isolate;
    width: 100%;

    .dropdown {
      color: var(--color-neutral-800);
      background: linear-gradient(90deg, rgba(var(--color-primary-500-rgb), 0.05), rgba(var(--color-base-200-rgb), 1)),
        linear-gradient(135deg, rgba(var(--color-base-200-rgb), 1), rgba(var(--color-base-200-rgb), 1));
      padding: 1.5rem 1rem 0.5rem 1rem;
      border-radius: 1rem 1rem 0 0;
      width: 100%;
      z-index: 10;
      transition: border-radius 0.3s ease-in-out;

      &.opened {
        margin-bottom: 0;
        .title::after {
          rotate: 45deg;
        }
      }

      .title {
        display: flex;
        font-size: var(--fs-500);
        position: relative;
        align-items: center;
        gap: 1rem;

        .icon {
          aspect-ratio: 1/1;
          width: 2rem;
        }

        h3 {
          margin-bottom: -0.5rem;
          font-size: var(--fs-600);
        }

        &::after {
          content: '+';
          position: absolute;
          right: 0;
          transform-origin: 55% 55%;
          transition: 0.3s ease;
          height: min-content;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
      }
    }

    .content {
      position: relative;
      list-style: none;
      text-align: left;
      background: linear-gradient(90deg, rgba(var(--color-primary-500-rgb), 0.05), rgba(var(--color-base-200-rgb), 1)),
        linear-gradient(135deg, rgba(var(--color-base-200-rgb), 1), rgba(var(--color-base-200-rgb), 1));
      z-index: -1;
      border-radius: 0 0 1rem 1rem;
      padding: 0 1rem 1rem;
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease-in-out;

      &.opened {
        grid-template-rows: 1fr;
      }

      & > div {
        overflow: hidden;
      }

      &.frontend {
        .progress-wrap {
          background: hsl(var(--color-primary-500-hue), 10%, var(--color-primary-500-lightness));

          .progress {
            height: 0.5rem;
            background: linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600));
          }
        }
      }

      &.backend {
        .progress-wrap {
          background: hsl(var(--color-secondary-500-hue), 10%, var(--color-secondary-500-lightness));

          .progress {
            height: 0.5rem;
            background: linear-gradient(135deg, var(--color-secondary-400), var(--color-secondary-600));
          }
        }
      }

      &.other {
        .progress-wrap {
          background: hsl(var(--color-accent-500-hue), 10%, var(--color-accent-500-lightness));

          .progress {
            height: 0.5rem;
            background: linear-gradient(135deg, var(--color-accent-400), var(--color-accent-600));
          }
        }
      }

      li {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
        margin-bottom: 1rem;

        label {
          display: flex;
          justify-content: space-between;
          cursor: default;
        }

        .progress-wrap {
          width: 100%;

          border-radius: 2rem;
          overflow: hidden;

          .progress {
            height: 0.5rem;
          }
        }
      }
    }
  }
</style>
