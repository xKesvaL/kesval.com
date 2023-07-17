<script lang="ts">
  export let label = '';
</script>

<p class="chip">
  {label}
</p>

<style lang="scss">
  @use '$design' as *;

  .chip {
    padding: 0.25rem 0.5rem;
    display: inline-block;
    border-radius: $border-radius-2;
    border: 1px solid rgba(var(--color-primary-900-rgb), 0.3);
    background: linear-gradient(150deg, rgba(var(--color-primary-500-rgb), 0.2), rgba(var(--color-base-200-rgb), 0.5)),
      radial-gradient(rgba(var(--color-base-200-rgb), 0.3), rgba(var(--color-base-200-rgb), 0.3));
  }
</style>
