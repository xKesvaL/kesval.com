<script lang="ts">
  import Breadcrumbs from '$lib/components/molecules/Breadcrumb.svelte';
  import RelatedProjects from '$lib/components/organisms/RelatedProjects.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const { project, projects } = data;
</script>

{#if project}
  <Breadcrumbs type="project" href={project.href} name={project.name} />
{/if}

<slot />

<RelatedProjects {project} {projects} />
