import { Component, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { MediaService } from '@broca-studio/utilities/media.service'
import { BreakPoint } from '@broca-studio/models/core.model'
import { Observable, fromEvent } from 'rxjs'
import { LanguageService } from './app-core/providers/language.service'
import { SharedModule } from './shared/shared.module'
import { SplashComponent } from './components/common/splash/splash.component'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [SharedModule, RouterOutlet, SplashComponent],
	templateUrl: './app.component.html',
})
export class AppComponent {
	constructor(
		private _mediaService: MediaService,
		private _languageService: LanguageService,
	) {}

	@HostListener('window:resize')
	onResize() {
		this._mediaService.onResize()
	}

	@HostListener('window:scroll')
	onWindowScroll() {
		this._mediaService.onScroll()
	}

	readonly breakpoint$: Observable<BreakPoint> =
		this._mediaService.breakpoints$

	readonly scrollTop$: Observable<number> = this._mediaService.getScrollTop()

	ngOnInit(): void {
		this._languageService.initLanguage()
	}
}
