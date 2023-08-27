import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that filters an array of items based on a keyword.
 *
 * Usage:
 * {{ itemsArray | keyword_filter:keyword }}
 *
 * @usageNotes
 * To use this pipe, pass an array of items as the first argument and a keyword as the second argument.
 * It will return a filtered array of items that match the keyword.
 * Example:
 * Input: itemsArray = [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Cherry' }], keyword = 'an'
 * Output: [{ name: 'Banana' }, { name: 'Cherry' }]
 */
@Pipe({
	name: 'keyword_filter',
})
export class KeywordFilterPipe implements PipeTransform {
	/**
	 * Filters an array of items based on a keyword.
	 *
	 * @param {any[]} value - The array of items to filter.
	 * @param {string[]} args - Additional arguments. The first argument should be the keyword for filtering.
	 * @returns {unknown} - A filtered array of items that match the keyword.
	 */
	transform(value: any[], ...args: string[]): unknown {
		return keyword_filter(value, ...args)
	}
}

/**
 * Filters an array of items based on a keyword.
 *
 * @param {any[]} value - The array of items to filter.
 * @param {string[]} args - Additional arguments. The first argument should be the keyword for filtering.
 * @returns {unknown} - A filtered array of items that match the keyword.
 */
export function keyword_filter(value: any[], ...args: string[]): unknown {
	if (value && args[0] && args[0].length > 2) {
		return value.filter((item) =>
			item.name.toLowerCase().includes(args[0].toLowerCase()),
		)
	}

	return value
}
