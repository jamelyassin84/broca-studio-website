import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SLIDERS } from 'app/app-core/constants/slider'
import { interval, repeat, take, tap } from 'rxjs'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { HomeSection1SocialsComponent } from './components/home-section1-socials/home-section1-socials.component'
import { HomeSection1PagesComponent } from './components/home-section1-pages/home-section1-pages.component'
import { HomeSection1BackgroundComponent } from './components/home-section1-background/home-section1-background.component'
import { HomeSection1NavigationComponent } from './components/home-section1-navigation/home-section1-navigation.component'
import { HomeSection1OverlayComponent } from './components/home-section1-overlay/home-section1-overlay.component'
import { HomeSection1WhatsAppAndScrollDownComponent } from './components/home-section1-whats-app-and-scroll-down/home-section1-whats-app-and-scroll-down.component'
import { SliderService } from 'app/app-core/providers/slider.service'
import { LanguageService } from 'app/app-core/providers/language.service'
import { MediaService } from '@broca-studio/utilities/media.service'

const standaloneComponents = [
	HomeSection1SocialsComponent,
	HomeSection1PagesComponent,
	HomeSection1OverlayComponent,
	HomeSection1NavigationComponent,
	HomeSection1BackgroundComponent,

	// disappearing components
	HomeSection1WhatsAppAndScrollDownComponent,
]

@Component({
	selector: 'home-section1',
	standalone: true,
	animations: [...dbwAnimations],
	templateUrl: './home-section1.component.html',
	imports: [SharedModule, ...standaloneComponents],
})
export class HomeSection1Component {
	constructor(
		private readonly _mediaService: MediaService,
		private readonly _sliderService: SliderService,
		private readonly _languageService: LanguageService,
	) {}

	readonly language$ = this._languageService.language$

	readonly currentSlide$ = this._sliderService.currentSlide$

	readonly breakpoint$ = this._mediaService.breakpoints$.pipe(
		tap((breakpoint) => {
			if (breakpoint === ('phone' as any)) {
				this.currentSlide = SLIDERS[1]
			}
		}),
	)

	currentSlide = SLIDERS[0]

	showNavigation: boolean = false

	timeOuts: any[] = []

	ngOnInit() {
		const timeOut = setTimeout(() => {
			this.showNavigation = true
		}, 4500)

		this.timeOuts.push(timeOut)
	}

	ngOnDestroy(): void {
		this.timeOuts.forEach((t) => clearTimeout(t))
	}
}
