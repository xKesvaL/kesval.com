<script lang="ts">
	export let href: string | undefined = '';
</script>

<svelte:element this={href ? 'a' : 'div'} class="group flex items-center gap-2" {href}>
	<div
		class="h-8 w-8 rounded-full border border-primary bg-primary/50 p-1.5 text-primary-foreground"
	>
		<slot name="icon" />
	</div>
	<span
		class={`flex items-center gap-2 transition-all ${href ? 'underline underline-offset-2 group-hover:underline-offset-4' : ''}`}
	>
		<slot />
	</span>
</svelte:element>
