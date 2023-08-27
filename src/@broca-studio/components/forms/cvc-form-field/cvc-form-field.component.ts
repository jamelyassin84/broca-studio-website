import { FormGroup, ControlContainer } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

/**
 * Component for displaying a Card Verification Code (CVC) input field.
 */
@Component({
	templateUrl: './cvc-form-field.component.html',
	animations: [...dbwAnimations],
})
export class CVCFormFieldComponent implements OnInit {
	constructor(private _controlContainer: ControlContainer) {}

	/**
	 * The form group associated with the CVC input field.
	 */
	public form: FormGroup

	/**
	 * Lifecycle hook called after the component is initialized.
	 */
	ngOnInit(): void {
		this.form = <FormGroup>this._controlContainer.control
	}
}
