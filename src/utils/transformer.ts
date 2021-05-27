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

  const tokens = sentence.split('');

  const transformedSentence = tokens.map((token: string) => {
    const roll = Math.random();

    return roll < changeProb ? token.toUpperCase() : token.toLowerCase();
  })
    .join('');

  return transformedSentence;
}
