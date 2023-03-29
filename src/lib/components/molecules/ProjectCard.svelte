<script lang="ts">
  import { Project } from '$lib';
  import Image from '../atoms/Image.svelte';

  export let project: Project;
</script>

<a class="project" href={project.href}>
  <div class="cover">
    <Image path={project.coverPath} alt={project.name} />
  </div>
  <h3>{project.name}</h3>
  <p>{project.description}</p>
</a>

<style lang="scss">
  div.project {
    border-radius: 1rem;
    display: grid;
    place-items: center;
    background: hsla(var(--color-primary-hue), var(--color-primary-saturation), var(--color-primary-lightness), 0.3);
    padding: 1rem;
    aspect-ratio: 7/3;
    transition: transform 0.25s ease-in-out;
    z-index: 1;
    overflow: hidden;

    &:hover {
      transform: scale(1.05);
    }

    .cover {
      position: absolute;
      inset: 0;
      z-index: -1;
    }
  }
</style>
