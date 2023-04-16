<script lang="ts">
  import ProjectBreadcrumb from '$lib/components/molecules/projects/ProjectBreadcrumb.svelte';
  import RelatedProjects from '$lib/components/organisms/RelatedProjects.svelte';

  export let data;

  let project = data.project;
</script>

{#if project}
  <ProjectBreadcrumb {project} />
{/if}

<slot />

{#if project}
  <RelatedProjects {project} />
{/if}
