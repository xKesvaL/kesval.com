<script lang="ts">
	import HomeHero from '$lib/containers/home/HomeHero.svelte';
	import HomeClients from '$lib/containers/home/HomeClients.svelte';
	import HomeAbout from '$lib/containers/home/HomeAbout.svelte';
	import HomeProjects from '$lib/containers/home/HomeProjects.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags />

<HomeHero />
<HomeClients />
<HomeAbout />
<HomeProjects />
