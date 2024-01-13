<script lang="ts">
	import { cn } from '$lib/utils/ui';

	export let href: string | undefined = undefined;
	export let classes: string = '';
</script>

<div class="flex items-center gap-4">
	<div class={cn('rounded-full w-10 h-10 overflow-hidden icon p-2', classes)}>
		<slot name="icon" />
	</div>
	<div class="flex justify-between flex-col h-full">
		<span class="text-muted-foreground text-xs leading-none">
			<slot name="label" />
		</span>
		<svelte:element
			this={href ? 'a' : 'p'}
			{href}
			target="_blank"
			class="text-sm leading-none {href ? 'underline' : ''}"
		>
			<slot name="value" />
		</svelte:element>
	</div>
</div>

<style lang="scss">
	.icon {
		color: hsl(var(--primary-900));
		background: hsl(var(--primary-200) / 0.5);
	}
</style>
