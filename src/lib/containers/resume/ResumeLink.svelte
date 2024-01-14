<script lang="ts">
	import { cn } from '$lib/utils/ui';

	export let href: string | undefined = undefined;
	export let classes = '';
</script>

<div class="flex items-center gap-4">
	<div class={cn('icon h-10 w-10 overflow-hidden rounded-full p-2', classes)}>
		<slot name="icon" />
	</div>
	<div class="flex h-full flex-col justify-between">
		<span class="text-xs leading-none text-muted-foreground">
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
