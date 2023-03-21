<script lang="ts">
  import { HttpRegex } from '$lib/utils/regex';

  export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let style: 'solid' | 'outline' = 'solid';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let href: string | undefined = undefined;

  const isExternalLink = !!href && HttpRegex.test(href);
  export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
  export let rel = isExternalLink ? 'noopener noreferrer' : undefined;

  $: tag = href ? 'a' : 'button';
  $: linkProps = {
    href,
    target,
    rel,
  };
</script>

<svelte:element
  this={tag}
  {...linkProps}
  data-sveltekit-preload-data
  class={[`button`, `style-${style}`, `size-${size}`, `color-${color}`].join(' ')}
  on:click>
  <slot />
</svelte:element>

<style lang="scss">
  .button {
    cursor: pointer;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    border: none;
    border-radius: 1rem;
    width: fit-content;
    font-weight: 700;

    &.color {
      &-primary {
        background: var(--color-primary);
        color: var(--color-static-text);
      }
      &-secondary {
        background: var(--color-secondary);
        color: var(--color-static-text-inverse);
      }
      &-tertiary {
        background: var(--color-tertiary);
        color: var(--color-static-text-inverse);
      }
    }

    &.style {
      &-solid {
        transition: 0.25s box-shadow ease-in-out;
        &:hover {
          box-shadow: 0px 0px 20px 0px black;
        }
      }
      &-outline {
        color: var(--color-text);
        background: transparent;
        border: 0.125rem solid var(--color-primary);
        transition: 0.25s background ease-in-out;

        &:hover {
          background: rgba(var(--color-primary-rgb), 0.1);
        }
      }
    }

    &.size {
      &-small {
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
      }
      &-medium {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
      &-large {
        padding: 1rem 2rem;
        font-size: 1.25rem;
      }
    }
  }
</style>
