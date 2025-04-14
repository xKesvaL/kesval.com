<script lang="ts">
	import { cn } from '$lib/utils/ui';
	interface Props {
		class?: string;
		showRadialGradient?: boolean;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { class: _class = '', showRadialGradient = true, children, ...rest }: Props = $props();
</script>

<div class={cn('bg-background relative h-screen', _class)} {...rest}>
	<div class="absolute inset-0 overflow-hidden opacity-50">
		<!--  I'm sorry but this is what peak developer performance looks like  trigger warning -->
		<div
			class={cn(
				`
    aurora
    after:animate-aurora
    pointer-events-none
    absolute
    -inset-[10px]
    blur-md
    after:absolute
    after:inset-0
    after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed]
    after:content-[""]`,
				showRadialGradient &&
					`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
			)}
		></div>
	</div>
	<div class="z-30">
		{@render children?.()}
	</div>
</div>

<style>
	.aurora {
		--aurora: repeating-linear-gradient(
			100deg,
			var(--color-indigo-400) 10%,
			var(--color-purple-200) 15%,
			var(--color-indigo-200) 20%,
			var(--color-purple-200) 25%,
			var(--color-indigo-400) 30%
		);

		--white-gradient: repeating-linear-gradient(
			100deg,
			var(--color-background) 0%,
			var(--color-background) 4%,
			transparent 8%,
			transparent 10%,
			var(--color-background) 13%
		);
	}
</style>
