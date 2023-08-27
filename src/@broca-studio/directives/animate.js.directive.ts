import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

/**
 * Angular directive for adding CSS animations to elements using the Animate.css library.
 * It adds the 'animate__animated' class to the host element and any specified animation classes.
 *
 * @directive
 * @example
 * <!-- Usage in an Angular template -->
 * <div [animateCSS]="['animate__bounce', 'animate__delay-2s']">Animated Div</div>
 *
 * @param {string[]} animation - An array of animation class names from Animate.css.
 */
@Directive({
	selector: '[animateCSS]',
})
export class AnimateJsDirective {
	constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

	/** Array of animation class names to apply to the host element. */
	@Input('animateCSS')
	animations: string[] = []

	/**
	 * After the content has been initialized, this method adds the 'animate__animated' class
	 * and any specified animation classes to the host element.
	 */
	ngAfterContentInit() {
		this.renderer.addClass(
			this.hostElement.nativeElement,
			'animate__animated',
		)

		this.animations.forEach((className: string) => {
			this.renderer.addClass(this.hostElement.nativeElement, className)
		})
	}
}
