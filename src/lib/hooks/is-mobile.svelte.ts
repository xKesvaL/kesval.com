import { MediaQuery } from 'svelte/reactivity';

const MOBILE_BREAKPOINT = 768;

export class IsMobile extends MediaQuery {
	constructor(breakpoint: number = MOBILE_BREAKPOINT) {
		super(`max-width: ${breakpoint - 1}px`);
	}
}
