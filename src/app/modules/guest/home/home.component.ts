import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { ContactUsComponent } from 'app/components/common/contact-us/contact-us.component'
import { FooterComponent } from 'app/components/common/footer/footer.component'
import { NavbarComponent } from 'app/components/common/navbar/navbar.component'
import { ResponsiveNavbarComponent } from 'app/components/common/responsive-navbar/responsive-navbar.component'
import { HomeSection1Component } from './home-section1/home-section1.component'
import { HomeSection2Component } from './home-section2/home-section2.component'
import { HomeSection3Component } from './home-section3/home-section3.component'
import { HomeSection4Component } from './home-section4/home-section4.component'
import { HomeSection5Component } from './home-section5/home-section5.component'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { map, startWith, switchMap, timer } from 'rxjs'
import { SliderService } from 'app/app-core/providers/slider.service'

const standaloneComponents = [
	ContactUsComponent,
	FooterComponent,
	NavbarComponent,
	ResponsiveNavbarComponent,

	HomeSection1Component,
	HomeSection2Component,
	HomeSection3Component,
	HomeSection4Component,
	HomeSection5Component,
]

@Component({
	selector: 'home',
	standalone: true,
	templateUrl: './home.component.html',
	animations: [...dbwAnimations],
	imports: [SharedModule, ...standaloneComponents],
})
export class HomeComponent {
	constructor(private readonly _sliderService: SliderService) {}

	readonly currentSlide$ = this._sliderService.currentSlide$

	showLanding$ = timer(500).pipe(
		switchMap(() =>
			timer(50).pipe(
				map(() => {
					return true
				}),
			),
		),
		startWith(false),
	)
}
