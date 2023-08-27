/**
 * Regular expression for matching color codes in hexadecimal format.
 * It matches both 3 and 6 character hexadecimal color codes with or without the '#' symbol.
 *
 * @type {RegExp}
 */
export const COLOR_REGEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i
