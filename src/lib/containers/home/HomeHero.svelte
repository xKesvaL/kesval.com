<script>
	import { Button } from '$lib/components/ui/button';
	import { theme } from '$lib/stores/theme';
</script>

<section class="section container container-wide">
	<Button on:click={() => theme.toggle()} variant="default">Switch Theme</Button>
</section>

<style lang="scss">
	section {
		min-height: calc(100vh - 4rem);

		@include mq(lg) {
			min-height: calc(100vh - 5rem);
		}
	}
</style>
