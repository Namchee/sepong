/**
 * An error to be thrown when a value is out of the expected range
 */
export class OutOfRangeError extends Error {
  constructor(propertyName: string, min: number, max: number) {
    super(`Value ${propertyName} is out of range. Expected value to be within ${min} and ${max}`);
  }
}
