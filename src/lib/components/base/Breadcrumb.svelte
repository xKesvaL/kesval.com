<script lang="ts">
  export let type: 'project' | 'blog';

  export let name: string;
  export let href: string;
</script>

<div>
  <a href="/">KesvaL</a>
  <span>»</span>
  <a href="/{type === 'project' ? 'projects' : 'blog'}">
    {type === 'project' ? 'Projects' : 'Blog'}
  </a>
  <span>»</span>
  <a href="/{type === 'project' ? 'projects' : 'blog'}/{href}">{name}</a>
</div>

<style lang="scss">
  @use '$design' as *;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: var(--fs-300);
    padding: 0.5rem 0;

    @include mq(md) {
      font-size: var(--fs-500);
    }

    span {
      margin-bottom: 0.25rem;
      font-size: 1.5rem;
    }

    a {
      color: var(--color-neutral-800);
      text-align: center;
      text-wrap: balance;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
