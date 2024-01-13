<script lang="ts">
	export let title: string;
</script>

<section class="lg:my-4">
	<h2 class="text-3xl">
		{title}
	</h2>
	<slot />
</section>
