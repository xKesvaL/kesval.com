<script lang="ts">
  export let label = '';

  export let color = 'primary';

  export let rotation = 135;
</script>

<span class="chip {color}" style="--rotation: {rotation}deg">
  {label}
</span>

<style lang="scss">
  .chip {
    --rotation: 135deg;
    padding: 0.25rem 0.5rem;
    display: inline-block;
    border-radius: 0.5rem;

    &.primary {
      border: 1px solid rgba(var(--primary-900-rgb), 0.3);
      background: linear-gradient(var(--rotation), rgba(var(--primary-500-rgb), 0.3), transparent);
    }

    &.secondary {
      border: 1px solid rgba(var(--secondary-900-rgb), 0.3);
      background: linear-gradient(var(--rotation), rgba(var(--secondary-500-rgb), 0.3), transparent);
    }
  }
</style>
