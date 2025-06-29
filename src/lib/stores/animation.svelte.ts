import type { AnimateAppearDirection } from '$lib/utils/animation';
import type { BezierDefinition, EasingDefinition } from 'motion';

// Animation controls for dev environment
export const animationControls = $state<AnimationControls>({
	isOpen: false,
	duration: 0.6,
	ease: 'easeOut',
	direction: 'bottom',
	distance: 30,
	availableEasings: [
		'linear',
		'easeIn',
		'easeOut',
		'easeInOut',
		'circIn',
		'circOut',
		'circInOut',
		'backIn',
		'backOut',
		'backInOut',
		'anticipate'
	]
});

type AnimationControls = {
	isOpen: boolean;
	duration: number;
	direction: AnimateAppearDirection;
	distance: number;
	ease: EasingDefinitionString;
	availableEasings: EasingDefinitionString[];
};

type EasingDefinitionString = Exclude<EasingDefinition, BezierDefinition>;
