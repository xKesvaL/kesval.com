<script lang="ts">
	import ServiceDetailsHero from '$lib/containers/services/details/ServiceDetailsHero.svelte';
	import { services } from '$lib/utils/config';

	const service = services.find((s) => s.id === 'automation');
</script>

{#if service}
	<ServiceDetailsHero {service} />
{/if}
