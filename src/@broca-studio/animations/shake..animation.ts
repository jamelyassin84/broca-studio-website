import {
	animate,
	keyframes,
	style,
	transition,
	trigger,
} from '@angular/animations'

/**
 * Animation trigger for a "shake" effect.
 * This trigger shakes the element horizontally back and forth when it enters or leaves.
 */
const shake = trigger('shake', [
	// Transition for element entering or leaving
	transition('void => false', []),

	// Transition for element entering or leaving or changing state
	transition(
		'void => *, * => true',
		[
			// Animation with keyframes for the shake effect
			animate(
				'{{timings}}', // Animation duration and timing function
				keyframes([
					// Keyframes for the shake effect at various offsets
					style({
						transform: 'translate3d(0, 0, 0)',
						offset: 0,
					}),
					style({
						transform: 'translate3d(-10px, 0, 0)',
						offset: 0.1,
					}),
					style({
						transform: 'translate3d(10px, 0, 0)',
						offset: 0.2,
					}),
					style({
						transform: 'translate3d(-10px, 0, 0)',
						offset: 0.3,
					}),
					style({
						transform: 'translate3d(10px, 0, 0)',
						offset: 0.4,
					}),
					style({
						transform: 'translate3d(-10px, 0, 0)',
						offset: 0.5,
					}),
					style({
						transform: 'translate3d(10px, 0, 0)',
						offset: 0.6,
					}),
					style({
						transform: 'translate3d(-10px, 0, 0)',
						offset: 0.7,
					}),
					style({
						transform: 'translate3d(10px, 0, 0)',
						offset: 0.8,
					}),
					style({
						transform: 'translate3d(-10px, 0, 0)',
						offset: 0.9,
					}),
					style({
						transform: 'translate3d(0, 0, 0)',
						offset: 1,
					}),
				]),
			),
		],
		{
			params: {
				timings: '0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)', // Customizable animation duration and timing function
			},
		},
	),
])

export { shake }
