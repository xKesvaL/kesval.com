<script lang="ts">
	export let title = '';
</script>

<div class="flex w-full flex-col gap-4">
	<h3 class="w-full border-b-2 border-primary pb-2 text-2xl">
		{title}
	</h3>
	<slot />
</div>
