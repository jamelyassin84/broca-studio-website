import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { LanguageEnum } from '../enums/language-enum'

@Injectable({ providedIn: 'root' })
export class LanguageService {
	languages$ = new BehaviorSubject<LanguageEnum>(LanguageEnum.ARABIC)
}
