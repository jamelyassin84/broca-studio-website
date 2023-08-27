import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SLIDERS } from 'app/app-core/constants/slider'
import { interval, repeat, take } from 'rxjs'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { HomeSection1SocialsComponent } from './components/home-section1-socials/home-section1-socials.component'

@Component({
	selector: 'home-section1',
	standalone: true,
	animations: [...dbwAnimations],
	imports: [SharedModule, HomeSection1SocialsComponent],
	templateUrl: './home-section1.component.html',
})
export class HomeSection1Component {
	readonly SLIDERS = SLIDERS
	currentSlideIndex = 0

	ngOnInit() {
		interval(2000)
			.pipe(take(this.SLIDERS.length), repeat())
			.subscribe(() => {
				this.slideNext()
			})
	}

	slideNext() {
		this.currentSlideIndex++

		if (this.currentSlideIndex >= this.SLIDERS.length) {
			this.currentSlideIndex = 0
		}
	}

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
