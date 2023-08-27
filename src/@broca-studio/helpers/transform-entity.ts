import { LoadingStateEnum } from '@broca-studio/enums/loading-state.enum'
import { entities } from '@broca-studio/pipes/entity.pipe'
import { EntityState } from '@ngrx/entity'

/**
 * Utility class for transforming EntityState into specific data formats.
 * @template T - The type of data in the EntityState.
 */
export class TransformEntity<T> {
	constructor(_entity: EntityState<T>) {
		this.entity = _entity
	}

	private entity?: EntityState<T>

	/**
	 * Transforms the EntityState into a single object.
	 * @returns The first entity in the EntityState or null if empty.
	 */
	toObject(): T | null {
		if (!this.entity || this.entity.ids.length === 0) {
			return null
		}

		return this.entity.entities[this.entity.ids[0]]
	}

	/**
	 * Transforms the EntityState into an array of entities.
	 * @returns An array of entities in the EntityState.
	 */
	toArray(): T[] {
		if (!this.entity) {
			return []
		}

		return entities(this.entity.entities) as T[]
	}
}

/**
 * Converts an EntityState to an array.
 * @param {EntityState<State>} data - The EntityState to be converted.
 * @returns {State[]} - An array of entities in the EntityState.
 * @template State - The type of data in the EntityState.
 */
export function toArrayEntity<State>(data: EntityState<State>): State[] {
	return new TransformEntity(data).toArray()
}

/**
 * Converts an EntityState to a single object.
 * @param {EntityState<State>} data - The EntityState to be converted.
 * @returns {State} - The first entity in the EntityState or null if empty.
 * @template State - The type of data in the EntityState.
 */
export function toObjectEntity<State>(data: EntityState<State>): State {
	return new TransformEntity(data).toObject()
}

/**
 * Converts data to its loading state.
 * @param data - The data to be converted.
 * @returns {LoadingStateEnum} - The loading state.
 */
export function asGetLoading(data: any): LoadingStateEnum {
	return data.getLoading
}

/**
 * Converts data to its loading state.
 * @param data - The data to be converted.
 * @returns {LoadingStateEnum} - The loading state.
 */
export function asLoading(data: any): LoadingStateEnum {
	return data.loading
}
