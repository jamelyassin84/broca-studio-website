import { Injectable } from '@angular/core'
import { LoadingStateEnum } from '@broca-studio/enums/loading-state.enum'
import { Store } from '@ngrx/store'
import { StoreAction } from 'app/app-core/store/core/action.enum'
import { catchError, EMPTY, finalize, Observable, tap } from 'rxjs'

/**
 * Service for managing loading states and handling loading-related actions.
 */
@Injectable({ providedIn: 'root' })
export class LoaderService {
	constructor(public _store: Store) {}

	/**
	 * Set the loading state for a specific action.
	 * @param state - The state for which to set the loading state.
	 * @param type - The type of action ('get' or 'upsert').
	 * @param loadValue - The loading state to set.
	 */
	load(
		state: string,
		type: 'get' | 'upsert' = 'upsert',
		loadValue: LoadingStateEnum = LoadingStateEnum.LOADING,
	): void {
		const _state = state.toUpperCase()

		if (type === 'get') {
			this._store.dispatch(
				StoreAction[_state].SET_GET_LOADING({
					loading: loadValue,
				}),
			)

			return
		}

		this._store.dispatch(
			StoreAction[_state].SET_LOADING({
				loading: loadValue,
			}),
		)
	}

	/**
	 * Add loading state management to an observable source.
	 * @param state - The state for which to manage loading state.
	 * @param type - The type of action ('get' or 'upsert').
	 * @param _store - The store instance to use.
	 * @returns An observable with added loading state management.
	 */
	addLoadingState(
		state: string,
		type: 'get' | 'upsert' = 'upsert',
		_store: Store = this._store,
	) {
		return function <T>(source: Observable<T>): Observable<T> {
			return new Observable((subscriber) => {
				const loader = new LoaderService(_store)

				source
					.pipe(
						tap(() =>
							loader.load(
								state,
								type,
								LoadingStateEnum.SUCCEEDED,
							),
						),
						catchError(() => {
							loader.load(state, type, LoadingStateEnum.FAILED)
							return EMPTY
						}),
						finalize(() =>
							setTimeout(() => {
								loader.load(state, type, LoadingStateEnum.IDLE)
							}, 1500),
						),
					)
					.subscribe({
						next(value) {
							if (value !== undefined && value !== null) {
								subscriber.next(value)
							}
						},
						error(error) {
							subscriber.error(error)
						},
						complete() {
							subscriber.complete()
						},
					})
			})
		}
	}
}
