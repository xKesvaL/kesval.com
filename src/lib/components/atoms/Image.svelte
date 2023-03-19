<script lang="ts">
  export let path: string;
  export let alt: string;
  export let figcaption: string | undefined = undefined;

  export let formats: string[] = ['webp', 'avif', 'png'];
  export let widths: string[] = ['400', '800', '1200'];

  $: imageSrc = `/optimized-images/${path}`;
</script>

<picture>
  {#each formats as format}
    {#each widths as width}
      <source srcset="{imageSrc}-{width}w.{format}" type="image/{format}" media="(min-width: {width}px)" />
    {/each}
  {/each}

  <img src="{imageSrc}-1200w.png" {alt} />

  {#if figcaption}
    <!-- svelte-ignore a11y-structure -->
    <figcaption>{@html figcaption}</figcaption>
  {/if}
</picture>

<style lang="scss">
  picture {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
