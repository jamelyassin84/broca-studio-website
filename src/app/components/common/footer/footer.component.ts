import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	scrollToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
}
