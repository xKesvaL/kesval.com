<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { 
		createKonamiDetector, 
		createSecretWordDetector, 
		logDeveloperMessages,
		triggerConfetti,
		showEasterEggMessage
	} from '$lib/utils/easter-eggs';

	let cleanupFunctions: (() => void)[] = [];

	onMount(() => {
		// Log developer messages on page load
		logDeveloperMessages();

		// Set up Konami code detector
		const cleanupKonami = createKonamiDetector(() => {
			triggerConfetti();
			showEasterEggMessage('🎊 Konami Code activated! You found the secret!');
			console.log('🎮 Konami Code activated! You are a true developer!');
		});

		// Set up secret word detectors
		const cleanupKesval = createSecretWordDetector('kesval', () => {
			triggerConfetti();
			showEasterEggMessage('✨ You discovered the magic word "kesval"!');
			console.log('🪄 Magic word "kesval" detected! ✨');
		});

		const cleanupJordan = createSecretWordDetector('jordan', () => {
			showEasterEggMessage('👋 Hello! You found Jordan\'s name!');
			console.log('👋 You found the founder\'s name! Jordan says hi!');
		});

		const cleanupDeveloper = createSecretWordDetector('developer', () => {
			showEasterEggMessage('💻 Fellow developer detected!');
			console.log('💻 Another developer in the house! Welcome!');
		});

		const cleanupStudio = createSecretWordDetector('studio', () => {
			showEasterEggMessage('🎯 KesvaL Studio - where magic happens!');
			console.log('🏢 You love our studio! We love you too!');
		});

		// Store cleanup functions
		cleanupFunctions = [
			cleanupKonami,
			cleanupKesval, 
			cleanupJordan,
			cleanupDeveloper,
			cleanupStudio
		];
	});

	onDestroy(() => {
		// Cleanup all event listeners
		cleanupFunctions.forEach(cleanup => cleanup());
	});
</script>

<!-- This component doesn't render anything visible, it just handles easter eggs -->