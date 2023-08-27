import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that checks if a number is even.
 *
 * Usage:
 * {{ someNumber | is_even }}
 *
 * @usageNotes
 * To use this pipe, provide a numeric value.
 * Example:
 * Input: 4
 * Output: true
 */
@Pipe({ name: 'is_even', pure: true })
export class IsEvenPipe implements PipeTransform {
	/**
	 * Checks if a number is even.
	 *
	 * @param {number} value - The number to be checked.
	 * @returns {boolean} - `true` if the number is even, `false` otherwise.
	 */
	transform(value) {
		return is_even(value)
	}
}

/**
 * Checks if a number is even.
 *
 * @param {number} value - The number to be checked.
 * @returns {boolean} - `true` if the number is even, `false` otherwise.
 */
export function is_even(value) {
	return value % 2 === 0
}
