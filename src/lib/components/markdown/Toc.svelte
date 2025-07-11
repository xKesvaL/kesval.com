<script lang="ts">
	import List from 'phosphor-svelte/lib/List';
	import TocTree from './TocTree.svelte';
	import { cn } from '$lib/utils/ui';
	import { useToc, type TableOfContents } from '$lib/hooks/use-toc.svelte';
	import * as m from '$paraglide/messages';
	import { IsMobileCustom } from '$lib/hooks/is-mobile-custom.svelte';

	let { toc }: { toc: TableOfContents } = $props();

	const itemIds = $derived(
		toc.items
			? toc.items
					.flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
					.flat()
					.filter(Boolean)
					.map((id) => id?.split('#')[1])
			: []
	);

	const tocState = useToc(() => itemIds as string[]);

	let isOpenState = $state(false);
	let isMobile = new IsMobileCustom(1024);

	let isOpen = $derived(!isMobile.current || isOpenState);

	async function toggleOpen(event: MouseEvent) {
		if (!isMobile.current) {
			return;
		}

		const target = event.target as HTMLElement;
		if (target.tagName === 'A') {
			return;
		}

		isOpenState = !isOpenState;
	}
</script>

<button
	class={cn(
		'toc-root max-lg:bg-popover w-fit max-w-[min(400px,90vw)] space-y-0 overflow-hidden text-sm transition-all duration-300 max-lg:rounded-xl max-lg:border max-lg:py-1 max-lg:pr-4 max-lg:pl-3 max-lg:shadow-lg',
		isOpen && 'space-y-2 max-lg:pt-2 max-lg:pb-4'
	)}
	onclick={toggleOpen}
>
	<div class="text-muted-foreground -ml-px flex w-fit cursor-pointer items-center gap-1.5">
		<List class="size-4 shrink-0" />
		<p class="text-muted-foreground text-sm">
			{m['blog.toc.title']()}
		</p>
	</div>
	<div class={cn('relative mt-0 overflow-hidden', isOpen && 'mt-4')}>
		<div
			class={cn('bg-foreground absolute top-0 -left-[0.5px] h-5 w-0.5 rounded-full')}
			style="transition: top 0.25s; top:{tocState.markerTopStyle};"
		></div>
		<TocTree tree={toc} {tocState} {isOpen} />
	</div>
</button>
