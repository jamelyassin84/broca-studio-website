import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that limits the number of items in an array.
 *
 * Usage:
 * {{ itemsArray | limit_by:limit }}
 *
 * @usageNotes
 * To use this pipe, pass an array of items as the first argument and the maximum number of items (limit) as the second argument.
 * It will return a new array containing at most `limit` items from the original array.
 * Example:
 * Input: itemsArray = [1, 2, 3, 4, 5], limit = 3
 * Output: [1, 2, 3]
 */
@Pipe({
	name: 'limit_by',
})
export class LimitByPipe implements PipeTransform {
	/**
	 * Limits the number of items in an array.
	 *
	 * @param {any[]} items - The array of items to limit.
	 * @param {number} limit - The maximum number of items to include in the result.
	 * @returns {any[]} - A new array containing at most `limit` items from the original array.
	 */
	transform(items: any[], limit: number): any[] {
		return limit_by(items, limit)
	}
}

/**
 * Limits the number of items in an array.
 *
 * @param {any[]} items - The array of items to limit.
 * @param {number} limit - The maximum number of items to include in the result.
 * @returns {any[]} - A new array containing at most `limit` items from the original array.
 */
export function limit_by(items: any[], limit: number): any[] {
	return items.slice(0, limit)
}
