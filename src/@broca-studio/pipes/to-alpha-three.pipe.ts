import { Pipe, PipeTransform } from '@angular/core'
import { countryWithISO } from '@broca-studio/constants/countries/country-with-iso'

/**
 * A pipe that converts a two-letter ISO country code to a three-letter ISO country code.
 *
 * @usageNotes
 * To use this pipe, pass a two-letter ISO country code as input, and it will return the corresponding three-letter ISO country code.
 *
 * @example
 * ```html
 * <!-- Assuming 'isoCode' is a two-letter ISO country code -->
 * {{ isoCode | to_alpha_3 }}
 * ```
 * In this example, the `to_alpha_3` pipe is applied to 'isoCode' to convert it to a three-letter ISO country code.
 */
@Pipe({ name: 'to_alpha_3' })
export class ToAlphaThreePipe implements PipeTransform {
	/**
	 * Converts a two-letter ISO country code to a three-letter ISO country code.
	 *
	 * @param {string} iso - The two-letter ISO country code to be converted.
	 * @returns {string} - The corresponding three-letter ISO country code.
	 */
	transform(iso: string): string {
		return to_alpha_3(iso)
	}
}

/**
 * Converts a two-letter ISO country code to a three-letter ISO country code.
 *
 * @param {string} iso - The two-letter ISO country code to be converted.
 * @returns {string} - The corresponding three-letter ISO country code.
 */
export function to_alpha_3(iso: string): string {
	return countryWithISO.find((country) => country['alpha-2'] === iso)[
		'alpha-3'
	]
}
