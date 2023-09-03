import { Component } from '@angular/core'
import { GAMES } from 'app/app-core/constants/games'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { LanguageService } from 'app/app-core/providers/language.service'

@Component({
	selector: 'home-section2',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './home-section2.component.html',
})
export class HomeSection2Component {
	constructor(private readonly _languageService: LanguageService) {}

	readonly language$ = this._languageService.language$

	readonly GAMES = GAMES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
