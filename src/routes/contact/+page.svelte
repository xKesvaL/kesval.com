<script lang="ts">
	import ContactHero from '$lib/containers/contact/ContactHero.svelte';
	import { animateAppear } from '$lib/utils/animation';

	let { data } = $props();
</script>

<div use:animateAppear>
	<ContactHero form={data.form} />
</div>
