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
	rootMargin?: string;
	threshold?: number | number[];
	progress?: boolean;
	onEnter?: (entry: IntersectionObserverEntry) => void;
	onExit?: (entry: IntersectionObserverEntry) => void;
	onProgress?: (ratio: number) => void;
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

	const handleIntersect: IntersectionObserverCallback = (entries) => {
		const entry = entries[0];
		const intersecting = entry.isIntersecting;
		const v = intersecting ? 'enter' : 'exit';
		node.dispatchEvent(new CustomEvent(v));

		// Call the appropriate callback with the entry
		if (intersecting && params.onEnter) {
			params.onEnter(entry);
		} else if (!intersecting && params.onExit) {
			params.onExit(entry);
		}

		if (params.progress && intersecting) {
			const ratio = entry.intersectionRatio;
			if (params.onProgress) {
				params.onProgress(ratio);
			}
			const detail = { ratio };
			node.dispatchEvent(new CustomEvent('progress', { detail }));
		}
	};

	const setObserver = ({ root, rootMargin, threshold }: Params) => {
		if (observer) observer.disconnect();
		observer = new IntersectionObserver(handleIntersect, {
			root,
			rootMargin,
			threshold: threshold ?? 0
		});
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
