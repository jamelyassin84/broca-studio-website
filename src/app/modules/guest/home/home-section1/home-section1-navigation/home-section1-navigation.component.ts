import { Component, EventEmitter, Input, Output } from '@angular/core'
import { SLIDERS } from 'app/app-core/constants/slider'
import { Slider } from 'app/app-core/models/system/slider.model'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-section1-navigation',
	standalone: true,
	templateUrl: './home-section1-navigation.component.html',
	imports: [SharedModule],
})
export class HomeSection1NavigationComponent {
	@Output()
	onSlideChange = new EventEmitter<Slider>()

	@Input({ required: true })
	currentSlide: Slider

	readonly SLIDERS = SLIDERS

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
