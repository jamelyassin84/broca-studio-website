import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared/shared.module'
import { CINEMATIC_FEATURES } from 'app/app-core/constants/cinematic-features'

@Component({
	selector: 'home-section4',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './home-section4.component.html',
})
export class HomeSection4Component {
	readonly CINEMATIC_FEATURES = CINEMATIC_FEATURES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
