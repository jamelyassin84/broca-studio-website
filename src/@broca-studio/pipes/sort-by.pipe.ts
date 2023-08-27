import { unfreeze } from '@broca-studio/helpers/helpers'
import { empty } from '@broca-studio/pipes/is-empty.pipe'
import { Pipe, PipeTransform } from '@angular/core'

/**
 * A pipe that sorts an array of objects by a specified column in ascending order.
 *
 * @usageNotes
 * To use this pipe, pass an array of objects and the column name by which to sort as input. It will return the sorted array in ascending order.
 *
 * @example
 * ```html
 * <!-- Assuming 'myArray' is an array of objects and 'columnName' is the name of the column to sort by -->
 * {{ myArray | sort_by: columnName }}
 * ```
 * In this example, the `sort_by` pipe is applied to 'myArray' to sort it by the specified column name in ascending order.
 */
@Pipe({
	name: 'sort_by',
})
export class SortByPipe implements PipeTransform {
	/**
	 * Sorts an array of objects by a specified column in ascending order.
	 *
	 * @param {any[]} items - The array of objects to be sorted.
	 * @param {string} column - The name of the column by which to sort.
	 * @returns {any[]} - The sorted array in ascending order.
	 */
	transform(items: any[], column: any): any[] {
		return sort_by(items, column)
	}
}

/**
 * Sorts an array of objects by a specified column in ascending order.
 *
 * @param {any[]} array - The array of objects to be sorted.
 * @param {string} column - The name of the column by which to sort.
 * @returns {any[]} - The sorted array in ascending order.
 */
export function sort_by(array: any[], column: any): any[] {
	const items = [...unfreeze(array)]

	if (items.length === 0 || empty(items[0][column])) {
		return items
	}

	return items.sort((a, b) => {
		return a[column].localeCompare(b[column])
	})
}
