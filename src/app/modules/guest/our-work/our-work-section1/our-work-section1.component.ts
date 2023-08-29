import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'our-work-section1',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './our-work-section1.component.html',
})
export class OurWorkSection1Component {}
