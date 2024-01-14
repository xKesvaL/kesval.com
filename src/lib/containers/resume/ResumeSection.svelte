<script lang="ts">
	import { cn } from '$lib/utils/ui';

	export let title: string;
	export let classes: string = '';
</script>

<section
	class={cn(
		'relative ml-6 flex w-full flex-col gap-2 border-l pb-4 pl-6 pr-10 last:border-l-0 md:-mb-8 md:ml-0 md:mt-4 md:px-12 md:pb-12',
		classes
	)}
>
	<div
		class="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-popover shadow-md"
	>
		<div class="h-2 w-2 rounded-full bg-primary"></div>
	</div>
	<h2 class="col-span-full -translate-y-[10%] text-2xl">
		{title}
	</h2>
	<slot />
</section>
