import { Pipe, PipeTransform } from '@angular/core'
import { calculate_tax } from './calculate-tax.pipe'

/**
 * A custom Angular pipe to append tax to a numeric value.
 *
 * @remarks
 * This pipe takes a numeric value and appends tax to it using the `calculate_tax` function.
 *
 * @example
 * ```html
 * <!-- Usage in template -->
 * {{ numericValue | append_tax }}
 * ```
 *
 * @example
 * // In your Angular component:
 * const originalValue = 100; // Original numeric value
 *
 * // Transform the value by appending tax
 * const transformedValue = this.appendTaxPipe.transform(originalValue);
 *
 * console.log(`Original Value: ${originalValue}`);
 * console.log(`Transformed Value with Tax: ${transformedValue}`);
 */
@Pipe({ name: 'append_tax', pure: true })
export class AppendTaxPipe implements PipeTransform {
	/**
	 * Transforms a numeric value by appending tax.
	 *
	 * @param value - The numeric value to transform.
	 * @returns The transformed value with tax added.
	 */
	transform(value: number): number {
		return appendTax(value)
	}
}

/**
 * Appends tax to a numeric value.
 *
 * @param value - The numeric value to which tax should be added.
 * @returns The value with tax added.
 */
export function appendTax(value: number): number {
	return calculate_tax(value) + value
}
