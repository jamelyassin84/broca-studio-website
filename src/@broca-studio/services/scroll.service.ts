import { isPlatformBrowser } from '@angular/common'
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'

/**
 * Service for scrolling functionality.
 */
@Injectable({
	providedIn: 'root',
})
export class ScrollService {
	constructor(@Inject(PLATFORM_ID) private _platformID: Object) {}

	/**
	 * Scrolls to the top of the page.
	 */
	scrollToTop(): void {
		document.body.scrollTop = 0

		if (isPlatformBrowser(this._platformID)) {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		}
	}

	/**
	 * Scrolls to the specified vertical position on the page.
	 * @param value The vertical position to scroll to.
	 */
	scrollY(value: number): void {
		document.body.scrollTop = 0

		if (isPlatformBrowser(this._platformID)) {
			window.scroll({
				top: value,
				left: 0,
				behavior: 'smooth',
			})
		}
	}
}
