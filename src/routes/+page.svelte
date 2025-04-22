<script lang="ts">
	import HomeHero from '$lib/containers/home/HomeHero.svelte';
	import HomeClients from '$lib/containers/home/HomeClients.svelte';
	import HomeServices from '$lib/containers/home/HomeServices.svelte';
	import HomeProjects from '$lib/containers/home/HomeProjects.svelte';
	import { animateAppear } from '$lib/utils/animation';
</script>

<div use:animateAppear>
	<HomeHero />
	<HomeClients />
	<HomeProjects />
	<HomeServices />
</div>
