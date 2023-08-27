/**
 * Enumeration representing different loading states.
 *
 * @remarks
 * This enum defines various loading states that can be used to manage the loading status of a component or application.
 * It helps distinguish between different stages of loading, such as idle, loading in progress, loading success, and loading failure.
 *
 * @example
 * // Import the LoadingStateEnum enum:
 * import { LoadingStateEnum } from './your-loading-state-enum-file';
 *
 * // Usage in TypeScript code:
 * const currentState = LoadingStateEnum.LOADING;
 *
 * if (currentState === LoadingStateEnum.SUCCEEDED) {
 *   console.log('Loading succeeded.');
 * } else if (currentState === LoadingStateEnum.FAILED) {
 *   console.error('Loading failed.');
 * }
 *
 * // Usage in Angular template:
 * <!-- Assuming 'loadingState' is a variable containing a loading state -->
 * <div *ngIf="loadingState === LoadingStateEnum.LOADING">
 *   Loading in progress...
 * </div>
 */
export enum LoadingStateEnum {
	/**
	 * Represents an idle or initial state.
	 */
	IDLE = 'idle',

	/**
	 * Represents a state where loading has succeeded.
	 */
	SUCCEEDED = 'succeeded',

	/**
	 * Represents a state where loading has failed.
	 */
	FAILED = 'failed',

	/**
	 * Represents a state where loading is in progress.
	 */
	LOADING = 'loading',
}
