import { Component } from '@angular/core'
import { ABOUT_SERVICES } from 'app/app-core/constants/about-services'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'about-us-section1',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './about-us-section1.component.html',
})
export class AboutUsSection1Component {
	readonly ABOUT_SERVICES = ABOUT_SERVICES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
