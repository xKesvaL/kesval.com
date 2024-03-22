<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Callout from './Callout.svelte';

	type Story = ComponentProps<Callout>;

	const metaArgs: Story = {
		type: 'info'
	};

	const argTypes: ArgTypes<Story> = {
		type: {
			control: 'select',
			options: ['success', 'info', 'danger'],
			type: 'string'
		}
	};
</script>

<Meta {argTypes} args={metaArgs} component={Callout} title="Components/Base/Callout" />

<Template {argTypes} args={metaArgs} let:args>
	<Callout {...args} />
</Template>

<Story let:args name="Default">
	<Callout {...args}>
		Hi I am a Callout. This is used to tell peolpe about something important or to get their
		attention, usually in a blog.
	</Callout>
</Story>
