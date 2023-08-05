<script lang="ts">
  import Breadcrumbs from '$lib/components/base/Breadcrumbs.svelte';
  import RelatedProjects from '$lib/components/projects/RelatedProjects.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const { project, projects } = data;
</script>

{#if project}
<section class="container">
  <Breadcrumbs type="project" href={project.href} name={project.name} />
  <div class="prose">
    <slot />
  </div>
</section>
{/if}

{#if project}
  <RelatedProjects {project} {projects} />
{/if}

<style lang="scss">
  section {
    margin-block: 2.5rem;
  }
</style>