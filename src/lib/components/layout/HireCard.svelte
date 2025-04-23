<script lang="ts">
	import * as m from '$paraglide/messages';
	import Button from '../ui/button/button.svelte';
</script>

<div
	class="bg-secondary border-primary group relative hidden h-16 w-16 items-center justify-between gap-4 overflow-hidden rounded-4xl border p-2 transition-all duration-500 hover:w-100 md:flex"
>
	<enhanced:img src="$assets/logo.png" alt={m['kesval_logo']()} class="size-12 rounded-full" />

	<div
		class="absolute right-2 flex h-12 w-80 origin-right translate-x-full justify-between gap-4 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100"
	>
		<div class="flex flex-col justify-between">
			<h3 class="text-xl leading-tight">
				{m['brand.name']()}
			</h3>
			<p class="text-sm">
				{m['brand.doing']()}
			</p>
		</div>
		<Button class="button h-12 rounded-3xl">
			{m['start_now']()}
		</Button>
	</div>
</div>
