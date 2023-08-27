import {
	animate,
	state,
	style,
	transition,
	trigger,
	AnimationTriggerMetadata,
} from '@angular/animations'
import {
	DBWAnimationCurves,
	DBWAnimationDurations,
} from './default.animation.model'

/**
 * Animation trigger for fading in elements.
 * This trigger animates the opacity of an element to make it appear gradually.
 * @type {AnimationTriggerMetadata}
 */
const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
	state(
		'void',
		style({
			opacity: 0,
		}),
	),

	state(
		'*',
		style({
			opacity: 1,
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
 * Animation trigger for fading in from the top.
 * This trigger animates the opacity and vertical position of an element to make it appear from the top.
 * @type {AnimationTriggerMetadata}
 */
const fadeInTop: AnimationTriggerMetadata = trigger('fadeInTop', [
	state(
		'void',
		style({
			opacity: 0,
			transform: 'translate3d(0, -100%, 0)',
		}),
	),

	state(
		'*',
		style({
			opacity: 1,
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
 * Animation trigger for fading in from the bottom.
 * This trigger animates the opacity and vertical position of an element to make it appear from the bottom.
 * @type {AnimationTriggerMetadata}
 */
const fadeInBottom: AnimationTriggerMetadata = trigger('fadeInBottom', [
	state(
		'void',
		style({
			opacity: 0,
			transform: 'translate3d(0, 100%, 0)',
		}),
	),

	state(
		'*',
		style({
			opacity: 1,
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
 * Animation trigger for fading in from the left.
 * This trigger animates the opacity and horizontal position of an element to make it appear from the left.
 * @type {AnimationTriggerMetadata}
 */
const fadeInLeft: AnimationTriggerMetadata = trigger('fadeInLeft', [
	state(
		'void',
		style({
			opacity: 0,
			transform: 'translate3d(-100%, 0, 0)',
		}),
	),

	state(
		'*',
		style({
			opacity: 1,
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
 * Animation trigger for fading in from the right.
 * This trigger animates the opacity and horizontal position of an element to make it appear from the right.
 * @type {AnimationTriggerMetadata}
 */
const fadeInRight: AnimationTriggerMetadata = trigger('fadeInRight', [
	state(
		'void',
		style({
			opacity: 0,
			transform: 'translate3d(100%, 0, 0)',
		}),
	),

	state(
		'*',
		style({
			opacity: 1,
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
 * Animation trigger for fading out elements.
 * This trigger animates the opacity of an element to make it disappear gradually.
 * @type {AnimationTriggerMetadata}
 */
const fadeOut: AnimationTriggerMetadata = trigger('fadeOut', [
	state(
		'*',
		style({
			opacity: 1,
		}),
	),

	state(
		'void',
		style({
			opacity: 0,
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
 * Animation trigger for fading out to the top.
 * This trigger animates the opacity and vertical position of an element to make it disappear to the top.
 * @type {AnimationTriggerMetadata}
 */
const fadeOutTop: AnimationTriggerMetadata = trigger('fadeOutTop', [
	state(
		'*',
		style({
			opacity: 1,
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			opacity: 0,
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
 * Animation trigger for fading out to the bottom.
 * This trigger animates the opacity and vertical position of an element to make it disappear to the bottom.
 * @type {AnimationTriggerMetadata}
 */
const fadeOutBottom: AnimationTriggerMetadata = trigger('fadeOutBottom', [
	state(
		'*',
		style({
			opacity: 1,
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			opacity: 0,
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
 * Animation trigger for fading out to the left.
 * This trigger animates the opacity and horizontal position of an element to make it disappear to the left.
 * @type {AnimationTriggerMetadata}
 */
const fadeOutLeft: AnimationTriggerMetadata = trigger('fadeOutLeft', [
	state(
		'*',
		style({
			opacity: 1,
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			opacity: 0,
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
 * Animation trigger for fading out to the right.
 * This trigger animates the opacity and horizontal position of an element to make it disappear to the right.
 * @type {AnimationTriggerMetadata}
 */
const fadeOutRight: AnimationTriggerMetadata = trigger('fadeOutRight', [
	state(
		'*',
		style({
			opacity: 1,
			transform: 'translate3d(0, 0, 0)',
		}),
	),

	state(
		'void',
		style({
			opacity: 0,
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
	fadeIn,
	fadeInTop,
	fadeInBottom,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutTop,
	fadeOutBottom,
	fadeOutLeft,
	fadeOutRight,
}
