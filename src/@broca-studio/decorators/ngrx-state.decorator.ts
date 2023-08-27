import { inject } from '@angular/core'
import {
	toArrayEntity,
	toObjectEntity,
} from '@broca-studio/helpers/transform-entity'
import { Store, select } from '@ngrx/store'
import { StateEnum } from 'app/app-core/store/core/state.enum'
import { Observable, map, tap } from 'rxjs'

/**
 * Custom decorator for selecting and transforming data from the NgRx store.
 * @param config - Configuration options for the decorator.
 * @returns A property decorator.
 */
export function State<T>(config: {
	selector: StateEnum
	type: 'object' | 'array'
	tapCallback?: (state: T) => void
}) {
	return function (target: any, propertyKey: string) {
		const { selector, type, tapCallback } = config

		Object.defineProperty(target, propertyKey, {
			get: function (): Observable<T> {
				// Select state from the NgRx store based on the provided selector.
				const state$ = inject(Store).pipe(
					select(selector as any),
					// Transform the state into the desired format (object or array).
					map((state: any) =>
						type === 'array'
							? toArrayEntity(state)
							: toObjectEntity(state),
					),
				) as Observable<T>

				if (tapCallback) {
					// Apply a tap operator to the observable if a tap callback is provided.
					return state$.pipe(tap(tapCallback))
				}

				return state$
			},
			enumerable: true,
			configurable: true,
		})
	}
}
