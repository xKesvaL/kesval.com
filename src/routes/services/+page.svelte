<script lang="ts">
	import ServicesHero from '$lib/containers/services/ServicesHero.svelte';
	import { animateAppear } from '$lib/utils/animation';
</script>

<div use:animateAppear>
	<ServicesHero />
</div>
