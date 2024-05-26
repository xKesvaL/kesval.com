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

		background: hsl(var(--primary) / 0.1);

		&.fill-full {
			background: radial-gradient(
				circle at 50% 50%,
				hsl(var(--drop-color) / 0.7),
				hsl(var(--drop-color) / 0.5)
			);
			border-color: transparent;
			color: white;
		}

		&.fill-bento {
			background: hsl(var(--primary) / 0.1);
			border-color: hsl(var(--primary) / 0.1);
			color: white;
		}

		&:hover {
			transform: scale(var(--cg-sc));
		}

		&-bg-img {
			&:hover {
				background-color: hsl(var(--muted), 0.3);
				background-image: radial-gradient(
					circle at var(--drop-x) var(--drop-y),
					hsl(var(--drop-color) / var(--cg-st)),
					transparent
				);
			}
		}
	}
</style>
