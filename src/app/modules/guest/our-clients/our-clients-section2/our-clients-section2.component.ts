import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { OUR_CLIENTS } from 'app/app-core/constants/our-clients'

@Component({
	selector: 'our-clients-section2',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './our-clients-section2.component.html',
})
export class OurClientsSection2Component {
	readonly OUR_CLIENTS = OUR_CLIENTS

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
