<script>
	import { Button } from '$lib/components/ui/button';
	import { theme } from '$lib/stores/theme';
</script>

<section>
	<div class="section containere container-wide">
		<Button on:click={() => theme.toggle()} variant="default">Switch Theme</Button>
	</div>
</section>
