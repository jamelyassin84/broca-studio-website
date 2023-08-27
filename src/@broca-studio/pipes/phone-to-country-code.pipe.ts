import { countryWithDialCode } from './../constants/countries/country-with-dial-code'

import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that extracts the country code from a phone number.
 *
 * Usage:
 * {{ phoneNumber | phone_to_country_code }}
 *
 * @usageNotes
 * To use this pipe, simply pass a phone number as the input, and it will return the extracted country code or undefined if not found.
 * Example:
 * Input: phoneNumber = '+1 123-456-7890'
 * Output: 'us'
 */
@Pipe({ name: 'phone_to_country_code' })
export class PhoneToCountryCodePipe implements PipeTransform {
	/**
	 * Extracts the country code from a phone number.
	 *
	 * @param {string} phone - The phone number to extract the country code from.
	 * @returns {string | undefined} - The extracted country code or undefined if not found.
	 */
	transform(phone: string): string | undefined {
		return phone_to_country_code(phone)
	}
}

/**
 * Extracts the country code from a phone number.
 *
 * @param {string} phone - The phone number to extract the country code from.
 * @returns {string | undefined} - The extracted country code or undefined if not found.
 */
export function phone_to_country_code(phone: string): string | undefined {
	const country = countryWithDialCode.find((country) =>
		phone
			.toLocaleLowerCase()
			.includes(country.dial_code.toLocaleLowerCase()),
	)

	if (country) {
		return country.code.toLocaleLowerCase()
	}

	return undefined
}
