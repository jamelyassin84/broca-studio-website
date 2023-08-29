import { Component } from '@angular/core'
import { AWARDS } from 'app/app-core/constants/awards'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'about-us-section2',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './about-us-section2.component.html',
})
export class AboutUsSection2Component {
	readonly AWARDS = AWARDS

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
