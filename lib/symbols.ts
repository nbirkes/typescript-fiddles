main();

export function main() {
  let fname = Symbol();
  let lname = Symbol();

  let person = {
    [fname]: 'Nathan',
    mname: 'Cole',
    [lname]: 'Birkes',
    hairColor: 'Brownish gray',
  };

  console.log(Object.getOwnPropertyNames(person));
  console.log(Object.getOwnPropertySymbols(person));

  let sym1 = Symbol.for('Nathan');
  const sym2: unique symbol = Symbol.for('Joe Bob');

  console.log(Symbol.keyFor(sym1));

  interface Foo {
    [sym2]: string;
  }

  let foo: Foo = {
    [sym2]: 'value',
  };

  console.log(foo[sym2]);

  const getClassNameSymbol: unique symbol = Symbol();

  class Blah {
    [getClassNameSymbol](): string {
      return 'Blah';
    }
  }

  let blah = new Blah();

  console.log(blah[getClassNameSymbol]())
}
