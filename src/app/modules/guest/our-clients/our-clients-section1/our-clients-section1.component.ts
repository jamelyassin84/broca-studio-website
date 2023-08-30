import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

@Component({
	selector: 'our-clients-section1',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './our-clients-section1.component.html',
})
export class OurClientsSection1Component {}
