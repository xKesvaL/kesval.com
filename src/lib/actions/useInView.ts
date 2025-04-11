/**
 * Custom Svelte action that detects when an element enters or exits the viewport
 * using the Intersection Observer API.
 *
 * @param element - The DOM element to observe
 * @param options - Configuration options for the action
 * @returns Cleanup function that disconnects the observer
 */
export function useInView(
	element: HTMLElement,
	options: {
		root?: Element | Document | null;
		rootMargin?: string;
		threshold?: number | number[];
		onEnter?: (entry: IntersectionObserverEntry) => void;
		onExit?: (entry: IntersectionObserverEntry) => void;
	} = {}
) {
	const { root = null, rootMargin = '0px', threshold = 0 } = options;

	let { onEnter = () => {}, onExit = () => {} } = options;

	// Create the observer instance
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					onEnter(entry);
				} else {
					onExit(entry);
				}
			});
		},
		{
			root,
			rootMargin,
			threshold
		}
	);

	// Start observing the element
	observer.observe(element);

	// Return the cleanup function
	return {
		destroy() {
			observer.disconnect();
		},
		update(newOptions: typeof options) {
			// Update callback functions if needed
			if (newOptions.onEnter) onEnter = newOptions.onEnter;
			if (newOptions.onExit) onExit = newOptions.onExit;
		}
	};
}
