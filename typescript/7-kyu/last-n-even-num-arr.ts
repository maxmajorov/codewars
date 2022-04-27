function evenNumbers(array: number[], n: number): number[] {
  return array.filter((el) => !(el % 2)).slice(-n);
}
