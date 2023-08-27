import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that converts a 24-hour time format to a 12-hour time format.
 *
 * @usageNotes
 * To use this pipe, pass a time string in 24-hour format as input, and it will return the time in 12-hour format.
 *
 * @example
 * ```html
 * <!-- In your Angular template: -->
 * <!-- Converts a 24-hour time to 12-hour time -->
 * {{ someTime | to_twelve_hour }}
 * ```
 */
@Pipe({
	name: 'to_twelve_hour',
})
export class TwentyFourToTwelveHoursPipe implements PipeTransform {
	/**
	 * Transforms a 24-hour time format into a 12-hour time format.
	 *
	 * @param {any} time - The input time in 24-hour format (e.g., 'HH:mm').
	 * @returns {any} - The time in 12-hour format with 'AM' or 'PM' suffix.
	 *
	 * @example
	 * ```typescript
	 * // In your Angular component:
	 * const someTime = '15:30'; // 24-hour format
	 * const twelveHourTime = this.twentyFourToTwelveHoursPipe.transform(someTime); // "03:30 PM"
	 * ```
	 */
	transform(time: any): any {
		return to_twelve_hour(time)
	}
}

/**
 * Converts a given time in 24-hour format to 12-hour format.
 *
 * @param {any} time - The input time in 24-hour format (e.g., 'HH:mm').
 * @returns {any} - The time in 12-hour format with 'AM' or 'PM' suffix.
 *
 * @example
 * ```typescript
 * // In your Angular component:
 * const someTime = '15:30'; // 24-hour format
 * const twelveHourTime = to_twelve_hour(someTime); // "03:30 PM"
 * ```
 */
export function to_twelve_hour(time: any): any {
	let [hour, min] = time.split(':')
	const part = hour > 12 ? 'PM' : 'AM'

	if (parseInt(hour) === 0) hour = 12

	min = `${min}`.length === 1 ? `0${min}` : min

	hour = hour > 12 ? hour - 12 : hour

	hour = `${hour}`.length === 1 ? `0${hour}` : hour

	return `${hour}:${min} ${part}`
}
