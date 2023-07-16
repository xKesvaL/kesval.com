<script lang="ts">
  import Breadcrumbs from '$lib/components/base/Breadcrumb.svelte';
  import RelatedProjects from '$lib/components/projects/RelatedProjects.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const { project, projects } = data;
</script>

{#if project}
  <Breadcrumbs type="project" href={project.href} name={project.name} />
{/if}

<slot />

<RelatedProjects {project} {projects} />
