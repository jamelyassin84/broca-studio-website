import { ResponsiveNavbarComponent } from 'app/components/common/responsive-navbar/responsive-navbar.component'
import { Component } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { NavbarComponent } from 'app/components/common/navbar/navbar.component'
import { AboutUsSection5Component } from './about-us-section5/about-us-section5.component'
import { AboutUsSection1Component } from './about-us-section1/about-us-section1.component'
import { AboutUsSection3Component } from './about-us-section3/about-us-section3.component'
import { AboutUsSection2Component } from './about-us-section2/about-us-section2.component'
import { AboutUsSection4Component } from './about-us-section4/about-us-section4.component'
import { ContactUsComponent } from 'app/components/common/contact-us/contact-us.component'
import { FooterComponent } from 'app/components/common/footer/footer.component'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

const standaloneComponents = [
	NavbarComponent,
	AboutUsSection1Component,
	AboutUsSection2Component,
	AboutUsSection3Component,
	AboutUsSection4Component,
	AboutUsSection5Component,
	ContactUsComponent,
	FooterComponent,
	ResponsiveNavbarComponent,
]

@Component({
	selector: 'about-us',
	standalone: true,
	animations: [...dbwAnimations],

	imports: [SharedModule, ...standaloneComponents],
	templateUrl: './about-us.component.html',
})
export class AboutUsComponent {}
