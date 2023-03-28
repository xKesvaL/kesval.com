<script lang="ts">
  export let project: string;
</script>

<div class="project">
  <h3>{project}</h3>
  <p>WIP</p>
</div>

<style lang="scss">
  div.project {
    border-radius: 1rem;
    display: grid;
    place-items: center;
    background: hsla(var(--color-primary-hue), var(--color-primary-saturation), var(--color-primary-lightness), 0.3);
    padding: 1rem;
  }
</style>
