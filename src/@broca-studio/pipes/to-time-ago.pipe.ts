import { Pipe, PipeTransform } from '@angular/core'
import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

/**
 * A custom Angular pipe that converts a date to a human-readable relative time ("time ago").
 *
 * @usageNotes
 * To use this pipe, pass a date as input, and it will return a string representing the relative time from the input date.
 *
 * @example
 * ```html
 * <!-- In your Angular template: -->
 * <!-- Converts a date to a human-readable relative time -->
 * {{ someDate | to_time_ago }}
 * ```
 */
@Pipe({ name: 'to_time_ago' })
export class ToTimeAgoPipe implements PipeTransform {
	/**
	 * Transforms a date into a human-readable relative time ("time ago").
	 *
	 * @param {Date} date - The input date to be converted.
	 * @returns {string} - The human-readable relative time.
	 *
	 * @example
	 * ```typescript
	 * // In your Angular component:
	 * const someDate = new Date(); // or get the date from your data
	 * const timeAgo = this.toTimeAgoPipe.transform(someDate); // "a few seconds ago"
	 * ```
	 */
	transform(date: Date): string {
		return to_time_ago(date)
	}
}

/**
 * Converts a given date into a human-readable relative time ("time ago").
 *
 * @param {Date} date - The date to be converted.
 * @returns {string} - The human-readable relative time.
 *
 * @example
 * ```typescript
 * // In your Angular component:
 * const someDate = new Date(); // or get the date from your data
 * const timeAgo = to_time_ago(someDate); // "a few seconds ago"
 * ```
 */
export function to_time_ago(date: Date): string {
	return dayjs(date).fromNow()
}

// Extend the Dayjs interface to include the 'fromNow' method
declare module 'dayjs' {
	interface Dayjs {
		fromNow()
	}
}
