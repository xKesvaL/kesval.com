<script lang="ts">
  import Github from '$lib/icons/socials/IconGithub.svelte';
  import Instagram from '$lib/icons/socials/IconInstagram.svelte';
  import LinkedIn from '$lib/icons/socials/IconLinkedIn.svelte';
  import Twitter from '$lib/icons/socials/IconTwitter.svelte';
  import Youtube from '$lib/icons/socials/IconYoutube.svelte';

  export let vertical = false;
  export let color = 'var(--text)';
  export let full = false;
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
        color: var(--secondary-500) !important;
      }
    }
  }
</style>
