import { isPlatformBrowser } from '@angular/common'
import {
	Directive,
	HostBinding,
	Input,
	HostListener,
	ElementRef,
	Renderer2,
	PLATFORM_ID,
	Inject,
} from '@angular/core'
import { MediaService } from '@broca-studio/utilities/media.service'
import { take } from 'rxjs'

/**
 * Angular directive for creating a parallax effect.
 */
@Directive({
	selector: '[parallax]',
})
export class ParallaxDirective {
	constructor(
		@Inject(PLATFORM_ID) private _platformID: Object,
		private _mediaService: MediaService,
	) {}

	/**
	 * HostListener for the 'window:scroll' event to update the parallax effect.
	 * @param event - The scroll event.
	 */
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		this.breakpoint$.pipe(take(1)).subscribe((media) => {
			if (media === <any>'tablet' || media === <any>'phone') {
				return
			}

			this.scroll = ` translateY(${this.getTranslation()}px) !important`
		})
	}

	/**
	 * HostBinding to set the 'style.transform' property for the parallax effect.
	 */
	@HostBinding('style.transform')
	scroll: string = ''

	/**
	 * Input property to set the parallax factor.
	 */
	@Input('factor')
	set parallaxFactor(val: any) {
		this.factor = val ? val : 1
	}

	/**
	 * Observable representing the current breakpoint.
	 */
	readonly breakpoint$ = this._mediaService.breakpoints$

	/**
	 * The parallax factor used to control the parallax effect intensity.
	 */
	factor!: number

	/**
	 * Calculate the translation value for the parallax effect based on scroll position.
	 * @returns The translation value.
	 */
	getTranslation() {
		if (isPlatformBrowser(this._platformID)) {
			return (window.scrollY * this.factor) / 10
		}
	}
}
