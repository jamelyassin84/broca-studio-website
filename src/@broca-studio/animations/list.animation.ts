import {
	trigger,
	transition,
	style,
	animate,
	query,
	stagger,
} from '@angular/animations'

/**
 * Animation trigger for list items, providing entrance and exit animations.
 * This trigger animates the appearance and disappearance of list items with a stagger effect.
 */
export const listAnimation = trigger('listAnimation', [
	// Transition for both entering and leaving elements
	transition('* <=> *', [
		// Animation for entering elements
		query(
			':enter',
			[
				// Initial styles for entering elements
				style({
					opacity: 0, // Start with opacity 0 (invisible)
					transform: 'translate(0, 5rem)', // Start with 5rem (50px) downward translation
				}),

				// Stagger effect with a 40ms delay between each element's animation
				stagger(
					'40ms',
					animate(
						'300ms cubic-bezier(.28,-0.86,0,1.11)', // Smooth animation with cubic-bezier easing
						style({
							opacity: 1, // End with opacity 1 (fully visible)
							transform: 'translate(0px,0)', // End with no translation (original position)
						}),
					),
				),
			],
			{ optional: true }, // Optional query, won't throw an error if no elements found
		),

		// Animation for leaving elements
		query(
			':leave',
			animate(
				'100ms', // Animation duration for leaving elements
				style({
					opacity: 0, // End with opacity 0 (invisible)
					transform: 'translate(-15rem,0)', // End with 15rem (150px) leftward translation
				}),
			),
			{ optional: true }, // Optional query, won't throw an error if no elements found
		),
	]),
])
