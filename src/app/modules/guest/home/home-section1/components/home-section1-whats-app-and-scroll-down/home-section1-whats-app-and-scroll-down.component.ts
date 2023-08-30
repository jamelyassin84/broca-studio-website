import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-section1-whats-app-and-scroll-down',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './home-section1-whats-app-and-scroll-down.component.html',
})
export class HomeSection1WhatsAppAndScrollDownComponent {}
