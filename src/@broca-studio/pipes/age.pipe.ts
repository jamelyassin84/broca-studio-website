import { Pipe, PipeTransform } from '@angular/core'
import dayjs from 'dayjs'

/**
 * A custom Angular pipe to calculate age based on the given date of birth.
 *
 * @remarks
 * This pipe calculates the age in years based on the provided date of birth.
 *
 * @example
 * <!-- Usage in template -->
 * {{ dateOfBirth | age }}
 */
@Pipe({
	name: 'age',
})
export class AgePipe implements PipeTransform {
	/**
	 * Transforms a date of birth into an age string.
	 *
	 * @param value - The date of birth as a Date object or a string in a supported format.
	 * @returns The age as a string.
	 *
	 * @example
	 * // In your Angular component:
	 * const dateOfBirth: Date = new Date('1990-01-01');
	 *
	 * // Transform the date of birth to an age string
	 * const ageString: string = this.agePipe.transform(dateOfBirth);
	 *
	 * console.log(`Age: ${ageString}`); // Output: "31 Yrs"
	 */
	transform(value: Date | string): string {
		return age(value)
	}
}

/**
 * Calculates the age based on the given date of birth.
 *
 * @param value - The date of birth as a Date object or a string in a supported format.
 * @returns The age as a string.
 */
export function age(value: Date | string): string {
	const today = dayjs()
	const birthDate = dayjs(value)
	const years = today.diff(birthDate, 'years')
	return `${years} Yrs`
}
