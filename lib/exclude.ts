type A = Exclude<string | string[], any[]>;
type B = Exclude<(() => void) | null, Function>;
type C = Exclude<200 | 400, 200 | 201>;
type D = Exclude<number, boolean>;
type E = Exclude<string | number | (() => void), Function>;

export function main(): void {
  let a: A = 'blah';
  console.log(a);

  let b: B = null;
  console.log(b);

  let c: C = 400;
  console.log(c);

  let d: D = 1;
  console.log(d);

  let e: E = 'blah';
  console.log(e);
  e = 2;
  console.log(e);

}

main();
