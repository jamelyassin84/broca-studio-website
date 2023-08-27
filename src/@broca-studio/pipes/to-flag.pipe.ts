import { Pipe, PipeTransform } from '@angular/core'
import { countryWithISO } from '@broca-studio/constants/countries/country-with-iso'

/**
 * A pipe that generates a URL for a country flag image based on the country code or name.
 *
 * @usageNotes
 * To use this pipe, pass a country code or name as input, and it will return the URL for the corresponding country flag image.
 *
 * @example
 * ```html
 * <!-- Assuming 'country' is a country code or name -->
 * <img [src]="country | to_flag">
 * ```
 * In this example, the `to_flag` pipe is used to generate the URL for a country flag image based on the 'country' input.
 */
@Pipe({ name: 'to_flag' })
export class ToFlagPipe implements PipeTransform {
	/**
	 * Generates a URL for a country flag image based on the country code or name.
	 *
	 * @param {string} country - The country code or name.
	 * @param {boolean} find - Whether to search for the country code based on the name (default is false).
	 * @returns {string} - The URL for the country flag image.
	 */
	transform(country: string, find: boolean = false): string {
		return to_flag(country, find)
	}
}

/**
 * Generates a URL for a country flag image based on the country code or name.
 *
 * @param {string} country - The country code or name.
 * @param {boolean} find - Whether to search for the country code based on the name (default is false).
 * @returns {string} - The URL for the country flag image.
 */
export function to_flag(country: string, find: boolean = false): string {
	// Uncomment the desired URL format based on your requirements.

	// Example URL format using lowercase country code:
	// return `https://flagcdn.com/64x48/${country.toLocaleLowerCase()}.png`;

	if (!find) {
		// Example URL format using lowercase country code:
		return `https://flagcdn.com/48x36/${country.toLocaleLowerCase()}.png`
	}

	// Example: You can modify this part to look up the country code based on the name.
	// Replace 'oldCountry.name' with the correct property from your country data.
	const flag = countryWithISO.find((oldCountry) => {
		return oldCountry.name === (country as any)
	})['alpha-2']

	// Example URL format using lowercase country code:
	return `https://flagcdn.com/48x36/${flag.toLocaleLowerCase()}.png`
}
