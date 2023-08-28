import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MICRO_SERVICES } from 'app/app-core/constants/micro-service'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-section3',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './home-section3.component.html',
})
export class HomeSection3Component {
	readonly MICRO_SERVICES = MICRO_SERVICES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
