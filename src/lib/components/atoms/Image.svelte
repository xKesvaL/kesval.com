<script lang="ts">
  // Source: https://github.com/matfantinel/sveltekit-static-blog-template

  import { dev } from '$app/environment';

  export let src: string;
  export let alt: string;

  export let formats: string[] = ['avif', 'webp', 'png'];
  export let widths: string[] | undefined = undefined;

  export let figcaption: string;

  export let rounding: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'none';

  export let loading: 'lazy' | 'eager' = 'lazy';

  $: fileName = src.split('.')[0];

  function buildSrcset() {
    if (dev) return;
    if (src.split('.')[1] === 'svg') return;

    let srcset = '';

    if (widths) {
      for (let i = 0; i < widths.length; i++) {
        srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;

        if (i < widths.length - 1) {
          srcset += ', ';
        }
      }
    } else {
      for (let i = 0; i < formats.length; i++) {
        srcset += `${fileName}.${formats[i]}`;

        if (i < formats.length - 1) {
          srcset += ', ';
        }
      }
    }

    return srcset;
  }
</script>

<img
  class={rounding === 'none' ? '' : `rounding-${rounding}`}
  srcset={buildSrcset()}
  {src}
  {alt}
  {loading}
  decoding="async" />
{#if figcaption}
  <p>{figcaption}</p>
{/if}

<style lang="scss">
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &.rounding-sm {
      border-radius: 1rem;
    }

    &.rounding-md {
      border-radius: 2rem;
    }

    &.rounding-lg {
      border-radius: 4rem;
    }

    &.rounding-full {
      border-radius: 9999px;
    }
  }

  p {
    font-style: italic;
    text-align: center;
    margin-top: 0.25rem;
  }
</style>
