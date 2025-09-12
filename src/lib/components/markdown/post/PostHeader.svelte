<script lang="ts">
	import type { Post } from '$content/index';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { formatDate } from '$lib/utils/date';
	import { cn } from '$lib/utils/ui';
	import { getLocale } from '$paraglide/runtime';
	import type { PrimitiveAttributes } from '@svecodocs/kit';
	import { IconCalendar, IconRefresh, IconTag } from '@tabler/icons-svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as m from '$paraglide/messages';

	let {
		class: className,
		children,
		metadata,
		...restProps
	}: PrimitiveAttributes & {
		metadata: Post;
	} = $props();
</script>

<div class={cn('relative', className)} {...restProps}>
	{#if children}
		{@render children?.()}
	{:else}
		<h1 class={cn('scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl')}>
			{metadata.title}
		</h1>
		{#if metadata.excerpt}
			<p class={cn('text-muted-foreground mt-4 text-xl leading-8 text-balance')}>
				{metadata.excerpt}
			</p>
		{/if}
		<div class="text-muted-foreground mt-6 mb-6 flex flex-col gap-3 text-sm">
			<div class="flex items-center gap-1.5">
				<IconCalendar class="h-4 w-4" />
				<span>
					{m['common.published_on_date']({
						date: formatDate(metadata.publishedAt, getLocale())
					})}
				</span>
			</div>
			{#if metadata.updatedAt}
				<div class="flex items-center gap-1.5">
					<IconRefresh class="h-4 w-4" />
					<span>
						{m['common.updated_on_date']({
							date: formatDate(metadata.updatedAt, getLocale())
						})}
					</span>
				</div>
			{/if}
			{#if metadata.tags && metadata.tags.length > 0}
				<div class="flex items-center gap-1.5">
					<IconTag class="h-4 w-4" />
					<div class="flex flex-wrap gap-1">
						{#each metadata.tags as tag (tag)}
							<Badge variant="secondary" class="text-xs">{tag}</Badge>
						{/each}
					</div>
				</div>
			{/if}
		</div>
		<Separator class="mt-8" />
	{/if}
</div>
