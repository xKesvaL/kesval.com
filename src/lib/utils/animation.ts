import { dev } from '$app/environment';
import { animate, inView } from 'motion';
import type { Action } from 'svelte/action';
import { debug } from './logger';
import { animationControls } from '$lib/stores/animation.svelte';

export type AnimateAppearDirection = 'bottom' | 'top' | 'left' | 'right';

type AnimateAppearOptions =
	| {
			/**
			 * Direction from which the element appears
			 * @default 'bottom'
			 */
			direction?: AnimateAppearDirection;

			/**
			 * Distance in pixels that the element moves during animation
			 * @default 30
			 */
			distance?: number;
	  }
	| undefined;

export const animateAppear: Action<HTMLElement, AnimateAppearOptions> = (element, options = {}) => {
	const { direction = 'bottom', distance = 30 } = options;

	if (dev) {
		// avoids breaking the animation on HMR
		element.style =
			'--animation-appear-opacity: 1; --animation-appear-y: 0; --animation-appear-x: 0;';
	}

	debug('motion', 'animateAppearTriggered');

	// Determine transform properties based on direction
	const getTransformProps = () => {
		const props: Record<string, number[]> = { opacity: [0, 1] };

		switch (direction) {
			case 'bottom':
				props.y = [distance, 0];
				break;
			case 'top':
				props.y = [-distance, 0];
				break;
			case 'left':
				props.x = [-distance, 0];
				break;
			case 'right':
				props.x = [distance, 0];
				break;
		}

		return props;
	};

	const stop = inView(
		'.animate-appear',
		(inViewElement) => {
			animate(inViewElement as HTMLElement, getTransformProps(), {
				duration: animationControls.duration,
				ease: animationControls.ease,
				delay: Number(getComputedStyle(inViewElement).getPropertyValue('--animation-appear-delay'))
			});
		},
		{
			margin: '0px 0px -10% 0px',
			amount: 0.1
		}
	);

	return {
		destroy() {
			debug('motion', 'animateAppearDestroyed');
			stop();
		},
		update() {
			debug('motion', 'animateAppearUpdated');
		}
	};
};
