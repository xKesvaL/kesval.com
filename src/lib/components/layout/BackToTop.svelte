<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { afterUpdate } from 'svelte';
  import { fly } from 'svelte/transition';
  import ArrowTop from '$lib/icons/IconArrowTop.svelte';
  import { botState } from '$lib/stores/bot.js';
  import { t } from 'svelte-i18n';

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
    id="back-to-top"
    aria-label="{$t('std.scrollTo')} {scrollingUp ? $t('std.top') : $t('std.bottom')}"
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
          stroke="var(--primary-500)"
          style="stroke-dashoffset: {251 - 251 * scrollPercent};" />
      </svg>
    </div>
  </button>
{/if}

<style lang="scss">
  @use '$design' as *;

  .scroll-button {
    position: fixed;
    display: grid;
    bottom: 0;
    right: 0;
    z-index: 5;
    border-radius: 100vw;
    background: transparent;
    height: auto;

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
      scale: 0.6;
      position: relative;
      background: var(--base-200);

      .arrow {
        position: absolute;
        top: 2.1rem;
        left: 2.1rem;
        z-index: 50;
        height: 2rem;
        width: 2rem;
        color: var(--text);
        transition: 0.3s ease-in-out;

        &.down {
          transform: rotateX(180deg);
        }
      }

      svg {
        fill: var(--base-200);
        fill-opacity: 1;
        transition: 0.3s ease-in-out;
      }
    }

    &:hover {
      .inner {
        scale: 0.65;

        svg {
          fill-opacity: 0.2;
        }
      }
    }
  }
</style>
