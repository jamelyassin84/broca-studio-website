import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'contact-us',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {}
