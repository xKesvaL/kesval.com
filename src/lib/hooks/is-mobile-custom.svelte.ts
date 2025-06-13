import { MediaQuery } from 'svelte/reactivity';

const MOBILE_BREAKPOINT = 768;

export class IsMobileCustom extends MediaQuery {
	constructor(customBp: number = MOBILE_BREAKPOINT) {
		super(`max-width: ${customBp - 1}px`);
	}
}
