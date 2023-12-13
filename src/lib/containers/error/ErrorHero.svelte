<script lang="ts">
	export let status = 404;

	export let message = 'Page not found';
</script>

<section class="section container container-wide">
	<h1>{status} - {message}</h1>
</section>

<style lang="scss">
	section {
		background: radial-gradient(circle, hsl(var(--color-accent-500) / 0.15) 0%, transparent 60%);
		min-height: 100vh;
	}
</style>
