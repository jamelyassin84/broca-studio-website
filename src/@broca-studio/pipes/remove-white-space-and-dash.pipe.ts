import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that removes white spaces and dashes from a string.
 *
 * Usage:
 * {{ inputString | remove_white_space_and_dash }}
 *
 * @usageNotes
 * To use this pipe, simply pass a string as the input, and it will return the string with white spaces and dashes removed.
 * Example:
 * Input: inputString = 'Hello - World'
 * Output: 'HelloWorld'
 */
@Pipe({ name: 'remove_white_space_and_dash' })
export class RemoveWhiteSpaceAndDashPipe implements PipeTransform {
	/**
	 * Removes white spaces and dashes from a given string.
	 *
	 * @param {string} value - The string from which to remove white spaces and dashes.
	 * @returns {string} - The string with white spaces and dashes removed.
	 */
	transform(value: string): string {
		return remove_white_space_and_dash(value)
	}
}

/**
 * Removes white spaces and dashes from a given string.
 *
 * @param {string} value - The string from which to remove white spaces and dashes.
 * @returns {string} - The string with white spaces and dashes removed.
 */
export function remove_white_space_and_dash(value: string): string {
	return value.split('-').join('').split(' ').join('')
}
