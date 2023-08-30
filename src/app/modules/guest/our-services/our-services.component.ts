import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SharedModule } from 'app/shared/shared.module'
import { NavbarComponent } from 'app/components/common/navbar/navbar.component'
import { ContactUsComponent } from 'app/components/common/contact-us/contact-us.component'
import { FooterComponent } from 'app/components/common/footer/footer.component'
import { OurServicesSection1Component } from './our-services-section1/our-services-section1.component'
import { OurServicesSection2Component } from './our-services-section2/our-services-section2.component'

@Component({
	selector: 'our-services',
	standalone: true,
	animations: [...dbwAnimations],
	imports: [
		SharedModule,
		NavbarComponent,
		ContactUsComponent,
		FooterComponent,
		OurServicesSection2Component,
		OurServicesSection1Component,
	],
	templateUrl: './our-services.component.html',
})
export class OurServicesComponent {}
