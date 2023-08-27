import { BehaviorSubject, Observable } from 'rxjs'
import { Inject, Injectable } from '@angular/core'
import { map, take } from 'rxjs/operators'

/**
 * Represents the base state class for managing and handling state data.
 * @template T - The type of state data.
 */
@Injectable({
	providedIn: 'root',
})
export class BaseState<T extends { id?: string | number }> {
	/**
	 * Creates an instance of BaseState.
	 * @param state - The state configuration, including its name and local storage saving option.
	 */
	constructor(
		@Inject('state')
		public state: {
			name: string
			willSaveLocally?: boolean
		},
	) {
		this.get()
	}

	/**
	 * Represents the state data as an observable BehaviorSubject.
	 */
	state$ = new BehaviorSubject<T[]>([])

	/**
	 * Represents the active state item as an observable BehaviorSubject.
	 */
	activeState$ = new BehaviorSubject<T | null>(null)

	/**
	 * Initializes the state with provided data.
	 * @param data - The initial state data.
	 * @returns An observable of the initialized state.
	 */
	initialize(data: T[]): Observable<T[]> {
		return this.setState(data)
	}

	/**
	 * Sets the active state item and emits it as an observable.
	 * @param data - The active state item to set.
	 * @returns An observable of the active state item.
	 */
	setActiveState(data: T): Observable<T> {
		this.activeState$.next(data)

		return this.activeState$.asObservable() as Observable<T>
	}

	/**
	 * Retrieves the state data.
	 * If local storage saving is enabled, it first checks local storage for saved data.
	 * @returns An observable of the retrieved state data.
	 */
	get(): Observable<T[]> {
		if (this.state.willSaveLocally) {
			const stateInStorage = localStorage.getItem(this.state.name)

			if (stateInStorage !== null) {
				return this.setState(JSON.parse(stateInStorage))
			}
		}

		return this.setState([])
	}

	/**
	 * Finds a state item by its ID.
	 * @param id - The ID of the state item to find.
	 * @returns An observable of the found state item.
	 */
	findOne(id: string): Observable<T> {
		return <Observable<T>>(
			this.state$
				.pipe(take(1))
				.pipe(
					map((state) =>
						state.find((previousState) => id == previousState?.id),
					),
				)
		)
	}

	/**
	 * Adds a new state item to the state data.
	 * @param data - The state item to add.
	 */
	add(data: T): void {
		this.state$.pipe(take(1)).subscribe((state) => {
			if (!state.some((previousState) => data.id == previousState?.id)) {
				this.setState([...state, data])
				return
			}
		})
	}

	/**
	 * Updates an existing state item in the state data.
	 * @param data - The state item to update.
	 */
	update(data: T): void {
		this.state$.pipe(take(1)).subscribe((state) => {
			const nextState = state
			const index = state.findIndex(
				(previousState) => data.id == previousState?.id,
			)

			if (index >= 0) {
				nextState[index] = data
				const state: any = [...nextState]
				this.setState(state)
				return
			}
		})
	}

	/**
	 * Removes a state item from the state data.
	 * @param id - The ID of the state item to remove.
	 */
	remove(id: string): void {
		this.state$.pipe(take(1)).subscribe((state) => {
			const nextState = state
			const index = state.findIndex(
				(previousState) => id == previousState?.id,
			)

			if (index >= 0) {
				nextState.splice(index, 1)
				const state: any = [...nextState]
				this.setState(state)
				return
			}
		})
	}

	/**
	 * Sets the state with the provided data and saves it to local storage if enabled.
	 * @param state - The new state data.
	 * @returns An observable of the updated state.
	 */
	setState(state: any): Observable<T[]> {
		this.state$.next(state)

		if (this.state.willSaveLocally) {
			localStorage.setItem(this.state.name, JSON.stringify(state))
		}

		return this.state$.asObservable()
	}
}
