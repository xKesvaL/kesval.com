<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';
  let el: HTMLElement;
  export let href: string | null = null;

  export let padding: string;

  export let cardBgStyle = '';

  export let classes: string[] = [];

  export let scale = true;

  export let color: string | null = null;

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
  role="region">
  <div class="card-bg-img" style="padding: {padding}; {cardBgStyle}">
    <slot />
  </div>
</svelte:element>

<style lang="scss">
  @use '$design' as *;

  .card {
    --drop-x: 0;
    --drop-y: 0;

    --drop-color: rgba(var(--color-primary-300-rgb), 0.3);

    display: inline-flex;
    flex-direction: column;
    border: 1px solid rgba(var(--color-primary-900-rgb), 0.3);
    background: rgba(var(--color-base-200-rgb), 0.1);
    border-radius: $border-radius-4;
    overflow: hidden;
    transition: 0.2s;
    position: relative;
    box-shadow: $box-shadow-2;
    grid-row: span 2;
    height: 100%;
    width: 100%;

    @include mq(xs) {
      grid-row: span 1;
    }

    &.vertical {
      @include mq(lg) {
        grid-row: span 2;
      }
    }

    &:hover {
      &.scale {
        transform: scale(1.01);
      }
      border-color: rgba(var(--color-primary-900-rgb), 0.8);
    }

    &-bg-img {
      padding: 1.5rem;
      transition: 0.2s;
      height: 100%;
      display: flex;
      flex-direction: column;

      &:hover {
        background-color: rgba(var(--color-base-200-rgb), 0.3);
        background-image: radial-gradient(circle at var(--drop-x) var(--drop-y), var(--drop-color), transparent);
      }
    }
  }
</style>
