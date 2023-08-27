import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that checks if an array has data, i.e., it is not empty.
 *
 * Usage:
 * {{ someArray | has_data }}
 *
 * @usageNotes
 * To use this pipe, simply pass an array to it, and it will return `true` if the array has data and `false` if it is empty.
 * Example:
 * Input: []
 * Output: false
 */
@Pipe({ name: 'has_data' })
export class HasDataPipe implements PipeTransform {
	/**
	 * Checks if an array has data, i.e., it is not empty.
	 *
	 * @param {any[]} value - The array to be checked for data.
	 * @returns {boolean} - `true` if the array has data, `false` if it is empty.
	 */
	transform(value: any) {
		return has_data(value)
	}
}

/**
 * Checks if an array has data, i.e., it is not empty.
 *
 * @param {any[]} value - The array to be checked for data.
 * @returns {boolean} - `true` if the array has data, `false` if it is empty.
 */
export function has_data(value: any) {
	return value.length !== 0 ? true : false
}
