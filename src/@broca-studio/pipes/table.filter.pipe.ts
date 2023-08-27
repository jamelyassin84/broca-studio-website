import { Pipe, PipeTransform } from '@angular/core'

/**
 * A pipe that filters an array of objects based on a search value.
 *
 * @usageNotes
 * To use this pipe, pass an array of objects and the search value as input. It will return a filtered array containing objects that match the search value.
 *
 * @example
 * ```html
 * <!-- Assuming 'myArray' is an array of objects and 'searchValue' is the search string -->
 * {{ myArray | filter: searchValue }}
 * ```
 * In this example, the `filter` pipe is applied to 'myArray' to filter objects that match 'searchValue'.
 */
@Pipe({
	name: 'filter',
})
export class TableFilterPipe implements PipeTransform {
	/**
	 * Filters an array of objects based on a search value.
	 *
	 * @param {any[]} items - The array of objects to be filtered.
	 * @param {string} value - The search value to filter by.
	 * @returns {any[]} - The filtered array containing objects that match the search value.
	 */
	transform(items: any[], value: string): any[] {
		if (!items || items === null) {
			return []
		}

		if (value === undefined || value === '') {
			return items
		}

		if (value.split('').length === 1) {
			return items
		}

		const newItems = []

		items.forEach((item) => {
			for (const key in item) {
				if (
					item !== null &&
					item[key] !== null &&
					typeof item[key] === 'string' &&
					item[key].toLowerCase().includes(value.toLowerCase())
				) {
					const index = newItems.findIndex(
						(array) => array.id === item[key].id,
					)

					if (index < 0) {
						newItems.push(item)
					}
				}
			}
		})

		return [...new Set(newItems)]
	}
}
