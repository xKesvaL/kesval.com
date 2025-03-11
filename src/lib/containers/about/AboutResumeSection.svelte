<script lang="ts">
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren<{
		title: string;
	}>;

	let { title, children }: Props = $props();
</script>

<div class="flex w-full flex-col gap-4">
	<h3 class="border-primary w-full border-b-2 pb-2 text-2xl font-medium">
		{title}
	</h3>
	{#if children}
		{@render children()}
	{/if}
</div>
