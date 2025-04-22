import { dev } from '$app/environment';
import { animate, inView } from 'motion';
import type { Action } from 'svelte/action';
import { debug } from './logger';

export const animateAppear: Action<HTMLElement> = (element) => {
	if (dev) {
		// avoids breaking the animation on HMR
		element.style = '--animate-appear-opacity: 1; --animate-appear-y: 0;';
	}

	debug('motion', 'animateAppearTriggered');

	const stop = inView(
		'.animate-appear',
		(element) => {
			animate(
				element as HTMLElement,
				{ opacity: [0, 1], y: [100, 0] },
				{
					duration: 0.5,
					ease: 'circOut'
				}
			);
		},
		{
			margin: '0px 0px -10% 0px'
		}
	);

	return {
		destroy() {
			debug('motion', 'animateAppearTriggered');
			stop();
		}
	};
};
