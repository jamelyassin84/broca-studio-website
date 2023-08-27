import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that calculates the price value after deducting a specified tax percentage.
 *
 * Usage:
 * {{ originalPrice | deduct_tax:[taxRate] }}
 *
 * @usageNotes
 * To use this pipe, provide the original price and an optional tax rate.
 * Example:
 * {{ 100 | deduct_tax:0.05 }} // Deducts 5% tax from the original price (100) and returns the new price.
 */
@Pipe({ name: 'deduct_tax', pure: true })
export class DeductTaxPipe implements PipeTransform {
	/**
	 * Transforms the input price by deducting the specified tax percentage.
	 *
	 * @param {number} price - The original price value.
	 * @param {number} [tax=0.05] - The tax rate as a decimal (e.g., 0.05 for 5%).
	 * @returns {number} - The price value after deducting the tax.
	 */
	transform(price, tax = 0.05) {
		return deduct_tax(price, tax)
	}
}

/**
 * Calculates the price value after deducting a specified tax percentage.
 *
 * @param {number} price - The original price value.
 * @param {number} [tax=0.05] - The tax rate as a decimal (e.g., 0.05 for 5%).
 * @returns {number} - The price value after deducting the tax.
 */
export function deduct_tax(price, tax = 0.05) {
	if (!price) {
		return 0
	}

	// Calculate the price after deducting the tax by dividing by (1 + tax).
	return price / (1 + tax)
}
