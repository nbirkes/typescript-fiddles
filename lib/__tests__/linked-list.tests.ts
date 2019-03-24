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
  describe('insertValueAt', function() {
    it('inserts at index 1', function() {
      const expected = ['one', 'two', 'three'];
      let list = new LinkedList(['one', 'three']);
      list.insertAt(1, 'two');
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
    it('does not insert at index -1', function() {
      let list = new LinkedList(['one', 'two']);
      expect(() => list.insertAt(-1, 'three')).to.throw('Index out of bounds');
    });
    it('inserts at end when index too high', function() {
      let list = new LinkedList(['one', 'two']);
      expect(() => list.insertAt(3, 'three')).to.throw('Index out of bounds');
    });
  });
  describe('deleteFirst', function() {
    it('deletes first', function() {
      const expected = ['two', 'three'];
      let list = new LinkedList(['one', 'two', 'three']);
      list.deleteFirst();
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('deleteLast', function() {
    it('deletes last', function() {
      const expected = ['one', 'two'];
      let list = new LinkedList(['one', 'two', 'three']);
      list.deleteLast();
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('deleteAt', function() {
    it('deletes last', function() {
      const expected = ['one', 'three'];
      let list = new LinkedList(['one', 'two', 'three']);
      list.deleteAt(1);
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
  describe('clear', function() {
    it('clears list', function() {
      const expected: string[] = [];
      let list = new LinkedList(['one', 'two', 'three']);
      list.clear();
      const actual = list.toArray();
      expect(actual).to.deep.equal(expected);
    });
  });
});
