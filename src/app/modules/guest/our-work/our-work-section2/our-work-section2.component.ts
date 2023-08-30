import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { OUR_WORKS } from 'app/app-core/constants/our-work'
import { OUR_WORK_NAVIGATION } from 'app/app-core/navigations/our-work-navigation'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'our-work-section2',
	standalone: true,
	animations: [...dbwAnimations],
	imports: [SharedModule],
	templateUrl: './our-work-section2.component.html',
})
export class OurWorkSection2Component {
	readonly OUR_WORK_NAVIGATION = OUR_WORK_NAVIGATION

	readonly OUR_WORKS = OUR_WORKS

	currentNav = OUR_WORK_NAVIGATION[0]

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
