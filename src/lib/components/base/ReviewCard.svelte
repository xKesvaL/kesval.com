<script lang="ts">
	import { cn } from '$lib/utils/ui';

	type Props = {
		img: string;
		name: string;
		username: string;
		description: string;
	};

	let { img, name, username, description }: Props = $props();
</script>

<div
	class={cn(
		'relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4 transition hover:scale-105'
	)}
>
	<div class="flex flex-row items-center gap-4">
		<img class="rounded-full" width="32" height="32" alt="" src={img} />
		<div class="flex flex-col">
			<span class="text-sm font-medium">
				{name}
			</span>
			<p class="text-xs font-medium">{username}</p>
		</div>
	</div>
	<blockquote class="mt-2 text-sm">{description}</blockquote>
</div>
