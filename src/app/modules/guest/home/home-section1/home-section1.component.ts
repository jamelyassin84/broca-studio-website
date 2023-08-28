import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SLIDERS } from 'app/app-core/constants/slider'
import { interval, repeat, take } from 'rxjs'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { HomeSection1SocialsComponent } from './components/home-section1-socials/home-section1-socials.component'
import { HomeSection1PagesComponent } from './components/home-section1-pages/home-section1-pages.component'
import { HomeSection1BackgroundComponent } from './components/home-section1-background/home-section1-background.component'
import { HomeSection1NavigationComponent } from './home-section1-navigation/home-section1-navigation.component'
import { HomeSection1OverlayComponent } from './home-section1-overlay/home-section1-overlay.component'

@Component({
	selector: 'home-section1',
	standalone: true,
	animations: [...dbwAnimations],
	templateUrl: './home-section1.component.html',
	imports: [
		SharedModule,
		HomeSection1SocialsComponent,
		HomeSection1PagesComponent,
		HomeSection1OverlayComponent,
		HomeSection1NavigationComponent,
		HomeSection1BackgroundComponent,
	],
})
export class HomeSection1Component {
	currentSlide = SLIDERS[0]

	showNavigation: boolean = false

	timeOuts: any[] = []

	ngOnInit() {
		const timeOut = setTimeout(() => {
			this.showNavigation = true
		}, 5000)

		this.timeOuts.push(timeOut)
	}

	ngOnDestroy(): void {
		this.timeOuts.forEach((t) => clearTimeout(t))
	}
}
