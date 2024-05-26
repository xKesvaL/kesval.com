<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Footer from './Footer.svelte';

	type Story = ComponentProps<Footer>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Meta {argTypes} args={metaArgs} component={Footer} title="Components/Layout/Footer" />

<Template {argTypes} args={metaArgs} let:args>
	<Footer {...args} />
</Template>

<Story let:args name="Default">
	<Footer {...args} />
</Story>
