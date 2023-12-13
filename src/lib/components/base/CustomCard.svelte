<script lang="ts">
	import type { ThemeColor, ThemeSize } from '$lib/typings/standard';
	import type { MouseEventHandler } from 'svelte/elements';

	export let href: string | undefined = undefined;
	export let classes = '';
	export let scale = false;
	export let color: ThemeColor = 'primary';
	export let rounding: ThemeSize = 'md';
	export let vertical = true;
	export let justify: 'center' | 'end' | 'start' = 'center';
	export let align: 'center' | 'end' | 'start' = 'start';
	export let gap: ThemeSize = 'md';

	let el: HTMLElement;

	$: el?.style.setProperty('--card-drop-color', `hsl(var(--${color}-300) / 0.3)`);

	const onHover: MouseEventHandler<HTMLElement> = (ev) => {
		const target = ev.currentTarget;
		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		target.style.setProperty('--card-drop-x', `${x}px`);
		target.style.setProperty('--card-drop-y', `${y}px`);
	};
</script>

<svelte:element
	bind:this={el}
	class="card rounding-{rounding}"
	class:scale
	{href}
	on:mousemove={onHover}
	role="region"
	this={href ? 'a' : 'div'}
>
	<div
		class="card-bg-img justify-{justify} align-{align} gap-{gap} {classes} "
		class:horizontal={!vertical}
	>
		<slot />
	</div>
</svelte:element>

<style lang="scss">
	.card {
		--card-drop-x: 0;
		--card-drop-y: 0;

		--card-drop-color: hsl(var(--primary-300) / 0.3);

		display: inline-flex;
		flex-direction: column;
		transition: 0.2s;
		padding: 0;

		&.rounding-sm {
			border-radius: 0.25rem;
		}

		&.rounding-md {
			border-radius: 0.5rem;
		}

		&.rounding-lg {
			border-radius: 1rem;
		}

		&:hover {
			&.scale {
				transform: scale(1.02);
			}

			border-color: hsl(var(--base-900) / 0.7);
		}

		&-bg-img {
			padding: 1.5rem;
			transition: 0.2s;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;

			&.justify {
				&-start {
					justify-content: flex-start;
				}

				&-center {
					justify-content: center;
				}

				&-end {
					justify-content: flex-end;
				}
			}

			&.align {
				&-start {
					align-items: flex-start;
				}

				&-center {
					align-items: center;
				}

				&-end {
					align-items: flex-end;
				}
			}

			&.gap {
				&-sm {
					gap: 0.5rem;
				}

				&-md {
					gap: 1rem;
				}

				&-lg {
					gap: 1.5rem;
				}
			}

			&.horizontal {
				flex-direction: row;
			}

			&:hover {
				background-color: hsl(var(--base-200) / 0.3);
				background-image: radial-gradient(
					circle at var(--card-drop-x) var(--card-drop-y),
					var(--card-drop-color),
					transparent
				);
			}
		}
	}
</style>
