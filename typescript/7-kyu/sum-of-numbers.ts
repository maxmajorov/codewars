export function getSum(a: number, b: number): number {
  [a, b] = a > b ? [b, a] : [a, b];

  let c = 0;

  while (a <= b) {
    c += a;
    a++;
  }

  return c;
}
