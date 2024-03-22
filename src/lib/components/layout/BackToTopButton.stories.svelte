<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import BackTopTopButton from './BackToTopButton.svelte';

	type Story = ComponentProps<BackTopTopButton>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Meta
	{argTypes}
	args={metaArgs}
	component={BackTopTopButton}
	title="Components/Layout/BackToTopButton"
/>

<Template {argTypes} args={metaArgs} let:args>
	<BackTopTopButton {...args} />
</Template>

<Story let:args name="Default">
	<BackTopTopButton {...args} />
</Story>
