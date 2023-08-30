import { Component, Input } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'contact-us',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
	@Input({ required: false })
	reversed: boolean = false
}
