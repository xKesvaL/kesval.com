<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	export let header: boolean;
	export let align: string;
</script>

{#if header}
	<Table.Head class="text-base">
		<slot />
	</Table.Head>
{:else}
	<Table.Cell>
		<slot />
	</Table.Cell>
{/if}
