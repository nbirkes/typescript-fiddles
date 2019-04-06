type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type OmitA = Omit<Test, 'a'>;
type OmitAB = Omit<Test, 'a' | 'b'>;

interface Test {
  a: string;
  b: number;
  c: boolean;
}

(() => {
  let a: OmitA = {
    b: 1,
    c: true,
  };
  console.log(a);

  let b: OmitAB = {
    c: false,
  };
  console.log(b);
})();
