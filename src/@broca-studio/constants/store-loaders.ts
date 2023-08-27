import { LoadingStateEnum } from '@broca-studio/enums/loading-state.enum'

/**
 * An object representing the loading states of various store loader actions.
 * Each property corresponds to a specific loader action and its associated state.
 */
export const STORE_LOADERS = {
	/**
	 * Loading state for the 'getLoader' action.
	 */
	getLoader: LoadingStateEnum.IDLE,

	/**
	 * Loading state for the 'removeLoader' action.
	 */
	removeLoader: LoadingStateEnum.IDLE,

	/**
	 * Loading state for the 'createLoader' action.
	 */
	createLoader: LoadingStateEnum.IDLE,

	/**
	 * Loading state for the 'updateLoader' action.
	 */
	updateLoader: LoadingStateEnum.IDLE,

	/**
	 * Loading state for the 'findOneLoader' action.
	 */
	findOneLoader: LoadingStateEnum.IDLE,
}
