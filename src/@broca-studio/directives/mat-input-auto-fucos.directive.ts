import { Directive, OnInit } from '@angular/core'
import { MatInput } from '@angular/material/input'

/**
 * Angular directive for setting focus on a Material Input element.
 */
@Directive({
	selector: '[matInputAutofocus]',
})
export class AutofocusDirective implements OnInit {
	constructor(private matInput: MatInput) {}

	/**
	 * Lifecycle hook called after Angular initializes the directive.
	 */
	ngOnInit() {
		// Set focus on the associated MatInput element after a short delay.
		setTimeout(() => this.matInput.focus())
	}
}
