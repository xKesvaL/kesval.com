<script lang="ts">
	import IconAlertCircle from '$lib/icons/IconAlertCircle.svelte';
	import IconInfoCircle from '$lib/icons/IconInfoCircle.svelte';

	export let type: 'info' | 'danger' = 'info';
</script>

<div class="callout {type}">
	<div class="icon">
		{#if type == 'info'}
			<IconInfoCircle />
		{:else if type == 'danger'}
			<IconAlertCircle />
		{/if}
	</div>
	<slot />
</div>

<style lang="scss">
	.callout {
		--clt-border-w: 4px;

		position: relative;
		padding: 1.5rem;
		border-radius: 0 1rem 1rem 0;

		&.info {
			background: linear-grad-info(135deg, 0.4), linear-grad-info(315deg, 0.3),
				linear-grad-primary(315deg, 0.1);
			border-left: var(--clt-border-w) solid var(--color-info-500);

			.icon {
				color: var(--color-info-500);
			}
		}

		&.danger {
			background: linear-grad-danger(135deg, 0.5), linear-grad-danger(315deg, 0.4),
				linear-grad-primary(315deg, 0.1);
			border-left: var(--clt-border-w) solid var(--color-danger-500);

			.icon {
				color: var(--color-danger-500);
			}
		}

		.icon {
			position: absolute;
			top: 0;
			left: 0;
			width: 3rem;
			height: 3rem;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			background: var(--color-base-100);
			transform: translate(calc(-50% - (var(--clt-border-w) / 2)), -50%);
			padding: 0.5rem;
		}
	}
</style>
