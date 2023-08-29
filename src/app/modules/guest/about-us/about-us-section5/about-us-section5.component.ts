import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'about-us-section5',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],

	templateUrl: './about-us-section5.component.html',
})
export class AboutUsSection5Component {}
