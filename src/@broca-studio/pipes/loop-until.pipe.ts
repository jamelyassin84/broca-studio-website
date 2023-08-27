import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that loops over an array and returns a new array containing elements from a specified range.
 *
 * Usage:
 * {{ dataArray | loop_until:options }}
 *
 * @usageNotes
 * To use this pipe, pass an array of elements as the first argument and an object specifying the range of elements (from and to) as the second argument.
 * It will return a new array containing elements from the specified range.
 * Example:
 * Input: dataArray = [1, 2, 3, 4, 5], options = { from: 1, to: 3 }
 * Output: [2, 3, 4]
 */
@Pipe({ name: 'loop_until', pure: true })
export class LoopUntilPipe implements PipeTransform {
	/**
	 * Loops over an array and returns a new array containing elements from a specified range.
	 *
	 * @param {T[]} data - The array of elements to loop over.
	 * @param {{ from: number; to: number }} options - An object specifying the range of elements to include in the result.
	 * @returns {T[]} - A new array containing elements from the specified range.
	 * @template T
	 */
	transform<T>(data: T[], options: { from: number; to: number }): T[] {
		return loop_until(data, options)
	}
}

/**
 * Loops over an array and returns a new array containing elements from a specified range.
 *
 * @param {T[]} data - The array of elements to loop over.
 * @param {{ from: number; to: number }} options - An object specifying the range of elements to include in the result.
 * @returns {T[]} - A new array containing elements from the specified range.
 * @template T
 */
export function loop_until<T>(
	data: T[],
	options: { from: number; to: number },
): T[] {
	let items = [...data]
	let { from, to } = options

	const newArray: T[] = []

	for (let i = 0; i < items.length; i++) {
		if (i >= from && i <= to) {
			newArray.push(items[i])
		}
	}

	return newArray
}
