import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'our-services-section2',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './our-services-section2.component.html',
})
export class OurServicesSection2Component {}
