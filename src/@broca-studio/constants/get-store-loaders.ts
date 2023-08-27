import { StoreLoaders } from '@broca-studio/models/core.model'

/**
 * Helper function to extract loader-related methods from a state object.
 *
 * @param state - The state object containing loader-related methods.
 * @returns An object containing loader-related methods.
 */
export function getStoreLoaders(state: any): StoreLoaders {
	return {
		getLoader: state.getLoader,
		removeLoader: state.removeLoader,
		createLoader: state.createLoader,
		updateLoader: state.updateLoader,
		findOneLoader: state.findOneLoader,
	} as StoreLoaders
}
