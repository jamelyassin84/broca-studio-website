import { animate, style, transition, trigger } from '@angular/animations'

/**
 * Animation trigger for moving elements vertically with opacity change.
 * This trigger animates the appearance and disappearance of elements by
 * changing their opacity and vertical position.
 */
export const movingAnimation = trigger('movingAnimation', [
	// Transition for both entering and leaving elements
	transition('* <=> *', [
		// Initial styles for both entering and leaving elements
		style({ opacity: 0, transform: 'translateY(50px)' }),

		// Animation for both entering and leaving elements
		animate(
			'500ms', // Animation duration
			style({
				opacity: 1, // End with opacity 1 (fully visible)
				transform: 'none', // End with no vertical translation (original position)
			}),
		),
	]),
])
