import { expect } from 'chai';
import { Node } from '../models/types';
import { lookup } from '../btree-lookup';

describe('btree-lookup', function() {
  it('returns true if found', function() {
    const expected = false;
    const tree: Node = {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null,
      },
      right: {
        data: 0,
        left: null,
        right: null,
      },
    };
    const actual = lookup(tree, 10);
    expect(actual).to.equal(expected);
  });
  it('returns false if not found', function() {
    const expected = false;
    const tree: Node = {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null,
      },
      right: {
        data: 0,
        left: null,
        right: null,
      },
    };
    const actual = lookup(tree, 7);
    expect(actual).to.equal(expected);
  });
  it('returns false if null', function() {
    const expected = false;
    const actual = lookup(null, 7);
    expect(actual).to.equal(expected);
  });
});
