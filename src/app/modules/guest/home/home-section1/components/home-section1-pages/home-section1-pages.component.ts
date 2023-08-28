import { Component, Input } from '@angular/core'
import { Slider } from 'app/app-core/models/system/slider.model'
import { SLIDERS } from 'app/app-core/constants/slider'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-section1-pages',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './home-section1-pages.component.html',
})
export class HomeSection1PagesComponent {
	readonly SLIDERS = SLIDERS

	@Input({ required: true })
	currentSlide: Slider
}
