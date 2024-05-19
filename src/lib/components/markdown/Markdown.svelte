<script lang="ts">
	import SvelteMarkdown, { type Renderers } from 'svelte-markdown';
	import RendererImage from './RendererImage.svelte';
	import RendererCodeBlock from './RendererCodeBlock.svelte';
	import RendererHeading from './RendererHeading.svelte';

	export let content: string;

	const renderers: Partial<Renderers> = {
		image: RendererImage,
		code: RendererCodeBlock,
		heading: RendererHeading,
	};
</script>

<SvelteMarkdown source={content} {renderers} />
