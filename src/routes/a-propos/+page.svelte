<script lang="ts">
	import AboutHero from '$lib/containers/about/AboutHero.svelte';
	import AboutTeam from '$lib/containers/about/AboutTeam.svelte';
	import { animateAppear } from '$lib/utils/animation';
</script>

<div use:animateAppear>
	<AboutHero />
	<AboutTeam />
</div>
