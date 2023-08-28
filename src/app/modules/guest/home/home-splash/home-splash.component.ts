import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-landing',
	standalone: true,
	animations: [...dbwAnimations],
	imports: [SharedModule],
	templateUrl: './home-splash.component.html',
})
export class HomeLandingComponent {}
