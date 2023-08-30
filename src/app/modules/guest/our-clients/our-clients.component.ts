import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { NavbarComponent } from 'app/components/common/navbar/navbar.component'
import { ContactUsComponent } from 'app/components/common/contact-us/contact-us.component'
import { FooterComponent } from 'app/components/common/footer/footer.component'
import { OurClientsSection1Component } from './our-clients-section1/our-clients-section1.component'
import { OurClientsSection2Component } from './our-clients-section2/our-clients-section2.component'

@Component({
	selector: 'our-clients',
	standalone: true,
	animations: [...dbwAnimations],
	imports: [
		SharedModule,
		NavbarComponent,
		OurClientsSection1Component,
		OurClientsSection2Component,
		ContactUsComponent,
		FooterComponent,
	],
	templateUrl: './our-clients.component.html',
})
export class OurClientsComponent {}
