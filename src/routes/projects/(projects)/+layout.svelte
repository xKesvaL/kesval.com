<script lang="ts">
  import type { Project } from '$lib';
  import Breadcrumbs from '$lib/components/base/Breadcrumbs.svelte';
  import RelatedProjects from '$lib/components/projects/RelatedProjects.svelte';
  import { json } from 'svelte-i18n';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const { url } = data;

  let projects: Project[];
  let project: Project | undefined;
  $: projects = $json('projects.list') as Project[];
  $: project = projects.find((p) => p.href === url);
</script>

{#if project}
  <section class="container">
    <Breadcrumbs type="project" href={project.href.split('/').at(-1) || ''} name={project.name} />
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
