<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Navigation from './Navigation.svelte';

	type Story = ComponentProps<Navigation>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Meta {argTypes} args={metaArgs} component={Navigation} title="Components/Layout/Navigation" />

<Template {argTypes} args={metaArgs} let:args>
	<Navigation {...args} />
</Template>

<Story let:args name="Default">
	<Navigation {...args} />
</Story>
