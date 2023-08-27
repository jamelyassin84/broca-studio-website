import { Directive, ElementRef, HostListener } from '@angular/core'

/**
 * Angular directive for creating a modal overlay.
 */
@Directive({
	selector: '[modal]',
})
export class ModalDirective {
	constructor(private elementRef: ElementRef) {}

	/**
	 * HostListener for the 'click' event to prevent propagation.
	 * @param event - The click event.
	 */
	@HostListener('click', ['$event'])
	onClick(event: Event): void {
		// Prevent click event propagation to underlying elements.
		event.stopPropagation()
	}

	/**
	 * Lifecycle hook called after Angular initializes the directive.
	 */
	ngOnInit(): void {
		// Apply styles and classes to create a modal overlay.
		this.applyStylesAndClasses()
	}

	/**
	 * Apply styles and classes to create the modal overlay.
	 * Adjusts z-index, background color, and size.
	 */
	private applyStylesAndClasses(): void {
		const element = this.elementRef.nativeElement as HTMLElement
		element.classList.add('fixed', 'flex', 'w-screen', 'h-screen')
		element.style.zIndex = '999'
		element.style.background = 'rgba(22, 30, 41, 0.9)'
	}
}
