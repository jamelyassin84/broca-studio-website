/**
 * Enumeration representing different types of loading operations.
 *
 * @remarks
 * This enum defines various loading operation types that can be used to distinguish between different types of loading activities in your application, such as create, update, get, find one, or remove operations.
 *
 * @example
 * // Import the LoadingTypeEnum enum:
 * import { LoadingTypeEnum } from './your-loading-type-enum-file';
 *
 * // Usage in TypeScript code:
 * const operationType = LoadingTypeEnum.CREATE;
 *
 * switch (operationType) {
 *   case LoadingTypeEnum.CREATE:
 *     console.log('Performing a create operation.');
 *     break;
 *   case LoadingTypeEnum.UPDATE:
 *     console.log('Performing an update operation.');
 *     break;
 *   // Handle other operation types as needed.
 * }
 *
 * // Usage in Angular template:
 * <!-- Assuming 'operationType' is a variable containing a loading operation type -->
 * <div *ngIf="operationType === LoadingTypeEnum.GET">
 *   Loading data...
 * </div>
 */
export enum LoadingTypeEnum {
	/**
	 * Represents a create operation.
	 */
	CREATE = 'create',

	/**
	 * Represents an update operation.
	 */
	UPDATE = 'update',

	/**
	 * Represents a get operation.
	 */
	GET = 'get',

	/**
	 * Represents a find one operation.
	 */
	FIND_ONE = 'findOne',

	/**
	 * Represents a remove operation.
	 */
	REMOVE = 'remove',
}
