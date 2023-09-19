<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';
  let el: HTMLElement;
  export let href: string | null = null;

  export let padding: string | null = null;

  export let cardStyle = '';

  export let cardBgStyle = '';

  export let classes: string[] = [];

  export let scale = true;

  export let color: string | null = null;

  export let cardLabel = '';

  $: if (el) {
    el.style.setProperty('--drop-color', color || '');
  }

  const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
    const target = ev.currentTarget;

    const rect = target.getBoundingClientRect();

    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    target.style.setProperty('--drop-x', `${x}px`);
    target.style.setProperty('--drop-y', `${y}px`);
  };
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  {href}
  bind:this={el}
  on:mousemove={onHover}
  class="card {classes.join(' ')}"
  class:scale
  role={href ? 'link' : 'none'}
  aria-label={cardLabel}
  style={cardStyle}>
  <div class="card-bg-img" style="{padding ? `padding: ${padding}` : ''}; {cardBgStyle}">
    <slot />
  </div>
</svelte:element>

<style lang="scss">
  .card {
    --drop-x: 0;
    --drop-y: 0;

    --drop-color: rgba(var(--primary-300-rgb), 0.3);

    display: flex;
    flex-direction: column;
    transition: 0.2s;
    padding: 0;
    max-width: none;
    min-width: auto;
    height: 100%;
    background: rgba(var(--base-200-rgb), 0.25);
    overflow: hidden;
    grid-column: span 2;

    @include mq(xs) {
      grid-row: span 1;
    }

    &.vertical {
      @include mq(lg) {
        grid-row: span 2;
        grid-column: span 1;
      }
    }

    &:hover {
      &.scale {
        transform: scale(1.01);
      }
      border-color: rgba(var(--primary-900-rgb), 0.8);
    }

    &-bg-img {
      padding: 1.5rem;
      transition: 0.2s;
      height: 100%;
      display: flex;
      flex-direction: column;

      &:hover {
        background-color: rgba(var(--base-200-rgb), 0.3);
        background-image: radial-gradient(circle at var(--drop-x) var(--drop-y), var(--drop-color), transparent);
      }
    }
  }
</style>
