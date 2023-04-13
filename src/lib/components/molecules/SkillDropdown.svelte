<script lang="ts">
  import type { Skill } from '$lib';
  import Code from '$lib/icons/Code.svelte';
  import More from '$lib/icons/More.svelte';
  import Server from '$lib/icons/Server.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
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
      {#if skillType == 'frontend'}
        <div class="icon"><Code /></div>
      {:else if skillType == 'backend'}
        <div class="icon"><Server /></div>
      {:else if skillType == 'other'}
        <div class="icon"><More /></div>
      {/if}
      <h3>{skillNames[skillType]}</h3>
    </div>
  </button>
  {#if opened}
    <ul class="content {skillType}" transition:fly={{ y: -50, duration: 300 }}>
      {#each skills as skill}
        <li>
          <label for="sk-react">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </label>
          <div id="sk-react" class="progress-wrap">
            <div class="progress" style="width: {skill.percentage}%;" />
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .main {
    isolation: isolate;
    width: 100%;
    .dropdown {
      color: var(--color-text);
      background: var(--color-bg-card);
      padding: 1rem;
      border-radius: 1rem;
      width: 100%;
      z-index: 10;
      transition: border-radius 0.3s ease-in-out;

      &.opened {
        border-radius: 1rem 1rem 0 0;

        .title::after {
          rotate: 45deg;
        }
      }

      .title {
        display: flex;
        font-size: 1.5rem;
        position: relative;
        align-items: center;
        gap: 1rem;

        .icon {
          aspect-ratio: 1/1;
          width: 2rem;
        }

        h3 {
          margin-bottom: -0.5rem;
        }

        &::after {
          content: '+';
          position: absolute;
          right: 0;
          transform-origin: 55% 55%;
          transition: 0.3s ease-in-out;
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
      background: var(--color-bg-card);
      z-index: -1;
      border-radius: 0 0 1rem 1rem;
      padding: 0 1rem 1rem;

      &.frontend {
        .progress-wrap {
          background: hsl(var(--color-primary-hue), 10%, var(--color-primary-lightness));

          .progress {
            height: 0.5rem;
            background: hsl(var(--color-primary-hue), 100%, var(--color-primary-lightness));
          }
        }
      }

      &.backend {
        .progress-wrap {
          background: hsl(var(--color-secondary-hue), 10%, var(--color-secondary-lightness));

          .progress {
            height: 0.5rem;
            background: hsl(var(--color-secondary-hue), 100%, var(--color-secondary-lightness));
          }
        }
      }

      &.other {
        .progress-wrap {
          background: hsl(var(--color-tertiary-hue), 10%, var(--color-tertiary-lightness));

          .progress {
            height: 0.5rem;
            background: hsl(var(--color-tertiary-hue), 100%, var(--color-tertiary-lightness));
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
