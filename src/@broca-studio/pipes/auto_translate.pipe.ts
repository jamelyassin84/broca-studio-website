import { Pipe, PipeTransform } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { LanguageEnum } from 'app/app-core/enums/language-enum'
import { LocalStorageEnum } from 'app/app-core/enums/local-storage-enum'
import { empty } from './is-empty.pipe'

/**
 * A custom Angular pipe for automatically translating a word to the current language.
 * This pipe transforms a given word into its translated form.
 *
 * @example
 * <!-- In your Angular template -->
 * <p>{{ 'Hello World' | auto_translate }}</p>
 *
 * // In your component or template, import and use the pipe:
 * const translatedWord = new AutoTranslatePipe(translateService).transform('Hello World');
 * // translatedWord will contain the translation of 'Hello World' based on the current language.
 */
@Pipe({ name: 'auto_translate' })
export class AutoTranslatePipe implements PipeTransform {
	/**
	 * Constructor to inject the TranslateService.
	 *
	 * @param _translateService The ngx-translate service for translations.
	 */
	constructor(private readonly _translateService: TranslateService) {}

	/**
	 * Transform a word into its translated form.
	 *
	 * @param word The word to be translated.
	 * @returns The translated word in the current language.
	 */
	transform(word: string): string {
		// Convert the word to dash case
		const dashCasedWord = word.replace(/\s+/g, '-').toLowerCase()

		if (!this._translateService.currentLang) {
			return word
		}

		// Use the TranslateService to get the translation
		return this._translateService.instant(
			dashCasedWord.toString().toLowerCase(),
		)
	}
}
