<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren<{
		href?: string;
		icon: Icon;
	}>;

	let { children, icon: LinkIcon, href }: Props = $props();
</script>

<svelte:element this={href ? 'a' : 'div'} class="group flex items-center gap-2" {href}>
	<div
		class="border-primary text-foreground bg-primary/5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border p-1.5"
	>
		<LinkIcon class="size-6" />
	</div>
	<span
		class={`flex items-center gap-2 text-sm transition-all md:text-base ${href ? 'underline underline-offset-2 group-hover:underline-offset-4' : ''}`}
	>
		{#if children}
			{@render children()}
		{/if}
	</span>
</svelte:element>
