import { expect } from 'chai';
import { DrunkenBishop } from '../drunken-bishop';

describe('drunken-bishop', function() {
  it('solves', function() {
    const input = '16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48';
    const expected =
      '+-----------------+\n' +
      '|        .        |\n' +
      '|       + .       |\n' +
      '|      . B .      |\n' +
      '|     o * +       |\n' +
      '|    X * S        |\n' +
      '|   + O o . .     |\n' +
      '|    .   E . o    |\n' +
      '|       . . o     |\n' +
      '|        . .      |\n' +
      '+-----------------+';

    const db = new DrunkenBishop(input);
    const actual = db.render();
    expect(actual).to.equal(expected);
  });
});
