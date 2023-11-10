<script lang="ts">
	import type { ThemeColor } from '$lib/typings/standard';

	export let firstColor: ThemeColor = 'primary';
	export let secondColor: ThemeColor = 'accent';

	export let delay = 0;
	export let duration = 10;
</script>

<div
	class="card relative isolate overflow-hidden rounded-lg p-4 shadow-lg transition-all hover:-translate-y-1 hover:bg-muted/40"
	style="--cdg-fc: var(--{firstColor}); --cdg-sc: var(--{secondColor}); --cdg-d: {delay}s; --cdg-du: {duration}s;"
>
	<slot />
</div>

<style lang="scss">
	.card {
		z-index: 0;

		&::before {
			content: '';
			position: absolute;
			inset: -400%;
			border-radius: inherit;
			/* make sure the gradient is behind the content */
			z-index: -1;
			background: linear-gradient(
					45deg,
					hsl(var(--cdg-fc) / 0.03) 0%,
					hsl(var(--cdg-sc) / 0.03) 25%,
					hsl(var(--cdg-fc) / 0.03) 50%,
					hsl(var(--cdg-sc) / 0.03) 75%,
					hsl(var(--cdg-fc) / 0.03) 100%
				),
				hsl(var(--base-200) / 0.7);
			background-size: 400% 400%;
			animation: cdg-anim var(--cdg-du) alternate infinite ease both var(--cdg-d);
		}
		// generate a cool gradient using the two colors
		// put 4 colors in the gradient to make it more interesting
	}

	@keyframes cdg-anim {
		0%,
		100% {
			background-position: 0% 50%;
			transform: rotate(0deg);
		}
		50% {
			background-position: 100% 50%;
			transform: rotate(720deg);
		}
	}
</style>
