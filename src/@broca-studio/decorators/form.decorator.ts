import { Injectable } from '@angular/core'
import { FormBuilder } from '@angular/forms'

/**
 * A class decorator that makes the decorated class injectable and extends its prototype from FormBuilder.
 * @returns A decorator function.
 */
export function FormService(): ClassDecorator {
	return (target: any) => {
		// Make the decorated class injectable.
		Injectable({ providedIn: 'root' })(target)

		// Extend the prototype of the class from FormBuilder.
		target.prototype.__proto__ = FormBuilder.prototype
	}
}
