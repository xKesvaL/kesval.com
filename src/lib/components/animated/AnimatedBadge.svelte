<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren<{
		class?: string;
		colorClass?: string;
	}>;

	let { class: className, colorClass, children }: Props = $props();
</script>

<div
	class={cn(
		'group bg-popover shadow-primary/10 hover:shadow-primary/20 relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-5px_5px] drop-shadow-xs transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-3px_10px]',
		className
	)}
>
	<div
		class={cn(
			'animate-gradient from-special/50 via-special-bis/50 to-special/50 absolute inset-0 block h-full w-full [border-radius:inherit] bg-gradient-to-r bg-[length:var(--bg-size)_100%] ![mask-composite:subtract] p-[1px] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
			colorClass
		)}
	></div>

	{#if children}
		{@render children()}
	{/if}
</div>
