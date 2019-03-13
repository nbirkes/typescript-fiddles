import { expect } from 'chai';
import { LinkedList } from '../linked-list';

describe('linked-list', function() {
  describe('initialValue', function() {
    it('builds from initial value', function() {
      const expected: string[] = ['one', 'two', 'three'];
      let list = new LinkedList(['one', 'two', 'three']);
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('toArray', function() {
    it('returns as expected', function() {
      const expected: string[] = ['one', 'two', 'three'];
      let list = new LinkedList();
      list.append('one');
      list.append('two');
      list.append('three');
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('prepend', function() {
    it('adds to beginning', function() {
      const expected: string[] = ['two', 'one'];
      let list = new LinkedList(['one']);
      list.prepend('two');
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
    it('adds to beginning if no head', function() {
      const expected: string[] = ['one'];
      let list = new LinkedList();
      list.prepend('one');
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('append', function() {
    it('adds to end', function() {
      const expected: string[] = ['one', 'two'];
      let list = new LinkedList(['one']);
      list.append('two');
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
    it('adds to end if no head', function() {
      const expected: string[] = ['one'];
      let list = new LinkedList();
      list.append('one');
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('getValueAt', function() {
    it('returns correct item', function() {
      const expected: string = 'two';
      let list = new LinkedList(['one', 'two', 'three']);
      const actual = list.getValueAt(1);
      expect(actual).to.deep.equal(expected);
    });
    it('returns undefined if out of bounds', function() {
      const expected = undefined;
      let list = new LinkedList(['one', 'two', 'three']);
      const actual = list.getValueAt(10);
      expect(actual).to.deep.equal(expected);
    });
  });
});
