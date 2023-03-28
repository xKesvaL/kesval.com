<script lang="ts">
  import ProjectCard from '../molecules/ProjectCard.svelte';
</script>

<section id="projects" class="container">
  <h2>My Projects</h2>

  <div class="projects-grid">
    <ProjectCard project="Project 1" />
    <ProjectCard project="Project 2" />
    <ProjectCard project="Project 3" />
    <ProjectCard project="Project 4" />
  </div>
</section>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  section {
    padding-block: 5rem;
    display: grid;
    grid-template-rows: auto 1fr;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
      margin-left: 2.5rem;
      margin-block: 0 5rem;

      @include breakpoint(md) {
        font-size: 3rem;
        margin-block: 2.5rem 7.5rem;
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @include breakpoint(md) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
</style>
