<script>
	import { navigationOpen } from '$lib/stores/common';
	import { Button } from '../ui/button';

	import * as m from '$paraglide/messages';
</script>

<Button
	size="icon"
	variant="ghost"
	aria-expanded={$navigationOpen}
	aria-controls="navigation"
	on:click={() => navigationOpen.toggle()} 
	class="bg-popover rounded-full text-muted-foreground !transition-all !duration-0 hover:bg-popover/90 hover:text-foreground {$navigationOpen
		? 'scale-[2] bg-transparent text-white !duration-300 hover:bg-transparent hover:text-white'
		: ''}"
	aria-label={m.common_toggleMenu()}
>
	<div class="h-8 w-8 overflow-hidden">
		<svg
			stroke="currentColor"
			fill="none"
			class="hamburger {$navigationOpen ? 'open' : ''}"
			viewBox="-10 -10 120 120"
			width="100%"
			height="100%"
		>
			<path
				class="line transition-colors duration-200"
				stroke-width="8"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
			>
			</path>
		</svg>
	</div>
</Button>

<style lang="scss">
	.hamburger {
		transition:
			translate 0.5s,
			rotate 0.5s;

		.line {
			transition: 0.5s;
			stroke-dasharray: 60 31 60 300;
		}

		&.open {
			translate: 2px -2px;
			rotate: 0.125turn;

			.line {
				stroke-dasharray: 60 105 60 300;
				stroke-dashoffset: -90;
			}
		}
	}
</style>
