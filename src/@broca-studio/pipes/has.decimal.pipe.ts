import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that checks if a number has a decimal part.
 *
 * Usage:
 * {{ someNumber | has_decimal }}
 *
 * @usageNotes
 * To use this pipe, simply pass a number to it, and it will return `true` if the number has a decimal part and `false` if it is an integer.
 * Example:
 * Input: 5.2
 * Output: true
 */
@Pipe({ name: 'has_decimal' })
export class HasDecimalPipe implements PipeTransform {
	/**
	 * Checks if a number has a decimal part.
	 *
	 * @param {number} value - The number to be checked for a decimal part.
	 * @returns {boolean} - `true` if the number has a decimal part, `false` if it is an integer.
	 */
	transform(value: number) {
		return has_decimal(value)
	}
}

/**
 * Checks if a number has a decimal part.
 *
 * @param {number} value - The number to be checked for a decimal part.
 * @returns {boolean} - `true` if the number has a decimal part, `false` if it is an integer.
 */
export function has_decimal(value: number) {
	return value % 1 !== 0
}
