<script lang="ts">
  import Image from '$lib/components/base/Image.svelte';
  import { t } from 'svelte-i18n';
</script>

<!-- TODO Put real photo -->
<div class="resume-photo">
  <Image src="/images/logos/kesval.png" alt={$t('std.photoOfKesvaL')} rounding="full" />
</div>

<style lang="scss">
  .resume-photo {
    height: 13rem;
  }
</style>
