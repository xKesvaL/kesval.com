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

  $: title = `${project?.name || "Projects"} - KesvaL`;
  $: description = project?.description || ''
  $: metaUrl = `https://kesval.com${project?.href || ''}`
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta name="og:url" content={metaUrl} />
  <meta name="twitter:url" content={metaUrl} />
</svelte:head>

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
