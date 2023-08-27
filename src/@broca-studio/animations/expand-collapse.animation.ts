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
 * Animation trigger for expanding and collapsing elements.
 * This trigger can be used to animate the height of an element as it expands or collapses.
 * It uses the provided animation durations and curves.
 * @type {AnimationTriggerMetadata}
 */
const expandCollapse: AnimationTriggerMetadata = trigger('expandCollapse', [
	/**
	 * State for the void and collapsed states.
	 * Initially, the height is set to '0'.
	 */
	state(
		'void, collapsed',
		style({
			height: '0',
		}),
	),

	/**
	 * State for the expanded state.
	 * The '*' wildcard is used to match any state value.
	 */
	state('*, expanded', style('*')),

	/**
	 * Transitions defined for the trigger.
	 * There are no defined transitions for void and false states.
	 */
	transition('void <=> false, collapsed <=> false, expanded <=> false', []),

	/**
	 * Transition for expanding and collapsing.
	 * Uses animation durations and curves from 'DBWAnimationDurations' and 'DBWAnimationCurves'.
	 */
	transition('void <=> *, collapsed <=> expanded', animate('{{timings}}'), {
		params: {
			timings: `${DBWAnimationDurations.entering} ${DBWAnimationCurves.deceleration}`,
		},
	}),
])

export { expandCollapse }
