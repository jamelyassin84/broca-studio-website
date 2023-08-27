import { NodeResponse } from '@broca-studio/models/core.model'
import { Observable, OperatorFunction } from 'rxjs'
import { map } from 'rxjs/operators'

/**
 * Custom decorator for mapping the data property of a NodeResponse in an observable stream.
 * @returns A method decorator.
 */
export function NodeResponseMap<T>(): MethodDecorator {
	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value

		descriptor.value = function (...args: any[]) {
			const result = originalMethod.apply(this, args)

			if (result instanceof Observable) {
				// Use the map operator to extract the data property from NodeResponse.
				return result.pipe(
					map((response: NodeResponse<T>) => response.data),
				)
			}

			return result
		}

		return descriptor
	}
}
