<script lang="ts">
	import type { WithChildren } from 'bits-ui';
	import { cn } from '$lib/utils/ui';
	type Direction = 'left' | 'up';

	type Props = WithChildren<{
		direction?: Direction;
		pauseOnHover?: boolean;
		reverse?: boolean;
		fade?: boolean;
		innerClassName?: string;
		numberOfCopies?: number;
		class?: string;
		duration?: number;
		gap?: number;
	}>;

	let {
		direction = 'left',
		pauseOnHover = false,
		reverse = false,
		fade = false,
		innerClassName = '',
		numberOfCopies = 5,
		duration = 10,
		gap = 1.25,
		class: className,
		children
	}: Props = $props();
</script>

<div
	class={cn('group flex gap-[var(--marquee-gap,1rem)] overflow-hidden py-1', className, {
		'flex-row': direction === 'left',
		'flex-col': direction !== 'left'
	})}
	style={`mask-image: ${
		fade
			? `linear-gradient(${
					direction === 'left' ? 'to right' : 'to bottom'
				}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
			: 'none'
	};
	  -webkit-mask-image: ${
			fade
				? `linear-gradient(${
						direction === 'left' ? 'to right' : 'to bottom'
					}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
				: 'none'
		};
    --marquee-duration: ${duration}s;
		--marquee-gap: ${gap}rem;
	  `}
>
	{#each Array(numberOfCopies).fill(0) as _, i (i)}
		<div
			class={cn(
				'flex shrink-0 justify-around gap-[var(--marquee-gap,1rem)] ',
				direction === 'left' ? 'animate-marquee-left flex-row' : 'animate-marquee-up flex-col',
				pauseOnHover && 'group-hover:[animation-play-state:paused]',
				reverse && 'direction-reverse',
				innerClassName
			)}
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{/each}
</div>
