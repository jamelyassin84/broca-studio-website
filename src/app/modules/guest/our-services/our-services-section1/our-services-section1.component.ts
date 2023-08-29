import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'our-services-section1',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './our-services-section1.component.html',
})
export class OurServicesSection1Component {}
