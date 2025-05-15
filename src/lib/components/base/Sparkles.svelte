<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import SparkleSingle from './SparkleSingle.svelte';
	import type { WithChildren } from 'bits-ui';

	interface SparkleType {
		id: string;
		createdAt: number;
		color: string;
		size: string;
		style: { top: string; left: string };
	}

	type Props = WithChildren<{
		color: 'primary';
		highlight: 'off' | 'primary';
		size: 10 | 20 | 30;
	}>;

	let { color = 'primary', highlight = 'off', size = 20, children }: Props = $props();

	const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

	const generateSparkle = (): SparkleType => {
		return {
			id: String(random(10000, 99999)),
			createdAt: Date.now(),
			color: `var(--color-${color})`,
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
</script>

<span class="relative isolate inline-block">
	{#each sparkles as sparkle (sparkle.id)}
		<SparkleSingle color={sparkle.color} size={sparkle.size} style={sparkle.style} />
	{/each}
	<span
		class="relative z-50"
		style={highlight !== 'off' ? `color: var(--color-${highlight}); font-weight: 700;` : ''}
	>
		{#if children}
			{@render children()}
		{/if}
	</span>
</span>
