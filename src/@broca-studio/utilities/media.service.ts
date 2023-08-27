import { isPlatformBrowser } from '@angular/common'
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { BreakPoint } from '../models/core.model'

/**
 * Service for managing media-related functionality including breakpoints and scroll position.
 */
@Injectable({
	providedIn: 'root',
})
export class MediaService {
	constructor(
		@Inject(PLATFORM_ID)
		private _platformID: Object,
	) {
		this.onResize()
		this.onScroll()
		this.getMedia().subscribe((innerWidth) =>
			this.resolveBreakPoint(innerWidth),
		)
	}

	/**
	 * Observable that emits the current breakpoint.
	 */
	readonly breakpoints$ = new BehaviorSubject<BreakPoint>('phone' as any)

	/**
	 * Observable that emits the current scroll position.
	 */
	readonly scrollTop$ = new BehaviorSubject<number>(0)

	/**
	 * Observable that emits the current inner width of the window.
	 */
	readonly media$ = new BehaviorSubject<number>(
		typeof window === 'undefined' ? 0 : 0,
	)

	/**
	 * Handles window resize events and updates the media observable.
	 */
	onResize() {
		if (isPlatformBrowser(this._platformID)) {
			if (typeof window !== 'undefined') {
				this.media$.next(window.innerWidth)
			}
		}
	}

	/**
	 * Gets an observable for the current inner width of the window.
	 * @returns Observable for the inner width.
	 */
	getMedia(): Observable<number> {
		return this.media$.asObservable()
	}

	/**
	 * Handles window scroll events and updates the scrollTop observable.
	 */
	onScroll() {
		if (isPlatformBrowser(this._platformID)) {
			if (typeof window !== 'undefined') {
				this.scrollTop$.next(window.pageYOffset)
			}
		}
	}

	/**
	 * Gets an observable for the current scroll position.
	 * @returns Observable for the scroll position.
	 */
	getScrollTop(): Observable<number> {
		return this.scrollTop$.asObservable()
	}

	/**
	 * Resolves the current breakpoint based on the given inner width and updates the breakpoints observable.
	 * @param innerWidth - The inner width of the window.
	 */
	resolveBreakPoint(innerWidth: number): void {
		if (innerWidth >= 768) {
			this.breakpoints$.next('tablet' as any)
		}
		if (innerWidth >= 1024) {
			this.breakpoints$.next('laptop' as any)
		}
		if (innerWidth >= 1280) {
			this.breakpoints$.next('desktop' as any)
		}
		if (innerWidth >= 1536) {
			this.breakpoints$.next('max' as any)
		}
	}
}
