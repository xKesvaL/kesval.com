<script lang="ts">
  import ArrowTop from '$lib/icons/ArrowTop.svelte';

  export let toBottom = false;
  let scrollY = 0;
  let prevScrollY = 0;

  $: {
    if (scrollY > prevScrollY) {
      toBottom = true;
    } else if (scrollY < prevScrollY) {
      toBottom = false;
    }
    prevScrollY = scrollY;
  }

  function scroll() {
    window.scrollTo({
      top: toBottom ? document.body.scrollHeight : 0,
      behavior: 'smooth',
    });
  }
</script>

<svelte:window bind:scrollY />

<button
  aria-controls="body"
  class:toBottom
  on:click={() => {
    scroll();
  }}>
  <ArrowTop />
  <div class="visually-hidden">Back to top</div>
</button>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;

  button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    aspect-ratio: 1/1;
    width: 3rem;
    background: var(--color-primary);
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    color: var(--color-white);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @include breakpoint(md) {
      width: 4rem;
      padding: 0.75rem;
    }

    &:hover {
      transform: scale(1.1);
    }

    :global(svg) {
      transition: rotate 0.3s ease-in-out;
    }

    &.toBottom {
      :global(svg) {
        rotate: -180deg;
      }
    }
  }
</style>
