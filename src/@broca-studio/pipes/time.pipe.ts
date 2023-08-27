import { Pipe, PipeTransform } from '@angular/core'

/**
 * A pipe that formats a time value as a string.
 *
 * @usageNotes
 * To use this pipe, pass a time value as input, and it will return the time value formatted as a string.
 *
 * @example
 * ```html
 * <!-- Assuming 'timeValue' is a time value in the format 'hh:mm' -->
 * {{ timeValue | to_time }}
 * ```
 * In this example, the `to_time` pipe is applied to 'timeValue' to format it as a string.
 */
@Pipe({
	name: 'to_time',
})
export class TimePipe implements PipeTransform {
	/**
	 * Formats a time value as a string.
	 *
	 * @param {string} value - The time value to be formatted (in the format 'hh:mm').
	 * @returns {string} - The formatted time value as a string.
	 */
	transform(value: string): string {
		return to_time(value)
	}
}

/**
 * Formats a time value as a string.
 *
 * @param {string} value - The time value to be formatted (in the format 'hh:mm').
 * @returns {string} - The formatted time value as a string.
 */
export function to_time(value: string): string {
	return (parseInt(value.toString().split(':')[0]) < 10 ? '0' : '') + value
}
