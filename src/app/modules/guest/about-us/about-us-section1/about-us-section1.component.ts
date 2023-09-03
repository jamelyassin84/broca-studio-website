import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { ABOUT_SERVICES } from 'app/app-core/constants/about-services'
import { LanguageService } from 'app/app-core/providers/language.service'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'about-us-section1',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './about-us-section1.component.html',
})
export class AboutUsSection1Component {
	constructor(private readonly _languageService: LanguageService) {}

	readonly language$ = this._languageService.language$

	readonly ABOUT_SERVICES = ABOUT_SERVICES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
