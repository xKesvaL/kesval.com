<script lang="ts">
  import ArrowUp from '$lib/icons/ArrowUp.svelte';

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  let y = 0;
  let shown = false;

  $: {
    if (y > 128 && !shown) {
      shown = true;
    } else if (y < 128 && shown) {
      shown = false;
    }
  }
</script>

<svelte:window bind:scrollY={y} />

<button on:click={scrollToTop} class={shown ? 'visible' : ''}>
  <ArrowUp />
  <div class="visually-hidden">Back to top</div>
</button>

<style lang="scss">
  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: hsla(var(--color-primary-hue), var(--color-primary-saturation), var(--color-primary-lightness), 0.3);
    border: none;
    border-radius: 50%;
    padding: 1rem;
    transition: transform 0.25s ease-in-out;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 1/1;
    width: 2rem;
    height: 2rem;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    &:hover {
      transform: scale(1.05);
    }

    &.visible {
      opacity: 1;
      pointer-events: all;
      visibility: visible;
    }
  }
</style>
