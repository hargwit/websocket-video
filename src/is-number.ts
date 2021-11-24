/**
 * Returns whether or not the value is a number.
 */
const isNumber = (t: unknown): t is number => typeof t === 'number'

export { isNumber }
