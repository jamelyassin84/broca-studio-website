/**
 * Checks if a value is between a specified range.
 * @param value - The value to check.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns `true` if `value` is between `min` and `max`, `false` otherwise.
 */
export function between(value: number, min: number, max: number) {
	return value >= min && value <= max
}

/**
 * Creates a deep copy of an object or array by serializing and deserializing it.
 * @param data - The data to unfreeze (deep copy).
 * @returns A deep copy of the input `data`.
 */
export function unfreeze<T>(data: T): T {
	return JSON.parse(JSON.stringify(data))
}

/**
 * Checks if a value is an array.
 * @param data - The value to check.
 * @returns `true` if `data` is an array, `false` otherwise.
 */
export const isArray = (data): boolean => {
	return !!data && data.constructor === Array
}

/**
 * Checks if a value is an object.
 * @param data - The value to check.
 * @returns `true` if `data` is an object, `false` otherwise.
 */
export const isObject = (data): boolean => {
	return !!data && data.constructor === Object
}

/**
 * Checks if a value is numeric.
 * @param num - The value to check.
 * @returns `true` if `num` is numeric, `false` otherwise.
 */
export const isNumeric = (num: any): boolean =>
	(typeof num === 'number' ||
		(typeof num === 'string' && num.trim() !== '')) &&
	!isNaN(num as number)
