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

<div
	class={cn(
		'transition-bg bg-background relative flex h-[100vh] flex-col items-center justify-center',
		_class
	)}
	{...rest}
>
	<div class="absolute inset-0 overflow-hidden">
		<!--  I'm sorry but this is what peak developer performance looks like  trigger warning -->
		<div
			class={cn(
				`
    aurora
    after:animate-aurora
    pointer-events-none
    absolute
    -inset-[10px]
    [background-image:var(--white-gradient),var(--aurora)]
    [background-size:300%,_200%]
    [background-position:50%_50%,50%_50%]
    opacity-50 blur-[10px] invert filter
    will-change-transform
    after:absolute
    after:inset-0
    after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed]
    after:mix-blend-difference
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
			var(--color-background) 7%,
			transparent 10%,
			transparent 12%,
			var(--color-background) 16%
		);
	}
</style>
