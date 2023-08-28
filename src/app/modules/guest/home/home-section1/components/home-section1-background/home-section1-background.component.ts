import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Slider } from 'app/app-core/models/system/slider.model'

@Component({
	selector: 'home-section1-background',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home-section1-background.component.html',
})
export class HomeSection1BackgroundComponent {
	@Input({ required: true })
	currentSlide: Slider
}
