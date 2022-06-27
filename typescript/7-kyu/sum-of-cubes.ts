function sumCubes(n: number): number {
  let arr: number[] = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i ** 3);
  }

  return arr.reduce((acc, next) => acc + next);
}
