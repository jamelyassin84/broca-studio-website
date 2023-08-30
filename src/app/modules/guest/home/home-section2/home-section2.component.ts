import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GAMES } from 'app/app-core/constants/games'
import { SharedModule } from 'app/shared/shared.module'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

@Component({
	selector: 'home-section2',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './home-section2.component.html',
})
export class HomeSection2Component {
	readonly GAMES = GAMES

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
