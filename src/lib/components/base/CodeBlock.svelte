<script lang="ts">
  export let filename: string;
  export let lang: string;
</script>

<div class="code-block">
  {#if filename}
    <div class="filename">{filename}</div>
  {/if}
  {#if lang}
    <div class="lang">{lang}</div>
  {/if}
  <slot />
</div>

<style lang="scss">
  .code-block {
    position: relative;
    padding-top: 1px;
    font-family: var(--ft-mono);

    .lang,
    .filename {
      position: absolute;
      top: 0;
      border: 1px solid rgba(var(--secondary-900-rgb), 0.3);
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      font-size: var(--fs-200);
    }

    .lang {
      right: 0.5rem;
      background: linear-gradient(225deg, rgba(var(--secondary-500-rgb), 0.15), rgba(var(--base-200-rgb), 0.5)),
        radial-gradient(rgba(var(--base-200-rgb), 1), rgba(var(--base-200-rgb), 1));
    }

    .filename {
      position: absolute;
      left: 0.5rem;
      background: linear-gradient(150deg, rgba(var(--secondary-500-rgb), 0.2), rgba(var(--base-200-rgb), 0.5)),
        radial-gradient(rgba(var(--base-200-rgb), 1), rgba(var(--base-200-rgb), 1));
    }
  }
</style>
