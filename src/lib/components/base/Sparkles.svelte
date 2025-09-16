<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import SparkleSingle from './SparkleSingle.svelte';
	import type { WithChildren } from 'bits-ui';
	import { cn } from '$lib/utils/ui';

	interface SparkleType {
		id: string;
		createdAt: number;
		color: string;
		colorBis: string;
		size: string;
		style: { top: string; left: string };
	}

	type Props = WithChildren<{
		color?: 'primary' | 'special' | (string & {});
		highlight?: 'off' | 'primary' | (string & {});
		size?: 10 | 20 | 30;
		class?: string;
		style?: string;
	}>;

	let {
		color = 'primary',
		highlight = 'off',
		size = 20,
		children,
		class: _class,
		style
	}: Props = $props();

	let sparkleColor = $derived.by(() => {
		switch (color) {
			case 'primary':
				return 'var(--color-primary)';
			case 'special':
				return 'var(--color-special)';

			default:
				return color;
		}
	});

	const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

	const generateSparkle = (): SparkleType => {
		return {
			id: String(random(10000, 99999)),
			createdAt: Date.now(),
			color: sparkleColor,
			colorBis: `color-mix(in oklab, ${sparkleColor}, black 25%)`,
			size: random(size, size * 2).toString(),
			style: {
				// Pick a random spot in the available space
				top: random(-30, 100) + '%',
				left: random(-10, 100) + '%'
			}
		};
	};

	let sparkles = $state<SparkleType[]>([]);
	let sparklesInterval = $state<NodeJS.Timeout>();

	onMount(() => {
		sparklesInterval = setInterval(() => {
			const now = Date.now();
			const sparkle = generateSparkle();
			const nextSparkles = sparkles.filter((sparkle) => {
				const delta = now - sparkle.createdAt;
				return delta < 2000;
			});
			nextSparkles.push(sparkle);
			sparkles = nextSparkles;
		}, 500);
	});

	onDestroy(() => {
		clearInterval(sparklesInterval);
	});

	let highlightClass = $derived.by(() => {
		switch (highlight) {
			case 'off':
				return '';
			case 'primary':
				return 'from-primary bg-gradient-to-br to-purple-600 bg-clip-text text-transparent';

			default:
				return `text-[var(--${highlight})]`;
		}
	});
</script>

<span class={cn('relative isolate inline-block', _class)} {style}>
	{#each sparkles as sparkle (sparkle.id)}
		<SparkleSingle
			color={sparkle.color}
			colorBis={sparkle.colorBis}
			size={sparkle.size}
			style={sparkle.style}
		/>
	{/each}
	<span class={cn('relative z-0', highlightClass)}>
		{#if children}
			{@render children()}
		{/if}
	</span>
</span>
