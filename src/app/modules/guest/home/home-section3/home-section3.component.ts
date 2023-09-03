import { Component } from '@angular/core'
import { MICRO_SERVICES } from 'app/app-core/constants/micro-service'
import { SharedModule } from 'app/shared/shared.module'
import { LanguageService } from 'app/app-core/providers/language.service'

@Component({
	selector: 'home-section3',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './home-section3.component.html',
})
export class HomeSection3Component {
	constructor(private readonly _languageService: LanguageService) {}

	readonly language$ = this._languageService.language$

	readonly MICRO_SERVICES = MICRO_SERVICES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
