<script>
  import { t } from 'svelte-i18n';
</script>

<div class="resume-name">
  <h2 id="resume-name">Jordan Abeddou</h2>
  <h3>{$t('std.fullstackDev')}</h3>
  <!-- French -->
  <!-- <h3>Développeur Fullstack</h3> -->
</div>

<style lang="scss">
  .resume-name {
    @include mq(md) {
      margin-right: auto;
    }
  }

  h2 {
    font-size: var(--fs-700);
    text-align: center;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: var(--fs-600);
    text-align: center;
    color: var(--base-800);
  }

  @mixin mdAndPrint {
    h2,
    h3 {
      text-align: left;
    }
  }

  @include mq(md) {
    @include mdAndPrint;
  }

  @media print {
    @include mdAndPrint;
  }
</style>
