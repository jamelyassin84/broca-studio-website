import { Store } from '@ngrx/store'
import { catchError, EMPTY, finalize, Observable, tap } from 'rxjs'
import { Injectable } from '@angular/core'
import { LoadingTypeEnum } from '@broca-studio/enums/loading-type.enum'
import { LoadingStateEnum } from '@broca-studio/enums/loading-state.enum'
import { AppState } from './../../app/app-core/store/core/app.state'
import { StoreAction } from './../../app/app-core/store/core/action.enum'
import { LoadingState } from '@broca-studio/models/core.model'

/**
 * Service for managing and handling loader states in the store.
 */
@Injectable({ providedIn: 'root' })
export class StoreLoaderService {
	constructor(public _store: Store<AppState>) {}

	/**
	 * Load a loading state into the store.
	 * @param loadData - Object containing the state name and loading state.
	 */
	load(loadData: {
		state: keyof typeof StoreAction
		loading: LoadingState
	}): void {
		const { state, loading } = loadData

		this._store.dispatch(
			StoreAction[state as any].SYSTEM.setLoader({ loading }),
		)
	}

	/**
	 * Initialize a loader with a specific state and type.
	 * @param state - The state to initialize the loader for.
	 * @param type - The type of loading (e.g., CREATE, UPDATE, GET).
	 */
	initializeLoader(
		state: keyof typeof StoreAction,
		type: LoadingTypeEnum,
	): void {
		this.load({
			state: state,
			loading: {
				state: LoadingStateEnum.LOADING,
				type: type,
			},
		})
	}

	/**
	 * Add loading state handling to an observable source.
	 * @param state - The state to handle loading for.
	 * @param type - The type of loading (e.g., CREATE, UPDATE, GET).
	 * @returns A function that can be used as a RxJS pipe operator.
	 */
	addLoadingState(
		state: keyof typeof StoreAction,
		type: LoadingTypeEnum,
	): <T>(source: Observable<T>) => Observable<T> {
		const store = this._store

		return function <T>(source: Observable<T>): Observable<T> {
			return new Observable((subscriber) => {
				const loader = new StoreLoaderService(store)

				source
					.pipe(
						tap(() =>
							loader.load({
								state,
								loading: {
									type: type,
									state: LoadingStateEnum.SUCCEEDED,
								},
							}),
						),
						catchError((error) => {
							/*
                                Dispatch to a particular store when an error occurs.
                            */
							store.dispatch(
								StoreAction[state as any].SYSTEM.onError({
									error: error,
								}),
							)

							loader.load({
								state,
								loading: {
									type: type,
									state: LoadingStateEnum.FAILED,
								},
							})
							return EMPTY
						}),
						finalize(() =>
							setTimeout(() => {
								loader.load({
									state,
									loading: {
										type: type,
										state: LoadingStateEnum.IDLE,
									},
								})
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
