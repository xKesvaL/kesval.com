<script lang="ts">
	import { dev } from '$app/environment';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import { animationControls } from '$lib/stores/animation.svelte';
	import { cn } from '$lib/utils/ui';
	import {
		IconPlayerPlay,
		IconX,
		IconWand,
		IconArrowDown,
		IconArrowUp,
		IconArrowLeft,
		IconArrowRight
	} from '@tabler/icons-svelte';
	import { animate, press } from 'motion';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Slider } from '../ui/slider';
	import { onMount } from 'svelte';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';

	// Animation settings
	let animDirection = $state('bottom');

	function reloadAllAnimations() {
		const elements =
			(Array.from(document.querySelectorAll('.animate-appear')) as HTMLElement[]) || [];

		if (elements.length === 0) {
			return;
		}

		elements.forEach((element, i) => {
			// Reset element state
			element.style.opacity = '0';

			// Apply different reset based on animation type
			switch (animDirection) {
				case 'bottom':
					element.style.transform = `translateY(${animationControls.distance}px)`;
					break;
				case 'top':
					element.style.transform = `translateY(-${animationControls.distance}px)`;
					break;
				case 'left':
					element.style.transform = `translateX(-${animationControls.distance}px)`;
					break;
				case 'right':
					element.style.transform = `translateX(${animationControls.distance}px)`;
					break;
			}

			// Apply animation with custom delay based on index for a staggered effect
			setTimeout(() => {
				let animProps: Record<string, number[]> = { opacity: [0, 1] };

				switch (animDirection) {
					case 'bottom':
						animProps['y'] = [animationControls.distance, 0];
						break;
					case 'top':
						animProps['y'] = [-animationControls.distance, 0];
						break;
					case 'left':
						animProps['x'] = [-animationControls.distance, 0];
						break;
					case 'right':
						animProps['x'] = [animationControls.distance, 0];
						break;
				}

				// Apply animation
				animate(element, animProps, {
					duration: animationControls.duration,
					ease: animationControls.ease,
					delay: Number(
						getComputedStyle(element).getPropertyValue('--animation-appear-delay') || '0'
					)
				});
			}, 50); // Small delay to ensure reset styles are applied first
		});
	}

	const options = {
		ease: 'easeInOut',
		duration: 0.5
	} as const;

	const isMobile = new IsMobile();

	onMount(() => {
		press('#open-animation-dev-tool', () => {
			animationControls.isOpen = true;

			animate(
				'#animation-dev-tool',
				{
					width: '20rem',
					height: '30rem'
				},
				options
			);

			animate(
				'#close-animation-dev-tool',
				{
					opacity: 1
				},
				options
			);
		});

		press('#close-animation-dev-tool', () => {
			animationControls.isOpen = false;

			animate(
				'#animation-dev-tool',
				{
					width: isMobile.current ? '2.5rem' : '3rem',
					height: isMobile.current ? '2.5rem' : '3rem'
				},
				options
			);

			animate(
				'#close-animation-dev-tool',
				{
					opacity: 0
				},
				options
			);
		});
	});

	let selectedType = $state('appear');

	function handleTabChange(value: string) {
		selectedType = value;
	}

	const directionIcons = {
		bottom: IconArrowDown,
		top: IconArrowUp,
		left: IconArrowLeft,
		right: IconArrowRight
	};
</script>

{#if dev}
	<div id="animation-dev-tool" class={cn('fixed top-16 right-4 z-50 md:top-4 ')}>
		<Card.Root class={cn('border-primary overflow-hidden rounded-lg shadow-lg')}>
			<Card.Header
				class={cn(
					'flex flex-row items-center justify-between space-y-0 transition-all duration-500',
					animationControls.isOpen ? 'py-2 pr-2 pl-4' : 'p-0'
				)}
			>
				<Button
					variant="outline"
					size={animationControls.isOpen ? 'default' : 'icon'}
					class={cn(
						'flex rounded-none border-none',
						animationControls.isOpen
							? 'bg-transparent px-0 py-0'
							: ' bg-card size-10 shadow-md md:size-12'
					)}
					id="open-animation-dev-tool"
				>
					<IconWand class="text-primary size-5" />
					<h4 class={cn('w-max text-sm font-medium', animationControls.isOpen ? '' : 'hidden')}>
						Animation Controls
					</h4>
				</Button>

				<Button
					variant="ghost"
					size="icon"
					class={cn(
						'size-8',
						animationControls.isOpen ? '' : 'pointer-events-none absolute opacity-0'
					)}
					id="close-animation-dev-tool"
				>
					<IconX />
				</Button>
			</Card.Header>
			<Card.Content
				id="open-animation-dev-tool-content"
				class={cn('space-y-3 p-3', animationControls.isOpen ? '' : 'hidden')}
			>
				<Tabs.Root value={selectedType} class="w-full" onValueChange={handleTabChange}>
					<Tabs.List class="w-full">
						<Tabs.Trigger value="appear" class="w-full text-xs">Appear</Tabs.Trigger>
					</Tabs.List>

					<div class="space-y-3">
						<div class="space-y-1.5">
							<label for="animation-duration" class="text-muted-foreground text-xs">
								Duration: {animationControls.duration}s
							</label>
							<Slider
								type="single"
								id="animation-duration"
								class="my-3"
								bind:value={animationControls.duration}
								step={0.05}
								min={0.1}
								max={3}
							/>
						</div>

						<div class="space-y-1.5">
							<label for="animation-ease" class="text-muted-foreground text-xs">
								Easing Function
							</label>
							<Select.Root bind:value={animationControls.ease} type="single">
								<Select.Trigger class="w-full" id="animation-ease">
									{animationControls.ease}
								</Select.Trigger>
								<Select.Content>
									{#each animationControls.availableEasings as easing}
										<Select.Item value={easing} label={easing}>{easing}</Select.Item>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>

						{#if selectedType === 'appear'}
							<div class="space-y-1.5">
								<label class="text-muted-foreground text-xs">Direction</label>
								<div class="grid grid-cols-4 gap-1">
									{#each Object.entries(directionIcons) as [direction, Icon]}
										<Button
											variant={animDirection === direction ? 'default' : 'outline'}
											size="sm"
											class="h-8"
											onclick={() => (animDirection = direction)}
										>
											<svelte:component this={Icon} class="size-4" />
										</Button>
									{/each}
								</div>
							</div>

							<div class="space-y-1.5">
								<label
									for="animation-distance"
									class="text-muted-foreground flex justify-between text-xs"
								>
									<span>Distance: {animationControls.distance}px</span>
									<Button
										variant="ghost"
										size="sm"
										class="h-5 px-2 py-0"
										onclick={() => (animationControls.distance = 30)}
									>
										Reset
									</Button>
								</label>
								<Slider
									type="single"
									id="animation-distance"
									class="my-3"
									bind:value={animationControls.distance}
									step={5}
									min={5}
									max={100}
								/>
							</div>
						{/if}

						<Button class="mt-2 w-full" size="sm" onclick={reloadAllAnimations}>
							<IconPlayerPlay class="mr-1 size-3" />
							Reload Animations
						</Button>
					</div>
				</Tabs.Root>
				<p class="text-muted-foreground text-xs">
					Add <code class="bg-muted rounded p-0.5">class="animate-appear"</code> to elements
				</p>
			</Card.Content>
		</Card.Root>
	</div>
{/if}
