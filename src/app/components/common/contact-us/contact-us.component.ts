import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ContactUsService } from 'app/app-core/providers/contact-us.service'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'contact-us',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {
	constructor(private readonly _contactUsService: ContactUsService) {
		this._contactUsService.focus$
			.pipe(takeUntilDestroyed())
			.subscribe(() => {
				this.nameInput?.nativeElement.focus()
			})
	}

	@ViewChild('nameInput')
	nameInput: ElementRef

	@Input({ required: false })
	reversed: boolean = false
}
