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
</style>
