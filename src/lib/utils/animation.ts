import { animate, inView } from 'motion';
import type { Action } from 'svelte/action';

export const animateAppear: Action<HTMLElement> = () => {
	inView('.animate-appear', (element) => {
		animate(
			element as HTMLElement,
			{ opacity: 1, y: [0, 0] },
			{
				duration: 0.5,
				ease: 'circInOut'
			}
		);
	});
};
