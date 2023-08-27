import { inject } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

/**
 * Custom decorator for selecting data from the NgRx store.
 * @param selector - The selector function to retrieve data from the store.
 * @returns A property decorator.
 */
export function StoreSelect<T>(selector: (state: any) => T) {
	return function (target: any, propertyKey: string) {
		// Define a property on the target class.
		Object.defineProperty(target, propertyKey, {
			get: function () {
				// Use Angular's inject function to access the Store service.
				return inject(Store).pipe(select(selector)) as Observable<T>
			},
			enumerable: true,
			configurable: true,
		})
	}
}
