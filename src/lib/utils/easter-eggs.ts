/**
 * Easter egg detection utilities for KesvaL Studio
 */

export type EasterEggType = 'konami' | 'logo-clicks' | 'secret-word';

export interface EasterEggEvent {
	type: EasterEggType;
	data?: any;
}

/**
 * Konami Code sequence: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, KeyB, KeyA
 */
const KONAMI_CODE = [
	'ArrowUp',
	'ArrowUp', 
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
	'KeyB',
	'KeyA'
];

/**
 * Creates a Konami code detector
 */
export function createKonamiDetector(callback: () => void) {
	let sequence: string[] = [];
	
	const keyHandler = (event: KeyboardEvent) => {
		sequence.push(event.code);
		
		// Keep only the last 10 keys (length of Konami code)
		if (sequence.length > KONAMI_CODE.length) {
			sequence = sequence.slice(-KONAMI_CODE.length);
		}
		
		// Check if sequence matches Konami code
		if (sequence.length === KONAMI_CODE.length) {
			const matches = KONAMI_CODE.every((code, index) => code === sequence[index]);
			if (matches) {
				callback();
				sequence = []; // Reset sequence
			}
		}
	};
	
	document.addEventListener('keydown', keyHandler);
	
	return () => {
		document.removeEventListener('keydown', keyHandler);
	};
}

/**
 * Creates a click counter for an element
 */
export function createClickCounter(element: HTMLElement, requiredClicks: number, callback: () => void, timeout = 3000) {
	let clicks = 0;
	let timeoutId: NodeJS.Timeout;
	
	const clickHandler = () => {
		clicks++;
		
		clearTimeout(timeoutId);
		
		if (clicks >= requiredClicks) {
			callback();
			clicks = 0;
		} else {
			timeoutId = setTimeout(() => {
				clicks = 0;
			}, timeout);
		}
	};
	
	element.addEventListener('click', clickHandler);
	
	return () => {
		element.removeEventListener('click', clickHandler);
		clearTimeout(timeoutId);
	};
}

/**
 * Creates a secret word detector
 */
export function createSecretWordDetector(secretWord: string, callback: () => void) {
	let typedSequence = '';
	
	const keyHandler = (event: KeyboardEvent) => {
		// Only track letters and reset on special keys
		if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
			typedSequence += event.key.toLowerCase();
			
			// Keep only the last characters equal to secret word length
			if (typedSequence.length > secretWord.length) {
				typedSequence = typedSequence.slice(-secretWord.length);
			}
			
			// Check if typed sequence matches secret word
			if (typedSequence === secretWord.toLowerCase()) {
				callback();
				typedSequence = ''; // Reset sequence
			}
		} else if (event.key === 'Escape' || event.key === 'Enter') {
			typedSequence = ''; // Reset on escape or enter
		}
	};
	
	document.addEventListener('keydown', keyHandler);
	
	return () => {
		document.removeEventListener('keydown', keyHandler);
	};
}

/**
 * Logs fun developer messages to console
 */
export function logDeveloperMessages() {
	const messages = [
		'🚀 Hey there, fellow developer!',
		'👋 Welcome to KesvaL Studio\'s source code!',
		'🎯 Looking for easter eggs? You\'re in the right place!',
		'💡 Try the Konami code: ↑↑↓↓←→←→BA',
		'🖱️ Click the logo 5 times quickly for a surprise!',
		'⌨️ Type "kesval" anywhere for some magic!',
		'🎨 This site was built with SvelteKit and lots of ❤️',
		'📞 Want to work together? Contact us at contact@kesval.com'
	];
	
	console.log('%c' + messages.join('\n'), 'color: #0066cc; font-size: 14px; font-weight: bold;');
	
	// Special styled message
	console.log(
		'%cKesvaL Studio', 
		'color: #fff; background: linear-gradient(90deg, #0066cc, #8b5cf6); padding: 10px 20px; border-radius: 5px; font-size: 20px; font-weight: bold;'
	);
}

/**
 * Creates confetti effect (requires canvas-confetti or similar)
 */
export function triggerConfetti() {
	// Simple sparkle effect if canvas-confetti is not available
	const sparkles = ['✨', '🌟', '⭐', '💫', '🎉', '🎊'];
	
	for (let i = 0; i < 20; i++) {
		setTimeout(() => {
			const sparkle = document.createElement('div');
			sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
			sparkle.style.position = 'fixed';
			sparkle.style.left = Math.random() * window.innerWidth + 'px';
			sparkle.style.top = Math.random() * window.innerHeight + 'px';
			sparkle.style.fontSize = '24px';
			sparkle.style.pointerEvents = 'none';
			sparkle.style.zIndex = '9999';
			sparkle.style.animation = 'sparkle-float 2s ease-out forwards';
			
			// Add CSS animation if not already added
			if (!document.querySelector('#sparkle-animation')) {
				const style = document.createElement('style');
				style.id = 'sparkle-animation';
				style.textContent = `
					@keyframes sparkle-float {
						0% {
							opacity: 1;
							transform: translateY(0) rotate(0deg) scale(0);
						}
						50% {
							opacity: 1;
							transform: translateY(-100px) rotate(180deg) scale(1);
						}
						100% {
							opacity: 0;
							transform: translateY(-200px) rotate(360deg) scale(0);
						}
					}
				`;
				document.head.appendChild(style);
			}
			
			document.body.appendChild(sparkle);
			
			setTimeout(() => {
				if (sparkle.parentNode) {
					sparkle.parentNode.removeChild(sparkle);
				}
			}, 2000);
		}, i * 100);
	}
}

/**
 * Shows a temporary toast-like message
 */
export function showEasterEggMessage(message: string, duration = 3000) {
	const toast = document.createElement('div');
	toast.textContent = message;
	toast.style.cssText = `
		position: fixed;
		top: 20px;
		right: 20px;
		background: linear-gradient(90deg, #0066cc, #8b5cf6);
		color: white;
		padding: 12px 20px;
		border-radius: 8px;
		font-weight: bold;
		z-index: 10000;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		animation: toast-slide-in 0.3s ease-out;
	`;
	
	// Add CSS animation if not already added
	if (!document.querySelector('#toast-animation')) {
		const style = document.createElement('style');
		style.id = 'toast-animation';
		style.textContent = `
			@keyframes toast-slide-in {
				0% {
					transform: translateX(100%);
					opacity: 0;
				}
				100% {
					transform: translateX(0);
					opacity: 1;
				}
			}
			@keyframes toast-slide-out {
				0% {
					transform: translateX(0);
					opacity: 1;
				}
				100% {
					transform: translateX(100%);
					opacity: 0;
				}
			}
		`;
		document.head.appendChild(style);
	}
	
	document.body.appendChild(toast);
	
	setTimeout(() => {
		toast.style.animation = 'toast-slide-out 0.3s ease-in';
		setTimeout(() => {
			if (toast.parentNode) {
				toast.parentNode.removeChild(toast);
			}
		}, 300);
	}, duration);
}