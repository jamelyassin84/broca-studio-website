import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { MediaService } from '@broca-studio/utilities/media.service'
import { NAVBAR_NAVIGATION } from 'app/app-core/navigations/navbar-navigation'
import { SharedModule } from 'app/shared/shared.module'
import { Observable, filter, map, tap } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { SliderService } from 'app/app-core/providers/slider.service'
import { ContactUsService } from 'app/app-core/providers/contact-us.service'
import { LanguageService } from 'app/app-core/providers/language.service'
import { LanguageEnum } from 'app/app-core/enums/language-enum'

@Component({
	selector: 'navbar',
	standalone: true,
	imports: [SharedModule],
	animations: [...dbwAnimations],
	templateUrl: './navbar.component.html',
})
export class NavbarComponent {
	constructor(
		private readonly _router: Router,
		private readonly _mediaService: MediaService,
		private readonly _sliderService: SliderService,
		private readonly _languageService: LanguageService,
		private readonly _contactUsService: ContactUsService,
	) {}

	readonly language$ = this._languageService.language$

	readonly currentSlide$ = this._sliderService.currentSlide$

	readonly isInHome$ = this._router.events.pipe(
		map((e) => e instanceof NavigationEnd),
		map(() => this._router.url.includes('home')),
	)

	readonly scrollTop$: Observable<number> = this._mediaService.getScrollTop()

	readonly NAVBAR_NAVIGATION = NAVBAR_NAVIGATION

	currentNavigation = undefined

	ngOnInit(): void {
		this._router.events
			.pipe(
				takeUntilDestroyed(),
				filter((e) => e instanceof NavigationEnd),
				tap(() => {
					this.NAVBAR_NAVIGATION.forEach((nav) => {
						if (this._router.url.includes(nav.link)) {
							this.currentNavigation = nav
						}
					})
				}),
			)
			.subscribe()
	}

	setLanguage(language: LanguageEnum | 'en' | 'ar') {
		location.reload()
		this._languageService.setLanguage(language as any)
	}

	focusContactUsFirstInput(): void {
		this._contactUsService.focus$.next()
	}

	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
