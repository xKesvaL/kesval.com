<script lang="ts">
  import Github from '$lib/icons/socials/Github.svelte';
  import Instagram from '$lib/icons/socials/Instagram.svelte';
  import LinkedIn from '$lib/icons/socials/LinkedIn.svelte';
  import Twitter from '$lib/icons/socials/Twitter.svelte';
  import Youtube from '$lib/icons/socials/Youtube.svelte';

  export let vertical: boolean = false;
  export let color: string = 'var(--color-text)';
  export let full: boolean = false;
</script>

{#if full}
  <div>
    <a href="https://github.com/xKesvaL" style="color: {color}">
      <Github />
      <span class="visually-hidden">Github</span>
    </a>
    <a href="https://www.linkedin.com/in/jordan-abeddou/" style="color: {color}">
      <LinkedIn />
      <span class="visually-hidden">LinkedIn</span>
    </a>
    <a href="https://instagram.com/xKesvaL" style="color: {color}">
      <Instagram />
      <span class="visually-hidden">Instagram</span>
    </a>
    <a href="https://twitter.com/xKesvaL" style="color: {color}">
      <Twitter />
      <span class="visually-hidden">Twitter</span>
    </a>
    <a href="https://www.youtube.com/channel/@xKesvaL" style="color: {color}">
      <Youtube />
      <span class="visually-hidden">Youtube</span>
    </a>
  </div>
{:else}
  <div class={vertical ? 'vertical' : ''}>
    <a href="https://github.com/xKesvaL" style="color: {color}">
      <Github />
      <span class="visually-hidden">Github</span>
    </a>
    <a href="https://www.linkedin.com/in/jordan-abeddou/" style="color: {color}">
      <LinkedIn />
      <span class="visually-hidden">LinkedIn</span>
    </a>
    <a href="https://instagram.com/xKesvaL" style="color: {color}">
      <Instagram />
      <span class="visually-hidden">Instagram</span>
    </a>
  </div>
{/if}

<style lang="scss">
  div {
    display: flex;
    gap: 1.5rem;
    justify-content: center;

    &.vertical {
      display: grid;
    }

    a {
      aspect-ratio: 1/1;
      width: 2.5rem;
      transition: 0.25s all ease-in-out;

      &:hover,
      &:focus {
        color: var(--color-secondary) !important;
      }
    }
  }
</style>
