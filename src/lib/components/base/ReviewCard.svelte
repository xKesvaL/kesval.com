<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { Icon } from '@tabler/icons-svelte';

	type Props = {
		img: string | Icon;
		name: string;
		username: string;
		description: string;
	};

	let { img: Image, name, username, description }: Props = $props();
</script>

<div
	class={cn(
		'relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4 transition hover:scale-105'
	)}
>
	<div class="flex flex-row items-center gap-4">
		<div class="flex size-10 items-center justify-center overflow-hidden rounded-full border">
			{#if typeof Image === 'string'}
				<img class="h-full w-full" alt="" src={Image} />
			{:else}
				<Image class="size-6" />
			{/if}
		</div>
		<div class="flex flex-col justify-between">
			<span class="text-sm font-medium">
				{name}
			</span>
			<p class="text-xs font-medium">{username}</p>
		</div>
	</div>
	<blockquote class="mt-2 text-sm">{description}</blockquote>
</div>
