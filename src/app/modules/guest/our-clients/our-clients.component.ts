import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { NavbarComponent } from 'app/components/common/navbar/navbar.component'
import { ContactUsComponent } from 'app/components/common/contact-us/contact-us.component'
import { FooterComponent } from 'app/components/common/footer/footer.component'

@Component({
	selector: 'our-clients',
	standalone: true,
	animations: [...dbwAnimations],
	imports: [
		SharedModule,
		NavbarComponent,
		ContactUsComponent,
		FooterComponent,
	],
	templateUrl: './our-clients.component.html',
})
export class OurClientsComponent {}
