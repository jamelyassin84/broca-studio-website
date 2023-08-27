import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-landing',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './home-splash.component.html',
})
export class HomeLandingComponent {}
