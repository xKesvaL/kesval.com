<script lang="ts">
	import { bot } from '$lib/stores/bot';
	import { onDestroy } from 'svelte';
	import Image from '../base/Image.svelte';
	import IconX from '$lib/icons/IconX.svelte';
	import { Button } from '../ui/button';
	import { fly } from 'svelte/transition';

	onDestroy(() => {
		$bot.history = [];
	});
</script>

{#if $bot.open}
	<div
		class="fixed inset-0 z-0 overflow-hidden border-2 border-primary backdrop-blur-lg sm:bottom-4 sm:left-auto sm:right-4 sm:top-auto sm:h-[36rem] sm:w-80 sm:rounded-lg"
		transition:fly={{ y: 20, duration: 300, opacity: 0 }}
	>
		<header class="grid grid-cols-[auto,1fr,auto] items-center gap-4 bg-primary p-2">
			<div class="ml-2 h-12 w-12">
				<Image src="/images/logos/logo.png" alt="KesvaL Logo" />
			</div>
			hi hader
			<Button
				size="icon"
				variant="ghost"
				class="p-1 hover:bg-transparent hover:text-primary-foreground"
				on:click={bot.toggle}
			>
				<IconX />
			</Button>
		</header>
		<div class="p-4">hi iam bot</div>
	</div>
{/if}

<style lang="scss">
	div.fixed {
		background: linear-gradient(135deg, hsl(var(--primary-500) / 0.15), hsl(var(--primary-100) / 0)),
			linear-gradient(225deg, hsl(var(--secondary-500) / 0.1), transparent),
			linear-gradient(0deg, hsl(var(--secondary-500) / 0.05), transparent),
			radial-gradient(hsl(var(--primary-100) / 0.9), hsl(var(--primary-100) / 0.9));
	}
</style>
