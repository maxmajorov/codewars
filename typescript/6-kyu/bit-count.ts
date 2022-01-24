function countBits(n: number): number {
  let count: number = 0;
  n.toString(2)
    .split("")
    .forEach((el) => (+el == 1 ? count++ : 0));

  return count;
}
