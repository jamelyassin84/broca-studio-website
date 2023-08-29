import { Component } from '@angular/core'
import { OUR_TEAMS } from 'app/app-core/constants/our-team'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'about-us-section3',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './about-us-section3.component.html',
})
export class AboutUsSection3Component {
	readonly OUR_TEAMS = OUR_TEAMS

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
