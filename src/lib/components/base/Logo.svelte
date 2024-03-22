<script lang="ts">
	import { BRAND } from '$lib/config';

	export let animated = true;

	export let size: 'large' | 'normal' | 'semi-large' = 'normal';

	export let scaleOrigin: 'center' | 'left' = 'center';

	export let repeat = false;
</script>

<!-- ! IF YOU HAVE TROUBLE : 
	If the logo doesn't look right, play with the svg width until it fits (don't overdo it!)
	If the logo fits but is not centered or cut off on the left side, play with the tspan x value
	It's roughly 5px per 20px of the svg width that you should change the tspan x value by
-->
<div class="logo {size} {scaleOrigin}" class:animated class:repeat>
	<svg
		class="flex h-full max-h-7 w-auto justify-center text-center"
		fill="none"
		height="60"
		viewBox="0 0 200 60"
		width="250"
		xmlns="http://www.w3.org/2000/svg"
	>
		<text class="text"
			><tspan x="-20" y="50"
				><tspan class="tspan">
					{BRAND.name}
				</tspan></tspan
			></text
		>
	</svg>
</div>

<style lang="scss">
	.logo {
		--logo-text-color: hsl(var(--base-600));
		--logo-text-color-mid: hsl(var(--base-800));
		--logo-text-color-end: hsl(var(--primary-900));
		display: flex;
		height: 100%;
		width: auto;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		transform-origin: center;

		&.semi-large {
			scale: 1.5;
		}

		&.large {
			scale: 2;
		}

		&.left {
			transform-origin: left;
		}

		svg {
			.text {
				fill: var(--logo-text-color-end);
				transition: 0.3s ease-in-out;

				.tspan {
					font-family: var(--ft-title);
					font-size: 4rem;
					font-weight: 900;
				}
			}
		}

		&.animated {
			svg {
				.text {
					stroke-width: 1;
					animation: svg-text-stroke 2s;
				}
			}
		}

		&.animated.repeat {
			svg {
				.text {
					animation-iteration-count: infinite;
					animation-direction: alternate;
				}
			}
		}
	}

	@keyframes svg-text-stroke {
		0% {
			fill: transparent;
			stroke: var(--logo-text-color);
			stroke-dashoffset: 25%;
			stroke-dasharray: 0 50%;
			stroke-width: 2;
		}
		60% {
			fill: transparent;
			stroke: var(--logo-text-color-mid);
		}
		70% {
			fill: transparent;
			stroke: var(--logo-text-color);
			stroke-width: 3;
		}
		90% {
			fill: var(--logo-text-color-end);
			stroke: transparent;
			stroke-dashoffset: -25%;
			stroke-dasharray: 100% 0;
			stroke-width: 0;
		}
	}
</style>
