/**
 * Class containing commonly used animation curves for CSS animations.
 */
export class DBWAnimationCurves {
	/**
	 * Standard animation curve (ease-in-out).
	 * @type {string}
	 */
	static standard = 'cubic-bezier(0.4, 0.0, 0.2, 1)'

	/**
	 * Deceleration animation curve (ease-out).
	 * @type {string}
	 */
	static deceleration = 'cubic-bezier(0.0, 0.0, 0.2, 1)'

	/**
	 * Acceleration animation curve (ease-in).
	 * @type {string}
	 */
	static acceleration = 'cubic-bezier(0.4, 0.0, 1, 1)'

	/**
	 * Sharp animation curve (custom curve for quick transitions).
	 * @type {string}
	 */
	static sharp = 'cubic-bezier(0.4, 0.0, 0.6, 1)'
}

/**
 * Class containing commonly used animation durations for CSS animations.
 */
export class DBWAnimationDurations {
	/**
	 * Complex animation duration (375 milliseconds).
	 * @type {string}
	 */
	static complex = '375ms'

	/**
	 * Entering animation duration (225 milliseconds).
	 * @type {string}
	 */
	static entering = '425ms'

	/**
	 * Exiting animation duration (195 milliseconds).
	 * @type {string}
	 */
	static exiting = '295ms'
}
