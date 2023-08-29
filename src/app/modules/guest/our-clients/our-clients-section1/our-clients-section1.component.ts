import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'our-clients-section1',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './our-clients-section1.component.html',
})
export class OurClientsSection1Component {}
