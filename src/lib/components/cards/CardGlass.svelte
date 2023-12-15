<script lang="ts">
	import type { ThemeColor } from '$lib/typings/standard';
	import type { MouseEventHandler } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export let color: ThemeColor = 'primary';
	export let href: string | null = null;

	export let classes = '';
	export let classBg = '';

	export let styleBg = '';

	export let scale = 1.02;
	export let defaultBorder = true;
	export let fill: 'base' | 'bento' | 'full' = 'base';

	export let strength = 0.15;

	let el: HTMLElement;

	$: if (el) {
		el.style.setProperty('--drop-color', `var(--${color})`);
	}

	const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
		const target = ev.currentTarget;

		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		target.style.setProperty('--drop-x', `${x}px`);
		target.style.setProperty('--drop-y', `${y}px`);
	};
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	bind:this={el}
	{href}
	class={twMerge(
		'card flex h-full flex-col overflow-hidden rounded-xl border transition-all hover:border-foreground/30',
		defaultBorder ? 'border border-foreground/10' : 'border-transparent',
		`fill-${fill}`,
		classes,
		$$restProps.class
	)}
	role={href ? 'link' : 'none'}
	on:mousemove={onHover}
	style="--cg-sc: {scale}; --cg-st: {strength};"
>
	<div
		class={twMerge('card-bg-img flex h-full flex-col p-4 transition-all', classBg)}
		style={styleBg}
	>
		<slot />
	</div>
</svelte:element>

<style lang="scss">
	.card {
		--drop-x: 0;
		--drop-y: 0;

		--drop-color: var(--primary);

		--cg-st: 0.15;
		--cg-st-base: 0.3;

		background: hsl(var(--base-300) / 0.25);

		&.fill-full {
			background: hsl(var(--drop-color));
			border-color: hsl(var(--drop-color));
			color: white;
		}

		&.fill-bento {
			background: hsl(var(--base-300) / 0.4);
			border-color: hsl(var(--base-300) / 0.4);
			color: white;
		}

		&:hover {
			transform: scale(var(--cg-sc));
		}

		&-bg-img {
			&:hover {
				background-color: rgba(var(--base-200-rgb), 0.3);
				background-image: radial-gradient(
					circle at var(--drop-x) var(--drop-y),
					hsl(var(--drop-color) / var(--cg-st)),
					transparent
				);
			}
		}
	}
</style>
