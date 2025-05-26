<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import { onMount } from 'svelte';

	type Props = {
		class?: string;
		value?: boolean;
	};

	let { class: _class = '', value: propsValue }: Props = $props();

	// if no value is provided, default to false (and will animate to true onMount)
	let value = $state(propsValue ?? false);

	onMount(() => {
		if (propsValue === undefined) {
			value = true; // animate to true on mount
		}
	});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={cn(
		'icon icon-tabler icons-tabler-outline icon-tabler-circle-check',
		value === false && '',
		value === true && '',
		_class
	)}
>
	<!-- Square around for no reason? -->
	<path stroke="none" d="M0 0h24v24H0z" fill="none" />
	<!-- Circle path -->
	<path
		d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
		style="stroke-dasharray: 1000; stroke-dashoffset: 1000;"
		class={cn(value === true && 'animate-dash')}
	/>
	<!-- Check mark path -->
	<path
		d="M9 12l2 2l4 -4"
		style="stroke-dasharray: 1000; stroke-dashoffset: 1000;"
		class={cn(value === true && 'animate-dash delay-200')}
	/>
</svg>
