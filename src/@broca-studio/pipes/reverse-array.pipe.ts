import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe for reversing an array.
 *
 * Usage:
 * {{ array | reverse_array }}
 *
 * @usageNotes
 * To use this pipe, simply pass an array as the input, and it will return the reversed array if the `reverse` parameter is set to `true`.
 * Example:
 * Input: array = [1, 2, 3, 4, 5], reverse = true
 * Output: [5, 4, 3, 2, 1]
 *
 * @template T - The type of elements in the array.
 */
@Pipe({ name: 'reverse_array' })
export class NumberToArrayPipe<T> implements PipeTransform {
	/**
	 * Reverses an array if specified.
	 *
	 * @param {T[]} data - The array to reverse.
	 * @param {boolean} reverse - Indicates whether to reverse the array.
	 * @returns {T[]} - The reversed or original array.
	 */
	transform(data: T[], reverse: boolean = false): T[] {
		return reverse_array<T>(data, reverse)
	}
}

/**
 * Reverses an array if specified.
 *
 * @param {T[]} data - The array to reverse.
 * @param {boolean} reverse - Indicates whether to reverse the array.
 * @returns {T[]} - The reversed or original array.
 * @template T - The type of elements in the array.
 */
export function reverse_array<T>(data: T[], reverse: boolean = false): T[] {
	if (!reverse) {
		return data
	}

	return data.reverse()
}
