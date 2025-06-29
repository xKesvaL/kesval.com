<script lang="ts">
	import { brand } from '$lib/utils/config';
	import * as m from '$paraglide/messages';
	import { hover } from 'motion';
	import Button from '../ui/button/button.svelte';
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils/ui';
	import { localizeHref } from '$paraglide/runtime';
	import { route } from '$lib/ROUTES';

	let root: HTMLDivElement;
	let hasBeenHovered = $state(false);

	onMount(() => {
		hover(root, () => {
			hasBeenHovered = true;
		});
	});
</script>

<div class="group relative isolate hidden md:block" bind:this={root}>
	<div
		class={cn(
			'bg-primary absolute top-0.5 right-0.5 z-10 size-3 animate-ping rounded-full duration-1500',
			hasBeenHovered && 'opacity-0 duration-1000'
		)}
	></div>
	<div
		class={cn(
			'bg-primary absolute top-0.5 right-0.5 z-10 size-3 rounded-full',
			hasBeenHovered && 'opacity-0 duration-1000'
		)}
	></div>
	<div
		class="bg-secondary border-primary relative flex h-16 w-16 items-center justify-between gap-4 overflow-hidden rounded-4xl border p-2 transition-all duration-500 group-hover:w-112"
	>
		<enhanced:img src="$assets/logo.png" alt={m['kesval_logo']()} class="size-12 rounded-full" />

		<div
			class="absolute right-2 flex h-12 w-92 origin-right translate-x-full justify-between gap-4 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100"
		>
			<div class="flex flex-col justify-between">
				<h3 class="text-xl leading-tight">
					{brand.name}
				</h3>
				<p class="text-sm">
					{m['brand.doing']()}
				</p>
			</div>
			<Button class="button h-12 rounded-3xl" href={localizeHref(route('/contact'))}>
				{m['common.cta_self']()}
			</Button>
		</div>
	</div>
</div>
