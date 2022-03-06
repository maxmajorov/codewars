function squareSum(numbers: number[]): number {
  let sum: number = 0;

  numbers.map((el) => Math.pow(el, 2)).forEach((el) => (sum += el));

  return sum;
}
