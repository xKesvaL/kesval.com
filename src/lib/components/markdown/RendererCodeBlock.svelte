<script lang="ts">
  import { codeToHtml } from 'shiki';

  export let lang: string;
  // export let raw: string;
  export let text: string;

  const html = codeToHtml(text, {
    lang: lang,
    theme: 'tokyo-night'
  })
</script>

{#await html then result}
  {@html result}
{/await}