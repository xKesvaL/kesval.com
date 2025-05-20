<script lang="ts">
	import type { TableOfContents, TocState } from '$lib/hooks/use-toc.svelte';
	import { cn } from '$lib/utils/ui';
	import Tree from './TocTree.svelte';

	let {
		tree,
		level = 1,
		tocState,
		isOpen
	}: {
		tree: TableOfContents;
		level?: number;
		tocState: TocState;
		isOpen?: boolean;
	} = $props();
</script>

{#if tree?.items?.length && level < 3}
	<ul
		class={cn('m-0 list-none transition-all', isOpen === false && 'h-0 w-20', {
			'pl-4': level !== 1,
			'border-border/50 border-l': level === 1
		})}
	>
		{#each tree.items as item, index (index)}
			{@const active = tocState.isActive(item)}
			<li class={cn('mt-0 text-left')}>
				<a
					href={item.url}
					class={cn(
						'hover:text-foreground ml-5 inline-block w-max pb-2 text-nowrap whitespace-nowrap no-underline transition-colors',
						active ? 'text-foreground' : 'text-muted-foreground',
						tocState.isLastItem(item) && 'pb-0'
					)}
				>
					{item.title}
				</a>
				{#if item.items?.length}
					<Tree tree={item} level={level + 1} {tocState} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}
