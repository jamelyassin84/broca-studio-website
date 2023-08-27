import { Directive, HostListener } from '@angular/core'

/**
 * Angular directive to stop event propagation.
 */
@Directive({
	selector: '[stopPropagation]',
})
export class StopPropagationDirective {
	/**
	 * HostListener for the 'click' event to stop event propagation.
	 * @param event - The click event.
	 */
	@HostListener('click', ['$event'])
	public onClick(event: any): void {
		event.stopPropagation()
	}
}
