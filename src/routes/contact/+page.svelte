<script lang="ts">
	import ContactHero from '$lib/containers/contact/ContactHero.svelte';
	import { animateAppear } from '$lib/utils/animation';
</script>

<svelte:head>
	<link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
</svelte:head>

<div use:animateAppear>
	<ContactHero />
</div>
