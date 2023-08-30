import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

@Component({
	selector: 'our-services-section1',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './our-services-section1.component.html',
})
export class OurServicesSection1Component {}
