import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-section1-overlay',
	standalone: true,
	templateUrl: './home-section1-overlay.component.html',
	imports: [SharedModule],
})
export class HomeSection1OverlayComponent {}
