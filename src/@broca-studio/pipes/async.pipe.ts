import { Observable } from 'rxjs'

/**
 * Extracts the latest value emitted by an observable and returns it synchronously.
 * This function is intended for specific use cases where synchronous access to observable
 * values is required, but should be used with caution as it breaks the reactive nature
 * of observables.
 *
 * @template T - The type of data emitted by the observable.
 * @param {Observable<T>} data$ - The observable from which to extract the latest value.
 * @returns {T} - The latest value emitted by the observable.
 */
export function async_pipe<T>(data$: Observable<T>): T {
	let data: T | undefined

	// Subscribe to the observable to capture the latest emitted value.
	data$.subscribe((value) => (data = value))

	// Return the latest value, or throw an error if it's undefined (should rarely occur).
	if (data === undefined) {
		throw new Error(
			'Observable did not emit a value before accessing with async_pipe.',
		)
	}

	return data
}
