<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { afterUpdate } from 'svelte';
  import { fly } from 'svelte/transition';
  import ArrowTop from '$lib/icons/IconArrowTop.svelte';
  import { botState } from '$lib/stores/bot.js';
  import { t } from 'svelte-i18n';

  let scrollY: number;
  let scrollPercent: number;
  let scrollingUp = false;
  let innerHeight: number;
  let scrollHeight: number;
  let scrollThresholdStep: number;
  const topPercent = 0.025;
  let pageEndTopBound: number;

  $: scrollThresholdStep = innerHeight * 0.1;
  $: if (browser) {
    scrollPercent = scrollY / pageEndTopBound;
    pageEndTopBound = scrollHeight - innerHeight;
  }

  afterUpdate(() => {
    scrollHeight = document.documentElement.scrollHeight;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>

<svelte:window bind:scrollY bind:innerHeight />

{#if scrollPercent > topPercent}
  <button
    class="scroll-button {$botState ? 'bot' : ''}"
    on:click={() => scrollToTop()}
    id="back-to-top"
    aria-label="{$t('std.scrollTo')} {$t('std.top')}"
    in:fly={{ y: 50, duration: 300, delay: 300 }}
    out:fly={{ y: 50, duration: 300 }}>
    <div class="inner">
      <div class="arrow">
        <ArrowTop />
      </div>

      <svg height="60" width="60" style="transform: rotate(-90deg);stroke-dasharray: 160;">
        <circle
          cx="30"
          cy="30"
          r="24"
          stroke-width="3"
          stroke="var(--primary-500)"
          style="stroke-dashoffset: {160 - 160 * scrollPercent};" />
      </svg>
    </div>
  </button>
{/if}

<style lang="scss">
  .scroll-button {
    view-transition-name: back-to-top;
    position: fixed;
    display: grid;
    bottom: 1rem;
    right: 1rem;
    z-index: 5;
    border-radius: 100vw;
    background: transparent;
    height: auto;
    padding: 0;
    width: 3.75rem;
    height: 3.75rem;

    &.bot {
      @include mq(sm) {
        bottom: 39.5rem;
      }
    }

    .inner {
      backdrop-filter: blur(0.5rem);
      border-radius: 9999px;
      grid-column-start: 1;
      grid-row-start: 1;
      transition: 0.3s ease-in-out;
      position: relative;
      background: var(--base-200);

      .arrow {
        position: absolute;
        z-index: 50;
        width: 100%;
        height: 100%;
        padding: 1.25rem;
        color: var(--text);
        transition: 0.3s ease-in-out;
      }

      svg {
        fill: var(--base-200);
        fill-opacity: 1;
        transition: 0.3s ease-in-out;
      }
    }

    &:hover {
      .inner {
        svg {
          fill-opacity: 0.2;
        }
      }
    }
  }
</style>
