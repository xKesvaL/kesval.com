<script>
	import { Button } from '$lib/components/ui/button';
	import { theme } from '$lib/stores/theme';
</script>

<section class="section container-wide container">
	<Button on:click={() => theme.toggle()} variant="default">Switch Theme</Button>
</section>

<style lang="scss">
</style>
