import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that extracts initials from a name or a string containing names.
 *
 * Usage:
 * {{ fullName | initials }}
 *
 * @usageNotes
 * To use this pipe, pass a string containing names, and it will return the extracted initials. If the input is a single character or empty, it returns the input as is.
 * Example:
 * Input: "John Doe"
 * Output: "JD"
 */
@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
	/**
	 * Extracts initials from a name or a string containing names.
	 *
	 * @param {string} value - The input string containing one or more names.
	 * @returns {string} - The extracted initials.
	 */
	transform(value: string): string {
		return initials(value)
	}
}

/**
 * Extracts initials from a name or a string containing names.
 *
 * @param {string} value - The input string containing one or more names.
 * @returns {string} - The extracted initials.
 */
export function initials(value: string): string {
	if (value.split('').length === 1) {
		return value
	}

	const initials = value.split(' ')

	if (initials.length === 1) {
		const newInitial = initials[0].split('')

		return newInitial[0] + newInitial[1]
	}

	return initials[0].charAt(0) + initials[1].charAt(0)
}
