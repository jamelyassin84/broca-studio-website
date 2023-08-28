import { Component } from '@angular/core'
import { CINEMATIC_GRID } from 'app/app-core/constants/cinematic-grid'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'home-section5',
	standalone: true,
	imports: [SharedModule],
	templateUrl: './home-section5.component.html',
})
export class HomeSection5Component {
	readonly CINEMATIC_GRID = CINEMATIC_GRID

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
