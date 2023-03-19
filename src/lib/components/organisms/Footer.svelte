<script lang="ts">
  import Socials from '../molecules/Socials.svelte';
</script>

<footer>
  <div />
  <div />
  <div><Socials /></div>
</footer>

<style lang="scss">
  footer {
    min-height: 30vh;
    background: hsl(var(--color-primary-hue), var(--color-primary-saturation), 30%);
    color: var(--color-static-text);
  }
</style>
