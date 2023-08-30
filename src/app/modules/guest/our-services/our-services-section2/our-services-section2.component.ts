import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { OUR_SERVICES } from 'app/app-core/constants/our-service.model'

@Component({
	selector: 'our-services-section2',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './our-services-section2.component.html',
})
export class OurServicesSection2Component {
	readonly OUR_SERVICES = OUR_SERVICES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
