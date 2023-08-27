import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NAVBAR_NAVIGATION } from 'app/app-core/navigations/navbar-navigation'

@Component({
	selector: 'navbar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './navbar.component.html',
})
export class NavbarComponent {
	readonly NAVBAR_NAVIGATION = NAVBAR_NAVIGATION

	currentNavigation = NAVBAR_NAVIGATION[0]

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
