import { MediaQuery } from 'svelte/reactivity';

const MOBILE_BREAKPOINT = 768;

export class IsMobile extends MediaQuery {
	constructor(bp: number = MOBILE_BREAKPOINT) {
		super(`max-width: ${bp - 1}px`);
	}
}
