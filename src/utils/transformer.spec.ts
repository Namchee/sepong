import { OutOfRangeError } from '../exceptions/out-of-range';
import { transformRoast } from './transformer';

describe('transforRoast', () => {
  it('should throw an error when changeProb is out of range', () => {
    const sentence = 'test test test';
    const prob = -0.1;

    try {
      transformRoast(sentence, prob);

      throw new Error('Should throw an OutOfRange error');
    } catch (err) {
      expect(err).toBeInstanceOf(OutOfRangeError);
    }
  });

  it('should transform sentences correctly', () => {
    const sentence = 'test test     test\ntest TEST';

    const result = transformRoast(sentence);

    expect(result.toLowerCase() === sentence.toLowerCase());
  });
});
