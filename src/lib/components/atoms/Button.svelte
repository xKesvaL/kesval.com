<script lang="ts">
  import { HttpRegex } from '$lib/utils/regex';

  export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
  export let style: 'solid' | 'outline' = 'solid';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let href: string | undefined = undefined;

  const isExternalLink = !!href && HttpRegex.test(href);
  export let target: '_self' | '_blank' = isExternalLink ? '_blank' : '_self';
  export let rel = isExternalLink ? 'noopener nofollow noreferrer' : undefined;

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
  {...$$restProps}
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
    transition: 0.25s ease-in-out;

    &:hover,
    &:focus {
      scale: 1.05;
    }

    &.color {
      &-primary {
        background: var(--color-primary);
        color: var(--color-static-text);

        &:hover,
        &:focus {
          background: hsl(var(--color-primary-hue), var(--color-primary-saturation), var(--primary-light-lightness));
        }
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
        &:hover,
        &:focus {
          box-shadow: 0.5rem 1rem 2rem rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
        }
      }
      &-outline {
        color: var(--color-text);
        background: transparent;

        &.color-primary {
          border: 0.125rem solid var(--color-primary);
        }

        &.color-secondary {
          border: 0.125rem solid var(--color-secondary);
        }

        &.color-tertiary {
          border: 0.125rem solid var(--color-tertiary);
        }

        &:hover,
        &:focus {
          &.color-primary {
            background: rgba(var(--color-primary-rgb), 0.1);
          }

          &.color-secondary {
            background: rgba(var(--color-secondary-rgb), 0.1);
          }

          &.color-tertiary {
            background: rgba(var(--color-tertiary-rgb), 0.1);
          }
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
