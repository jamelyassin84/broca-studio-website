import { Component, EventEmitter, Input, Output } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SLIDERS } from 'app/app-core/constants/slider'
import { Slider } from 'app/app-core/models/system/slider.model'
import { LanguageService } from 'app/app-core/providers/language.service'
import { SliderService } from 'app/app-core/providers/slider.service'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-section1-navigation',
	standalone: true,
	templateUrl: './home-section1-navigation.component.html',
	imports: [SharedModule],
	animations: [...dbwAnimations],
})
export class HomeSection1NavigationComponent {
	constructor(
		private readonly _sliderService: SliderService,
		private readonly _languageService: LanguageService,
	) {}

	@Output()
	onSlideChange = new EventEmitter<Slider>()

	@Input({ required: true })
	currentSlide: Slider

	readonly currentSlide$ = this._sliderService.currentSlide$

	readonly language$ = this._languageService.language$

	readonly SLIDERS = SLIDERS

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
