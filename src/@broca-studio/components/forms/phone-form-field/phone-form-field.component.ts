import { FormGroup, ControlContainer } from '@angular/forms'
import { Component, OnInit, Input } from '@angular/core'
import { countryWithISO } from '@broca-studio/constants/countries/country-with-iso'
import { countryWithDialCode } from '@broca-studio/constants/countries/country-with-dial-code'
import { dbwAnimations } from '@broca-studio/animations/animation.api'

/**
 * Component for displaying a phone number input field with a flag representing the country code.
 */
@Component({
	selector: 'phone-form-field',
	templateUrl: './phone-form-field.component.html',
	animations: [...dbwAnimations],
})
export class PhoneFormFieldComponent implements OnInit {
	constructor(private _controlContainer: ControlContainer) {}

	/**
	 * Input property representing the form group containing the phone input field.
	 */
	@Input({ required: true })
	form?: FormGroup

	/**
	 * Input property representing the name of the phone input field within the form group.
	 */
	@Input({ required: true })
	name?: string

	/**
	 * List of countries with their ISO codes.
	 */
	readonly COUNTRIES = countryWithISO

	/**
	 * ISO code of the selected country.
	 */
	countryISO: string = 'AE'

	/**
	 * Lifecycle hook called after the component is initialized.
	 */
	ngOnInit(): void {
		this.form = <FormGroup>this._controlContainer.control

		const phone = this.form.get(this.name)?.value

		if (phone === null || !phone.toString().includes('+')) {
			this.changeFlag('United Arab Emirates')
		}
	}

	/**
	 * Changes the flag and updates the phone input field value based on the selected country.
	 * @param country The name of the selected country.
	 */
	changeFlag(country: string) {
		const iso = countryWithISO.find((oldCountry) => {
			return oldCountry.name === (country as any)
		})

		if (iso) {
			this.countryISO = (iso['alpha-2'] ?? 'AE').toLocaleLowerCase()

			const countryData = countryWithDialCode.find(
				(country) =>
					country.code.toLocaleLowerCase() ===
					this.countryISO.toLocaleLowerCase(),
			)

			if (countryData) {
				this.form.get(this.name)?.setValue(`${countryData.dial_code}`)
			}
		}
	}

	/**
	 * Function used to track items in a list by their index or unique identifier.
	 * @param index The index of the item in the list.
	 * @param item The item being tracked.
	 * @returns The item's unique identifier or index.
	 */
	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
