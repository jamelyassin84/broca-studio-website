import { LoadingState } from '@broca-studio/models/core.model'
import { createActionGroup, props } from '@ngrx/store'

/**
 * Factory function for creating a group of system-related actions.
 * @param options - Configuration options for the action group.
 * @param options.name - A unique name for the action group.
 * @returns An action group object with defined action creators.
 */
export function SystemActions(options: { name: string }) {
	return createActionGroup({
		source: options.name as any,
		events: {
			/**
			 * Action creator for handling errors.
			 * @param error - The error object to be dispatched with the action.
			 * @returns An action with the error payload.
			 */
			onError: props<{ error: any }>(),

			/**
			 * Action creator for setting the loading state.
			 * @param loading - The loading state to be dispatched with the action.
			 * @returns An action with the loading state payload.
			 */
			setLoader: props<{ loading: LoadingState }>(),

			/**
			 * Action creator for setting a processed ID.
			 * @param id - The ID to be dispatched with the action.
			 * @returns An action with the processed ID payload.
			 */
			setProcessedID: props<{ id: string }>(),

			/**
			 * Action creator for removing a processed ID.
			 * @param id - The ID to be dispatched with the action.
			 * @returns An action with the ID to be removed payload.
			 */
			removeProcessedId: props<{ id: string }>(),
		},
	})
}
