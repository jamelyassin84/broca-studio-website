import { Pipe, PipeTransform } from '@angular/core'

/**
 * A pipe that transforms a slug into a human-readable sentence.
 *
 * @usageNotes
 * To use this pipe, pass a slug string as input, and it will return a sentence with spaces instead of underscores and periods.
 *
 * @example
 * ```html
 * <!-- Assuming 'mySlug' is a slug string -->
 * {{ mySlug | slug_to_sentence }}
 * ```
 * In this example, the `slug_to_sentence` pipe is applied to 'mySlug', resulting in a human-readable sentence.
 */
@Pipe({ name: 'slug_to_sentence' })
export class SlugToSentencePipe implements PipeTransform {
	/**
	 * Transforms a slug into a human-readable sentence.
	 *
	 * @param {string} slug - The slug string to be transformed.
	 * @returns {string} - A sentence with spaces instead of underscores and periods.
	 */
	transform(slug: string) {
		return slug_to_sentence(slug)
	}
}

/**
 * Transforms a slug into a human-readable sentence.
 *
 * @param {string} slug - The slug string to be transformed.
 * @returns {string} - A sentence with spaces instead of underscores and periods.
 */
export const slug_to_sentence = (slug: string) => {
	return slug.split('_').join(' ').split('.').join(' ')
}
