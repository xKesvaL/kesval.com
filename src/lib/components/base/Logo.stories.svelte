<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Logo from './Logo.svelte';

	type Story = ComponentProps<Logo>;

	const metaArgs: Story = {
		animated: true,
		repeat: true,
		scaleOrigin: 'center',
		size: 'large'
	};

	const argTypes: ArgTypes<Story> = {
		animated: {
			control: 'boolean',
			type: 'boolean'
		},
		repeat: {
			control: 'boolean',
			type: 'boolean'
		},
		scaleOrigin: {
			control: 'select',
			options: ['center', 'left'],
			type: 'string'
		},
		size: {
			control: 'select',
			options: ['normal', 'semi-large', 'large'],
			type: 'string'
		}
	};
</script>

<Meta {argTypes} args={metaArgs} component={Logo} title="Components/Base/Logo" />

<Template {argTypes} args={metaArgs} let:args>
	<Logo {...args} />
</Template>

<Story let:args name="Default">
	<Logo {...args} />
</Story>
