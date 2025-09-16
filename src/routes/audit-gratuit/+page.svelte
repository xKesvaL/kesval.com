<script lang="ts">
	import ContactAuditHero from '$lib/containers/contact/ContactAuditHero.svelte';

	let { data } = $props();
</script>

<ContactAuditHero form={data.form} />
