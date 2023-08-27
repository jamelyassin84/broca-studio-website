import { Pipe, PipeTransform } from '@angular/core'
import { countryWithDialCode } from '@broca-studio/constants/countries/country-with-dial-code'
import { DialCode } from '@broca-studio/models/core.model'

/**
 * A custom pipe to append a country code to a phone number.
 */
@Pipe({
	name: 'appendCountryCode',
})
export class AppendCountryCodePipe implements PipeTransform {
	/**
	 * Transforms a phone number by appending a country code.
	 * @param value - The phone number to transform.
	 * @param code - The country code to append.
	 * @returns The transformed phone number with the country code.
	 */
	transform(value: string, code: string): string {
		return appendCountryCode(value, code)
	}
}

const countries: DialCode[] = countryWithDialCode
	.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
	.reverse()

/**
 * Appends a country code to a phone number.
 * @param value - The phone number to transform.
 * @param code - The country code to append.
 * @returns The transformed phone number with the country code.
 */
export function appendCountryCode(value: string, code: string): string {
	const dialCode = countries.find(
		(country) => code === country.code,
	)?.dial_code

	return `${dialCode}-${numberWithSpaces(value, '##-###-####')}`
}

/**
 * Formats a phone number with spaces based on a pattern.
 * @param value - The phone number to format.
 * @param pattern - The formatting pattern.
 * @returns The formatted phone number.
 */
function numberWithSpaces(value: any, pattern: string): string {
	let i = 0
	const phone = value.toString()
	return pattern.replace(/#/g, (_) => phone[i++])
}
