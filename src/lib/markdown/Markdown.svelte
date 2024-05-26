<script lang="ts">
	import RendererImage from './RendererImage.svelte';
	import RendererCodeBlock from './RendererCodeBlock.svelte';
	import RendererHeading from './RendererHeading.svelte';
	import SvelteMarkdown from './svelte-markdown/SvelteMarkdown.svelte';
	import type { Renderers } from './svelte-markdown/types';
	import RendererBlockQuote from './RendererBlockQuote.svelte';
	import RendererTable from './RendererTable.svelte';
	import RendererTableHead from './RendererTableHead.svelte';
	import RendererTableBody from './RendererTableBody.svelte';
	import RendererTableRow from './RendererTableRow.svelte';
	import RendererTableCell from './RendererTableCell.svelte';

	export let content: string;

	const renderers: Partial<Renderers> = {
		image: RendererImage,
		code: RendererCodeBlock,
		heading: RendererHeading,
		blockquote: RendererBlockQuote,
		table: RendererTable,
		tablehead: RendererTableHead,
		tablebody: RendererTableBody,
		tablerow: RendererTableRow,
		tablecell: RendererTableCell
	};
</script>

<SvelteMarkdown source={content} {renderers} />
