import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that checks if a value is empty or falsy.
 *
 * Usage:
 * {{ someValue | empty }}
 *
 * @usageNotes
 * To use this pipe, pass a value, and it will return true if the value is empty or falsy, otherwise false.
 * Example:
 * Input: null
 * Output: true
 */
@Pipe({ name: 'empty' })
export class IsEmptyPipe implements PipeTransform {
	/**
	 * Checks if a value is empty or falsy.
	 *
	 * @param {any} value - The value to check for emptiness.
	 * @returns {boolean} - True if the value is empty or falsy, otherwise false.
	 */
	transform(value: any): boolean {
		return empty(value)
	}
}

/**
 * Checks if a value is empty or falsy.
 *
 * @param {any} value - The value to check for emptiness.
 * @returns {boolean} - True if the value is empty or falsy, otherwise false.
 */
export function empty(value: any): boolean {
	if (
		!value ||
		value === '' ||
		value === null ||
		value === 'undefined' ||
		value === 'null'
	) {
		return true
	}

	return false
}
