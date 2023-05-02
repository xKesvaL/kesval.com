<script lang="ts">
  export let type: 'project' | 'blog';

  export let name: string;
  export let href: string;
</script>

<div>
  <a href="/static">KesvaL</a>
  <span>»</span>
  <a href="/{type === 'project' ? 'projects' : 'blog'}">
    {type === 'project' ? 'Projects' : 'Blog'}
  </a>
  <span>»</span>
  <a href="/{type === 'project' ? 'projects' : 'blog'}/{href}">{name}</a>
</div>

<style lang="scss">
  @use '$lib/scss/breakpoints' as *;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.5rem 0;

    @include breakpoint(md) {
      font-size: 1.25rem;
    }

    span {
      margin-bottom: 0.25rem;
      font-size: 1.5rem;
    }

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
