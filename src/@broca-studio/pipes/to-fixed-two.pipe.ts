import { Pipe, PipeTransform } from '@angular/core'

/**
 * A pipe that formats a number with two decimal places as a string.
 *
 * @usageNotes
 * To use this pipe, pass a number as input, and it will return the number formatted as a string with exactly two decimal places.
 *
 * @example
 * ```html
 * <!-- Assuming 'price' is a number -->
 * <p>{{ price | to_fixed_two }}</p>
 * ```
 * In this example, the `to_fixed_two` pipe is used to format the 'price' number with two decimal places and display it as a string.
 */
@Pipe({ name: 'to_fixed_two' })
export class ToFixedTwoPipe implements PipeTransform {
	/**
	 * Formats a number with two decimal places as a string.
	 *
	 * @param {number} value - The number to format.
	 * @returns {string} - The formatted number as a string.
	 */
	transform(value: number): string {
		return to_fixed_two(value)
	}
}

/**
 * Formats a number with two decimal places as a string.
 *
 * @param {number} value - The number to format.
 * @returns {string} - The formatted number as a string.
 */
export function to_fixed_two(value: number): string {
	return (value < 10 ? '0' : '') + value
}
