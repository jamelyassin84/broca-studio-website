import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that converts a string to a URL-friendly slug.
 *
 * @usageNotes
 * To use this pipe, pass an input string and an optional separator (default is '-') as input, and it will return the generated slug.
 *
 * @example
 * ```html
 * <!-- In your Angular template: -->
 * <!-- Converts "Hello World" to "hello-world" -->
 * {{ "Hello World" | to_slug }}
 *
 * <!-- Converts "Custom Example Text" to "custom_example_text" -->
 * {{ "Custom Example Text" | to_slug:'_' }}
 * ```
 */
@Pipe({ name: 'to_slug' })
export class ToSlugPipe implements PipeTransform {
	/**
	 * Transforms the input string by converting it to a URL-friendly slug.
	 *
	 * @param {string} value - The input string to be converted.
	 * @param {'-' | '_'} separator - The separator used in the slug (default is '-').
	 * @returns {string} - The generated slug.
	 *
	 * @example
	 * ```typescript
	 * // In your Angular component:
	 * const originalText = "Custom Example Text";
	 * const slug = this.toSlugPipe.transform(originalText, '_'); // "custom_example_text"
	 * ```
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
 *
 * @example
 * ```typescript
 * // In your Angular component:
 * const originalText = "Custom Example Text";
 * const slug = to_slug(originalText, '_'); // "custom_example_text"
 * ```
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
