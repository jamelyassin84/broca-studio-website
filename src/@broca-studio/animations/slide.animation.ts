import { animate, state, style, transition, trigger } from '@angular/animations'
import {
	DBWAnimationCurves,
	DBWAnimationDurations,
} from './default.animation.model'

/**
 * Animation trigger for sliding an element in from the top.
 */
const slideInTop = trigger('slideInTop', [
	state(
		'void',
		style({
			transform: 'translate3d(0, -100%, 0)',
		}),
	),

	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
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
 * Animation trigger for sliding an element in from the bottom.
 */
const slideInBottom = trigger('slideInBottom', [
	state(
		'void',
		style({
			transform: 'translate3d(0, 100%, 0)',
		}),
	),

	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
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
 * Animation trigger for sliding an element in from the left.
 */
const slideInLeft = trigger('slideInLeft', [
	state(
		'void',
		style({
			transform: 'translate3d(-100%, 0, 0)',
		}),
	),

	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
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
 * Animation trigger for sliding an element in from the right.
 */
const slideInRight = trigger('slideInRight', [
	state(
		'void',
		style({
			transform: 'translate3d(100%, 0, 0)',
		}),
	),

	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
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
 * Animation trigger for sliding an element out to the top.
 */
const slideOutTop = trigger('slideOutTop', [
	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			transform: 'translate3d(0, -100%, 0)',
		}),
	),

	transition('false => void', []),

	transition('* => void', animate('{{timings}}'), {
		params: {
			timings: `${DBWAnimationDurations.exiting} ${DBWAnimationCurves.acceleration}`,
		},
	}),
])

/**
 * Animation trigger for sliding an element out to the bottom.
 */
const slideOutBottom = trigger('slideOutBottom', [
	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			transform: 'translate3d(0, 100%, 0)',
		}),
	),

	transition('false => void', []),

	transition('* => void', animate('{{timings}}'), {
		params: {
			timings: `${DBWAnimationDurations.exiting} ${DBWAnimationCurves.acceleration}`,
		},
	}),
])

/**
 * Animation trigger for sliding an element out to the left.
 */
const slideOutLeft = trigger('slideOutLeft', [
	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			transform: 'translate3d(-100%, 0, 0)',
		}),
	),

	transition('false => void', []),

	transition('* => void', animate('{{timings}}'), {
		params: {
			timings: `${DBWAnimationDurations.exiting} ${DBWAnimationCurves.acceleration}`,
		},
	}),
])

/**
 * Animation trigger for sliding an element out to the right.
 */
const slideOutRight = trigger('slideOutRight', [
	state(
		'*',
		style({
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			transform: 'translate3d(100%, 0, 0)',
		}),
	),

	transition('false => void', []),

	transition('* => void', animate('{{timings}}'), {
		params: {
			timings: `${DBWAnimationDurations.exiting} ${DBWAnimationCurves.acceleration}`,
		},
	}),
])

export {
	slideInTop,
	slideInBottom,
	slideInLeft,
	slideInRight,
	slideOutTop,
	slideOutBottom,
	slideOutLeft,
	slideOutRight,
}
