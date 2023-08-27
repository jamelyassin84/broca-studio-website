import { Directive, ElementRef, HostListener, Input } from '@angular/core'

/**
 * Angular directive to automatically adjust the size of a textarea element based on its content.
 */
@Directive({
	selector: '[autoSize]',
})
export class AutoSizeDirective {
	constructor(public _element: ElementRef) {}

	/**
	 * HostListener for various input-related events to adjust the textarea size.
	 */
	@HostListener('input')
	@HostListener('cut')
	@HostListener('paste')
	@HostListener('change')
	adjustTextAreaSize(): void {
		const element = this._element.nativeElement

		element.style.height = this.min + 'px'

		element.style.height = element.scrollHeight + 'px'

		if (element.scrollHeight <= this.max) {
			element.style.overflowY = 'hidden'
			delete element.style.maxHeight
		} else {
			element.style.overflowY = 'scroll'
			element.style.maxHeight = this.max + 'px'
		}
	}

	/**
	 * Maximum height for the textarea before scrolling is enabled. Optional.
	 */
	@Input({ required: false })
	max: number

	/**
	 * Minimum height for the textarea. Optional.
	 */
	@Input({ required: false })
	min: number

	/**
	 * Initialize the textarea size adjustment when the directive is initialized.
	 */
	ngOnInit(): void {
		this.adjustTextAreaSize()
	}
}
