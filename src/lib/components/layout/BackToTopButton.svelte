<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
	import { browser } from '$app/environment';
	import ArrowTop from '$lib/icons/IconArrowTop.svelte';
	import { afterUpdate } from 'svelte';
	import { fly } from 'svelte/transition';
	import { bot } from '$lib/stores/bot';

	import * as m from '$paraglide/messages';

	let scrollY: number;
	let scrollPercent: number;
	let innerHeight: number;
	let scrollHeight: number;
	const topPercent = 0.025;
	let pageEndTopBound: number;

	$: if (browser) {
		scrollPercent = scrollY / pageEndTopBound;
		pageEndTopBound = scrollHeight - innerHeight;
	}

	afterUpdate(() => {
		scrollHeight = document.documentElement.scrollHeight;
	});

	const scrollToTop = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};
</script>

<svelte:window bind:innerHeight bind:scrollY />

{#if scrollPercent > topPercent}
	<button
		aria-label="{m.std_scrollTo()} {m.std_top()}"
		class="scroll-button {$bot.open ? 'sm:bottom-[38rem]' : 'bottom-4'}"
		id="back-to-top"
		transition:fly={{ duration: 200, y: 20 }}
		on:click={() => scrollToTop()}
	>
		<div class="inner">
			<div class="arrow">
				<ArrowTop />
			</div>

			<svg height="60" style="transform: rotate(-90deg);stroke-dasharray: 160;" width="60">
				<circle
					cx="30"
					cy="30"
					r="24"
					stroke="hsl(var(--primary))"
					stroke-width="3"
					style="stroke-dashoffset: {160 - 160 * scrollPercent};"
				/>
			</svg>
		</div>
	</button>
{/if}

<style lang="scss">
	.scroll-button {
		view-transition-name: back-to-top;
		position: fixed;
		display: grid;
		right: 1rem;
		z-index: 5;
		border-radius: 100vw;
		background: transparent;
		height: auto;
		padding: 0;
		width: 3.75rem;
		height: 3.75rem;

		.inner {
			backdrop-filter: blur(0.5rem);
			border-radius: 9999px;
			grid-column-start: 1;
			grid-row-start: 1;
			transition: 0.3s ease-in-out;
			position: relative;
			background: hsl(var(--muted));

			.arrow {
				position: absolute;
				z-index: 50;
				width: 100%;
				height: 100%;
				padding: 1.125rem;
				color: hsl(var(--foreground));
				transition: 0.3s ease-in-out;
			}

			svg {
				fill: hsl(var(--muted));
				fill-opacity: 1;
				transition: 0.3s ease-in-out;
			}
		}

		&:hover {
			.inner {
				svg {
					fill-opacity: 0.2;
				}
			}
		}
	}
</style>
