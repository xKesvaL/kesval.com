<script lang="ts">
	import SvelteMarkdown, { type Renderers } from 'svelte-markdown';

	export let content: string;

	const renderers: Partial<Renderers> = {};
</script>

<SvelteMarkdown source={content} {renderers} />
