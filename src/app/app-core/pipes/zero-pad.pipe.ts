import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that formats numbers as two-digit strings with leading zeros.
 *
 * @example
 * ```
 * {{ 1 | zeroPad }} // Outputs: "01"
 * {{ 10 | zeroPad }} // Outputs: "10"
 * ```
 */
@Pipe({
	name: 'zeroPad',
})
export class ZeroPadPipe implements PipeTransform {
	/**
	 * Transforms a number into a string with leading zeros to achieve the desired width.
	 *
	 * @param value - The input number to be transformed.
	 * @param width - The desired width of the resulting string (default is 2).
	 * @returns The formatted string.
	 *
	 * @example
	 * ```
	 * transform(1); // Returns "01"
	 * transform(10, 3); // Returns "010"
	 * ```
	 */
	transform(value: number, width: number = 2): string {
		// Convert the number to a string
		let strValue = value.toString()

		// Add leading zeros until the string reaches the desired width
		while (strValue.length < width) {
			strValue = '0' + strValue
		}

		return strValue
	}
}
