import { Pipe, PipeTransform } from '@angular/core'
import dayjs from 'dayjs'

/**
 * A custom Angular pipe that filters an array of items by a specific date.
 *
 * Usage:
 * {{ itemsArray | filter_by_date: targetDate }}
 *
 * @usageNotes
 * To use this pipe, provide an array of items and a target date.
 * Example:
 * Input: [{ date: '2023-08-24' }, { date: '2023-08-25' }, { date: '2023-08-26' }], targetDate: '2023-08-25'
 * Output: [{ date: '2023-08-25' }]
 */
@Pipe({
	name: 'filter_by_date',
})
export class FilterByDatePipe implements PipeTransform {
	/**
	 * Filters an array of items by a specific date.
	 *
	 * @param {any[]} items - The array of items to filter.
	 * @param {Date} date - The date to filter by.
	 * @returns {any[]} - An array of filtered items.
	 */
	transform(items: any, date: any) {
		return filter_by_date(items, date)
	}
}

/**
 * Filters an array of items by a specific date.
 *
 * @param {any[]} items - The array of items to filter.
 * @param {Date} date - The date to filter by.
 * @returns {any[]} - An array of filtered items.
 */
export function filter_by_date(items: any, date: any) {
	return items.filter(
		(item: any) =>
			dayjs(item.date).format('MM-DD-YY') ===
			dayjs(date).format('MM-DD-YY'),
	)
}
