import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { PARTNERS } from 'app/app-core/constants/partners'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'about-us-section4',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],

	templateUrl: './about-us-section4.component.html',
})
export class AboutUsSection4Component {
	readonly PARTNERS = PARTNERS

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
