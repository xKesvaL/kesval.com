<script context="module">
	import Loading from './Loading.svelte';

	export const meta = {
		title: 'Containers/Layout/Loading',
		component: Loading
	};
</script>

<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';
	import type { ComponentProps } from 'svelte';

	import { Story, Template } from '@storybook/addon-svelte-csf';

	type Story = ComponentProps<Loading>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Template {argTypes} args={metaArgs} let:args>
	<Loading {...args} />
</Template>

<Story let:args name="Default">
	<Loading {...args} />
</Story>
