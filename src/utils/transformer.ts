import { OutOfRangeError } from '../exceptions/out-of-range';

/**
 * Transform a sentence to a mocking version of it
 *
 * @param {string} sentence sentence to be transformed
 * @param {number} changeProb character transformation probability
 * @returns {string} A mocking sentence version of the original string
 */
export function transformRoast(sentence: string, changeProb = 0.5): string {
  if (changeProb < 0 || changeProb > 1) {
    throw new OutOfRangeError('changeProb', 0, 1);
  }

  const tokens = sentence.split(/\s+/g);
  const separators = sentence.match(/\s+/g);

  const transformedWords = tokens.map((token: string): string => {
    const chars = token.split('');
    const chaoticChar = chars.map((char: string): string => {
      const roll = Math.random();
      const isUppercase = char.toUpperCase() === char;
      const transformable = char.toUpperCase() !== char.toLowerCase();

      if (roll <= changeProb && transformable) {
        return isUppercase ? char.toLowerCase() : char.toUpperCase();
      }

      return char;
    });

    return chaoticChar.join('');
  });

  let transformed = '';

  while (transformedWords.length) {
    transformed += transformedWords.shift();

    if (separators?.length) {
      transformed += separators.shift();
    }
  }

  return transformed;
}
