import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that calculates the tax amount for a given price using a specified tax rate.
 * The default tax rate is 5% (0.05).
 *
 * Usage:
 * {{ price | calculate_tax: taxRate }}
 *
 * @usageNotes
 * To use this pipe, provide the price and optionally the tax rate (default is 5%).
 * Example:
 * {{ 100 | calculate_tax: 0.08 }} // Calculates tax at an 8% rate for a price of 100.
 */
@Pipe({ name: 'calculate_tax' })
export class CalculateTaxPipe implements PipeTransform {
	/**
	 * Transforms the input price by calculating the tax amount based on the provided tax rate.
	 *
	 * @param {number} price - The price for which to calculate the tax.
	 * @param {number} [tax=0.05] - The tax rate (default is 5% or 0.05).
	 * @returns {number} - The calculated tax amount rounded to two decimal places.
	 */
	transform(price, tax = 0.05) {
		return calculate_tax(price, tax)
	}
}

/**
 * Calculates the tax amount for a given price using a specified tax rate.
 *
 * @param {number} price - The price for which to calculate the tax.
 * @param {number} [tax=0.05] - The tax rate (default is 5% or 0.05).
 * @returns {number} - The calculated tax amount rounded to two decimal places.
 */
export function calculate_tax(price, tax = 0.05) {
	// Calculate the tax amount and round it to two decimal places.
	return parseFloat((price * tax).toFixed(2))
}
