<script lang="ts">
	import SvelteMarkdown, { type Renderers } from 'svelte-markdown';
	import ImageRenderer from './ImageRenderer.svelte';

	export let content: string;

	const renderers: Partial<Renderers> = {
		image: ImageRenderer
	};
</script>

<SvelteMarkdown source={content} {renderers} />
