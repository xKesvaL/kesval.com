<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Image from './Image.svelte';

	type Story = ComponentProps<Image>;

	const metaArgs: Story = {
		alt: 'Alt Text',
		figcaption: 'Figcaption Text',
		loading: 'lazy',
		rounding: 'md',
		src: ''
	};

	const argTypes: ArgTypes<Story> = {
		alt: {
			control: 'text',
			type: 'string'
		},
		figcaption: {
			control: 'text',
			type: 'string'
		},
		loading: {
			control: 'select',
			options: ['lazy', 'eager'],
			type: 'string'
		},
		rounding: {
			control: 'select',
			options: ['sm', 'md', 'lg', 'full'],
			type: 'string'
		},
		src: {
			control: 'text',
			type: 'string'
		}
	};
</script>

<Meta {argTypes} args={metaArgs} component={Image} title="Components/Base/Image" />

<Template {argTypes} args={metaArgs} let:args>
	<Image {...args} />
</Template>

<Story
	args={{
		src: 'https://via.placeholder.com/150'
	}}
	let:args
	name="Valid Source"
>
	<Image {...args} />
</Story>

<Story
	args={{
		src: './invalid.png'
	}}
	let:args
	name="Invalid Source"
>
	<Image {...args} />
</Story>
