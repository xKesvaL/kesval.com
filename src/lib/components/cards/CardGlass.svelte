<script lang="ts">
	import type { ThemeColor } from '$lib/typings/standard';
	import type { MouseEventHandler } from 'svelte/elements';

	export let color: ThemeColor = 'primary';
	export let href: string | null = null;

	export let classes = '';
	export let classesBg = '';

	export let scale = true;

	let el: HTMLElement;

	$: if (el) {
		el.style.setProperty('--drop-color', `var(--${color}-300)`);
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
	class="card flex h-full flex-col overflow-hidden rounded-xl border border-transparent transition-all hover:border-foreground/25 {classes}"
	class:scale
	role={href ? 'link' : 'none'}
	on:mousemove={onHover}
>
	<div class="card-bg-img flex h-full flex-col p-4 transition-all {classesBg}">
		<slot />
	</div>
</svelte:element>

<style lang="scss">
	.card {
		--drop-x: 0;
		--drop-y: 0;

		--drop-color: hsl(var(--primary-300) / 0.3);

		background: hsl(var(--base-300) / 0.25);

		&:hover {
			transform: scale(1.02);
		}

		&-bg-img {
			&:hover {
				background-color: rgba(var(--base-200-rgb), 0.3);
				background-image: radial-gradient(
					circle at var(--drop-x) var(--drop-y),
					hsl(var(--drop-color) / 0.3),
					transparent
				);
			}
		}
	}
</style>
