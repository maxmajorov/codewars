function rowSumOddNumbers(n: number): number {
  let start: number = n * (n - 1) + 1;
  let sum: number = 0;

  for (let i = 0; i < n; i++) {
    sum += start + i * 2;
  }
  return sum;

  //    return n * n * n
}
