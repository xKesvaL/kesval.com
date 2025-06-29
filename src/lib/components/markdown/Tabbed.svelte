<script lang="ts">
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren<{
		level?: number;
	}>;

	let { children, level = 1 }: Props = $props();
</script>

<div class="mt-2" style={`padding-left: calc(${level * 2}rem + 3px)`}>
	{#if children}
		{@render children()}
	{/if}
</div>
