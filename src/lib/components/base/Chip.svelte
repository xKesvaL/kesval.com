<script lang="ts">
  export let label = '';

  export let color = 'primary';

  export let rotation = 135;
</script>

<p class="chip {color}" style="--rotation: {rotation}deg">
  {label}
</p>

<style lang="scss">
  @use '$design' as *;

  .chip {
    --rotation: 135deg;
    padding: 0.25rem 0.5rem;
    display: inline-block;
    border-radius: $border-radius-2;

    &.primary {
      border: 1px solid rgba(var(--color-primary-900-rgb), 0.3);
      background: linear-gradient(
          var(--rotation),
          rgba(var(--color-primary-500-rgb), 0.2),
          rgba(var(--color-base-200-rgb), 0.5)
        ),
        radial-gradient(rgba(var(--color-base-200-rgb), 0.3), rgba(var(--color-base-200-rgb), 0.3));
    }

    &.secondary {
      border: 1px solid rgba(var(--color-secondary-900-rgb), 0.3);
      background: linear-gradient(
          var(--rotation),
          rgba(var(--color-secondary-500-rgb), 0.2),
          rgba(var(--color-base-200-rgb), 0.5)
        ),
        radial-gradient(rgba(var(--color-base-200-rgb), 0.3), rgba(var(--color-base-200-rgb), 0.3));
    }

    &.accent {
      border: 1px solid rgba(var(--color-accent-900-rgb), 0.3);
      background: linear-gradient(
          var(--rotation),
          rgba(var(--color-accent-500-rgb), 0.2),
          rgba(var(--color-base-200-rgb), 0.5)
        ),
        radial-gradient(rgba(var(--color-base-200-rgb), 0.3), rgba(var(--color-base-200-rgb), 0.3));
    }
  }
</style>
