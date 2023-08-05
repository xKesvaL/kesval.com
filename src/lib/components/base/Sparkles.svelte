<script lang="ts">
  import SingleSparkle from '$lib/components/base/SingleSparkle.svelte';
  import { onDestroy, onMount } from 'svelte';
  import type { SparkleType } from '$lib';

  export let color: 'primary' | 'secondary' | 'accent' = 'accent';

  export let highlight: 'off' | 'primary' | 'secondary' | 'accent' = 'primary';

  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

  const generateSparkle = (): SparkleType => {
    return {
      id: String(random(10000, 99999)),
      createdAt: Date.now(),
      color:
        color === 'primary'
          ? 'var(--color-primary-500)'
          : color === 'secondary'
          ? 'var(--color-secondary-500)'
          : 'var(--color-accent-500)',
      size: random(10, 20).toString(),
      style: {
        // Pick a random spot in the available space
        top: random(-10, 80) + '%',
        left: random(0, 100) + '%',
      },
    };
  };

  let sparkles: SparkleType[] = [];
  // eslint-disable-next-line no-undef
  let sparklesInterval: NodeJS.Timer;

  onMount(() => {
    sparklesInterval = setInterval(() => {
      const now = Date.now();
      // Create a new sparkle
      const sparkle = generateSparkle();
      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1500;
      });
      // Include our new sparkle
      nextSparkles.push(sparkle);
      sparkles = nextSparkles;
    }, 400);
  });

  onDestroy(() => {
    clearInterval(sparklesInterval);
  });
</script>

<span class="sparkle-wrapper">
  {#each sparkles as sparkle (sparkle.id)}
    <SingleSparkle color={sparkle.color} size={sparkle.size} style={sparkle.style} />
  {/each}
  <span class="slot-wrapper" style={highlight ? `color: var(--color-${highlight}-700); font-weight: 700;` : ''}>
    <slot />
  </span>
</span>

<style lang="scss">
  .sparkle-wrapper {
    position: relative;
    display: inline-block;

    .slot-wrapper {
      position: relative;
      z-index: 1;
    }
  }
</style>
