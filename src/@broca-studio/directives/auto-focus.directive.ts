import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core'

/**
 * Angular directive for automatically focusing an input element when it becomes visible.
 */
@Directive({
	selector: '[autoFocus]',
})
export class AutoFocusDirective {
	/**
	 * Creates an instance of AutoFocusDirective.
	 * @param _cdr - The ChangeDetectorRef to detect changes.
	 * @param elementRef - The ElementRef of the input element to focus.
	 */
	constructor(
		private _cdr: ChangeDetectorRef,
		private elementRef: ElementRef<HTMLInputElement>,
	) {
		// Detach the ChangeDetectorRef to improve performance.
		this._cdr.detach()
	}

	/**
	 * After the view has been initialized, this method waits for a short delay
	 * (1500 milliseconds) and then focuses the associated input element.
	 * It also ensures that no other element has focus.
	 */
	ngAfterViewInit(): void {
		// Check if there is an active element and blur it to remove focus.
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur()
		}

		// Delay the focusing of the input element to ensure it's visible and ready.
		setTimeout(() => {
			// Focus the input element.
			this.elementRef.nativeElement.focus()

			// Detect changes to ensure the element is correctly focused.
			this._cdr.detectChanges()
		}, 1500)
	}

	/**
	 * Cleans up and detaches the ChangeDetectorRef when the directive is destroyed.
	 */
	ngOnDestroy(): void {
		this._cdr.detach()
	}
}
