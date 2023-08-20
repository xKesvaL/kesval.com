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
    border-radius: 0.5rem;

    &.primary {
      border: 1px solid rgba(var(--primary-900-rgb), 0.3);
      background: linear-grad-primary(var(--rotation), 0.3);
    }

    &.secondary {
      border: 1px solid rgba(var(--secondary-900-rgb), 0.3);
      background: linear-grad-secondary(var(--rotation), 0.3);
    }
  }
</style>
