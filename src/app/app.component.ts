import { Component, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { MediaService } from '@broca-studio/utilities/media.service'
import { BreakPoint } from '@broca-studio/models/core.model'
import { Observable, fromEvent } from 'rxjs'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
})
export class AppComponent {
	constructor(private _mediaService: MediaService) {
		// fromEvent(window, 'scroll').subscribe((e) => {
		// 	this.onWindowScroll()
		// })
	}

	@HostListener('window:resize')
	onResize() {
		this._mediaService.onResize()
	}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(e) {
		console.log(e.target['scrollingElement'].scrollTop)
		this._mediaService.onScroll()
	}

	readonly breakpoint$: Observable<BreakPoint> =
		this._mediaService.breakpoints$

	readonly scrollTop$: Observable<number> = this._mediaService.getScrollTop()
}
