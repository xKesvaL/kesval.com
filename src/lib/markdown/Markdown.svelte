<script lang="ts">
	import RendererImage from './RendererImage.svelte';
	import RendererCodeBlock from './RendererCodeBlock.svelte';
	import RendererHeading from './RendererHeading.svelte';
	import SvelteMarkdown from './svelte-markdown/SvelteMarkdown.svelte';
	import type { Renderers } from './svelte-markdown/types';
	import RendererBlockQuote from './RendererBlockQuote.svelte';

	export let content: string;

	const renderers: Partial<Renderers> = {
		image: RendererImage,
		code: RendererCodeBlock,
		heading: RendererHeading,
		blockquote: RendererBlockQuote,
	};
</script>

<SvelteMarkdown source={content} {renderers} />
