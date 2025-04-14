import { animate, inView } from 'motion';
import type { Action } from 'svelte/action';

export const animateAppear: Action<HTMLElement> = () => {
	inView(
		'.animate-appear',
		(element) => {
			animate(
				element as HTMLElement,
				{ opacity: [0, 1], y: [100, 0] },
				{
					duration: 0.5,
					ease: 'circOut'
				}
			).then(() => {
				element.classList.add('an');
			});
		},
		{
			margin: '0px 0px -10% 0px'
		}
	);
};
