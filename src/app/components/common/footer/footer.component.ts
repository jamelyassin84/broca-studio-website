import { Component, Input } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { LanguageService } from 'app/app-core/providers/language.service'
import { SOCIALS } from 'app/app-core/constants/socials'

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	constructor(private readonly _languageService: LanguageService) {}

	readonly language$ = this._languageService.language$

	readonly SOCIALS = SOCIALS

	@Input({ required: false })
	reversed: boolean = false

	scrollToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
