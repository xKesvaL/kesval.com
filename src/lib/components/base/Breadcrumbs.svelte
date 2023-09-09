<script lang="ts">
  import { t } from 'svelte-i18n';

  export let type: 'project' | 'blog';

  export let name: string;
  export let href: string;
</script>

<div class="breadcrumbs">
  <ul>
    <li>
      <a href="/">{$t('home.meta.title')}</a>
    </li>
    <li>
      <a href="/{type === 'project' ? 'projects' : 'blog'}">
        {type === 'project' ? $t('projects.meta.title') : $t('blog.meta.title')}
      </a>
    </li>
    <li>
      <a href="/{type === 'project' ? 'projects' : 'blog'}/{href}">{name}</a>
    </li>
  </ul>
</div>

<style lang="scss">
  div {
    font-size: var(--fs-300);
    margin-inline: auto;
    display: flex;
    justify-content: center;

    &::-webkit-scrollbar {
      height: 0.25rem;
    }

    scrollbar-width: thin;

    @include mq(md) {
      font-size: var(--fs-400);
    }
  }
</style>
