<script lang="ts">
	import ContactHero from '$lib/containers/contact/ContactHero.svelte';

	let { data } = $props();
</script>

<ContactHero form={data.form} />
