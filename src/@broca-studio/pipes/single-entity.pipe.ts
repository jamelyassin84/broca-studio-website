import { Pipe, PipeTransform } from '@angular/core'
import { Entity } from '@broca-studio/models/core.model'

/**
 * A pipe that extracts a single entity from a model of entities.
 *
 * @usageNotes
 * To use this pipe, pass a model of entities as input, and it will return the single entity extracted from the model.
 *
 * @example
 * ```html
 * <!-- Assuming 'entityModel' is a model of entities -->
 * {{ entityModel | single_entity }}
 * ```
 * In this example, the `single_entity` pipe is applied to 'entityModel', resulting in the single entity.
 */
@Pipe({
	name: 'single_entity',
})
export class SingleEntityPipe implements PipeTransform {
	/**
	 * Transforms a model of entities into a single entity.
	 *
	 * @param {Entity<T>} model - The model containing multiple entities.
	 * @returns {T} - The single entity extracted from the model.
	 */
	transform<T>(model: Entity<T>): T {
		return single_entity(model)
	}
}

/**
 * Extracts a single entity from a model of entities.
 *
 * @param {Entity<T>} model - The model containing multiple entities.
 * @returns {T} - The single entity extracted from the model.
 */
export function single_entity<T>(model: Entity<T>): T {
	return Object.values(model.entities)[0]
}
