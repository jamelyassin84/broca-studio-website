import { Pipe, PipeTransform } from '@angular/core'
import { Time } from './../models/core.model'

/**
 * A custom Angular pipe that generates a time interval array between two specified Time objects.
 *
 * Usage:
 * {{ { from: startTime, to: endTime } | to_time_interval }}
 *
 * @usageNotes
 * To use this pipe, provide an object containing 'from' and 'to' Time objects.
 * Example:
 * Input: { from: { hours: 8 }, to: { hours: 12 } }
 * Output: [{ hours: 8, minutes: 0, seconds: 0, milliseconds: 0 }, ...]
 */
@Pipe({ name: 'to_time_interval' })
export class ToTimeIntervalPipe implements PipeTransform {
	/**
	 * Generates a time interval array between two specified Time objects.
	 *
	 * @param {Object} data - An object containing 'from' and 'to' Time objects.
	 * @returns {Time[]} - An array of Time objects representing the time interval.
	 */
	transform(data) {
		return to_time_interval(data)
	}
}

/**
 * Generates a time interval array between two specified time objects.
 *
 * @param {Object} data - An object containing 'from' and 'to' Time objects.
 * @param {Time} data.from - The starting time of the interval.
 * @param {Time} data.to - The ending time of the interval.
 * @returns {Time[]} - An array of Time objects representing the time interval.
 */
export function to_time_interval(data) {
	const timings = []

	const { from, to } = data

	const startHour = from.hours
	const endHour = to.hours

	const isGraveYard = endHour < 13

	for (
		let time = startHour;
		!isGraveYard
			? time <= 23 && time <= endHour
			: time <= 23 || time <= endHour;
		time++
	) {
		timings.push({
			hours: time,
			minutes: 0,
			seconds: 0,
			milliseconds: 0,
		})
	}

	if (isGraveYard) {
		for (let time = 2; time <= endHour; time++) {
			timings.push({
				hours: time,
				minutes: 0,
				seconds: 0,
				milliseconds: 0,
			})
		}
	}

	return [...new Set(timings)]
}
