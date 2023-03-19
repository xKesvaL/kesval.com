<script lang="ts">
  import Github from '$lib/icons/socials/Github.svelte';
  import Instagram from '$lib/icons/socials/Instagram.svelte';
  import LinkedIn from '$lib/icons/socials/LinkedIn.svelte';

  export let vertical: boolean = false;
</script>

<div class={vertical ? 'vertical' : ''}>
  <a href="https://github.com/xKesvaL">
    <Github />
    <span class="visually-hidden">Github</span>
  </a>
  <a href="https://www.linkedin.com/in/jordan-abeddou/">
    <LinkedIn />
    <span class="visually-hidden">LinkedIn</span>
  </a>
  <a href="https://instagram.com/xKesvaL">
    <Instagram />
    <span class="visually-hidden">Instagram</span>
  </a>
</div>

<style lang="scss">
  div {
    display: flex;
    gap: 1.5rem;

    &.vertical {
      display: grid;
    }

    a {
      aspect-ratio: 1/1;
      width: 2.5rem;
    }
  }
</style>
