<script lang="ts">
	import { navigation } from '$lib/stores/common.svelte';
	import { Button } from '../ui/button';

	const toggleNavigation = () => {
		navigation.state = navigation.state === 'open' ? 'closed' : 'open';
	};

	let { ...props } = $props();
</script>

<Button
	size="icon"
	variant="ghost"
	aria-expanded={navigation.state === 'open'}
	aria-controls="navigation"
	onclick={toggleNavigation}
	class="size-10 cursor-pointer {navigation.state === 'open'
		? 'hover:bg-muted/10'
		: 'bg-muted border'}"
	aria-label={'Toggle navigation'}
	{...props}
>
	<svg
		stroke="currentColor"
		fill="none"
		class="hamburger {navigation.state} size-10!"
		viewBox="-10 -10 120 120"
		width="32px"
		height="32px"
	>
		<path
			class="line"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
		>
		</path>
	</svg>
</Button>

<style>
	.hamburger {
		transition:
			translate 0.5s,
			rotate 0.5s;
	}

	.line {
		stroke-dasharray: 60 31 60 300;
		/* Transition all 0.5s, delay colors by 150ms */
		transition:
			all 0.5s,
			color 0.5s 0.15s;
	}

	.hamburger.open {
		translate: 2.5px -2.5px;
		rotate: 0.125turn;
		color: var(--color-primary-foreground);
	}

	.hamburger.open .line {
		stroke-dasharray: 60 105 60 300;
		stroke-dashoffset: -90;
	}
</style>
