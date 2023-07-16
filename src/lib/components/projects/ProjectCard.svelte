<script lang="ts">
  import type { Project } from '$lib';
  import type { MouseEventHandler } from 'svelte/elements';

  export let project: Project[];

  let el: HTMLElement;

  const onHover: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log(x, y);

    target.style.setProperty('--drop-x', `${x}px`);
    target.style.setProperty('--drop-y', `${y}px`);
  };
</script>

<div bind:this={el} on:mouseover|stopPropagation={onHover} on:focus={onHover}>
  {project.name}
</div>

<style lang="scss">
  @use '$design' as *;

  div {
    padding: 1rem;
    border-radius: $border-radius-3;
    border: 1px solid rgba(var(--color-primary-900-rgb), 0.25);

    --drop-x: 0;
    --drop-y: 0;

    display: flex;
    flex-direction: column;
    transition: 0.2s;

    &:hover {
      background-color: rgba(var(--color-base-200-rgb), 0.3);
      background-image: radial-gradient(
        circle at var(--drop-x) var(--drop-y),
        rgba(var(--color-primary-500-rgb), 0.5),
        transparent
      );
    }
  }
</style>
