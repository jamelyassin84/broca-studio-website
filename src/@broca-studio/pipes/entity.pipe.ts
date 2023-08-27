import { Pipe, PipeTransform } from '@angular/core'

/**
 * A custom Angular pipe that converts an object of entities into an array of their values.
 *
 * Usage:
 * {{ entityObject | entities }}
 *
 * @usageNotes
 * To use this pipe, provide an object containing entities.
 * Example:
 * Input: { '1': { name: 'Entity 1' }, '2': { name: 'Entity 2' } }
 * Output: [ { name: 'Entity 1' }, { name: 'Entity 2' } ]
 */
@Pipe({ name: 'entities' })
export class EntitiesPipe implements PipeTransform {
	/**
	 * Transforms an object of entities into an array of their values.
	 *
	 * @param {object} value - The object containing entities.
	 * @returns {Array} - An array containing the values of the entities.
	 */
	transform(value) {
		return entities(value)
	}
}

/**
 * Converts an object of entities into an array of their values.
 *
 * @param {object} value - The object containing entities.
 * @returns {Array} - An array containing the values of the entities.
 */
export function entities(value) {
	return Object.values(value)
}
