<div class="resume-name">
  <h2 id="resume-name">Jordan Abeddou</h2>
  <h3>Fullstack Developer</h3>
</div>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  h2 {
    font-size: 2.5rem;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
    color: hsl(var(--color-text-hue), 0%, var(--primary-dark-lightness)) !important;
  }

  @mixin mdAndPrint {
    h2,
    h3 {
      text-align: left;
    }
  }

  @include breakpoint(md) {
    @include mdAndPrint;
  }

  @media print {
    @include mdAndPrint;
  }
</style>
