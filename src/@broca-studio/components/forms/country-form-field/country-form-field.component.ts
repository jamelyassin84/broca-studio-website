import { FormGroup, ControlContainer } from '@angular/forms'
import { Component, OnInit, Input } from '@angular/core'
import { countryWithISO } from '@broca-studio/constants/countries/country-with-iso'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

/**
 * Component for displaying a country selection input field.
 */
@Component({
	selector: 'country-form-field',
	templateUrl: './country-form-field.component.html',
	animations: [...dbwAnimations],
})
export class CountryFormFieldComponent implements OnInit {
	constructor(private _controlContainer: ControlContainer) {}

	/**
	 * The form group associated with the country selection input field.
	 */
	@Input({ required: true })
	form?: FormGroup

	/**
	 * The name of the input field in the form.
	 */
	@Input({ required: true })
	name?: string

	/**
	 * The placeholder text for the country selection input field.
	 */
	@Input({ required: false })
	placeholder: string = ''

	/**
	 * The list of countries with ISO codes.
	 */
	readonly COUNTRIES = countryWithISO

	/**
	 * Lifecycle hook called after the component is initialized.
	 */
	ngOnInit(): void {
		this.form = <FormGroup>this._controlContainer.control
	}

	/**
	 * Track function for ngFor to improve rendering performance.
	 *
	 * @param index - The index of the item.
	 * @param item - The country item.
	 * @returns The item's unique identifier.
	 */
	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
