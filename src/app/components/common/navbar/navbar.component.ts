import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { MediaService } from '@broca-studio/utilities/media.service'
import { NAVBAR_NAVIGATION } from 'app/app-core/navigations/navbar-navigation'
import { SharedModule } from 'app/shared/shared.module'
import { Observable, map, tap } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
	selector: 'navbar',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './navbar.component.html',
})
export class NavbarComponent {
	constructor(private _router: Router, private _mediaService: MediaService) {
		this._router.events
			.pipe(
				takeUntilDestroyed(),
				map((e) => e instanceof NavigationEnd),
				tap(() => {
					this.NAVBAR_NAVIGATION.forEach((nav) => {
						console.log(nav.link)
						if (this._router.url.includes(nav.link)) {
							console.log(nav)
							this.currentNavigation = nav
						}
					})
				}),
			)
			.subscribe()
	}

	readonly scrollTop$: Observable<number> = this._mediaService.getScrollTop()

	readonly NAVBAR_NAVIGATION = NAVBAR_NAVIGATION

	currentNavigation = undefined

	isInHome$ = this._router.events.pipe(
		map((e) => e instanceof NavigationEnd),
		map(() => this._router.url.includes('home')),
	)

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
