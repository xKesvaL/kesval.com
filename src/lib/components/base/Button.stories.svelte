<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import IconMenu from '$lib/icons/IconMenu.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';

	type Story = ComponentProps<Button>;

	const metaArgs: Story = {
		color: 'primary',
		disabled: false,
		href: '',
		style: 'solid',
		type: 'button'
	};

	const argTypes: ArgTypes<Story> = {
		color: {
			control: 'select',
			options: ['primary', 'secondary'],
			type: 'string'
		},
		disabled: {
			control: 'boolean',
			type: 'boolean'
		},
		href: {
			control: 'text',
			type: 'string'
		},
		style: {
			control: 'select',
			options: ['solid', 'outline'],
			type: 'string'
		},
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			type: 'string'
		}
	};
</script>

<Meta {argTypes} args={metaArgs} component={Button} title="Components/Base/Button" />

<Template {argTypes} args={metaArgs} let:args>
	<Button {...args} />
</Template>

<Story let:args name="Without Icon">
	<Button {...args}>Button</Button>
</Story>

<Story let:args name="With Icon">
	<Button {...args}>
		<IconMenu slot="icon" />
		Button
	</Button>
</Story>
