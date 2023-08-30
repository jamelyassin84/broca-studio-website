import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'our-work-section1',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './our-work-section1.component.html',
})
export class OurWorkSection1Component {}
