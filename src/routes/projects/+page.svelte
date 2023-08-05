<script lang="ts">
  import ProjectsList from '$lib/components/projects/ProjectsList.svelte';
  import { t } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$t('projects.meta.title')} - KesvaL</title>
  <meta name="description" content={$t('projects.meta.description')} />
</svelte:head>

<section id="list" class="container container-wide section">
  <h1 class="title">{$t('projects.meta.title')} - KesvaL</h1>
  <ProjectsList />
</section>

<style lang="scss">
  @use '$design' as *;

  section {
    h1 {
      text-align: center;
      margin-bottom: 4rem;
    }
  }
</style>
