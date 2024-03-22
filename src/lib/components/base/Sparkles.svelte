<script lang="ts">
	import SparklesSingle from '$lib/components/base/SparklesSingle.svelte';
	import { onDestroy, onMount } from 'svelte';

	interface SparkleType {
		id: string;
		createdAt: number;
		color: string;
		size: string;
		style: { top: string; left: string };
	}

	export let color: 'primary' | 'secondary' | 'accent' = 'accent';
	export let highlight: 'off' | 'primary' | 'secondary' | 'accent' = 'off';
	export let size: 10 | 20 | 30 = 20;
	const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

	const generateSparkle = (): SparkleType => {
		return {
			id: String(random(10000, 99999)),
			createdAt: Date.now(),
			color: `hsl(var(--${color}))`,
			size: random(size, size * 2).toString(),
			style: {
				// Pick a random spot in the available space
				top: random(-10, 100) + '%',
				left: random(-10, 110) + '%'
			}
		};
	};

	let sparkles: SparkleType[] = [];
	// eslint-disable-next-line no-undef
	let sparklesInterval: NodeJS.Timeout;

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

<span class="sparkle-wrapper -z-50">
	{#each sparkles as sparkle (sparkle.id)}
		<SparklesSingle color={sparkle.color} size={sparkle.size} style={sparkle.style} />
	{/each}
	<span
		class="slot-wrapper relative"
		style={highlight !== 'off' ? `color: hsl(var(--${highlight})); font-weight: 700;` : ''}
	>
		<slot />
	</span>
</span>

<style lang="scss">
	.sparkle-wrapper {
		position: relative;
		display: inline-block;

		.slot-wrapper {
			position: relative;
		}
	}
</style>
