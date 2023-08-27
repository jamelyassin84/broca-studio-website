import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that converts a string to a URL-friendly slug.
 *
 * Usage:
 * {{ inputString | to_slug }}
 *
 * @param {string} text - The input string to be converted to a slug.
 * @param {'-' | '_'} separator - The separator used in the slug (default is '-').
 * @returns {string} - The generated slug.
 */
@Pipe({ name: 'to_slug' })
export class ToSlugPipe implements PipeTransform {
	/**
	 * Transforms the input string by converting it to a URL-friendly slug.
	 *
	 * @param {string} value - The input string to be converted.
	 * @param {'-' | '_'} separator - The separator used in the slug (default is '-').
	 * @returns {string} - The generated slug.
	 */
	transform(text: string, separator: '-' | '_' = '-'): string {
		return to_slug(text, separator)
	}
}

/**
 * Converts a given text to a URL-friendly slug.
 *
 * @param {string} text - The text to be converted to a slug.
 * @param {'-' | '_'} separator - The separator used in the slug (default is '-').
 * @returns {string} - The generated slug.
 */
export const to_slug = (text: string, separator: '-' | '_' = '-'): string => {
	return text
		.toString() // Cast to string
		.toLowerCase() // Convert the string to lowercase letters
		.normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
		.trim() // Remove whitespace from both sides of a string
		.replace(/\s+/g, separator) // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, separator) // Replace multiple - with single -
}
