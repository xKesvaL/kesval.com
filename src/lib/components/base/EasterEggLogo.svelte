<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { createClickCounter, triggerConfetti, showEasterEggMessage } from '$lib/utils/easter-eggs';

	let logoElement: HTMLElement;
	let cleanup: (() => void) | undefined;

	onMount(() => {
		if (logoElement) {
			cleanup = createClickCounter(logoElement, 5, () => {
				triggerConfetti();
				showEasterEggMessage('🎨 You found the logo easter egg! Keep clicking for more surprises!');
				console.log('🎨 Logo easter egg activated! You clicked the magic logo 5 times!');
				
				// Add a fun animation to the logo
				logoElement.style.animation = 'logo-bounce 1s ease-in-out';
				setTimeout(() => {
					if (logoElement) {
						logoElement.style.animation = '';
					}
				}, 1000);
			});
		}

		// Inject CSS for logo animation if not already present
		if (!document.querySelector('#logo-bounce-animation')) {
			const style = document.createElement('style');
			style.id = 'logo-bounce-animation';
			style.textContent = `
				@keyframes logo-bounce {
					0%, 20%, 50%, 80%, 100% {
						transform: translateY(0) scale(1);
					}
					40% {
						transform: translateY(-15px) scale(1.1);
					}
					60% {
						transform: translateY(-7px) scale(1.05);
					}
				}
			`;
			document.head.appendChild(style);
		}
	});

	onDestroy(() => {
		if (cleanup) {
			cleanup();
		}
	});
</script>

<div bind:this={logoElement} class="cursor-pointer">
	<enhanced:img
		src="$assets/logo.avif"
		alt="KesvaL Studio Logo"
		class="size-10 rounded-lg transition-transform duration-200 hover:scale-110"
	/>
</div>