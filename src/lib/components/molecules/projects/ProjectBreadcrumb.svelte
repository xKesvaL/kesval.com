<script lang="ts">
  import type { Project } from '$lib';

  export let project: Project;
</script>

<div>
  <a href="/">KesvaL</a>
  <span>»</span>
  <a href="/projects">Projects</a>
  <span>»</span>
  <a href={project.href}>{project.name}</a>
</div>

<style lang="scss">
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.2rem;

    span {
      margin-bottom: 0.25rem;
      font-size: 1.5rem;
    }

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
