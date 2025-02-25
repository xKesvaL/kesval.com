<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';
	import NavigationButton from './NavigationButton.svelte';
	import { navigation } from '$lib/stores/common.svelte';
	import { innerHeight } from 'svelte/reactivity/window';
	import { quintInOut } from 'svelte/easing';

	const baseFlyParams = {
		y: (innerHeight.current || 0) * -1,
		opacity: 1,
		easing: quintInOut
	} satisfies FlyParams;
</script>

<nav class="position-nav h-nav kcontainer fixed z-50">
	<div class="flex h-full w-full items-center justify-between rounded-[15px]">
		<enhanced:img src="$assets/logo.png" alt="An alt text" class="size-12 rounded-lg" />
		<NavigationButton />
	</div>
</nav>

<!-- This is the part that comes down -->
<div>
	{#if navigation.state === 'open'}
		<div
			transition:fly={{
				...baseFlyParams
			}}
			class="bg-muted fixed inset-0"
		>
			HELLO
		</div>
		<div
			transition:fly={{
				...baseFlyParams,
				delay: 150
			}}
			class="bg-primary fixed top-0 right-0 bottom-0 w-1/3"
		></div>
	{/if}
</div>
