import { StoreLoaderService } from './../services/store-loader.service'
import { inject } from '@angular/core'
import { LoadingTypeEnum } from '@broca-studio/enums/loading-type.enum'
import { StoreAction } from 'app/app-core/store/core/action.enum'
import { Observable } from 'rxjs'

/**
 * Decorator for managing loading states associated with specific actions.
 * @param options - Configuration options for the loader.
 */
export function Loader(options: {
	state: keyof typeof StoreAction // The action state to be associated with the loader.
	loading: LoadingTypeEnum // The loading type (e.g., LoadingTypeEnum.LOADING).
}): MethodDecorator {
	return function (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value // The original method being decorated.

		const _storeLoaderService = inject(StoreLoaderService)

		// Modify the decorated method.
		descriptor.value = function (...args: any[]) {
			const storeAction = options.state // Action state from the provided options.
			const loadingType = options.loading // Loading type from the provided options.

			// Initialize a loader using StoreLoaderService.
			_storeLoaderService.initializeLoader(storeAction, loadingType)

			// Invoke the original method.
			const result = originalMethod.apply(this, args)

			// If the result is an Observable, add loading state using StoreLoaderService.
			if (result instanceof Observable) {
				return result.pipe(
					_storeLoaderService.addLoadingState(
						storeAction,
						loadingType,
					),
				) as any
			}

			return result
		}

		return descriptor
	}
}
