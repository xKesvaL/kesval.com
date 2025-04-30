<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren<{
		class?: string;
		colorClass?: string;
		style?: string;
	}>;

	let { class: className, colorClass, style, children }: Props = $props();
</script>

<div
	class={cn(
		'bg-popover shadow-primary/10 hover:shadow-primary/20 relative isolate mx-auto rounded-2xl p-0 shadow-[inset_0_-5px_5px] drop-shadow-xs transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-3px_10px]',
		className
	)}
	{style}
>
	<div
		class={cn(
			'animate-gradient absolute inset-0 -z-10 block h-full w-full [border-radius:inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] ![mask-composite:subtract] p-[1px] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
			colorClass
		)}
	></div>

	{#if children}
		{@render children()}
	{/if}
</div>
