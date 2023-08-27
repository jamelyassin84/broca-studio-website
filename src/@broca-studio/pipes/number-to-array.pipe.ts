import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that converts a number into an array of consecutive numbers from 1 to the given value.
 *
 * Usage:
 * {{ numberValue | number_to_array }}
 *
 * @usageNotes
 * To use this pipe, simply pass a number as the input, and it will return an array of consecutive numbers from 1 to the given number.
 * Example:
 * Input: numberValue = 5
 * Output: [1, 2, 3, 4, 5]
 */
@Pipe({ name: 'number_to_array' })
export class NumberToArrayPipe implements PipeTransform {
	/**
	 * Converts a number into an array of consecutive numbers from 1 to the given value.
	 *
	 * @param {number} value - The number to convert.
	 * @returns {number[]} - An array of consecutive numbers from 1 to the given value.
	 */
	transform(value: number): number[] {
		return number_to_array(value)
	}
}

/**
 * Converts a number into an array of consecutive numbers from 1 to the given value.
 *
 * @param {number} value - The number to convert.
 * @returns {number[]} - An array of consecutive numbers from 1 to the given value.
 */
export function number_to_array(value: number): number[] {
	const length: number[] = []

	for (let i = 1; i <= value; i++) {
		length.push(i)
	}

	return length
}
