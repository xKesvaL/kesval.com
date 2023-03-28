<script lang="ts">
  export let project: string;
  export let href: string | null = null;
  export let tag: string = 'div';

  $: if (href) {
    tag = 'a';
  }
</script>

<svelte:element this={tag} class="project">
  <h3>{project}</h3>
  <p>WIP</p>
</svelte:element>

<style lang="scss">
  div.project {
    border-radius: 1rem;
    display: grid;
    place-items: center;
    background: hsla(var(--color-primary-hue), var(--color-primary-saturation), var(--color-primary-lightness), 0.3);
    padding: 1rem;
    aspect-ratio: 7/3;
    transition: transform 0.25s ease-in-out;
    z-index: 1;

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
