<script lang="ts">
	import ContactHero from '$lib/containers/contact/ContactHero.svelte';
	import { animateAppear } from '$lib/utils/animation';
</script>

<div use:animateAppear>
	<ContactHero />
</div>
