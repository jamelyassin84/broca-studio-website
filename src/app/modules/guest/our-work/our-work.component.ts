import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SharedModule } from 'app/shared/shared.module'
import { NavbarComponent } from 'app/components/common/navbar/navbar.component'
import { ContactUsComponent } from 'app/components/common/contact-us/contact-us.component'
import { FooterComponent } from 'app/components/common/footer/footer.component'
import { OurWorkSection2Component } from './our-work-section2/our-work-section2.component'
import { OurWorkSection1Component } from './our-work-section1/our-work-section1.component'
import { ResponsiveNavbarComponent } from 'app/components/common/responsive-navbar/responsive-navbar.component'

@Component({
	selector: 'our-work',
	standalone: true,
	animations: [...dbwAnimations],
	imports: [
		SharedModule,
		NavbarComponent,
		ContactUsComponent,
		OurWorkSection1Component,
		OurWorkSection2Component,
		FooterComponent,
		ResponsiveNavbarComponent,
	],
	templateUrl: './our-work.component.html',
})
export class OurWorkComponent {}
