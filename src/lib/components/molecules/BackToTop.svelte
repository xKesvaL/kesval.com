<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { afterUpdate } from 'svelte';
  import { fly } from 'svelte/transition';
  import ArrowTop from '$lib/icons/ArrowTop.svelte';
  import { botState } from '$lib/stores/bot.js';

  let scrollY: number;
  let prevScrollY = 0;
  let scrollPercent: number;
  let scrollingUp = false;
  let innerHeight: number;
  let scrollHeight: number;
  let scrollThresholdStep: number;
  const topPercent = 0.025;
  const botPercent = 0.975;
  let pageEndTopBound: number;

  $: scrollThresholdStep = innerHeight * 0.1;
  $: if (browser) {
    scrollPercent = scrollY / pageEndTopBound;
    pageEndTopBound = scrollHeight - innerHeight;
    if (Math.abs(prevScrollY - scrollY) > scrollThresholdStep) {
      scrollingUp = prevScrollY - scrollY > 0;
      prevScrollY = scrollY;
    }
  }

  afterUpdate(() => {
    scrollHeight = document.documentElement.scrollHeight;
  });
</script>

<svelte:window bind:scrollY bind:innerHeight />

{#if scrollPercent > topPercent && scrollPercent < botPercent}
  <button
    class="scroll-button {$botState ? 'bot' : ''}"
    on:click={() => {
      scrollY = scrollingUp ? 0 : scrollHeight;
    }}
    aria-label="scroll to {scrollingUp ? 'top' : 'bottom'}"
    in:fly={{ y: 50, duration: 300, delay: 300 }}
    out:fly={{ y: 50, duration: 300 }}>
    <div class="inner">
      <div class="arrow {scrollingUp ? '' : 'down'}">
        <ArrowTop />
      </div>

      <svg height="100" width="100" style="transform: rotate(-90deg);stroke-dasharray: 251;">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke-width="6"
          stroke="var(--color-primary)"
          style="stroke-dashoffset: {251 - 251 * scrollPercent};" />
      </svg>
    </div>
  </button>
{/if}

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;

  .scroll-button {
    position: fixed;
    display: grid;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 5;
    transition: 0.3s 0.3s ease-in-out;
    border-radius: 100vw;
    background: transparent;

    &.bot {
      @include breakpoint(sm) {
        bottom: 39.5rem;
      }
    }

    .inner {
      backdrop-filter: blur(0.5rem);
      border-radius: 100vw;
      grid-column-start: 1;
      grid-row-start: 1;
      transition: 0.3s ease-in-out;
      scale: 0.7;
      position: relative;
      background: var(--color-bg-card);

      .arrow {
        position: absolute;
        top: 1.85rem;
        left: 1.85rem;
        z-index: 50;
        height: 2.5rem;
        width: 2.5rem;
        color: var(--color-text);
        transition: 0.3s ease-in-out;

        &.down {
          transform: rotateX(180deg);
        }
      }

      svg {
        fill: var(--color-primary);
        fill-opacity: 0.1;
        transition: 0.3s ease-in-out;
      }
    }

    &:hover {
      .inner {
        scale: 0.8;

        svg {
          fill-opacity: 0.2;
        }
      }
    }
  }
</style>
