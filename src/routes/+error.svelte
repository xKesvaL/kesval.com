<script lang="ts">
	import { page } from '$app/stores';	import ErrorHero from '$lib/containers/error/ErrorHero.svelte';
</script>

<ErrorHero message={$page.error?.message} status={$page.status} />
