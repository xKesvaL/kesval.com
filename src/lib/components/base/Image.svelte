<script lang="ts">
  // Source: https://github.com/matfantinel/sveltekit-static-blog-template

  import { dev } from '$app/environment';
  import ImageIcon from '$lib/icons/IconImage.svelte';

  export let src: string | null = null;
  export let alt: string;

  export let formats: string[] = ['avif', 'webp', 'png'];
  export let widths: string[] | undefined = undefined;

  export let figcaption: string = '';

  export let border = true;

  export let rounding: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'none';

  export let loading: 'lazy' | 'eager' = 'lazy';

  let fileName: string;
  $: if (src) {
    fileName = src.split('.')[0];
  }

  function buildSrcset() {
    if (dev) return;
    if (src?.split('.')[1] === 'svg') return;

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

{#if src}
  <img
    class={rounding === 'none' ? '' : `rounding-${rounding}`}
    class:border
    srcset={buildSrcset()}
    {src}
    {alt}
    {loading}
    decoding="async" />
{:else}
  <div class={rounding === 'none' ? '' : `rounding-${rounding}`} class:border>
    <span>
      <ImageIcon />
    </span>
  </div>
{/if}
{#if figcaption}
  <p>{figcaption}</p>
{/if}

<style lang="scss">
  @use '$design' as *;

  img,
  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    box-shadow: var(--box-shadow-4);

    &.border {
      border: 1px solid rgba(var(--color-primary-900-rgb), 0.3);
    }

    &.rounding-sm {
      border-radius: var(--border-radius-3);
    }

    &.rounding-md {
      border-radius: var(--border-radius-4);
    }

    &.rounding-lg {
      border-radius: var(--border-radius-5);
    }

    &.rounding-full {
      border-radius: var(--border-radius-full);
    }
  }

  div {
    background: radial-gradient(rgba(var(--color-primary-500-rgb), 0.15), rgba(var(--color-base-200-rgb), 0.5)),
      radial-gradient(rgba(var(--color-base-200-rgb), 0.5), rgba(var(--color-base-200-rgb), 0.5));
    display: grid;
    place-items: center;
    padding: 1rem;

    span {
      display: block;
      max-width: 80px;
      max-height: 80px;
    }
  }

  p {
    font-style: italic;
    text-align: center;
    margin-top: 0.25rem;
  }
</style>
