import { animate, state, style, transition, trigger } from '@angular/animations'
import {
	DBWAnimationCurves,
	DBWAnimationDurations,
} from './default.animation.model'

/**
 * Animation trigger for zooming an element in from void (hidden) to visible.
 */
const zoomIn = trigger('zoomIn', [
	state(
		'void',
		style({
			opacity: 0,
			transform: 'scale(0.5)',
		}),
	),

	state(
		'*',
		style({
			opacity: 1,
			transform: 'scale(1)',
		}),
	),

	transition('void => false', []),

	transition('void => *', animate('{{timings}}'), {
		params: {
			timings: `${DBWAnimationDurations.entering} ${DBWAnimationCurves.deceleration}`,
		},
	}),
])

/**
 * Animation trigger for zooming an element out from visible to void (hidden).
 */
const zoomOut = trigger('zoomOut', [
	state(
		'*',
		style({
			opacity: 1,
			transform: 'scale(1)',
		}),
	),

	state(
		'void',
		style({
			opacity: 0,
			transform: 'scale(0.5)',
		}),
	),

	transition('false => void', []),

	transition('* => void', animate('{{timings}}'), {
		params: {
			timings: `${DBWAnimationDurations.exiting} ${DBWAnimationCurves.acceleration}`,
		},
	}),
])

export { zoomIn, zoomOut }
