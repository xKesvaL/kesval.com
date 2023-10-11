<script lang="ts">
	import type { ThemeColor } from '$lib/types';

	export let color: ThemeColor = 'primary';
	export let href: null | string = null;
	export let type: 'button' | 'reset' | 'submit' = 'button';
	export let disabled: boolean = false;
	export let style: 'outline' | 'solid' = 'solid';
</script>

<svelte:element class="button {color} {style}" {disabled} this={href ? 'a' : 'button'} {type}>
	{#if $$slots.icon}
		<span>
			<slot name="icon" />
		</span>
	{/if}
	<slot />
</svelte:element>

<style lang="scss">
	.btn {
		gap: 0.5rem;

		span {
			height: 24px;
			width: 24px;
		}
	}
</style>
