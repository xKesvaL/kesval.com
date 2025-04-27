<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { cn } from '$lib/utils/ui';
	import type { PrimitiveAttributes } from '@svecodocs/kit';

	let {
		class: className,
		children,
		title,
		excerpt = '',
		...restProps
	}: PrimitiveAttributes & {
		title: string;
		excerpt?: string;
	} = $props();
</script>

<div class={cn('relative', className)} {...restProps}>
	{#if children}
		{@render children?.()}
	{:else}
		<h1 class={cn('scroll-m-20 text-[2rem] font-semibold tracking-[-0.02em]')}>
			{title}
		</h1>
		{#if excerpt}
			<p
				class={cn(
					'text-muted-foreground mt-3 text-[18px] leading-7 tracking-[-0.01em] text-balance'
				)}
			>
				{excerpt}
			</p>
		{/if}
		<Separator class="mt-12" />
	{/if}
</div>
