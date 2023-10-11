<!--suppress CheckEmptyScriptTag -->
<script lang="ts">
	import { browser } from '$app/environment';
	import ArrowTop from '$lib/icons/IconArrowTop.svelte';
	import { afterUpdate } from 'svelte';
	import { fly } from 'svelte/transition';
	import { t } from 'svelte-i18n';

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
		aria-label="{$t('std.scrollTo')} {$t('std.top')}"
		class="scroll-button"
		id="back-to-top"
		in:fly={{ delay: 300, duration: 300, y: 50 }}
		on:click={() => scrollToTop()}
		out:fly={{ duration: 300, y: 50 }}
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
					stroke="hsl(var(--primary-500))"
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
		bottom: 1rem;
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
			background: hsl(var(--base-200));

			.arrow {
				position: absolute;
				z-index: 50;
				width: 100%;
				height: 100%;
				padding: 1.25rem;
				color: hsl(var(--base-900));
				transition: 0.3s ease-in-out;
			}

			svg {
				fill: hsl(var(--base-200));
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
