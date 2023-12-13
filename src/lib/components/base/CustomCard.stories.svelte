<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Card from './CustomCard.svelte';

	type Story = ComponentProps<Card>;

	const metaArgs: Story = {
		align: 'start',
		color: 'primary',
		gap: 'md',
		href: '',
		justify: 'center',
		rounding: 'md',
		scale: false,
		vertical: true
	};

	const argTypes: ArgTypes<Story> = {
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			type: 'string'
		},
		color: {
			control: 'select',
			options: ['primary', 'secondary'],
			type: 'string'
		},
		gap: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			type: 'string'
		},
		href: {
			control: 'text',
			type: 'string'
		},
		justify: {
			control: 'select',
			options: ['start', 'center', 'end'],
			type: 'string'
		},
		rounding: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			type: 'string'
		},
		scale: {
			control: 'boolean',
			type: 'boolean'
		},
		vertical: {
			control: 'boolean',
			type: 'boolean'
		}
	};
</script>

<Meta {argTypes} args={metaArgs} component={Card} title="Components/Base/CustomCard" />

<Template {argTypes} args={metaArgs} let:args>
	<Card {...args} />
</Template>

<Story let:args name="Vertical">
	<Card {...args}>
		<div>I am a card</div>
		<div>That is vertical</div>
		<div>Just like that</div>
	</Card>
</Story>

<Story args={{ vertical: false }} let:args name="Horizontal">
	<Card {...args}>
		<div>I am a card</div>
		<div>That is horizontal</div>
		<div>Just like that</div>
	</Card>
</Story>
