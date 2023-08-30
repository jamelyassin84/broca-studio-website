import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	@Input({ required: false })
	reversed: boolean = false

	scrollToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
}
