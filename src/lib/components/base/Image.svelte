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
  export let viewTransitionName: string | undefined = undefined;

  let error = false;
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

{#if src && !error}
  <img
    class={rounding === 'none' ? '' : `rounding-${rounding}`}
    class:border
    srcset={buildSrcset()}
    style={viewTransitionName ? `view-transition-name: ${viewTransitionName};` : ''}
    {src}
    {alt}
    {loading}
    decoding="async"
    on:error={() => (error = true)} />
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
  img,
  div {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    overflow: hidden;
    box-shadow: 0 0 0 0 rgba(var(--base-500-rgb), 0.3);

    &.border {
      border: 1px solid rgba(var(--primary-900-rgb), 0.3);
    }

    &.rounding-sm {
      border-radius: 0.75rem;
    }

    &.rounding-md {
      border-radius: 1rem;
    }

    &.rounding-lg {
      border-radius: 1rem;
    }

    &.rounding-full {
      border-radius: 9999px;
    }
  }

  div {
    background: radial-grad-primary();
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
