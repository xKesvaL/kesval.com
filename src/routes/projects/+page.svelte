<script lang="ts">
  import ProjectsList from '$lib/components/projects/ProjectsList.svelte';
  import { t } from 'svelte-i18n';
  const title = `${$t('projects.meta.title')} - KesvaL`;
  const description = $t('projects.meta.description');
  const url = 'https://kesval.com/projects';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta name="og:url" content={url} />
  <meta name="twitter:url" content={url} />
</svelte:head>

<section id="list" class="container section">
  <h1 class="title">{title}</h1>
  <ProjectsList />
</section>

<style lang="scss">
  section {
    --ct-max-width: 72rem;
    h1 {
      text-align: center;
      margin-bottom: 4rem;
    }
  }
</style>
