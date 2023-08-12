<script lang="ts">
  export let label = '';

  export let color = 'primary';

  export let rotation = 135;
</script>

<span class="chip {color}" style="--rotation: {rotation}deg">
  {label}
</span>

<style lang="scss">
  @use '$design' as *;

  .chip {
    --rotation: 135deg;
    padding: 0.25rem 0.5rem;
    display: inline-block;
    border-radius: var(--border-radius-2);

    &.primary {
      border: 1px solid rgba(var(--color-primary-900-rgb), 0.3);
      background: linear-grad-primary(var(--rotation), 0.3), grad-base();
    }

    &.secondary {
      border: 1px solid rgba(var(--color-secondary-900-rgb), 0.3);
      background: linear-grad-secondary(var(--rotation), 0.3), grad-base();
    }

    &.accent {
      border: 1px solid rgba(var(--color-accent-900-rgb), 0.3);
      background: linear-grad-accent(var(--rotation), 0.3), grad-base();
    }
  }
</style>
