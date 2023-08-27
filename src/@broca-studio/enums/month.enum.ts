/**
 * Enumeration representing months of the year.
 *
 * @remarks
 * This enum defines constants for each month of the year, providing a more readable way to work with months in your code.
 *
 * @example
 * // Import the MonthEnum enum:
 * import { MonthEnum } from './your-month-enum-file';
 *
 * // Usage in TypeScript code:
 * const currentMonth = MonthEnum.AUGUST;
 * console.log(`The current month is ${currentMonth}.`);
 *
 * // Usage in Angular template:
 * <!-- Assuming 'currentMonth' is a variable containing the current month -->
 * <p>Current Month: {{ currentMonth }}</p>
 */
export enum MonthEnum {
	/**
	 * Represents January.
	 */
	JANUARY = 'January',

	/**
	 * Represents February.
	 */
	FEBRUARY = 'February',

	/**
	 * Represents March.
	 */
	MARCH = 'March',

	/**
	 * Represents April.
	 */
	APRIL = 'April',

	/**
	 * Represents May.
	 */
	MAY = 'May',

	/**
	 * Represents June.
	 */
	JUNE = 'June',

	/**
	 * Represents July.
	 */
	JULY = 'July',

	/**
	 * Represents August.
	 */
	AUGUST = 'August',

	/**
	 * Represents September.
	 */
	SEPTEMBER = 'September',

	/**
	 * Represents October.
	 */
	OCTOBER = 'October',

	/**
	 * Represents November.
	 */
	NOVEMBER = 'November',

	/**
	 * Represents December.
	 */
	DECEMBER = 'December',
}
