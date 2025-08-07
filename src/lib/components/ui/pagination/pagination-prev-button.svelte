<script lang="ts">
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils/ui.js';
	import * as m from '$paraglide/messages';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
	<ChevronLeftIcon class="size-4" />
	<span>{m['a11y.previous']()}</span>
{/snippet}

<PaginationPrimitive.PrevButton
	bind:ref
	aria-label={m['a11y.go_to_previous_page']()}
	class={cn(
		buttonVariants({
			size: 'default',
			variant: 'ghost',
			class: 'gap-1 px-2.5 sm:pl-2.5'
		}),
		className
	)}
	children={children || Fallback}
	{...restProps}
/>
