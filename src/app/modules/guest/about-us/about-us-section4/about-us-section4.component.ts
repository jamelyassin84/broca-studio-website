import { Component } from '@angular/core'
import { PARTNERS } from 'app/app-core/constants/partners'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'about-us-section4',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './about-us-section4.component.html',
})
export class AboutUsSection4Component {
	readonly PARTNERS = PARTNERS

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
