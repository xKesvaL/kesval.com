<script lang="ts">
  import Image from '$lib/components/atoms/Image.svelte';
</script>

<!-- TODO Put real photo -->
<div class="resume-photo">
  <Image path="logos/kesval" alt="A photo of KesvaL" rounding="full" />
</div>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  .resume-photo {
    height: 13rem;
  }
</style>
