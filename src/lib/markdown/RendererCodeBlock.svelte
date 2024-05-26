<script lang="ts">
	import IconCopy from '$lib/icons/IconCopy.svelte';
  import { codeToHtml } from 'shiki';
  import { copy } from '@svelte-put/copy';

  export let lang: string;
  // export let raw: string;
  export let text: string;

  const html = codeToHtml(text, {
    lang: lang,
    theme: 'tokyo-night'
  })
</script>

<div class="relative">
  {#await html then result}
    {@html result}
  {/await}

  <button class="absolute z-10 top-2 right-2 w-8 h-8 p-2 hover:bg-muted/50 rounded-lg transition active:bg-muted" use:copy={{ text: text }}>
    <IconCopy />
  </button>
</div>