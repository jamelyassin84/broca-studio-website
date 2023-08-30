import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { OUR_PARTNERS } from 'app/app-core/constants/our-partners'

@Component({
	selector: 'our-clients-section3',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './our-clients-section3.component.html',
})
export class OurClientsSection3Component {
	readonly OUR_PARTNERS = OUR_PARTNERS

	currentPartner = OUR_PARTNERS[1]

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
