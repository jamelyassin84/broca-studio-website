import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that calculates the length of an array or the number of items in a collection.
 *
 * Usage:
 * {{ someArray | item_length }}
 *
 * @usageNotes
 * To use this pipe, pass an array or collection, and it will return the number of items it contains.
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: 5
 */
@Pipe({ name: 'item_length' })
export class ItemLengthPipe implements PipeTransform {
	/**
	 * Calculates the length of an array or the number of items in a collection.
	 *
	 * @param {any[]} items - The array or collection for which to determine the length.
	 * @returns {number} - The number of items in the array or collection.
	 */
	transform(items: any[]): number {
		return item_length(items)
	}
}

/**
 * Gets the length of an array or the number of items in a collection.
 *
 * @param {any[]} items - The array or collection for which to determine the length.
 * @returns {number} - The number of items in the array or collection.
 */
export function item_length(items: any[]): number {
	return items.length
}
