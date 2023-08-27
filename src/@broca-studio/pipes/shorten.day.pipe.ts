import { Pipe, PipeTransform } from '@angular/core'

/**
 * A pipe that shortens a string by returning its first three characters.
 *
 * @usageNotes
 * To use this pipe, pass a string as the input, and it will return the first three characters of the string.
 *
 * @example
 * ```html
 * <!-- Assuming 'inputString' is a string -->
 * {{ inputString | shortened }}
 * ```
 * In this example, the `shortened` pipe is applied to 'inputString', resulting in the first three characters.
 */
@Pipe({
	name: 'shortened',
})
export class ShortenPipe implements PipeTransform {
	/**
	 * Transforms the input string by returning its first three characters.
	 *
	 * @param {string} value - The string to be shortened.
	 * @returns {string} - The first three characters of the string.
	 */
	transform(value: string): string {
		return shortened(value)
	}
}

/**
 * Shortens a string by returning its first three characters.
 *
 * @param {string} value - The string to be shortened.
 * @returns {string} - The first three characters of the string.
 */
export function shortened(value: string): string {
	const char = value.split('')

	return `${char[0]}${char[1]}${char[2]}`
}
