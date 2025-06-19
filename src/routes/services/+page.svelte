<script lang="ts">
	import ServicesHero from '$lib/containers/services/ServicesHero.svelte';
	import ServicesWork from '$lib/containers/services/ServicesWork.svelte';
	import { animateAppear } from '$lib/utils/animation';
</script>

<div use:animateAppear>
	<ServicesHero />
	<ServicesWork />
</div>
