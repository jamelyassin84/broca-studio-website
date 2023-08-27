import { Pipe, PipeTransform } from '@angular/core'
import dayjs from 'dayjs'

/**
 * A custom Angular pipe that calculates the number of days between the current date and a given date.
 *
 * Usage:
 * {{ toDate | day_interval }}
 *
 * @usageNotes
 * To use this pipe, provide the target date (toDate).
 * Example:
 * {{ '2023-12-31' | day_interval }} // Calculates the days between the current date and December 31, 2023.
 */
@Pipe({
	name: 'day_interval',
})
export class DayIntervalPipe implements PipeTransform {
	/**
	 * Transforms the input date by calculating the number of days between the current date and the provided date.
	 *
	 * @param {Date} to - The target date to calculate the interval to.
	 * @returns {string} - The calculated interval in days as a string.
	 */
	transform(to: any) {
		return day_interval(to)
	}
}

/**
 * Calculates the number of days between the current date and a given date.
 *
 * @param {Date} to - The target date to calculate the interval to.
 * @returns {string} - The calculated interval in days as a string.
 */
export function day_interval(to: any) {
	// Get the current date as the interval starting point.
	const intervalFrom = dayjs()

	// Convert the target date to a dayjs object.
	const intervalTo = dayjs(to)

	// Calculate the difference in days between the two dates and convert it to a string.
	return intervalTo.diff(intervalFrom, 'days').toString()
}
