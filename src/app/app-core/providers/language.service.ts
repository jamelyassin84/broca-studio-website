import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { LanguageEnum } from '../enums/language-enum'
import { LocalStorageEnum } from '../enums/local-storage-enum'
import { empty } from '@broca-studio/pipes/is-empty.pipe'

@Injectable({ providedIn: 'root' })
export class LanguageService {
	language$ = new BehaviorSubject<LanguageEnum>(LanguageEnum.ARABIC)

	initLanguage(): void {
		const language = localStorage.getItem(
			LocalStorageEnum.LANGUAGE,
		) as LanguageEnum

		if (empty(language)) {
			localStorage.setItem(LocalStorageEnum.LANGUAGE, LanguageEnum.ARABIC)
			this.initLanguage()
			return
		}

		const html = document.getElementById('html')
		html.setAttribute(
			'dir',
			language === LanguageEnum.ARABIC ? 'rtl' : 'ltr',
		)
		html.setAttribute(
			'lang',
			language === LanguageEnum.ARABIC ? 'ar' : 'en',
		)

		console.log(language)

		this.language$.next(language)
	}

	setLanguage(language: LanguageEnum) {
		localStorage.setItem(LocalStorageEnum.LANGUAGE, language)

		this.initLanguage()
	}
}
