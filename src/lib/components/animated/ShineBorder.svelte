<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { WithChildren } from 'bits-ui';

	type TColorProp = string | string[];

	interface Props {
		borderRadius?: number;
		borderWidth?: number;
		duration?: number;
		color?: TColorProp;
		class?: string;
		classChild?: string;
	}

	let {
		borderRadius = 20,
		borderWidth = 1,
		duration = 14,
		color = ['#4FF9FF'],
		class: className,
		classChild,
		children
	}: WithChildren<Props> = $props();
</script>

<div
	style="
      --border-radius: {borderRadius}px;
    "
	class={cn('relative grid min-h-[60px] w-fit min-w-[300px] place-items-center p-3', className)}
>
	<div
		style="
        --border-width: {borderWidth}px;
        --border-radius: {borderRadius}px;
        --shine-pulse-duration: {duration}s;
        --mask-linear-gradient: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        --background-radial-gradient: radial-gradient(transparent, transparent, {Array.isArray(
			color
		)
			? color.join(',')
			: color}, transparent, transparent);
      "
		class={cn(
			"before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[var(--border-radius)] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:p-[var(--border-width)] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[mask:var(--mask-linear-gradient)] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]",
			classChild
		)}
	></div>
	{#if children}
		{@render children()}
	{/if}
</div>
