import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { LanguageService } from 'app/app-core/providers/language.service'
import { SOCIALS } from 'app/app-core/constants/socials'

@Component({
	selector: 'home-section1-socials',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './home-section1-socials.component.html',
})
export class HomeSection1SocialsComponent {
	constructor(private readonly _languageService: LanguageService) {}

	readonly language$ = this._languageService.language$

	readonly SOCIALS = SOCIALS
}
