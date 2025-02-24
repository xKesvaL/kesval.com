<script lang="ts">
	import { navigation } from '$lib/stores/common.svelte';
	import { Button } from '../ui/button';

	const toggleNavigation = () => {
		navigation.state = navigation.state === 'open' ? 'closed' : 'open';
	};
</script>

<Button
	size="icon"
	variant="ghost"
	aria-expanded={navigation.state === 'open'}
	aria-controls="navigation"
	onclick={toggleNavigation}
	class="cursor-pointer {navigation.state === 'open' ? '' : ''}"
	aria-label={'Toggle navigation'}
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
			class="line transition-all duration-500"
			stroke-width="6"
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
	}

	.hamburger.open {
		translate: 2px -2px;
		rotate: 0.125turn;
	}

	.hamburger.open .line {
		stroke-dasharray: 60 105 60 300;
		stroke-dashoffset: -90;
	}
</style>
