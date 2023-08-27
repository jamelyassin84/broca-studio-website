import { FormGroup, ControlContainer } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

/**
 * Component for displaying a card form input field.
 */
@Component({
	templateUrl: './card-form-field.component.html',
	animations: [...dbwAnimations],
})
export class CardFormFieldComponent implements OnInit {
	constructor(private _controlContainer: ControlContainer) {}

	/**
	 * The form group associated with the card form input field.
	 */
	public form: FormGroup

	/**
	 * Lifecycle hook called after the component is initialized.
	 */
	ngOnInit(): void {
		this.form = <FormGroup>this._controlContainer.control
	}
}
