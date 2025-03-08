/**
 * This action triggers a custom event on node entering/exiting the viewport.
 * example:
 * <p
 * 	use:inView
 * 	on:enter={() => console.log("enter")}
 * 	on:exit={() => console.log("exit")}
 * >
 *
 * optional params { root, top, bottom, progress }
 * top and bottom are numbers
 * use:inView={{ bottom: 100 }} // 100 pixels from bottom of viewport
 *
 * progress is a boolean for incremental updates
 * use:inView={{ progres: true }}
 */

import type { Action, ActionReturn } from 'svelte/action';

interface Params {
	root?: HTMLElement;
	top?: number;
	bottom?: number;
	progress?: boolean;
}

interface Attributes {
	onenter?: () => void;
	onexit?: () => void;
	onprogress?: (e: CustomEvent<{ ratio: number }>) => void;
}

/**
 *
 * @param {HTMLElement} node
 * @param {Params} params
 * @returns
 */
const inView: Action<HTMLElement, Params> = (
	node,
	params = {}
): ActionReturn<Params, Attributes> => {
	let observer: IntersectionObserver | null = null;

	const handleIntersect: IntersectionObserverCallback = (e) => {
		const intersecting = e[0].isIntersecting;
		const v = intersecting ? 'enter' : 'exit';
		node.dispatchEvent(new CustomEvent(v));
		if (params.progress && intersecting) {
			const ratio = e[0].intersectionRatio;
			const detail = { ratio };
			node.dispatchEvent(new CustomEvent('progress', { detail }));
		}
	};

	const setObserver = ({ root, top, bottom }: Params) => {
		const marginTop = top ? top * -1 : 0;
		const marginBottom = bottom ? bottom * -1 : 0;
		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
		const options = { root, rootMargin };
		if (observer) observer.disconnect();
		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(node);
	};

	setObserver(params);

	return {
		update(params) {
			setObserver(params);
		},

		destroy() {
			if (observer) observer.disconnect();
		}
	};
};

export default inView;
